"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Memory } from '../data/memories';
import { X, Heart, Star, Sparkles, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Bouquet } from './Bouquet';
import { Tape, Pin } from './MemoryCard';

interface MemoryModalProps {
  memory: Memory | null;
  onClose: () => void;
  onNextMemory?: () => void;
  onPrevMemory?: () => void;
}

export const MemoryModal = ({ memory, onClose, onNextMemory, onPrevMemory }: MemoryModalProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isDescExpanded, setIsDescExpanded] = React.useState(false);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  // Reset index when memory changes
  React.useEffect(() => {
    setCurrentIndex(0);
    setIsExpanded(false);
    setIsDescExpanded(false);
    setIsViewerOpen(false);
  }, [memory?.id]);

  const nextImage = () => {
    if (!memory) return;
    setCurrentIndex((prev: number) => (prev + 1) % memory.images.length);
    setIsDescExpanded(false);
  };

  const prevImage = () => {
    if (!memory) return;
    setCurrentIndex((prev: number) => (prev - 1 + memory.images.length) % memory.images.length);
    setIsDescExpanded(false);
  };

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  const fullLetter = memory?.letter || "";
  const displayLetter = isExpanded ? fullLetter : truncateText(fullLetter, 200);

  const currentImg = memory?.images[currentIndex];
  const fullDesc = currentImg?.description || "";
  const displayDesc = isDescExpanded ? fullDesc : truncateText(fullDesc, 100);

  return (
    <AnimatePresence>
      {memory && (
        <motion.div 
          key={memory.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-[#fffef4] shadow-[15px_15px_0px_0px_rgba(15,23,42,1)] rounded-2xl border-[3px] border-slate-900 flex flex-col max-h-[90vh] overflow-visible"
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30 mix-blend-multiply z-10 rounded-2xl overflow-hidden" />
            
            {/* Universal Polka Dot Background Pattern - Clipped inside the modal */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 rounded-2xl overflow-hidden"
              style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '8px 8px' }}
            />

            {/* Modal Header - Fixed */}
            <div className="relative p-6 px-10 border-b-2 border-dashed border-slate-200 flex items-center justify-between z-10 bg-[#fffef4] rounded-t-2xl">
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
               
               <div className="flex items-center gap-3 shrink-0">
                  {/* Global Memory Navigation */}
                  <div className="hidden sm:flex items-center gap-1 mr-4">
                     <button 
                       onClick={onPrevMemory}
                       className="p-1.5 rounded-full hover:bg-slate-100 border border-slate-200 cursor-pointer"
                       title="Previous Destination"
                     >
                       <ChevronLeft className="w-5 h-5" />
                     </button>
                     <button 
                       onClick={onNextMemory}
                       className="p-1.5 rounded-full hover:bg-slate-100 border border-slate-200 cursor-pointer"
                       title="Next Destination"
                     >
                       <ChevronRight className="w-5 h-5" />
                     </button>
                  </div>

                  <button 
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-pink-50 transition-colors border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 bg-white shrink-0 cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>
            </div>

            {/* Scrollable Content */}
            <div className="relative flex-1 overflow-y-auto custom-scrollbar p-8 pt-6 px-10">
              <div className="font-handwritten text-2xl text-slate-800 leading-relaxed relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={isExpanded ? 'expanded' : 'collapsed'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    {displayLetter.split('\n').map((paragraph, i) => (
                       <p key={i}>{paragraph}</p>
                    ))}
                  </motion.div>
                </AnimatePresence>
                
                {fullLetter.length > 200 && (
                   <button 
                     onClick={() => setIsExpanded(!isExpanded)}
                     className="mt-4 text-pink-500 font-bold hover:underline underline-offset-4 decoration-wavy flex items-center gap-1 cursor-pointer"
                   >
                     {isExpanded ? "See Less" : "See More..."}
                     {isExpanded ? <Star className="w-4 h-4 fill-pink-100" /> : <Heart className="w-4 h-4 fill-pink-100" />}
                   </button>
                )}
              </div>

              {/* Memory Image Carousel at the bottom - Two at a time */}
              <div className="mt-12 space-y-6 pb-20 relative z-10">
                 <h3 className="font-handwritten text-2xl text-pink-500 font-bold border-b border-pink-200 inline-block pb-1 mb-6">
                    Our Moments in Frames...
                 </h3>
                 
                 <div className="relative group max-w-2xl mx-auto px-10">
                    <div className="grid grid-cols-2 gap-6 relative">
                      {[0, 1].map((offset) => {
                         const idx = (currentIndex + offset) % memory.images.length;
                         if (offset === 1 && memory.images.length === 1) return null;
                         
                         return (
                            <motion.div 
                              key={`${currentIndex}-${offset}`}
                              initial={{ opacity: 0, scale: 0.9, rotate: offset === 0 ? -2 : 2 }}
                              animate={{ opacity: 1, scale: 1, rotate: offset === 0 ? -1 : 1 }}
                              onClick={() => {
                                 setCurrentIndex(idx);
                                 setIsViewerOpen(true);
                              }}
                              className="bg-white p-3 pb-10 border-2 border-slate-900 shadow-xl cursor-pointer relative group/img overflow-visible"
                            >
                               {/* Mini Tape with Pin Decoration */}
                               <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                                  <Tape size="small" rotate={(idx % 5) * 4 - 8} className="opacity-90 shadow-sm" />
                                  <Pin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75" />
                               </div>

                               {/* Card internal pattern container */}
                               <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-sm">
                                  <div 
                                    className="absolute inset-0 opacity-[0.03] z-0"
                                    style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '8px 8px' }}
                                  />
                               </div>

                               <div className="aspect-square bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden mb-3 relative z-10">
                                  <img 
                                    src={memory.images[idx].url} 
                                    alt={memory.images[idx].title} 
                                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500" 
                                  />
                               </div>
                               
                               {/* View Full Overlay */}
                               <div className="absolute inset-0 bg-pink-500/0 group-hover/img:bg-pink-500/20 flex items-center justify-center transition-all z-20">
                                  <span className="bg-white border-2 border-slate-900 px-3 py-1 rounded-full font-handwritten text-xs opacity-0 group-hover/img:opacity-100 translate-y-4 group-hover/img:translate-y-0 transition-all shadow-md">
                                     View Full
                                  </span>
                               </div>

                               <div className="text-center relative z-10">
                                  <h4 className="font-handwritten text-lg text-slate-900 font-bold leading-tight line-clamp-1">
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
                          onClick={(e) => { e.stopPropagation(); prevImage(); }}
                          className="absolute left-[-30px] top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-slate-900 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 transition-colors z-20 cursor-pointer"
                        >
                           <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); nextImage(); }}
                          className="absolute right-[-30px] top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-slate-900 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 transition-colors z-20 cursor-pointer"
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
                className="mt-8 text-right italic text-pink-500 text-3xl font-bold pb-4 pr-2 flex items-center justify-end gap-3 relative z-10"
              >
                 With all my love, 
                 <Heart className="w-10 h-10 fill-pink-500 animate-pulse" />
              </motion.div>
            </div>

            {/* Decorative Bouquets in Modal Corners */}
            <div className="absolute -top-10 -left-10 z-40 rotate-[-15deg] pointer-events-none">
                <Bouquet variant={1} size="large" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <Tape size="small" rotate={20} className="opacity-70 border-none px-2 py-1" />
                    <Pin className="absolute scale-75" />
                </div>
            </div>

            <div className="absolute -bottom-10 -right-10 z-40 rotate-[15deg] pointer-events-none">
                <Bouquet variant={2} size="large" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <Tape size="small" rotate={-20} className="opacity-70 border-none px-2 py-1" />
                    <Pin className="absolute scale-75" />
                </div>
            </div>

            {/* Decorative Stars in background */}
            <div className="absolute bottom-4 left-4 text-yellow-400 opacity-20 pointer-events-none">
               <Star className="w-12 h-12 fill-yellow-200" />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* FULL VIEW OVERLAY (LIGHTBOX) */}
      <AnimatePresence>
        {isViewerOpen && memory && (
          <motion.div 
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-900/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-12 overflow-y-auto"
            onClick={() => setIsViewerOpen(false)}
          >
             <button 
               onClick={() => setIsViewerOpen(false)}
               className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 bg-white border-2 border-slate-900 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-pink-50 transition-colors z-[210]"
             >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
             </button>

             <div 
               className="relative max-w-2xl w-full"
               onClick={(e) => e.stopPropagation()}
             >
                <motion.div 
                  key={currentIndex}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white p-4 pb-8 sm:pb-12 border-[3px] border-slate-900 shadow-2xl relative my-auto overflow-visible"
                >
                   {/* Paper Texture container to clip it */}
                   <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-sm">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30 mix-blend-multiply" />
                      <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '8px 8px' }}
                      />
                   </div>

                   {/* Responsive Bouquets tucked INSIDE the Lightbox Corners */}
                   <div className="absolute top-2 right-2 z-40 rotate-[10deg] pointer-events-none scale-75 sm:scale-90 opacity-90">
                       <Bouquet variant={3} size="small" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                           <Tape size="small" rotate={-25} className="opacity-60 border-none px-2 py-1" />
                           <Pin className="absolute scale-50" />
                       </div>
                   </div>
                   
                   <div className="absolute bottom-2 left-2 z-40 rotate-[-10deg] pointer-events-none scale-75 sm:scale-90 opacity-90">
                       <Bouquet variant={1} size="small" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                           <Tape size="small" rotate={25} className="opacity-60 border-none px-2 py-1" />
                           <Pin className="absolute scale-50" />
                       </div>
                   </div>

                   <div className="aspect-square bg-slate-100 border-2 border-slate-900 flex items-center justify-center overflow-hidden mb-6 relative z-10">
                      <img 
                        src={memory.images[currentIndex].url} 
                        alt={memory.images[currentIndex].title} 
                        className="w-full h-full object-contain" 
                      />
                   </div>
                   
                   {/* Full View Tape with Heart Pin */}
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                      <Tape size="medium" rotate={5} className="opacity-90 shadow-md" />
                      <Pin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   </div>

                   <div className="text-center font-handwritten px-4 relative z-10 pb-6">
                      <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold mb-1">
                         {memory.images[currentIndex].title}
                      </h2>
                      <div className="flex items-center justify-center gap-3 text-slate-400 text-lg font-bold mb-3">
                         <Calendar className="w-5 h-5 text-pink-400 font-bold" />
                         {memory.date}
                      </div>
                      
                      {memory.images[currentIndex].description && (
                        <div className="max-w-md mx-auto">
                          <p className="text-slate-600 text-lg leading-relaxed italic">
                             {displayDesc}
                          </p>
                          {fullDesc.length > 100 && (
                            <button 
                              onClick={() => setIsDescExpanded(!isDescExpanded)}
                              className="text-pink-500 font-bold text-sm underline underline-offset-2 decoration-wavy cursor-pointer mt-1"
                            >
                              {isDescExpanded ? "See Less" : "See More..."}
                            </button>
                          )}
                        </div>
                      )}
                   </div>

                   {/* Sticky Note Decoration inside Lightbox */}
                   <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-yellow-100 border-2 border-slate-900 p-2 sm:p-3 rotate-6 shadow-md font-handwritten text-xs sm:text-sm font-bold text-slate-600 z-20">
                      Memories Forever ❤️
                   </div>
                </motion.div>

                {/* Navigation in Lightbox */}
                {memory.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-[-20px] sm:left-[-80px] top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-white border-2 border-slate-900 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-pink-50 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none z-[100]"
                    >
                       <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-[-20px] sm:right-[-80px] top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-white border-2 border-slate-900 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-pink-50 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none z-[100]"
                    >
                       <ChevronRight className="w-10 h-10" />
                    </button>
                  </>
                )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
