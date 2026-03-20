'use client';

import { useState, useEffect } from 'react';

type CountdownTimerProps = {
  size?: 'default' | 'compact';
  className?: string;
};

export default function CountdownTimer({ size = 'default', className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2026-08-07').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const isCompact = size === 'compact';
  const containerClasses = [
    'bg-[var(--nav-background)] text-white shadow-lg',
    isCompact ? 'rounded-xl p-4' : 'rounded-[1.25rem] p-6',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const labelClasses = isCompact
    ? 'text-center text-xs md:text-sm font-semibold tracking-tight mb-3 opacity-95'
    : 'text-center text-sm md:text-base font-semibold tracking-tight mb-4 opacity-95';
  const gridClasses = isCompact ? 'grid grid-cols-4 gap-2 text-center' : 'grid grid-cols-4 gap-3 text-center';
  const cellClasses = isCompact
    ? 'bg-[var(--nav-highlight)]/50 rounded-lg p-2 border border-white/20'
    : 'bg-[var(--nav-highlight)]/50 rounded-xl p-3 border border-white/20';
  const valueClasses = isCompact ? 'text-xl md:text-2xl font-bold tracking-tight' : 'text-2xl md:text-3xl font-bold tracking-tight';
  const unitClasses = isCompact
    ? 'text-[10px] md:text-xs uppercase mt-1.5 font-medium opacity-95'
    : 'text-xs md:text-sm uppercase mt-2 font-medium opacity-95';

  return (
    <div className={containerClasses}>
      <p className={labelClasses}>Tournament Starts In</p>
      <div className={gridClasses}>
        <div className={cellClasses}>
          <div className={valueClasses}>{timeLeft.days}</div>
          <div className={unitClasses}>Days</div>
        </div>
        <div className={cellClasses}>
          <div className={valueClasses}>{timeLeft.hours}</div>
          <div className={unitClasses}>Hours</div>
        </div>
        <div className={cellClasses}>
          <div className={valueClasses}>{timeLeft.minutes}</div>
          <div className={unitClasses}>Minutes</div>
        </div>
        <div className={cellClasses}>
          <div className={valueClasses}>{timeLeft.seconds}</div>
          <div className={unitClasses}>Seconds</div>
        </div>
      </div>
    </div>
  );
}
