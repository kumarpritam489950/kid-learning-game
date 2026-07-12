import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router';
import { beforeEach, describe, expect, it } from 'vitest';
import { clearSeenHistory, useSessionStore } from '../../stores/sessionStore';
import { LessonView } from './LessonView';
import { ResultView } from './ResultView';

function renderLesson(subjectId: string, moduleId: string) {
  return render(
    <MemoryRouter initialEntries={[`/lesson/${subjectId}/${moduleId}`]}>
      <Routes>
        <Route path="/lesson/:subjectId/:moduleId" element={<LessonView />} />
        <Route path="/result" element={<ResultView />} />
        <Route path="/" element={<p>home</p>} />
        <Route path="/subject/:subjectId" element={<p>hub</p>} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  useSessionStore.getState().exitLesson();
  clearSeenHistory();
});

describe('LessonView', () => {
  it('plays a counting question end to end', async () => {
    const user = userEvent.setup();
    renderLesson('math', 'math_counting');

    // lesson booted with Q1 of 10
    expect(await screen.findByText(/Q 1 \/ 10/)).toBeInTheDocument();

    const question = useSessionStore.getState().questions[0]!;
    await user.click(screen.getByRole('button', { name: String(question.answer) }));

    // feedback appears and score updates
    expect(useSessionStore.getState().answered).toBe(true);
    expect(screen.getByText(/Score: 10/)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Next/ }));
    expect(screen.getByText(/Q 2 \/ 10/)).toBeInTheDocument();
  });

  it('finishes a whole lesson and shows the result screen', async () => {
    const user = userEvent.setup();
    renderLesson('math', 'math_counting');
    await screen.findByText(/Q 1 \/ 10/);

    for (let i = 0; i < 10; i += 1) {
      const q = useSessionStore.getState().questions[i]!;
      await user.click(screen.getByRole('button', { name: String(q.answer) }));
      await user.click(screen.getByRole('button', { name: /Next/ }));
    }

    expect(await screen.findByText(/Complete!/)).toBeInTheDocument();
    expect(screen.getByText(/You got 10 out of 10/)).toBeInTheDocument();
    expect(screen.getByText('★★★')).toBeInTheDocument();
  });

  it('redirects home for an unknown module', async () => {
    renderLesson('math', 'no_such_module');
    expect(await screen.findByText('home')).toBeInTheDocument();
  });
});
