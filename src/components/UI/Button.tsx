import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-900 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-0.5 border border-white/10',
    secondary: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 shadow-lg',
    accent: 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary/10',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-xl tracking-wide',
  };

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
