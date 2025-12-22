import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { ArrowLeft, Trophy, Crown } from 'lucide-react';
import { Player } from '../types';

export const Ranking = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState<Player[]>([]);

  useEffect(() => {
    // Load from local storage for MVP
    const savedScores = JSON.parse(localStorage.getItem('trivia_scores') || '[]');
    // Sort by score desc
    const sorted = savedScores.sort((a: Player, b: Player) => b.score - a.score).slice(0, 10);
    setScores(sorted);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2" /> Volver al Inicio
        </Button>

        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block p-4 bg-accent/10 rounded-full mb-4 border border-accent/20"
          >
            <Crown size={48} className="text-accent" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Salón de la Fama
          </h1>
          <p className="text-purple-200 text-lg">Los expertos que descifraron el código</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/20 text-purple-200">
                  <th className="p-6 font-semibold uppercase tracking-wider text-sm">Posición</th>
                  <th className="p-6 font-semibold uppercase tracking-wider text-sm">Jugador</th>
                  <th className="p-6 font-semibold uppercase tracking-wider text-sm">Puntuación</th>
                  <th className="p-6 font-semibold uppercase tracking-wider text-sm hidden md:table-cell">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {scores.length > 0 ? (
                  scores.map((player, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center">
                          {index === 0 && <span className="text-2xl mr-2">🥇</span>}
                          {index === 1 && <span className="text-2xl mr-2">🥈</span>}
                          {index === 2 && <span className="text-2xl mr-2">🥉</span>}
                          <span className={index < 3 ? "font-bold text-white" : "text-gray-400 font-mono"}>
                            #{index + 1}
                          </span>
                        </div>
                      </td>
                      <td className="p-6 font-bold text-white group-hover:text-pink-300 transition-colors">{player.name}</td>
                      <td className="p-6">
                        <span className="font-bold text-accent bg-accent/10 px-3 py-1 rounded-lg border border-accent/20">
                          {player.score.toLocaleString()}
                        </span>
                      </td>
                      <td className="p-6 text-gray-400 text-sm hidden md:table-cell">
                        {new Date(player.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-16 text-center text-gray-500">
                      <Trophy size={48} className="mx-auto mb-4 opacity-20" />
                      <p>Aún no hay puntuaciones registradas.</p>
                      <p className="text-sm mt-2">¡Sé el primero en hacer historia!</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

import { motion } from 'framer-motion';
