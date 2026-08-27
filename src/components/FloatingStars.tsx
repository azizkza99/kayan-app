const STAR_POSITIONS = [
  { top: '15%', left: '20%', size: 'h-4 w-4', delay: '0s' },
  { top: '25%', left: '75%', size: 'h-3 w-3', delay: '0.2s' },
  { top: '65%', left: '15%', size: 'h-3 w-3', delay: '0.4s' },
  { top: '70%', left: '80%', size: 'h-4 w-4', delay: '0.1s' },
  { top: '12%', left: '60%', size: 'h-2 w-2', delay: '0.3s' },
];

export default function FloatingStars() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[2rem]">
      {STAR_POSITIONS.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className={`absolute ${star.size} animate-pulse text-gold-400`}
          style={{ top: star.top, left: star.left, animationDelay: star.delay }}
        >
          <span className="absolute inset-0 rounded-full bg-gold-400 opacity-60 blur-[6px]" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="relative z-10 h-full w-full drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
          >
            <path
              d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
