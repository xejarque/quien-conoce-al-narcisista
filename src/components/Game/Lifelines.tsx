import React from 'react';
import { Phone, Users, Percent } from 'lucide-react';
import { LifelineType } from '../../types';
import { clsx } from 'clsx';

interface LifelinesProps {
  lifelines: {
    fiftyFifty: boolean;
    phoneFriend: boolean;
    audience: boolean;
  };
  onUseLifeline: (type: LifelineType) => void;
  disabled: boolean;
}

export const Lifelines: React.FC<LifelinesProps> = ({ lifelines, onUseLifeline, disabled }) => {
  const renderLifeline = (type: LifelineType, icon: React.ReactNode, active: boolean) => (
    <button
      onClick={() => onUseLifeline(type)}
      disabled={!active || disabled}
      className={clsx(
        "flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 transition-all duration-300",
        active 
          ? "bg-white/10 border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:scale-110 shadow-[0_0_15px_rgba(244,114,182,0.3)] backdrop-blur-sm" 
          : "bg-black/20 border-white/5 text-gray-600 cursor-not-allowed"
      )}
      title={active ? `Usar comodín` : `Comodín agotado`}
    >
      {icon}
    </button>
  );

  return (
    <div className="flex justify-center gap-4 md:gap-8 mb-8">
      {renderLifeline('fiftyFifty', <Percent size={28} />, lifelines.fiftyFifty)}
      {renderLifeline('phoneFriend', <Phone size={28} />, lifelines.phoneFriend)}
      {renderLifeline('audience', <Users size={28} />, lifelines.audience)}
    </div>
  );
};
