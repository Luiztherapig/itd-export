import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const StatsCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentCount = Math.floor(easeOutQuad(progress) * (end - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};
