"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Sparkles, Star } from 'lucide-react';
import { Memory } from '../data/memories';
import { Bouquet } from './Bouquet';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MemoryCardProps {
  memory: Memory;
  onClick: (memory: Memory) => void;
  index: number;
}

export const Tape = ({ className, rotate = 0, size = "large", index = 0 }: { className?: string; rotate?: number, size?: "small" | "large", index?: number }) => {
  return (
    <div 
      className={cn(
        "bg-yellow-200/90 backdrop-blur-[2px] border-l-2 border-r-2 border-dashed border-yellow-600/30 z-20 flex items-center justify-center overflow-hidden shadow-sm",
        size === "large" ? "h-10 w-28" : "h-6 w-16",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Universal Polka Dot Pattern (Same as number 2) */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }} />
    </div>
  );
};

export const Pin = ({ className }: { className?: string }) => (
  <div className={cn("absolute w-6 h-6 z-40 drop-shadow-md", className)}>
    {/* Rose Gold Metallic Heart Pin/Thumbtack */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700] via-[#ffd700] to-[#b8860b] rounded-full border border-[#8b4513]/20 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3)] flex items-center justify-center p-1.5 overflow-hidden">
       <Heart className="w-full h-full text-white/90 fill-white" />
       {/* Shine Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rotate-45 translate-x-[-50%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
    {/* Specular highlight */}
    <div className="absolute top-1 left-1.5 w-1.5 h-1.5 bg-white/70 rounded-full blur-[0.3px]" />
    {/* Sublte Shadow */}
    <div className="absolute -bottom-1 -right-0.5 w-4 h-4 bg-black/10 rounded-full blur-[2px] -z-10" />
  </div>
);

export const MemoryCard = ({ memory, onClick, index }: MemoryCardProps) => {
  // Use index-based deterministic values
  const rotation = React.useMemo(() => {
    const base = index % 2 === 0 ? -2 : 2;
    const jitter = (index % 5) - 2;
    return base + jitter;
  }, [index]);

  const tapeRotation = React.useMemo(() => (index % 6) * 4 - 10, [index]);
  const tapeOffset = React.useMemo(() => (index % 4) * 4 - 8, [index]);
  const bouquetVariant = React.useMemo(() => (index % 3 + 1) as 1 | 2 | 3, [index]);
  
  // Doodle positions
  const hasStar = index % 2 === 0;
  const hasSparkle = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, rotate: rotation > 0 ? rotation + 1 : rotation - 1 }}
      onClick={() => onClick(memory)}
      className="relative p-6 cursor-pointer group w-full max-w-[320px]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Background Doodles (Scattered) */}
      {hasStar && (
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -left-2 text-yellow-300 opacity-40">
           <Star className="w-6 h-6 fill-yellow-200" />
        </motion.div>
      )}
      {hasSparkle && (
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-6 -left-6 text-pink-300 opacity-50">
           <Sparkles className="w-8 h-8" />
        </motion.div>
      )}

      {/* Top Tape: Deterministically 'handplaced' look - Lowered onto the card */}
      <div 
        className="absolute top-2 left-1/2 z-30 flex items-center justify-center h-8"
        style={{ transform: `translateX(calc(-50% + ${tapeOffset}px))` }}
      >
        <Tape rotate={tapeRotation} index={index} className="relative shadow-md" />
        {/* Pin stays with the tape, slightly jiggled too */}
        <Pin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="bg-white border-[3px] border-slate-900 rounded-none p-3 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all relative overflow-visible flex flex-col h-full">
        {/* Subtle Card Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
          style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '8px 8px' }}
        />

        {/* Handwritten Number Sticker - Refined centering */}
        <div className="absolute -top-5 -right-5 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-handwritten text-xl font-bold rotate-12 border-[3px] border-white shadow-xl z-40 group-hover:rotate-0 transition-transform pt-1">
           #{String(index + 1).padStart(2, '0')}
        </div>

        {/* Memory Image Card */}
        <div className="aspect-[4/5] bg-slate-100 rounded-sm border-2 border-slate-900 flex items-center justify-center overflow-hidden mb-4 relative z-10 group">
           {memory.images && memory.images.length > 0 ? (
             <img 
               src={memory.images[0].url} 
               alt={memory.title} 
               className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
             />
           ) : (
             <div className="text-slate-500 font-handwritten text-center p-6 text-lg font-bold leading-tight uppercase opacity-50">
                [ {memory.imagePlaceholder || "Secret moment..."} ]
             </div>
           )}
           
           {/* Doodle overlay on hover */}
           <motion.div 
             initial={{ opacity: 0 }}
             whileHover={{ opacity: 1 }}
             className="absolute inset-0 flex items-center justify-center bg-pink-100/30 backdrop-blur-[1px]"
           >
              <Heart className="w-12 h-12 text-pink-500 fill-pink-500 drop-shadow-md" />
           </motion.div>
        </div>
        
        <div className="space-y-2 text-center pb-2 flex-grow relative z-10">
          <h3 className="font-handwritten text-2xl text-slate-900 font-bold tracking-tight">
            {memory.title}
          </h3>
          <div className="flex items-center justify-center gap-2 text-slate-500 font-handwritten text-sm">
             <Calendar className="w-3 h-3 text-pink-400" />
             {memory.date}
          </div>
          <div className="h-0.5 w-8 bg-pink-200 mx-auto rounded-full" />
        </div>

        {/* Bottom Flower Bouquet */}
        <div className="absolute -bottom-6 -right-4 z-40 transform rotate-12 pointer-events-none">
           <div className="relative group/flower">
              <Bouquet variant={bouquetVariant} size="small" />
              <Tape size="small" rotate={-25} index={index + 1} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 border-none px-2 py-1" />
           </div>
        </div>
      </div>
    </motion.div>
  );
};
