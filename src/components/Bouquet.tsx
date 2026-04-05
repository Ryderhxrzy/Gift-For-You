"use client";

import React from 'react';
import { Flower2, Leaf, Heart } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BouquetProps {
  className?: string;
  variant?: 1 | 2 | 3;
  size?: "small" | "large";
}

export const Bouquet = ({ className, variant = 1, size = "small" }: BouquetProps) => {
  const colors = {
    1: { f1: "text-pink-400 fill-pink-100", f2: "text-pink-500 fill-pink-100", f3: "text-pink-300 fill-pink-50" },
    2: { f1: "text-purple-400 fill-purple-100", f2: "text-purple-500 fill-purple-100", f3: "text-purple-300 fill-purple-50" },
    3: { f1: "text-rose-400 fill-rose-100", f2: "text-rose-500 fill-rose-100", f3: "text-rose-300 fill-rose-50" },
  };

  const selected = colors[variant] || colors[1];
  const flowerSize = size === "small" ? "w-8 h-8" : "w-12 h-12";
  const leafSize = size === "small" ? "w-6 h-6" : "w-8 h-8";

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
       <div className="flex -space-x-2">
          <Flower2 className={cn(flowerSize, selected.f1, "transform -rotate-12")} />
          <Flower2 className={cn(flowerSize, selected.f2, "transform rotate-6 -mt-2")} />
          <Flower2 className={cn(flowerSize, selected.f3, "transform -rotate-6")} />
       </div>
       <div className="flex -mt-4 -space-x-1">
          <Leaf className={cn(leafSize, "text-green-400/60 transform rotate-45")} />
          <Leaf className={cn(leafSize, "text-green-500/60 transform -rotate-45")} />
          {variant === 2 && <Heart className="w-3 h-3 text-pink-300 fill-pink-300 absolute bottom-0 right-0 animate-pulse" />}
       </div>
    </div>
  );
};
