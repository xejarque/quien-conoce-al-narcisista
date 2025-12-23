import React, { useReducer, useEffect, ReactNode } from 'react';
import { GameState } from '../types';
import { questions as allQuestions } from '../data/questions';
import { GameContext } from './GameContextObject';

type Action =
  | { type: 'START_GAME' }
  | { type: 'ANSWER_QUESTION'; payload: { correct: boolean; timeTaken: number; answerIndex: number } }
  | { type: 'TICK_TIMER' }
  | { type: 'SET_TRANSITION'; payload: boolean }
  | { type: 'SET_REVEALING'; payload: boolean }
  | { type: 'SELECT_ANSWER'; payload: number | null }
  | { type: 'NEXT_QUESTION' };

const TIME_PER_QUESTION = 30;

const initialState: GameState = {
  currentQuestionIndex: 0,
  redFlags: 0,
  score: 0,
  totalTimeTaken: 0,
  isGameOver: false,
  isGameWon: false,
  isTransitioning: false,
  isRevealing: false,
  selectedAnswer: null,
  wrongAnswers: [],
  timeLeft: TIME_PER_QUESTION,
  questions: [],
};

const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case 'START_GAME': {
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, 15).sort((a, b) => a.difficulty - b.difficulty)
        .map(q => {
          // Shuffle options and update correctAnswer index
          const optionsWithMetadata = q.options.map((opt, idx) => ({
            text: opt,
            isCorrect: idx === q.correctAnswer
          }));

          const shuffledOptions = [...optionsWithMetadata].sort(() => 0.5 - Math.random());

          return {
            ...q,
            options: shuffledOptions.map(o => o.text),
            correctAnswer: shuffledOptions.findIndex(o => o.isCorrect)
          };
        });
      return {
        ...initialState,
        questions: selectedQuestions,
        timeLeft: TIME_PER_QUESTION,
      };
    }
    case 'ANSWER_QUESTION': {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const isCorrect = action.payload.correct;
      const redFlagIncrement = isCorrect ? 0 : 1;

      // Calculate score: only add points for correct answers
      // Points based on speed: faster = more points
      // Base: 500 points + up to 500 bonus based on time left (max 1000 per question)
      const timeLeft = TIME_PER_QUESTION - action.payload.timeTaken;
      const pointsEarned = isCorrect
        ? 500 + Math.floor((timeLeft / TIME_PER_QUESTION) * 500)
        : 0;

      // Track wrong answers for recommendations
      const newWrongAnswers = isCorrect ? state.wrongAnswers : [
        ...state.wrongAnswers,
        {
          questionText: currentQuestion.text,
          userAnswer: action.payload.answerIndex >= 0 ? currentQuestion.options[action.payload.answerIndex] : 'Sin respuesta (tiempo agotado)',
          correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
          explanation: currentQuestion.explanation || '',
        }
      ];

      return {
        ...state,
        redFlags: state.redFlags + redFlagIncrement,
        score: state.score + pointsEarned,
        totalTimeTaken: state.totalTimeTaken + action.payload.timeTaken,
        wrongAnswers: newWrongAnswers,
        lastAnswer: {
          userAnswer: action.payload.answerIndex,
          correctAnswer: currentQuestion.correctAnswer,
          explanation: currentQuestion.explanation || '',
          questionText: currentQuestion.text,
        },
      };
    }
    case 'NEXT_QUESTION': {
      const nextIndex = state.currentQuestionIndex + 1;
      const isFinished = nextIndex >= state.questions.length;
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        isGameOver: isFinished,
        isGameWon: isFinished, // Used to determine if we reached the end successfully
        timeLeft: TIME_PER_QUESTION,
        isTransitioning: false,
        isRevealing: false,
        selectedAnswer: null,
      };
    }
    case 'SELECT_ANSWER':
      return {
        ...state,
        selectedAnswer: action.payload,
      };
    case 'SET_TRANSITION':
      return {
        ...state,
        isTransitioning: action.payload,
      };
    case 'SET_REVEALING':
      return {
        ...state,
        isRevealing: action.payload,
      };
    case 'TICK_TIMER':
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    default:
      return state;
  }
};

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (!state.isGameOver && !state.isRevealing && !state.isTransitioning && state.questions.length > 0 && state.timeLeft > 0) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK_TIMER' });
      }, 1000);
    }
    // Time up handled by separate effect calling answerQuestion(-1)
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [state.timeLeft, state.isGameOver, state.isRevealing, state.isTransitioning, state.questions.length]);

  // Handle TIME_UP transition
  useEffect(() => {
    if (state.timeLeft === 0 && !state.isGameOver && !state.isTransitioning && !state.isRevealing) {
       answerQuestion(-1);
    }
  }, [state.timeLeft, state.isGameOver, state.isTransitioning, state.isRevealing]);

  const startGame = () => {
    dispatch({ type: 'START_GAME' });
  };

  const answerQuestion = (answerIndex: number) => {
    if (state.isTransitioning || state.isRevealing) return;

    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    const timeTaken = TIME_PER_QUESTION - state.timeLeft;

    dispatch({ type: 'SELECT_ANSWER', payload: answerIndex });

    // Dispatch immediately without delays
    dispatch({ type: 'ANSWER_QUESTION', payload: { correct: isCorrect, timeTaken, answerIndex } });
    dispatch({ type: 'NEXT_QUESTION' });
  };

  // We need a way to handle Time Up via answerQuestion mechanism to reuse logic
  // useEffect(() => {
  //     if (state.timeLeft === 0 && !state.isRevealing && !state.isTransitioning && !state.isGameOver) {
  //         answerQuestion(-1);
  //     }
  // }, [state.timeLeft]);

  return (
    <GameContext.Provider
      value={{
        ...state,
        startGame,
        answerQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
