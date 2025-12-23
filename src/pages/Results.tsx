import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { Button } from '../components/UI/Button';
import { motion } from 'framer-motion';
import { Trophy, Home as HomeIcon, RefreshCw, AlertCircle, Volume2, VolumeX, AlertTriangle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSoundManager } from '../hooks/useSoundManager';

export const Results = () => {
  const { redFlags, totalTimeTaken, startGame, wrongAnswers, score } = useGame();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const { playSound, isMuted, toggleMute } = useSoundManager();

  // Calculate diagnosis
  const getDiagnosis = () => {
    if (redFlags === 0) return { title: "Experto en Narcisismo", status: "Inmune", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", icon: Trophy };
    if (redFlags <= 3) return { title: "Conocedor", status: "Alerta", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", icon: CheckCircle };
    if (redFlags <= 7) return { title: "Vulnerable", status: "Precaución", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", icon: AlertTriangle };
    return { title: "En Riesgo", status: "Necesitas aprender más", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", icon: AlertCircle };
  };

  const diagnosis = getDiagnosis();

  useEffect(() => {
    if (redFlags === 0) {
      playSound('win');
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: ReturnType<typeof setInterval> = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [redFlags, playSound]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const scores = JSON.parse(localStorage.getItem('trivia_scores') || '[]');
    scores.push({
      name,
      score: score,
      date: new Date().toISOString()
    });
    localStorage.setItem('trivia_scores', JSON.stringify(scores));

    setSaved(true);
    setTimeout(() => navigate('/ranking'), 1500);
  };

  const handlePlayAgain = () => {
    playSound('click');
    startGame();
    navigate('/game');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-lg w-full text-center shadow-2xl backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

        <button
          onClick={toggleMute}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all z-20"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        <div className="mb-8 flex justify-center">
            <div className={`p-6 rounded-full ${diagnosis.bg}`}>
              <diagnosis.icon size={60} className={diagnosis.color} />
            </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
          EVALUACIÓN COMPLETADA
        </h1>

        <div className={`mb-8 p-6 rounded-2xl border ${diagnosis.bg} ${diagnosis.border}`}>
            <h2 className={`text-2xl font-bold mb-1 ${diagnosis.color}`}>{diagnosis.title}</h2>
            <p className="text-white/80 uppercase tracking-widest text-sm">{diagnosis.status}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <span className="text-gray-400 text-xs uppercase block mb-1">Banderas Rojas (Fallos)</span>
                <span className="text-3xl font-bold text-red-400">{redFlags} / 15</span>
            </div>
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <span className="text-gray-400 text-xs uppercase block mb-1">Tiempo Total</span>
                <span className="text-3xl font-bold text-blue-400">{Math.floor(totalTimeTaken)}s</span>
            </div>
        </div>

        <div className="bg-black/30 p-6 rounded-2xl mb-10 border border-white/5">
          <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-semibold">Puntuación de Salud</div>
          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            {score.toLocaleString()}
          </div>
        </div>

        {/* Recommendations Section */}
        {wrongAnswers && wrongAnswers.length > 0 && (
          <div className="mb-10">
            <button
              onClick={() => setShowRecommendations(!showRecommendations)}
              className="w-full flex items-center justify-between bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-300 hover:bg-red-500/20 transition-all"
            >
              <span className="font-semibold">🚩 Ver recomendaciones ({wrongAnswers.length} errores)</span>
              {showRecommendations ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {showRecommendations && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 space-y-4 max-h-80 overflow-y-auto"
              >
                {wrongAnswers.map((wa, index) => (
                  <div key={index} className="bg-black/30 border border-white/10 rounded-xl p-4 text-left">
                    <p className="text-white/90 font-medium mb-2 text-sm">{wa.questionText}</p>
                    <div className="flex flex-col gap-1 text-xs mb-2">
                      <span className="text-red-400">❌ Tu respuesta: {wa.userAnswer}</span>
                      <span className="text-green-400">✓ Respuesta correcta: {wa.correctAnswer}</span>
                    </div>
                    {wa.explanation && (
                      <p className="text-purple-200/80 text-xs italic border-t border-white/10 pt-2 mt-2">
                        💡 {wa.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        )}

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
            <RefreshCw className="mr-2" size={18} /> Repetir Evaluación
          </Button>
          <Button onClick={() => { playSound('click'); navigate('/'); }} variant="secondary" className="flex-1">
            <HomeIcon className="mr-2" size={18} /> Inicio
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
