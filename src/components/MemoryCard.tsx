"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';
import { Memory } from '../data/memories';
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

export const Tape = ({ className, rotate = 0 }: { className?: string; rotate?: number }) => (
  <div 
    className={cn(
      "absolute h-10 w-28 bg-yellow-200/80 backdrop-blur-[2px] border-l-2 border-r-2 border-dashed border-yellow-500/40 z-20",
      className
    )}
    style={{ transform: `rotate(${rotate}deg)` }}
  />
);

export const Pin = ({ className }: { className?: string }) => (
  <div className={cn("absolute w-5 h-5 rounded-full bg-red-600 shadow-lg border-2 border-red-800 z-20", className)}>
    <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-white/60 rounded-full" />
  </div>
);

export const MemoryCard = ({ memory, onClick, index }: MemoryCardProps) => {
  // Balanced rotation for scrapbook effect
  const rotation = React.useMemo(() => (index % 2 === 0 ? -3 : 3) + (Math.random() - 0.5) * 2, [index]);
  const tapeRotation = React.useMemo(() => (Math.random() - 0.5) * 15, []);

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
      {/* Tape decoration: random corners */}
      {index % 2 === 0 ? (
        <Tape className="-top-2 left-1/2 -translate-x-1/2" rotate={tapeRotation} />
      ) : (
        <Tape className="-top-3 left-10" rotate={-15 + tapeRotation} />
      )}
      
      <div className="bg-white border-[3px] border-slate-900 rounded-[12px_12px_12px_12px] p-3 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all">
        {/* Memory Image Card */}
        <div className="aspect-[4/5] bg-slate-100 rounded-sm border-2 border-slate-900 flex items-center justify-center overflow-hidden mb-4 relative group">
           {memory.images && memory.images.length > 0 ? (
             <img 
               src={memory.images[0].url} 
               alt={memory.title} 
               className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
             />
           ) : (
             <div className="text-slate-500 font-handwritten text-center p-6 text-lg font-bold leading-tight">
                [ {memory.imagePlaceholder || "Capturing our moment..."} ]
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
        
        <div className="space-y-2 text-center pb-2">
          <h3 className="font-handwritten text-2xl text-slate-900 font-bold tracking-tight">
            {memory.title}
          </h3>
          <div className="flex items-center justify-center gap-2 text-slate-500 font-handwritten text-sm">
             <Calendar className="w-3 h-3 text-pink-400" />
             {memory.date}
          </div>
          <div className="h-0.5 w-8 bg-pink-200 mx-auto rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};
