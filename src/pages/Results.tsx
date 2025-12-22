import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { Button } from '../components/UI/Button';
import { motion } from 'framer-motion';
import { Trophy, Home as HomeIcon, RefreshCw, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Results = () => {
  const { score, isGameWon, startGame, currentQuestionIndex, lastAnswer } = useGame();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const { questions } = useGame(); // Need questions to find options text

  useEffect(() => {
    if (isGameWon) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isGameWon]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    const scores = JSON.parse(localStorage.getItem('trivia_scores') || '[]');
    scores.push({
      name,
      score,
      date: new Date().toISOString()
    });
    localStorage.setItem('trivia_scores', JSON.stringify(scores));
    
    setSaved(true);
    setTimeout(() => navigate('/ranking'), 1500);
  };

  const handlePlayAgain = () => {
    startGame();
    navigate('/game');
  };

  // Find the actual question object to get option text
  // Since we shuffle, we need to find it by text or trust currentQuestionIndex if it wasn't reset yet.
  // Actually, game over state preserves questions and index usually.
  // Let's use `lastAnswer` to get indices.
  // Wait, `lastAnswer` has indices. But we need the TEXT of the options.
  // We can find the question in `questions` array.
  // If questions are shuffled in context, `questions` from useGame should be the shuffled list used in game.
  
  const relevantQuestion = lastAnswer 
    ? questions.find(q => q.text === lastAnswer.questionText)
    : undefined;

  const wrongOptionText = relevantQuestion && lastAnswer 
    ? (lastAnswer.userAnswer === -1 ? 'Sin respuesta (Tiempo agotado)' : relevantQuestion.options[lastAnswer.userAnswer]) 
    : 'Opción desconocida';

  const correctOptionText = relevantQuestion && lastAnswer 
    ? relevantQuestion.options[lastAnswer.correctAnswer] 
    : 'Opción desconocida';

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-lg w-full text-center shadow-2xl backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

        <div className="mb-8 flex justify-center">
          {isGameWon ? (
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-2xl opacity-40 animate-pulse"></div>
              <Trophy size={100} className="text-accent relative z-10" />
            </div>
          ) : (
            <div className="bg-red-500/10 p-6 rounded-full">
              <AlertCircle size={60} className="text-red-400" />
            </div>
          )}
        </div>

        {isGameWon && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-500/10 rounded-2xl border border-green-500/20"
          >
            <h3 className="text-green-400 font-bold text-lg mb-1">¡Victoria Absoluta!</h3>
            <p className="text-green-200/80 text-sm">Has demostrado un conocimiento profundo sobre el narcisismo.</p>
          </motion.div>
        )}

        <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
          {isGameWon ? '¡ENHORABUENA!' : 'FIN DEL JUEGO'}
        </h1>
        
        <p className="text-purple-200 mb-6 text-lg">
          {isGameWon 
            ? 'Has desenmascarado al narcisista con éxito.' 
            : `Llegaste hasta el nivel ${currentQuestionIndex + 1}.`}
        </p>

        {!isGameWon && lastAnswer && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-red-900/20 border border-red-500/20 p-6 rounded-xl text-left"
          >
            <h3 className="text-red-300 font-bold mb-2 flex items-center">
              <AlertCircle size={18} className="mr-2" /> Respuesta Incorrecta
            </h3>
            <p className="text-white/80 text-sm mb-4 italic">"{lastAnswer.questionText}"</p>
            
            <div className="mb-3">
              <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Tú respondiste:</span>
              <span className="text-red-400 font-medium block">
                  {wrongOptionText}
               </span>
             </div>
             
             <div className="mb-4">
               <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Respuesta Correcta:</span>
               <span className="text-green-400 font-bold block">
                  {correctOptionText}
               </span>
             </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <span className="text-accent text-xs font-bold uppercase block mb-1">Por qué:</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                {lastAnswer.explanation}
              </p>
            </div>
          </motion.div>
        )}

        <div className="bg-black/30 p-8 rounded-2xl mb-10 border border-white/5">
          <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-semibold">Puntuación Final</div>
          <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            {score.toLocaleString()}
          </div>
        </div>

        {!saved ? (
          <form onSubmit={handleSave} className="mb-10">
            <label className="block text-left text-sm font-medium text-gray-300 mb-2 pl-1">
              Inmortaliza tu logro
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="flex-1 px-6 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all w-full"
                maxLength={20}
                required
              />
              <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
                Guardar
              </Button>
            </div>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-green-400 font-bold bg-green-500/10 py-3 px-6 rounded-xl border border-green-500/20"
          >
            ¡Puntuación guardada correctamente!
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-4">
          <Button onClick={handlePlayAgain} variant="primary" className="flex-1">
            <RefreshCw className="mr-2" size={18} /> Intentar de nuevo
          </Button>
          <Button onClick={() => navigate('/')} variant="secondary" className="flex-1">
            <HomeIcon className="mr-2" size={18} /> Inicio
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
