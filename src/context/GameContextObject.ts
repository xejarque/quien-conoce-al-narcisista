import { createContext } from 'react';
import { GameState } from '../types';

export interface GameContextType extends GameState {
  startGame: () => void;
  answerQuestion: (answerIndex: number) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
