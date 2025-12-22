export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  difficulty: number; // 1-15
  explanation?: string;
}

export interface Player {
  name: string;
  score: number;
  date: string;
}

export interface GameState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  isGameOver: boolean;
  isGameWon: boolean;
  isTransitioning: boolean;
  isRevealing: boolean;
  selectedAnswer: number | null;
  lastAnswer?: {
    userAnswer: number;
    correctAnswer: number;
    explanation: string;
    questionText: string;
  };
  lifelines: {
    fiftyFifty: boolean;
    phoneFriend: boolean;
    audience: boolean;
  };
  timeLeft: number;
}

export type LifelineType = 'fiftyFifty' | 'phoneFriend' | 'audience';
