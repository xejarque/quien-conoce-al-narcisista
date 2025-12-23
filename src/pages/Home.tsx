import { useNavigate } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { Button } from '../components/UI/Button';
import { motion } from 'framer-motion';
import { Play, Trophy, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { useSoundManager } from '../hooks/useSoundManager';

export const Home = () => {
  const navigate = useNavigate();
  const { startGame } = useGame();
  const { playSound, isMuted, toggleMute } = useSoundManager();

  // useEffect(() => {
  //   // Start background music
  //   playSound('bgMusic');

  //   // Also retry when audio is unlocked
  //   const handleUnlock = () => {
  //     playSound('bgMusic');
  //   };
  //   window.addEventListener('audio_unlocked', handleUnlock);

  //   return () => {
  //     window.removeEventListener('audio_unlocked', handleUnlock);
  //     stopSound('bgMusic');
  //   };
  // }, [playSound, stopSound]);

  const handleStart = () => {
    playSound('click');
    startGame();
    navigate('/game');
  };

  const handleRanking = () => {
    playSound('click');
    navigate('/ranking');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center overflow-hidden relative">
      {/* Test Sound Button (Debug) */}
      <button 
        onClick={() => playSound('click')}
        className="fixed top-4 right-4 text-[10px] opacity-20 hover:opacity-100 bg-white/10 px-2 py-1 rounded"
      >
        Test Sound
      </button>

      {/* Mute Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <Button 
          variant="ghost" 
          size="md" 
          onClick={toggleMute}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-12 h-12 p-0 flex items-center justify-center hover:bg-white/10 transition-all"
        >
          {isMuted ? <VolumeX className="text-red-400" /> : <Volume2 className="text-accent" />}
        </Button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl bg-white/5 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl"
      >
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 inline-block"
        >
          <Sparkles className="w-16 h-16 text-accent mx-auto" />
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-200 mb-6 drop-shadow-sm tracking-tight">
          ¿Quién Conoce al Narcisista?
        </h1>
        
        <p className="text-xl text-purple-200 mb-12 leading-relaxed max-w-xl mx-auto">
          Un viaje psicológico para desenmascarar las sombras. 
          <br/>
          <span className="text-sm mt-4 block text-white/60">¿Tienes lo necesario para identificar las "Red Flags"?</span>
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={handleStart} 
            size="lg" 
            className="w-full md:w-auto shadow-pink-500/20"
          >
            <Play className="mr-2 w-5 h-5" /> Jugar Ahora
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleRanking}
            className="w-full md:w-auto"
          >
            <Trophy className="mr-2 w-5 h-5" /> Ver Ranking
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
