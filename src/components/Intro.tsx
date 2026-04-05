"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Lock, Key, Music } from 'lucide-react';
import { fireHearts } from './ConfettiController';

interface IntroProps {
  onEnter: () => void;
}

export const Intro = ({ onEnter }: IntroProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-[#fdfcf7] flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 text-center max-w-md w-full"
      >
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? [0, -5, 5, 0] : 0 }}
          className="mb-8 cursor-pointer inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            fireHearts();
            onEnter();
          }}
        >
          <div className="relative">
             <Heart className={`w-32 h-32 ${isHovered ? 'fill-pink-500 text-pink-500' : 'fill-pink-100 text-pink-300'} transition-colors duration-500`} />
             <div className="absolute inset-0 flex items-center justify-center">
                <Lock className={`w-8 h-8 ${isHovered ? 'text-white' : 'text-pink-400'} transition-colors`} />
             </div>
          </div>
        </motion.div>

        <h1 className="font-handwritten text-4xl md:text-5xl text-slate-800 mb-4 font-bold">
           A Special Gift for You...
        </h1>
        
        <p className="font-handwritten text-xl text-slate-500 mb-12 italic">
           Click the heart to unlock 24 years of wonderful you.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            fireHearts();
            onEnter();
          }}
          className="group relative px-12 py-4 bg-slate-900 text-white rounded-full font-handwritten text-2xl shadow-xl overflow-hidden"
        >
           <span className="relative z-10 flex items-center gap-3">
              Unlock Memories
              <Key className="w-6 h-6 group-hover:rotate-45 transition-transform" />
           </span>
           <motion.div 
             className="absolute inset-0 bg-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
           />
        </motion.button>
        
        <div className="mt-12 flex justify-center gap-4 opacity-10">
           <Music className="w-6 h-6" />
           <Heart className="w-6 h-6" />
           <Music className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Floating Doodles */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 opacity-10"
      >
        <div className="w-16 h-16 border-4 border-pink-400 rounded-full border-dashed" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-10 opacity-10"
      >
        <div className="w-20 h-20 border-4 border-blue-400 rounded-xl border-dashed" />
      </motion.div>
    </motion.div>
  );
};
