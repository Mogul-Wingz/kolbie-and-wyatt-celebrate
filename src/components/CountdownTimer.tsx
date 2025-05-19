
import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const weddingDate = new Date('September 13, 2025 16:30:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [weddingDate]);
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="countdown-element">
          <span className="text-3xl md:text-4xl font-playfair font-light">{timeLeft.days}</span>
          <span className="text-sm font-josefin uppercase tracking-wider mt-1">Days</span>
        </div>
        <div className="countdown-element">
          <span className="text-3xl md:text-4xl font-playfair font-light">{timeLeft.hours}</span>
          <span className="text-sm font-josefin uppercase tracking-wider mt-1">Hours</span>
        </div>
        <div className="countdown-element">
          <span className="text-3xl md:text-4xl font-playfair font-light">{timeLeft.minutes}</span>
          <span className="text-sm font-josefin uppercase tracking-wider mt-1">Minutes</span>
        </div>
        <div className="countdown-element">
          <span className="text-3xl md:text-4xl font-playfair font-light">{timeLeft.seconds}</span>
          <span className="text-sm font-josefin uppercase tracking-wider mt-1">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
