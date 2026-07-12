import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { HomeIslands } from './HomeIslands';
import { ISLANDS } from './islands';

describe('HomeIslands', () => {
  it('renders one accessible tile per island', () => {
    render(
      <MemoryRouter>
        <HomeIslands />
      </MemoryRouter>,
    );

    for (const island of ISLANDS) {
      expect(screen.getByRole('link', { name: island.ariaLabel })).toBeInTheDocument();
    }
    expect(screen.getAllByRole('link')).toHaveLength(ISLANDS.length);
  });

  it('covers all 11 v1 subjects plus assessment', () => {
    expect(ISLANDS).toHaveLength(12);
    const ids = ISLANDS.map((island) => island.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
