"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { MemoryCard } from '@/components/MemoryCard';
import { MemoryModal } from '@/components/MemoryModal';
import { FinalSection } from '@/components/FinalSection';
import { Intro } from '@/components/Intro';
import { memories, Memory } from '@/data/memories';
import { fireConfetti } from '@/components/ConfettiController';

export default function BirthdayPage() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isGiftVisible, setIsGiftVisible] = useState(false);

  // Disable scroll when Intro is shown
  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [hasEntered]);

  const handleEnter = () => {
    setHasEntered(true);
    setTimeout(() => {
      fireConfetti();
    }, 500);
  };

  const openGift = () => {
    setIsGiftVisible(true);
    setTimeout(() => {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <Intro key="intro" onEnter={handleEnter} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hero Section */}
            <Hero onOpen={openGift} />

            {/* Memory Gallery Section - Automatic reveal on scroll */}
            <section
              id="gallery"
              className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24 relative"
              >
                {/* Decorative Pink Note style background for title */}
                <div className="inline-block relative">
                  <div className="absolute -inset-4 bg-pink-100/60 -rotate-1 rounded-sm shadow-sm" />
                  <h2 className="relative font-handwritten text-4xl md:text-6xl text-slate-900 mb-2 px-8 py-3 border-b-4 border-slate-900 inline-block bg-white shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]">
                    Our Scrapbook of Memories
                  </h2>
                </div>

                <p className="font-handwritten text-2xl md:text-3xl text-slate-700 mt-10 leading-relaxed max-w-3xl mx-auto italic font-bold">
                  "Every photo has a story, every story has a secret love letter hidden inside just for you."
                </p>
              </motion.div>

              {/* Grid Layout - More aligned and visible */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
                {memories.map((memory, index) => (
                  <MemoryCard
                    key={memory.id}
                    memory={memory}
                    index={index}
                    onClick={(m) => setSelectedMemory(m)}
                  />
                ))}
              </div>
            </section>

            {/* Final Message Section */}
            <FinalSection onReplay={handleReplay} />

            {/* Modal for viewing letters */}
            <MemoryModal
              memory={selectedMemory}
              onClose={() => setSelectedMemory(null)}
            />

            {/* Floating Credit decoration */}
            <div className="fixed bottom-6 right-6 pointer-events-none z-10 hidden md:block">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-white border-2 border-slate-900 p-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="font-handwritten text-slate-900 font-bold px-2 whitespace-nowrap">Made with ❤️ by Jhayr</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
