import { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { Button } from '../components/UI/Button';
import { QuestionCard } from '../components/Game/QuestionCard';
import { Timer } from '../components/Game/Timer';
import { Lifelines } from '../components/Game/Lifelines';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Game = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    timeLeft, 
    lifelines, 
    useLifeline, 
    answerQuestion, 
    hiddenOptions,
    isGameOver,
    isGameWon,
    score,
    isTransitioning,
    isRevealing,
    selectedAnswer: stateSelectedAnswer
  } = useGame();
  
  const [showModal, setShowModal] = useState<{title: string, message: string} | null>(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (isGameOver) {
      const delay = isGameWon ? 1500 : 2000;
      setTimeout(() => {
        navigate('/game-over');
      }, delay);
    }
  }, [isGameOver, navigate, isGameWon]);

  const handleAnswer = (index: number) => {
    if (isTransitioning || isRevealing) return;
    answerQuestion(index);
  };

  const isCorrect = stateSelectedAnswer !== null && !isRevealing && isTransitioning 
    ? currentQuestion.correctAnswer === stateSelectedAnswer 
    : null;

  const handleLifeline = (type: 'fiftyFifty' | 'phoneFriend' | 'audience') => {
    useLifeline(type);
    
    if (type === 'phoneFriend') {
      const correctIndex = currentQuestion.correctAnswer;
      // Expert has 80% chance of being right
      const suggestion = Math.random() < 0.8 
        ? correctIndex 
        : Math.floor(Math.random() * 4);
      
      const expertText = `El experto sugiere la opción ${String.fromCharCode(65 + suggestion)}. "Estoy bastante seguro de que es esa."`;
      setShowModal({ title: "Llamada al Experto", message: expertText });
    }
    
    if (type === 'audience') {
      // Simulate audience votes
      const votes = [0, 0, 0, 0];
      const correctIndex = currentQuestion.correctAnswer;
      // Give correct answer higher probability (e.g., 60%)
      votes[correctIndex] = 60;
      // Distribute remaining 40%
      let remaining = 40;
      for (let i = 0; i < 4; i++) {
        if (i !== correctIndex) {
          const share = Math.floor(Math.random() * remaining);
          votes[i] = share;
          remaining -= share;
        }
      }
      // Add remainder to random bucket to sum 100
      votes[Math.floor(Math.random() * 4)] += remaining;
      
      const stats = votes.map((v, i) => `${String.fromCharCode(65 + i)}: ${v}%`).join('\n');
      setShowModal({ title: "Resultados del Público", message: stats });
    }
  };

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col py-6 md:py-8 max-w-6xl mx-auto w-full">
      {/* Header Info */}
      <div className="flex justify-between items-center px-6 mb-8">
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
          <span className="text-purple-200 text-sm block">Nivel</span>
          <span className="text-xl font-bold text-white">{currentQuestionIndex + 1}/15</span>
        </div>
        <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
          <span className="text-accent text-sm block text-right">Puntuación</span>
          <span className="text-2xl font-bold text-accent">{score.toLocaleString()}</span>
        </div>
      </div>

      <Timer timeLeft={timeLeft} totalTime={30} />
      
      <Lifelines 
        lifelines={lifelines} 
        onUseLifeline={handleLifeline} 
        disabled={stateSelectedAnswer !== null}
      />

      <div className="flex-1 flex flex-col justify-center">
        <QuestionCard 
          question={currentQuestion}
          onAnswer={handleAnswer}
          hiddenOptions={hiddenOptions}
          selectedAnswer={stateSelectedAnswer}
          isCorrect={isCorrect}
          isRevealing={isRevealing}
        />
      </div>

      {/* Lifeline Modals */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-slate-900 border border-white/10 text-white p-8 rounded-3xl max-w-md w-full shadow-2xl relative overflow-hidden" 
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">{showModal.title}</h3>
              <p className="text-lg whitespace-pre-line mb-8 text-gray-300 leading-relaxed">{showModal.message}</p>
              <Button onClick={() => setShowModal(null)} className="w-full" variant="secondary">Entendido</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
