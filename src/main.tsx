// Ensure circular DOM element serialization is safe for third-party trackers
if (typeof window !== 'undefined') {
  try {
    const orig = JSON.stringify;
    JSON.stringify = function (value: any, replacer?: any, space?: any) {
      const seen = new WeakSet();
      const safeReplacer = function (this: any, key: string, val: any) {
        if (val && typeof val === 'object') {
          if (val.nodeType || (typeof Node !== 'undefined' && val instanceof Node)) {
            return `[HTMLElement ${val.nodeName || 'Element'}]`;
          }
          if (seen.has(val)) {
            return '[Circular]';
          }
          seen.add(val);
        }
        if (typeof replacer === 'function') {
          return replacer.call(this, key, val);
        }
        return val;
      };
      try {
        return orig(value, replacer || safeReplacer, space);
      } catch {
        try {
          return orig(value, safeReplacer, space);
        } catch {
          return String(value);
        }
      }
    };
  } catch {}
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

