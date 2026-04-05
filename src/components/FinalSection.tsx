"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, RefreshCw, Send, Sparkle } from 'lucide-react';
import { fireHearts } from './ConfettiController';

export const FinalSection = ({ onReplay }: { onReplay: () => void }) => {
  return (
    <section className="min-h-screen py-24 px-4 bg-pink-50 relative overflow-hidden flex items-center justify-center">
      {/* Decorative doodles */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 opacity-10"
      >
        <Sparkle className="w-24 h-24 text-pink-400" />
      </motion.div>
      <motion.div 
        animate={{ rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 opacity-10"
      >
        <Send className="w-20 h-20 text-blue-400 rotate-12" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        <div className="bg-white border-4 border-slate-900 rounded-[30px_15px_40px_20px] p-10 md:p-16 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] relative">
          {/* Tape decoration */}
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-10 w-32 bg-yellow-200/50 backdrop-blur-sm border-l-2 border-r-2 border-dashed border-yellow-400/50 rotate-1" />
           
           <div className="flex flex-col items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={() => fireHearts()}
                className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center p-6 border-2 border-slate-900 cursor-pointer hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                 <Heart className="w-16 h-16 fill-pink-500 text-pink-500 animate-pulse" />
              </motion.div>
              
              <h2 className="font-handwritten text-4xl md:text-5xl text-slate-800 leading-tight">
                 "Thank you for being part of my life, for making every day brighter, and for being exactly the person you are."
              </h2>
              
              <p className="font-handwritten text-3xl text-slate-600 mt-4 italic">
                 I love you more than words can say. ❤️
              </p>
              
              <motion.button
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onReplay}
                className="mt-8 flex items-center gap-3 font-handwritten text-2xl text-slate-400 hover:text-slate-900 transition-colors group"
              >
                <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                Replay Memories
              </motion.button>
           </div>
        </div>
      </motion.div>
    </section>
  );
};
