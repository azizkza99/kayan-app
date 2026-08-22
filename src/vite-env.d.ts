/// <reference types="vite/client" />

import type { JSX } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url?: string;
        'loading-anim-type'?: string;
        class?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
      };
    }
  }
}
