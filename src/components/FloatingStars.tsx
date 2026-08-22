import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';

// مواقع النجوم الذهبية وتوزعها حول الروبوت
const STAR_POSITIONS = [
  { top: '15%', left: '20%', size: 'w-4 h-4', delay: 0 },
  { top: '25%', left: '75%', size: 'w-3 h-3', delay: 0.2 },
  { top: '65%', left: '15%', size: 'w-3 h-3', delay: 0.4 },
  { top: '70%', left: '80%', size: 'w-4 h-4', delay: 0.1 },
  { top: '12%', left: '60%', size: 'w-2 h-2', delay: 0.3 },
];

export default function FloatingStars() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // نعومة حركية وتفاعل انسيابي مع الماوس (Parallax Physics)
  const springConfig = { damping: 20, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x / 25);
    mouseY.set(y / 25);
  };

  const handleStarClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 400);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-[2rem]"
    >
      {STAR_POSITIONS.map((star, idx) => {
        const isClicked = clickedIndex === idx;

        return (
          <motion.div
            key={idx}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              top: star.top,
              left: star.left,
              x: smoothX,
              y: smoothY,
            }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3 + idx,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
            onClick={() => handleStarClick(idx)}
          >
            {/* النجمة الذهبية المصممة بأسلوب Sparkle السيادي */}
            <motion.div
              animate={
                isClicked
                  ? { scale: [1, 2.2, 1], rotate: [0, 180, 360], opacity: [0.8, 1, 0.9] }
                  : { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }
              }
              transition={
                isClicked
                  ? { duration: 0.4, ease: 'easeOut' }
                  : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
              }
              className={`relative ${star.size} flex items-center justify-center`}
            >
              {/* التوهج الخلفي الذهبي */}
              <div className="absolute inset-0 bg-gold-400 rounded-full blur-[6px] opacity-70" />

              {/* أشكال الأسطح الذهبية لإنشاء نجمة Sparkle رباعية */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-gold-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)] relative z-10"
              >
                <path
                  d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
