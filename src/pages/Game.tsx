import { useEffect } from 'react';
import { useGame } from '../hooks/useGame';
import { Button } from '../components/UI/Button';
import { QuestionCard } from '../components/Game/QuestionCard';
import { Timer } from '../components/Game/Timer';
import { useNavigate } from 'react-router-dom';
import { useSoundManager } from '../hooks/useSoundManager';
import { Volume2, VolumeX } from 'lucide-react';
import { clsx } from 'clsx';

export const Game = () => {
  const {
    currentQuestionIndex,
    isGameOver,
    isGameWon,
    timeLeft,
    answerQuestion,
    questions,
    isTransitioning,
    isRevealing,
    selectedAnswer: stateSelectedAnswer,
  } = useGame();

  const navigate = useNavigate();
  const { playSound, isMuted, toggleMute, stopAll } = useSoundManager();

  const currentQuestion = questions[currentQuestionIndex];

  // Manage music states based on game phase
  // useEffect(() => {
  //   if (isRevealing) {
  //     playSound('tension');
  //   } else if (isTransitioning) {
  //     stopSound('tension');
  //     playSound('suspense'); // Mantener música de fondo durante la lectura
  //   } else if (!isGameOver) {
  //     playSound('suspense');
  //   }
  // }, [isRevealing, isTransitioning, isGameOver, playSound, stopSound]);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopAll();
  }, [stopAll]);

  useEffect(() => {
    if (isGameOver) {
      const delay = 1500; // Always delay a bit
      setTimeout(() => {
        navigate('/game-over');
      }, delay);
    }
  }, [isGameOver, navigate, isGameWon]);

  // Effect for sounds - simplified for assessment mode (no correct/wrong sounds)
  useEffect(() => {
    if (stateSelectedAnswer !== null && isRevealing) {
      playSound('click');
    }
  }, [stateSelectedAnswer, isRevealing, playSound]);

  const handleAnswer = (index: number) => {
    if (isTransitioning || isRevealing) return;
    answerQuestion(index);
  };

  // Effect for timer ticking
  useEffect(() => {
    if (timeLeft <= 5 && timeLeft > 0 && !isGameOver && !isTransitioning && !isRevealing) {
      playSound('ticking');
    }
  }, [timeLeft, isGameOver, isTransitioning, isRevealing, playSound]);

  if (!currentQuestion) return <div>Loading...</div>;

  // In assessment mode, we hide whether the answer was correct or not until the end
  const isCorrect = null;

  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* Header Info - Sticky on mobile and desktop */}
      <div className="sticky top-0 z-40 bg-slate-900/60 backdrop-blur-xl border-b border-white/5 py-4 mb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <span className="text-purple-200/70 text-xs block uppercase tracking-wider">Pregunta</span>
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
              <span className="text-accent/70 text-xs block text-right uppercase tracking-wider">Evaluación</span>
              <span className="text-lg font-bold text-accent">En curso...</span>
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
        <div className="flex-1 flex flex-col justify-center py-8">
          <QuestionCard
            key={currentQuestionIndex}
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={stateSelectedAnswer}
            isCorrect={isCorrect}
            isRevealing={isRevealing}
          />
        </div>
      </div>
    </div>
  );
};
