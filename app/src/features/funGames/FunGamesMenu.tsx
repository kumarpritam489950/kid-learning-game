import { useNavigate } from 'react-router';
import { FUN_GAMES } from '../../content';
import { getAllGames } from './registry';
import './funGames.css';

export function FunGamesMenu() {
  const navigate = useNavigate();

  return (
    <section className="panel" aria-label="Fun Games">
      <div className="game-header">
        <h2>{FUN_GAMES.name}</h2>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>
          Back to Islands
        </button>
      </div>
      <p className="game-menu-description">{FUN_GAMES.description}</p>
      <div className="game-menu-grid">
        {getAllGames().map((game) => (
          <button
            key={game.id}
            type="button"
            className="game-menu-card"
            onClick={() => navigate(`/fun/${game.id}`)}
          >
            <span className="game-menu-title">{game.title}</span>
            <span className="game-menu-desc">{game.description}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
