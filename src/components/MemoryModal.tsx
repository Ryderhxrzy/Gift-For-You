"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Memory } from '../data/memories';
import { X, Heart, Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface MemoryModalProps {
  memory: Memory | null;
  onClose: () => void;
}

export const MemoryModal = ({ memory, onClose }: MemoryModalProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Reset index when memory changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [memory?.id]);

  const nextImage = () => {
    if (!memory) return;
    setCurrentIndex((prev) => (prev + 1) % memory.images.length);
  };

  const prevImage = () => {
    if (!memory) return;
    setCurrentIndex((prev) => (prev - 1 + memory.images.length) % memory.images.length);
  };

  return (
    <AnimatePresence>
      {memory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md p-4 sm:p-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-[#fffef4] shadow-[15px_15px_0px_0px_rgba(15,23,42,1)] rounded-2xl border-[3px] border-slate-900 flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30 mix-blend-multiply" />
            
            {/* Modal Header - Fixed */}
            <div className="relative p-6 px-10 border-b-2 border-dashed border-slate-200 flex items-center justify-between z-10 bg-[#fffef4]">
               <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <Heart className="w-8 h-8 text-pink-500 fill-pink-100" />
                    <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-slate-800">
                      {memory.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 font-handwritten text-lg ml-11">
                     <Star className="w-4 h-4 text-yellow-400 fill-yellow-100" />
                     {memory.date}
                  </div>
               </div>
               
               <button 
                 onClick={onClose}
                 className="p-2 rounded-full hover:bg-pink-50 transition-colors border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 bg-white shrink-0"
               >
                 <X className="w-6 h-6" />
               </button>
            </div>

            {/* Scrollable Content */}
            <div className="relative flex-1 overflow-y-auto custom-scrollbar p-8 pt-6 px-10">
              <div className="font-handwritten text-2xl text-slate-800 leading-relaxed space-y-6">
                {memory.letter.split('\n').map((paragraph, i) => (
                   <motion.p 
                     key={i}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.1 * i }}
                   >
                     {paragraph}
                   </motion.p>
                ))}
              </div>

              {/* Memory Image Carousel at the bottom - Two at a time */}
              <div className="mt-12 space-y-6 pb-20">
                 <h3 className="font-handwritten text-2xl text-pink-500 font-bold border-b border-pink-200 inline-block pb-1 mb-6">
                    Our Moments in Frames...
                 </h3>
                 
                 <div className="relative group max-w-2xl mx-auto px-10">
                    <div className="grid grid-cols-2 gap-6 relative">
                      {[0, 1].map((offset) => {
                         const idx = (currentIndex + offset) % memory.images.length;
                         // If we only have 1 image, don't show the second one if it's the same as the first unless there are more than 1 image
                         if (offset === 1 && memory.images.length === 1) return null;
                         
                         return (
                            <motion.div 
                              key={`${currentIndex}-${offset}`}
                              initial={{ opacity: 0, scale: 0.9, rotate: offset === 0 ? -2 : 2 }}
                              animate={{ opacity: 1, scale: 1, rotate: offset === 0 ? -1 : 1 }}
                              className="bg-white p-3 pb-10 border-2 border-slate-900 shadow-xl"
                            >
                               <div className="aspect-square bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden mb-3">
                                  <img 
                                    src={memory.images[idx].url} 
                                    alt={memory.images[idx].title} 
                                    className="w-full h-full object-cover" 
                                  />
                               </div>
                               
                               <div className="text-center">
                                  <h4 className="font-handwritten text-lg text-slate-900 font-bold leading-tight">
                                     {memory.images[idx].title}
                                  </h4>
                                  <div className="flex items-center justify-center gap-1.5 text-slate-400 font-handwritten text-[10px] mt-1">
                                     <Heart className="w-2 h-2 fill-pink-100" />
                                     {memory.date}
                                  </div>
                               </div>
                            </motion.div>
                         );
                      })}
                    </div>

                    {/* Navigation Buttons */}
                    {memory.images.length > 2 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-[-30px] top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-slate-900 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 transition-colors z-20"
                        >
                           <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-[-30px] top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-slate-900 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 transition-colors z-20"
                        >
                           <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                 </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-8 text-right italic text-pink-500 text-3xl font-bold pb-4 pr-2 flex items-center justify-end gap-3"
              >
                 With all my love, 
                 <Heart className="w-10 h-10 fill-pink-500 animate-pulse" />
              </motion.div>
            </div>

            {/* Decorative Stars in background */}
            <div className="absolute bottom-4 left-4 text-yellow-400 opacity-20 pointer-events-none">
               <Star className="w-12 h-12 fill-yellow-200" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
