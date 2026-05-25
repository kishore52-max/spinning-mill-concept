import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}
export function StatCounter({
  end,
  suffix = '',
  label,
  duration = 2
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        // Easing function (easeOutExpo)
        const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
        setCount(Math.floor(end * easeOut));
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);
  // Format number with commas
  const formattedCount = count.toLocaleString();
  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-serif text-4xl md:text-5xl text-navy font-semibold mb-2">
        {formattedCount}
        {suffix}
      </div>
      <div className="text-sm text-charcoal/70 uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>);

}