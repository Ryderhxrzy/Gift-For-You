"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Pause, Play, Music2, Volume2, VolumeX } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Autoplay blocked:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Try to play on mount (browsers should allow this after interaction on the landing page)
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(e => {
                console.log("Waiting for user interaction or blocked:", e);
                // Fallback: Listen for first click if mount play fails
                const playOnFirstClick = () => {
                    if (audioRef.current && !isPlaying) {
                        audioRef.current.play().then(() => setIsPlaying(true));
                        document.removeEventListener('click', playOnFirstClick);
                    }
                };
                document.addEventListener('click', playOnFirstClick);
            });
    }
  }, []);

  return (
    <div className="flex flex-row-reverse items-center gap-3">
      {/* Audio element */}
      <audio 
        ref={audioRef} 
        src="/music/pinipili.mp3" 
        loop
      />

      <AnimatePresence>
        {isPlaying && (
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -20 }}
             className="bg-white/80 backdrop-blur-md border-2 border-slate-900 py-2 px-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 pointer-events-none"
           >
              <div className="flex gap-1">
                 {[1, 2, 3, 4].map((i) => (
                    <motion.div
                       key={i}
                       animate={{ height: [8, 16, 8] }}
                       transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                       className="w-1 bg-pink-400 rounded-full"
                    />
                 ))}
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] text-slate-400 font-sans uppercase tracking-widest font-bold">Now Playing</span>
                 <span className="text-sm text-slate-900 font-handwritten font-bold leading-none">Pinipili - Mateo</span>
              </div>
           </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={cn(
          "w-14 h-14 rounded-full border-4 border-slate-900 flex items-center justify-center transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group",
          isPlaying ? "bg-pink-100" : "bg-white"
        )}
      >
         {/* Vinyl record spinning effect when playing */}
         {isPlaying && (
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none"
            >
               <div className="w-full h-full border-[10px] border-slate-900 rounded-full" />
               <div className="absolute inset-0 border-[1px] border-slate-900/20 rounded-full scale-90" />
            </motion.div>
         )}

         {isPlaying ? (
            <Pause className="w-6 h-6 text-pink-500 fill-pink-500 relative z-10" />
         ) : (
            <Play className="w-6 h-6 text-slate-900 fill-slate-900 ml-1 relative z-10" />
         )}
      </motion.button>
    </div>
  );
};
