import { useEffect, useRef, useState } from 'react';
import { defaultRng } from '../../services/rng';
import { cancelSpeech, speak } from '../../services/tts';
import type { FeedbackTone, FunGameDef } from './types';
import './funGames.css';

interface GameHostProps {
  game: FunGameDef;
  onExit: () => void;
}

/**
 * Mounts an imperative FunGameDef inside React. StrictMode's double
 * mount/unmount in dev doubles as a leak check — destroy() must be total.
 */
export function GameHost({ game, onExit }: GameHostProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [runKey, setRunKey] = useState(0);
  const [score, setScore] = useState('');
  const [info, setInfo] = useState('');
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState<{ text: string; tone: FeedbackTone }>({
    text: '',
    tone: 'neutral',
  });
  const [finalScore, setFinalScore] = useState<number | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    setScore('');
    setInfo('');
    setPrompt('');
    setFeedback({ text: '', tone: 'neutral' });
    setFinalScore(null);

    const handle = game.mount(host, {
      onScore: setScore,
      onInfo: setInfo,
      onPrompt: setPrompt,
      onFeedback: (text, tone) => setFeedback({ text, tone }),
      onGameOver: setFinalScore,
      speak,
      rng: defaultRng,
    });

    return () => {
      handle.destroy();
      cancelSpeech();
      host.replaceChildren();
    };
  }, [game, runKey]);

  return (
    <section className="panel" aria-label={game.title}>
      <div className="game-header">
        <h2>{game.title}</h2>
        <button type="button" className="btn btn-ghost" onClick={onExit}>
          Back to Games
        </button>
      </div>

      <div className="game-stats">
        {score && <span>{score}</span>}
        {info && <span>{info}</span>}
      </div>

      {prompt && <p className="game-prompt">{prompt}</p>}

      <div ref={hostRef} className="game-host" />

      <p className={`game-feedback game-feedback-${feedback.tone}`} aria-live="polite">
        {feedback.text}
      </p>

      {finalScore !== null && (
        <div className="game-over-row">
          <button type="button" className="btn btn-main" onClick={() => setRunKey((k) => k + 1)}>
            🔁 Play Again
          </button>
          <button type="button" className="btn btn-ghost" onClick={onExit}>
            All Games
          </button>
        </div>
      )}
    </section>
  );
}
