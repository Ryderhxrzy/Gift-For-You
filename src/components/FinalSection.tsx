"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Heart, RefreshCw, Send, Sparkle, Star } from 'lucide-react';
import { fireHearts } from './ConfettiController';
import { memories, Memory } from '../data/memories';
import { MemoryModal } from './MemoryModal';
import { Bouquet } from './Bouquet';
import { Tape, Pin } from './MemoryCard';

export const FinalSection = ({ onReplay }: { onReplay: () => void }) => {
   const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
   const [isPaused, setIsPaused] = useState(false);

   // Custom scrolling logic for a perfect, pauseable infinite loop
   const x = useMotionValue(0);
   const containerRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);

   useAnimationFrame((time, delta) => {
      if (isPaused) return;

      // Gentle scroll speed: 32px per second
      const moveAmount = (delta / 1000) * 32;
      let nextX = x.get() - moveAmount;

      // Reset when we've scrolled past half (since we doubled the items)
      if (contentRef.current) {
         const halfWidth = contentRef.current.scrollWidth / 2;
         if (Math.abs(nextX) >= halfWidth) {
            nextX = 0;
         }
      }

      x.set(nextX);
   });

   // Collect all images with their respective memory
   const allImagesWithMemory = memories.flatMap(m =>
      m.images.map(img => ({ ...img, memory: m }))
   );

   // Double the images for a seamless loop
   const carouselItems = [...allImagesWithMemory, ...allImagesWithMemory];

   return (
      <section className="min-h-screen py-32 px-4 relative overflow-hidden flex flex-col items-center justify-center">
         {/* Background Doodles */}
         <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 left-20 opacity-20 pointer-events-none"
         >
            <Star className="w-16 h-16 text-yellow-400 fill-yellow-200" />
         </motion.div>

         <motion.div
            animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-40 right-20 opacity-20 pointer-events-none"
         >
            <Sparkle className="w-20 h-20 text-pink-400" />
         </motion.div>

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl w-full relative z-10"
         >
            <div className="relative p-10 md:p-16 text-center">
               {/* The Letter Content */}
               <div className="space-y-8 mb-16 relative">
                  <motion.div
                     whileHover={{ scale: 1.1, rotate: 10 }}
                     onClick={() => fireHearts()}
                     className="w-24 h-24 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center mx-auto mb-8 cursor-pointer shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                  >
                     <Heart className="w-14 h-14 fill-pink-500 text-pink-500 animate-pulse" />
                  </motion.div>

                  <h2 className="font-handwritten text-4xl md:text-6xl text-slate-900 leading-tight font-bold">
                     Happy Birthday, Mahal Ko! 🎂❤️
                  </h2>

                  <div className="font-handwritten text-2xl md:text-3xl text-slate-700 leading-relaxed max-w-3xl mx-auto space-y-6">
                     <p>
                        Happy happy 25th birthday sayo, mahal! Pasensya na kung ito lang yung nakayanan ko ha, gusto ko lang na kahit simple ay maparamdam ko sayo kung gaano ka kahalaga sa akin.
                        Pangako na babawi ako pag nag sama na tayo mahal.
                     </p>
                     <p>
                        Salamat sa lahat-lahat mahal. Salamat sa pagmamahal, sa walang sawang pag-iintindi palagi sa akin lalo na pag tinotoyo ako HAHAHA. Salamat kasi kahit mahirap, hindi mo ako binitawan. Hindi ko man masabi palagi, pero sobrang nagpapasalamat ako sa tadhana na ikaw yung ibinigay nya sakin at nakasama ko sa bawat journey na 'to mula sa mga gala nating malalayo hanggang sa mga simpleng tambay lang.
                     </p>
                     <p>
                        Sobrang proud ako sayo mahal. Sa lahat ng achievements mo at sa kung gaano ka katatag na tao. Tandaan mo na nandito lang ako palagi ha, hinding hindi kita iiwan at susuportahan kita sa lahat ng gusto mo. Sana sa 24th chapter ng buhay mo, mas maging masaya ka pa at mas marami pa tayong mapuntahang lugar na magkasama.
                     </p>
                     <p>
                        Huwag kang mapapagod ha? Kasi ako, hinding-hindi mapapagod na mahalin ka. I love you so much, mahal ko! ❤️✨
                     </p>
                  </div>

                  <div className="font-handwritten text-4xl text-pink-500 font-bold mt-12 rotate-[-2deg]">
                     With all my love, always. ✨
                  </div>
               </div>

               {/* Perfect Interactive Infinite Carousel */}
               <div className="relative mt-20 pt-10 border-t-2 border-dashed border-slate-200">
                  <h3 className="font-handwritten text-2xl text-slate-400 mb-12 uppercase tracking-widest font-bold">
                     Our Gallery of Joy (Stop to explore)
                  </h3>

                  <div
                     ref={containerRef}
                     className="relative w-full overflow-hidden py-16 px-4 group/carousel cursor-pointer"
                     onMouseEnter={() => setIsPaused(true)}
                     onMouseLeave={() => setIsPaused(false)}
                  >
                     <motion.div
                        ref={contentRef}
                        className="flex gap-10 w-max"
                        style={{ x }}
                     >
                        {carouselItems.map((item, idx) => (
                           <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, y: -12 }}
                              onClick={() => setSelectedMemory(item.memory)}
                              className="w-52 h-72 bg-white p-2 pb-12 border-2 border-slate-900 shadow-xl rotate-[2deg] transition-all flex flex-col shrink-0 relative overflow-visible cursor-pointer group/card"
                           >
                              {/* Inner Card Pattern */}
                              <div
                                 className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
                                 style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '8px 8px' }}
                              />

                              {/* Top Tape + Pin Decoration */}
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                                 <Tape size="small" rotate={(idx % 5) * 4 - 8} className="opacity-90 shadow-sm" />
                                 <Pin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75" />
                              </div>

                              <div className="w-full h-full bg-slate-100 border border-slate-200 overflow-hidden mb-3 relative z-10 pointer-events-none rounded-sm">
                                 <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                                 />
                              </div>

                              <div className="text-center font-handwritten relative z-10 px-1 space-y-0.5">
                                 <h4 className="text-sm text-slate-900 font-bold line-clamp-1">
                                    {item.title}
                                 </h4>
                                 {item.description && (
                                    <p className="text-[10px] text-slate-500 italic line-clamp-1 transform scale-90">
                                       {item.description}
                                    </p>
                                 )}
                                 <div className="text-[8px] text-pink-400 uppercase tracking-widest font-bold">
                                    {item.memory.date}
                                 </div>
                              </div>

                              {/* Mini Bouquet in the corner */}
                              <div className="absolute -bottom-4 -right-4 z-40 transform rotate-12 scale-75 group-hover/card:scale-90 transition-transform pointer-events-none">
                                 <Bouquet variant={(idx % 3 + 1) as any} size="small" />
                              </div>
                           </motion.div>
                        ))}
                     </motion.div>
                  </div>
               </div>

               <motion.button
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onReplay}
                  className="mt-20 flex items-center gap-3 mx-auto font-handwritten text-2xl text-slate-400 hover:text-slate-900 transition-colors group cursor-pointer"
               >
                  <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  Replay Memories
               </motion.button>
            </div>
         </motion.div>

         {/* Memory Modal - Integrated with full navigation */}
         <MemoryModal
            memory={selectedMemory}
            onClose={() => setSelectedMemory(null)}
            onNextMemory={() => {
               if (!selectedMemory) return;
               const currentIndex = memories.findIndex(m => m.id === selectedMemory.id);
               const nextIndex = (currentIndex + 1) % memories.length;
               setSelectedMemory(memories[nextIndex]);
            }}
            onPrevMemory={() => {
               if (!selectedMemory) return;
               const currentIndex = memories.findIndex(m => m.id === selectedMemory.id);
               const prevIndex = (currentIndex - 1 + memories.length) % memories.length;
               setSelectedMemory(memories[prevIndex]);
            }}
         />
      </section>
   );
};
