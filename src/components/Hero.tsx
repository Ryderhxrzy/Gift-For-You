"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Sparkles, Star } from 'lucide-react';
import { fireConfetti } from './ConfettiController';

export const Hero = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Decorations - More scattered and rich */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[15%] right-[10%] opacity-20"
        >
          <Star className="w-16 h-16 text-yellow-400 fill-yellow-100" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-[20%] left-[10%] opacity-20"
        >
          <Sparkles className="w-20 h-20 text-blue-400" />
        </motion.div>

        {/* Floating Traits/Keywords */}
        {["Beautiful", "Kind", "My Favorite", "Sunshine", "Mahal Ko"].map((trait, i) => (
          <motion.div
            key={trait}
            initial={{ opacity: 0, x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{ duration: i + 4, repeat: Infinity }}
            className={`absolute font-handwritten text-xl md:text-2xl text-pink-400/40 select-none hidden sm:block`}
            style={{
              top: `${20 + (i * 15)}%`,
              left: i % 2 === 0 ? '5%' : '85%',
              transform: `rotate(${Math.random() * 20 - 10}deg)`
            }}
          >
            {trait}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        onViewportEnter={() => fireConfetti()}
        className="z-10 bg-white/40 backdrop-blur-[2px] p-8 md:p-16 rounded-[40px] border-2 border-dashed border-pink-200 shadow-inner"
      >
        <motion.div
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <h1 className="font-handwritten text-5xl md:text-8xl text-slate-900 mb-6 drop-shadow-[5px_5px_0px_#fed7e2] leading-tight px-4">
            Happy 25th Birthday, <br />
            <span className="text-pink-500 block mt-2 underline decoration-wavy decoration-pink-300 underline-offset-8">Ma. Leli / Mahal ❤️</span>
          </h1>
        </motion.div>

        <p className="font-handwritten text-2xl md:text-4xl text-slate-600 mb-10 max-w-2xl mx-auto italic leading-relaxed">
          "To the most special girl in my life, I'm so lucky to have you."
        </p>

        <div className="flex flex-col items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              fireConfetti();
              onOpen();
            }}
            className="group relative px-12 py-5 bg-slate-900 text-white rounded-2xl font-handwritten text-2xl shadow-[10px_10px_0px_0px_rgba(236,72,153,1)] hover:shadow-[5px_5px_0px_0px_rgba(236,72,153,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <div className="flex items-center gap-3">
              <Gift className="w-8 h-8 group-hover:animate-bounce" />
              Start Our Journey
            </div>
          </motion.button>

          <p className="font-handwritten text-lg text-slate-400 mt-4 animate-pulse">
            ( click to explore )
          </p>
        </div>
      </motion.div>
    </section>
  );
};
