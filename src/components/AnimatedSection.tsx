import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        !isVisible && 'opacity-0',
        isVisible && animation === 'fade-in-up' && 'animate-fade-in-up',
        isVisible && animation === 'fade-in-left' && 'animate-fade-in-left',
        isVisible && animation === 'fade-in-right' && 'animate-fade-in-right',
        isVisible && animation === 'scale-in' && 'animate-scale-in',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
