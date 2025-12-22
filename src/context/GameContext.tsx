import React, { useReducer, useEffect, ReactNode } from 'react';
import { GameState, LifelineType } from '../types';
import { questions as allQuestions } from '../data/questions';
import { calculateScore } from '../utils/formatTime';
import { GameContext } from './GameContextObject';

type Action =
  | { type: 'START_GAME' }
  | { type: 'ANSWER_QUESTION'; payload: { correct: boolean; score: number; answerIndex: number } }
  | { type: 'USE_LIFELINE'; payload: LifelineType }
  | { type: 'TICK_TIMER' }
  | { type: 'TIME_UP' }
  | { type: 'SET_HIDDEN_OPTIONS'; payload: number[] }
  | { type: 'SET_TRANSITION'; payload: boolean }
  | { type: 'SET_REVEALING'; payload: boolean }
  | { type: 'SELECT_ANSWER'; payload: number | null }
  | { type: 'NEXT_QUESTION' };

const TIME_PER_QUESTION = 30;

const initialState: GameState = {
  currentQuestionIndex: 0,
  score: 0,
  isGameOver: false,
  isGameWon: false,
  isTransitioning: false,
  isRevealing: false,
  selectedAnswer: null,
  lifelines: {
    fiftyFifty: true,
    phoneFriend: true,
    audience: true,
  },
  timeLeft: TIME_PER_QUESTION,
  questions: [],
  hiddenOptions: [],
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
        hiddenOptions: [],
      };
    }
    case 'ANSWER_QUESTION': {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (action.payload.correct) {
        return {
          ...state,
          score: state.score + action.payload.score,
          lastAnswer: undefined,
        };
      } else {
        return {
          ...state,
          isGameOver: true,
          isGameWon: false,
          isTransitioning: false,
          lastAnswer: {
            userAnswer: action.payload.answerIndex,
            correctAnswer: currentQuestion.correctAnswer,
            explanation: currentQuestion.explanation || '',
            questionText: currentQuestion.text,
          },
        };
      }
    }
    case 'NEXT_QUESTION': {
      const nextIndex = state.currentQuestionIndex + 1;
      const isWon = nextIndex >= state.questions.length;
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        isGameOver: isWon,
        isGameWon: isWon,
        timeLeft: TIME_PER_QUESTION,
        isTransitioning: false,
        isRevealing: false,
        selectedAnswer: null,
        hiddenOptions: [],
      };
    }
    case 'SELECT_ANSWER':
      return {
        ...state,
        selectedAnswer: action.payload,
      };
    case 'SET_HIDDEN_OPTIONS':
      return {
        ...state,
        hiddenOptions: action.payload,
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
    case 'USE_LIFELINE':
      return {
        ...state,
        lifelines: {
          ...state.lifelines,
          [action.payload]: false,
        },
      };
    case 'TICK_TIMER':
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    case 'TIME_UP': {
      const timeoutQuestion = state.questions[state.currentQuestionIndex];
      return {
        ...state,
        isGameOver: true,
        isGameWon: false,
        lastAnswer: {
          userAnswer: -1, // No answer provided
          correctAnswer: timeoutQuestion.correctAnswer,
          explanation: timeoutQuestion.explanation || 'Se acabó el tiempo antes de que pudieras responder.',
          questionText: timeoutQuestion.text,
        },
      };
    }
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
    } else if (state.timeLeft === 0 && !state.isGameOver && !state.isRevealing && !state.isTransitioning) {
      dispatch({ type: 'TIME_UP' });
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [state.timeLeft, state.isGameOver, state.isRevealing, state.isTransitioning, state.questions.length]);

  const startGame = () => {
    dispatch({ type: 'START_GAME' });
  };

  const answerQuestion = (answerIndex: number) => {
    if (state.isTransitioning || state.isRevealing) return;

    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    const scoreEarned = isCorrect ? calculateScore(state.currentQuestionIndex + 1, state.timeLeft) : 0;
    
    dispatch({ type: 'SELECT_ANSWER', payload: answerIndex });
    dispatch({ type: 'SET_REVEALING', payload: true });

    // Fase de suspense (2 segundos)
    setTimeout(() => {
      dispatch({ type: 'SET_REVEALING', payload: false });
      dispatch({ type: 'SET_TRANSITION', payload: true });

      if (isCorrect) {
        // Mostrar que es correcta por 1.5 segundos
        setTimeout(() => {
          dispatch({ type: 'ANSWER_QUESTION', payload: { correct: isCorrect, score: scoreEarned, answerIndex } });
          dispatch({ type: 'NEXT_QUESTION' });
        }, 1500);
      } else {
        // Mostrar que es incorrecta por 1.5 segundos antes de game over
        setTimeout(() => {
          dispatch({ type: 'ANSWER_QUESTION', payload: { correct: isCorrect, score: scoreEarned, answerIndex } });
        }, 1500);
      }
    }, 2000); // 2 segundos de suspense
  };

  const applyLifeline = (type: LifelineType) => {
    if (!state.lifelines[type]) return;

    if (type === 'fiftyFifty') {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const correct = currentQuestion.correctAnswer;
      const incorrectOptions = currentQuestion.options
        .map((_, idx) => idx)
        .filter(idx => idx !== correct);
      
      const shuffled = [...incorrectOptions].sort(() => 0.5 - Math.random());
      const toHide = shuffled.slice(0, 2);
      
      dispatch({ type: 'SET_HIDDEN_OPTIONS', payload: toHide });
    }
    
    dispatch({ type: 'USE_LIFELINE', payload: type });
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        startGame,
        answerQuestion,
        applyLifeline,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
