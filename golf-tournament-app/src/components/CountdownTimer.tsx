'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-xl p-6 text-white shadow-lg">
      <p className="text-center text-sm font-semibold mb-4 opacity-90">
        Tournament Starts In
      </p>
      <div className="grid grid-cols-4 gap-3 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-xs md:text-sm uppercase mt-2 opacity-90">Days</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm uppercase mt-2 opacity-90">Hours</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm uppercase mt-2 opacity-90">Minutes</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm uppercase mt-2 opacity-90">Seconds</div>
        </div>
      </div>
    </div>
  );
}
