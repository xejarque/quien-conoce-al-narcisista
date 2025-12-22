import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex justify-between items-end text-white font-medium mb-2">
        <span className="text-sm uppercase tracking-widest text-pink-300">Tiempo Restante</span>
        <span className={clsx(
          "text-2xl font-bold font-mono",
          timeLeft <= 10 ? "text-red-400 animate-pulse" : "text-white"
        )}>
          {timeLeft}s
        </span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "linear" }}
          className={clsx(
            "h-full shadow-lg transition-colors",
            timeLeft > 20 ? "bg-gradient-to-r from-green-400 to-emerald-500" :
            timeLeft > 10 ? "bg-gradient-to-r from-yellow-400 to-amber-500" : "bg-gradient-to-r from-red-500 to-rose-600"
          )}
        />
      </div>
    </div>
  );
};
