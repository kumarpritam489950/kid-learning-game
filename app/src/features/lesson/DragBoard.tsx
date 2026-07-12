import { useState } from 'react';
import type { DragQuestion } from './engine/types';
import styles from './Lesson.module.css';

interface DragBoardProps {
  question: DragQuestion;
  answered: boolean;
  onCheck: (values: string[]) => void;
  onIncomplete: () => void;
}

/**
 * Word-building board. Tap a letter tile to drop it into the first empty
 * slot; tap a filled slot to clear it. (Tap-first replaces v1's HTML5
 * drag-and-drop, which never worked on touch screens.)
 */
export function DragBoard({ question, answered, onCheck, onIncomplete }: DragBoardProps) {
  const [slots, setSlots] = useState<(string | null)[]>(() => question.answer.map(() => null));

  const placeLetter = (letter: string) => {
    if (answered) return;
    setSlots((prev) => {
      const firstEmpty = prev.indexOf(null);
      if (firstEmpty === -1) return prev;
      const next = [...prev];
      next[firstEmpty] = letter;
      return next;
    });
  };

  const clearSlot = (index: number) => {
    if (answered) return;
    setSlots((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  };

  const check = () => {
    if (slots.some((value) => value === null)) {
      onIncomplete();
      return;
    }
    onCheck(slots as string[]);
  };

  return (
    <div className={styles.dragZone}>
      <div className={styles.dropSlots} aria-label="Word slots">
        {slots.map((value, index) => (
          <button
            key={index}
            type="button"
            className={styles.dropSlot}
            onClick={() => clearSlot(index)}
            aria-label={
              value ? `Slot ${index + 1}: ${value}. Tap to remove.` : `Slot ${index + 1}: empty`
            }
            disabled={answered}
          >
            {value ?? '_'}
          </button>
        ))}
      </div>
      <div className={styles.letterBank} aria-label="Letter tiles">
        {question.bank.map((letter, index) => (
          <button
            key={`${letter}-${index}`}
            type="button"
            className={styles.letterTile}
            onClick={() => placeLetter(letter)}
            disabled={answered}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className={styles.checkRow}>
        <button type="button" className="btn btn-secondary" onClick={check} disabled={answered}>
          ✅ Check
        </button>
      </div>
    </div>
  );
}
