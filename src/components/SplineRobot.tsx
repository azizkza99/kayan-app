import { useEffect, useRef, useState } from 'react';

const SPLINE_SCRIPT_URL = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js';
const SPLINE_SCENE_URL = 'https://prod.spline.design/UtIGpUYDM8e0S-cl/scene.splinecode';

export default function SplineRobot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let mounted = true;

    // Check if spline-viewer is already defined (script already loaded)
    if (customElements.get('spline-viewer')) {
      setLoaded(true);
      return;
    }

    // Check if script tag already exists
    const existing = document.querySelector(`script[src="${SPLINE_SCRIPT_URL}"]`);
    if (existing) {
      existing.addEventListener('load', () => mounted && setLoaded(true));
      existing.addEventListener('error', () => mounted && setFailed(true));
      return;
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.src = SPLINE_SCRIPT_URL;
    script.async = true;

    script.addEventListener('load', () => {
      if (mounted) setLoaded(true);
    });
    script.addEventListener('error', () => {
      if (mounted) setFailed(true);
    });

    document.head.appendChild(script);

    // Safety timeout — if the script doesn't load in 12s, show fallback
    const timeout = setTimeout(() => {
      if (mounted && !loaded) {
        setFailed(true);
      }
    }, 12000);

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-3xl overflow-hidden glass-strong glow-gold"
      style={{ minHeight: '420px' }}
    >
      {/* Ambient glow background */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Animated border ring */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none">
        <div className="absolute inset-0 rounded-3xl border border-gold-400/20" />
        <div className="absolute -inset-px rounded-3xl border border-gold-400/5 animate-glow-pulse" />
      </div>

      {/* Loading state */}
      {!loaded && !failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-gold-400/20" />
            <div className="absolute inset-0 w-16 h-16 rounded-full border-t-2 border-gold-400 animate-spin" />
          </div>
          <p className="text-sm text-neutral-400 tracking-wide animate-fade-in">
            Initializing concierge...
          </p>
        </div>
      )}

      {/* Fallback state */}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 p-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/10 flex items-center justify-center glow-gold">
            <svg
              className="w-10 h-10 text-gold-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 006-6v-1.5M12 18.75a6 6 0 01-6-6v-1.5M12 18.75V12m0 0a3 3 0 003-3m-3 3a3 3 0 01-3-3m9 0a3 3 0 00-3-3M6 6a3 3 0 013-3m6 0a3 3 0 013 3M12 12v6m0-6V9"
              />
            </svg>
          </div>
          <p className="text-neutral-300 text-center font-medium">AI Concierge</p>
          <p className="text-neutral-500 text-sm text-center max-w-xs">
            Interactive 3D experience available on full load
          </p>
        </div>
      )}

      {/* Spline viewer — only render once script is loaded */}
      {loaded && !failed && (
        <spline-viewer
          url={SPLINE_SCENE_URL}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
        />
      )}
    </div>
  );
}
