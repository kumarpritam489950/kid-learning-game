import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

// jsdom has no canvas implementation; give the games a no-op 2D context so
// draw calls are harmless in tests.
if (typeof HTMLCanvasElement !== 'undefined') {
  const proto = HTMLCanvasElement.prototype as unknown as {
    getContext: (id: string) => unknown;
  };
  proto.getContext = function getContext() {
    return new Proxy(
      {},
      {
        get: (_target, prop) => {
          if (prop === 'canvas') return this;
          return () => undefined;
        },
        set: () => true,
      },
    );
  };
}
