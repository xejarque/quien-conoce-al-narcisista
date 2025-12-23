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

export interface WrongAnswer {
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export interface GameState {
  questions: Question[];
  currentQuestionIndex: number;
  redFlags: number;
  score: number;
  totalTimeTaken: number;
  isGameOver: boolean;
  isGameWon: boolean;
  isTransitioning: boolean;
  isRevealing: boolean;
  selectedAnswer: number | null;
  wrongAnswers: WrongAnswer[];
  lastAnswer?: {
    userAnswer: number;
    correctAnswer: number;
    explanation: string;
    questionText: string;
  };
  timeLeft: number;
}

// export type LifelineType = 'fiftyFifty' | 'phoneFriend' | 'audience';
