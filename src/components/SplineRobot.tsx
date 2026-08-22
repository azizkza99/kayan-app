import { useEffect, useRef, useState } from 'react';
import FloatingStars from './FloatingStars';

const SPLINE_SCRIPT_URL = 'https://cdn.spline.design/@splinetool/viewer@2.0.5/build/spline-viewer.js';
const SPLINE_SCENE_URL = 'https://prod.spline.design/UtIGpUYDM8e0S-cl/scene.splinecode';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url?: string },
        HTMLElement
      >;
    }
  }
}

export default function SplineRobot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initTimer = setTimeout(() => {
      if (!mounted) return;

      if (customElements.get('spline-viewer')) {
        setLoaded(true);
        return;
      }

      const existing = document.querySelector(`script[src="${SPLINE_SCRIPT_URL}"]`);
      if (existing) {
        existing.addEventListener('load', () => mounted && setLoaded(true));
        existing.addEventListener('error', () => mounted && setFailed(true));
        if (customElements.get('spline-viewer')) {
          setLoaded(true);
        }
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
    }, 150);

    const timeout = setTimeout(() => {
      if (mounted && !loaded) {
        setFailed(true);
      }
    }, 12000);

    return () => {
      mounted = false;
      clearTimeout(initTimer);
      clearTimeout(timeout);
    };
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-[2rem] overflow-hidden glass border border-gold-400/30 shadow-2xl bg-[#111111] transform-gpu group"
      style={{ minHeight: 'min(420px, 100vw)' }}
    >
      {/* 🌟 1. طبقة النجوم التفاعلية الذكية */}
      <FloatingStars />

      {/* Ambient Gold Glow Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/[0.05] via-transparent to-gold-600/[0.03] pointer-events-none" />

      {/* Loading state */}
      {!loaded && !failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20 bg-[#111111]">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-gold-400/20" />
            <div className="absolute inset-0 w-16 h-16 rounded-full border-t-2 border-gold-400 animate-spin" />
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400/80 animate-pulse">
            INITIALIZING CORE...
          </p>
        </div>
      )}

      {/* Fallback state */}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20 p-8 bg-[#111111]">
          <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gold-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 18.75a6 6 0 006-6v-1.5M12 18.75a6 6 0 01-6-6v-1.5M12 18.75V12m0 0a3 3 0 003-3m-3 3a3 3 0 01-3-3m9 0a3 3 0 00-3-3M6 6a3 3 0 013-3m6 0a3 3 0 013 3M12 12v6m0-6V9"
              />
            </svg>
          </div>
          <p className="text-white text-sm font-semibold">AI Concierge</p>
          <p className="text-neutral-400 text-xs text-center max-w-xs">
            Interactive 3D experience available on full load
          </p>
        </div>
      )}

      {/* Loaded 3D Spline Scene مع الفلتر الاحترافي لتحويل الخلفية إلى رمادي داكن */}
      {loaded && !failed && (
        <div className="relative w-full h-full overflow-hidden z-10 transform-gpu opacity-0 animate-fade-in transition-opacity duration-700 [animation-fill-mode:forwards]">
          <spline-viewer
            url={SPLINE_SCENE_URL}
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              // 🛠️ الفلتر السحري: يحول البياض إلى رمادي داكن فخم ويضبط المظهر العام
              filter: 'grayscale(1) invert(0.92) contrast(1.15) brightness(0.9)',
              transform: 'scale(1.3)',
              transformOrigin: 'center',
            }}
          />
        </div>
      )}
    </div>
  );
}
