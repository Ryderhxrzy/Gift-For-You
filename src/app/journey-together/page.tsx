"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MemoryCard } from '@/components/MemoryCard';
import { MemoryModal } from '@/components/MemoryModal';
import { FinalSection } from '@/components/FinalSection';
import { memories, Memory } from '@/data/memories';
import { MusicPlayer } from '@/components/MusicPlayer';
import Link from 'next/link';
import { ChevronLeft, Heart } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ForYouPage() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextMemory = () => {
    if (!selectedMemory) return;
    const currentIndex = memories.findIndex(m => m.id === selectedMemory.id);
    const nextIndex = (currentIndex + 1) % memories.length;
    setSelectedMemory(memories[nextIndex]);
  };

  const handlePrevMemory = () => {
    if (!selectedMemory) return;
    const currentIndex = memories.findIndex(m => m.id === selectedMemory.id);
    const prevIndex = (currentIndex - 1 + memories.length) % memories.length;
    setSelectedMemory(memories[prevIndex]);
  };

  return (
    <main className="relative h-screen w-full bg-[#fffef4] overflow-hidden">
      {/* Decorative Frame Borders - Fixed and outermost */}
      <div className="fixed inset-4 border-2 border-slate-900/10 pointer-events-none z-50 rounded-3xl" />
      <div className="fixed inset-8 border border-slate-900/10 pointer-events-none z-50 rounded-2xl" />

      {/* Paper Texture Overlay - Fixed */}
      <div className="fixed inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 mix-blend-multiply z-0" />

      {/* Universal Polka Dot Background Pattern - Fixed inside the frame area */}
      <div
        className="fixed inset-x-8 inset-y-8 pointer-events-none opacity-[0.04] z-0"
        style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '8px 8px' }}
      />

      {/* Scrollable Inner Content Area - Wrapped inside the frames */}
      <div className="absolute inset-x-8 inset-y-8 overflow-y-auto overflow-x-hidden z-20 custom-scrollbar">
        <div className="relative z-10 max-w-7xl mx-auto py-16 px-6 md:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-handwritten text-xl text-slate-500 hover:text-pink-500 transition-colors mb-12 group cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Start
          </Link>

          {/* Gallery Journey Section */}
          <section id="gallery" className="relative pb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24 relative"
            >
              <div className="inline-block relative">
                <div className="absolute -inset-4 bg-pink-100/60 -rotate-1 rounded-sm shadow-sm" />
                <h2 className="relative font-handwritten text-4xl md:text-6xl text-slate-900 mb-2 px-8 py-3 border-b-4 border-slate-900 inline-block bg-white shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]">
                  Our Journey Together
                </h2>
              </div>
              <p className="font-handwritten text-2xl md:text-3xl text-slate-700 mt-10 max-w-2xl mx-auto italic font-bold">
                "Sa bawat segundo, minuto, oras, araw, linggo, buwan, at taon... ikaw at ikaw lang ang pipiliin ko."
              </p>
            </motion.div>

            {/* Memories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-40 gap-x-12 relative px-4 max-w-6xl mx-auto">
              {memories.map((memory, index) => {
                const isRowEnd = (index + 1) % 3 === 0;
                const isLastItem = index === memories.length - 1;

                return (
                  <div key={memory.id} className="relative group flex justify-center">
                    {/* 1. Horizontal Curvy Line */}
                    {!isRowEnd && !isLastItem && (
                      <div className="hidden lg:block absolute left-[80%] top-1/2 w-[80%] h-20 z-0 -translate-y-1/2 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 160 40" preserveAspectRatio="none" className="overflow-visible">
                          <path
                            d="M 0 20 Q 80 0, 160 20"
                            fill="transparent"
                            stroke="#fbcfe8"
                            strokeWidth="4"
                            strokeDasharray="12,12"
                          />
                          <g transform="translate(80, 10)">
                            <Heart className="w-5 h-5 text-pink-300 fill-pink-300 -translate-x-2.5 -translate-y-2.5 opacity-60" />
                          </g>
                        </svg>
                      </div>
                    )}

                    {/* 2. Z-Connect */}
                    {isRowEnd && !isLastItem && (
                      <div className="hidden lg:block absolute top-[100%] right-1/2 w-[220%] h-[180px] z-0 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 500 180" preserveAspectRatio="none" className="overflow-visible">
                          <path
                            d="M 500 0 C 500 90, 0 90, 0 180"
                            fill="transparent"
                            stroke="#fbcfe8"
                            strokeWidth="4"
                            strokeDasharray="12,12"
                          />
                          <Heart className="w-10 h-10 text-pink-400 fill-pink-400 absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%) rotate(-15deg)' }} />
                        </svg>
                      </div>
                    )}

                    {/* Connectors for Tablet */}
                    {(index + 1) % 2 !== 0 && !isLastItem && (
                      <div className="hidden sm:block lg:hidden absolute left-[75%] top-1/2 w-[90%] h-20 z-0 -translate-y-1/2 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path d="M 0 20 Q 50 40, 100 20" fill="transparent" stroke="#fbcfe8" strokeWidth="4" strokeDasharray="12,12" />
                        </svg>
                      </div>
                    )}
                    {(index + 1) % 2 === 0 && !isLastItem && (
                      <div className="hidden sm:block lg:hidden absolute top-[100%] right-1/2 w-[110%] h-[140px] z-0 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 150 140" preserveAspectRatio="none">
                          <path d="M 150 0 C 150 70, 0 70, 0 140" fill="transparent" stroke="#fbcfe8" strokeWidth="4" strokeDasharray="12,12" />
                        </svg>
                      </div>
                    )}

                    {/* Connectors for Mobile */}
                    {!isLastItem && (
                      <div className="sm:hidden absolute top-[100%] left-1/2 h-[180px] w-20 z-0 -translate-x-1/2 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 40 180" preserveAspectRatio="none">
                          <path d="M 20 0 Q 40 90, 20 180" fill="transparent" stroke="#fbcfe8" strokeWidth="4" strokeDasharray="12,12" />
                        </svg>
                      </div>
                    )}

                    <MemoryCard
                      memory={memory}
                      index={index}
                      onClick={(m) => setSelectedMemory(m)}
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Final Message Section */}
          <FinalSection onReplay={handleReplay} />

          {/* Modal for viewing letters */}
          <MemoryModal
            memory={selectedMemory}
            onClose={() => setSelectedMemory(null)}
            onNextMemory={handleNextMemory}
            onPrevMemory={handlePrevMemory}
          />
        </div>
      </div>

      {/* Music Player - Fixed and clearly inside the frame border */}
      <div className="absolute bottom-12 right-15 z-[60]">
        <MusicPlayer />
      </div>
    </main>
  );
}
