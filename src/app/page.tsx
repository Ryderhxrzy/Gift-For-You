"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { fireConfetti } from '@/components/ConfettiController';
import { useRouter } from 'next/navigation';

export default function BirthdayPage() {
  const [hasEntered, setHasEntered] = useState(false);
  const router = useRouter();

  // Disable scroll when Intro is shown
  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [hasEntered]);

  const handleEnter = () => {
    setHasEntered(true);
    setTimeout(() => {
      fireConfetti();
    }, 500);
  };

  const navigateToMemories = () => {
    router.push('/journey-together');
  };

  return (
    <main className="relative h-screen bg-[#fffef4] overflow-hidden">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <Intro key="intro" onEnter={handleEnter} />
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-full"
          >
            {/* Hero Section - The only thing on index after Intro */}
            <Hero onOpen={navigateToMemories} />

            {/* Simple decoration for index */}
            <div className="absolute bottom-10 left-10 opacity-20 pointer-events-none">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-4 text-pink-500 font-handwritten text-2xl font-bold"
              >
                Another Year of Us ❤️
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}