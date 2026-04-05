"use client";

import confetti from 'canvas-confetti';

export const fireConfetti = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval: any = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 30 * (timeLeft / duration); // Reduced from 50
    // since particles fall down, start a bit higher than random
    confetti({ 
      ...defaults, 
      particleCount, 
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      ticks: 150 // Increased ticks for smoother fall
    });
    confetti({ 
      ...defaults, 
      particleCount, 
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      ticks: 150
    });
  }, 350); // Increased interval from 250
};

export const fireHearts = () => {
  const scalar = 2;
  const heart = confetti.shapeFromPath({ path: 'M167 72c19,-38 37,-56 75,-56c42,0 75,33 75,75c0,46 -28,101 -150,189c-122,-88 -150,-143 -150,-189c0,-42 33,-75 75,-75c38,0 56,18 75,56z' });

  confetti({
    shapes: [heart],
    particleCount: 25, // Reduced from 40
    spread: 60, // Slightly narrower for better focus
    origin: { y: 0.6 },
    colors: ['#ff69b4', '#ff1493', '#ff0000'],
    scalar: 1.5 // Reduced scalar from 2 for better performance
  });
};
