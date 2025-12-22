import { createContext } from 'react';
import { GameState, LifelineType } from '../types';

export interface GameContextType extends GameState {
  startGame: () => void;
  answerQuestion: (answerIndex: number) => void;
  applyLifeline: (type: LifelineType) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
