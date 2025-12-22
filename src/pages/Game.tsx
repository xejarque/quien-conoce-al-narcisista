import { useState, useEffect } from 'react';
import { useGame } from '../hooks/useGame';
import { Button } from '../components/UI/Button';
import { QuestionCard } from '../components/Game/QuestionCard';
import { Timer } from '../components/Game/Timer';
import { Lifelines } from '../components/Game/Lifelines';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSoundManager } from '../hooks/useSoundManager';
import { Volume2, VolumeX } from 'lucide-react';
import { clsx } from 'clsx';

export const Game = () => {
  const { 
      currentQuestionIndex, 
      score, 
      isGameOver, 
       isGameWon,
       timeLeft, 
      lifelines, 
      applyLifeline, 
      answerQuestion, 
      hiddenOptions,
      questions,
      isTransitioning,
      isRevealing,
      selectedAnswer: stateSelectedAnswer
    } = useGame();
    
    const [showModal, setShowModal] = useState<{title: string, message: string} | null>(null);
    const navigate = useNavigate();
    const { playSound, stopSound, isMuted, toggleMute } = useSoundManager();

  const currentQuestion = questions[currentQuestionIndex];

  // Start suspense music
  useEffect(() => {
    playSound('suspense');
    return () => stopSound('suspense');
  }, [playSound, stopSound]);

  useEffect(() => {
    if (isGameOver) {
      const delay = isGameWon ? 1500 : 2000;
      setTimeout(() => {
        navigate('/game-over');
      }, delay);
    }
  }, [isGameOver, navigate, isGameWon]);

  // Effect for correct/wrong sounds
  useEffect(() => {
    if (stateSelectedAnswer !== null && isRevealing) {
      playSound('click');
    }
    
    if (isTransitioning) {
      const isCorrect = currentQuestion.correctAnswer === stateSelectedAnswer;
      if (isCorrect) {
        playSound('correct');
      } else {
        playSound('wrong');
      }
    }
  }, [stateSelectedAnswer, isRevealing, isTransitioning, currentQuestion, playSound]);

  const handleAnswer = (index: number) => {
    if (isTransitioning || isRevealing) return;
    answerQuestion(index);
  };

  const handleLifeline = (type: 'fiftyFifty' | 'phoneFriend' | 'audience') => {
    playSound('lifeline');
    applyLifeline(type);
    
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

  // Effect for timer ticking
  useEffect(() => {
    if (timeLeft <= 5 && timeLeft > 0 && !isGameOver && !isTransitioning && !isRevealing) {
      playSound('ticking');
    }
  }, [timeLeft, isGameOver, isTransitioning, isRevealing, playSound]);

  if (!currentQuestion) return <div>Loading...</div>;

  const isCorrect = stateSelectedAnswer !== null && !isRevealing && isTransitioning 
    ? currentQuestion.correctAnswer === stateSelectedAnswer 
    : null;

  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* Header Info - Sticky on mobile and desktop */}
      <div className="sticky top-0 z-40 bg-slate-900/60 backdrop-blur-xl border-b border-white/5 py-4 mb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <span className="text-purple-200/70 text-xs block uppercase tracking-wider">Nivel</span>
                <span className="text-xl font-bold text-white">{currentQuestionIndex + 1}/15</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleMute}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2 hover:bg-white/10 transition-all"
              >
                {isMuted ? <VolumeX className="text-red-400 w-5 h-5" /> : <Volume2 className="text-accent w-5 h-5" />}
              </Button>
            </div>
            <div className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(251,191,36,0.05)]">
              <span className="text-accent/70 text-xs block text-right uppercase tracking-wider">Puntuación</span>
              <span className="text-2xl font-bold text-accent">{score.toLocaleString()}</span>
            </div>
          </div>

          <Timer timeLeft={timeLeft} totalTime={30} />
          
          {/* Question Progress Dots */}
          <div className="flex justify-between gap-1.5 mt-6 max-w-4xl mx-auto px-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div 
                key={i}
                className={clsx(
                  "h-2 flex-1 rounded-full transition-all duration-500",
                  i < currentQuestionIndex ? "bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_10px_rgba(236,72,153,0.3)]" :
                  i === currentQuestionIndex ? "bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-y-125" : "bg-white/10"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full px-6 flex-1 flex flex-col">
        <div className="py-2">
          <Lifelines 
            lifelines={lifelines} 
            onUseLifeline={handleLifeline} 
            disabled={stateSelectedAnswer !== null}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center py-8">
          <QuestionCard 
            key={currentQuestionIndex}
            question={currentQuestion}
            onAnswer={handleAnswer}
            hiddenOptions={hiddenOptions}
            selectedAnswer={stateSelectedAnswer}
            isCorrect={isCorrect}
            isRevealing={isRevealing}
          />
        </div>
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
