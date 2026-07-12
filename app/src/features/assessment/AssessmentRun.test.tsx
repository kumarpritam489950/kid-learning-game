import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router';
import { beforeEach, describe, expect, it } from 'vitest';
import { useUserStore } from '../../stores/userStore';
import { AssessmentRun } from './AssessmentRun';
import { DEFAULT_RUN_LENGTH } from './runLogic';

beforeEach(() => {
  localStorage.clear();
  useUserStore.setState({ profiles: [], currentProfileId: null });
  useUserStore.getState().createProfile('Tester');
});

function renderRun(subjectId: string) {
  return render(
    <MemoryRouter initialEntries={[`/assessment/${subjectId}`]}>
      <Routes>
        <Route path="/assessment/:subjectId" element={<AssessmentRun />} />
        <Route path="/assessment" element={<p>assessment home</p>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('AssessmentRun', () => {
  it('runs 20 questions and shows the topic report, recording the attempt', async () => {
    const user = userEvent.setup();
    renderRun('mathematics');

    await screen.findByText(`Question 1 of ${DEFAULT_RUN_LENGTH}`);

    for (let i = 0; i < DEFAULT_RUN_LENGTH; i += 1) {
      const options = await screen.findAllByRole('button', { name: /.+/ });
      // First answer-choice button (Exit is in the header — filter by
      // the answer container's accessible name).
      const answerButtons = screen.getByLabelText('Answer choices').querySelectorAll('button');
      expect(answerButtons.length).toBeGreaterThanOrEqual(2);
      await user.click(answerButtons[0] as HTMLButtonElement);
      void options;
    }

    expect(await screen.findByText(/Topic report/)).toBeInTheDocument();
    expect(screen.getByText(/\d+ \/ 20 \(\d+%\)/)).toBeInTheDocument();

    const profile = useUserStore.getState().profiles[0]!;
    expect(profile.history).toHaveLength(1);
    const attempt = profile.history[0]!;
    expect(attempt.kind).toBe('assessment');
    expect(attempt.subjectId).toBe('mathematics');
    expect(attempt.total).toBe(DEFAULT_RUN_LENGTH);
    expect(attempt.topicBreakdown).toBeDefined();
    const breakdownTotal = Object.values(attempt.topicBreakdown!).reduce(
      (sum, t) => sum + t.total,
      0,
    );
    expect(breakdownTotal).toBe(DEFAULT_RUN_LENGTH);
  });

  it('redirects to the assessment home for unknown subjects', async () => {
    renderRun('astrophysics');
    expect(await screen.findByText('assessment home')).toBeInTheDocument();
  });
});
