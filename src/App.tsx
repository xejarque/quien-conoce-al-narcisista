import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Results } from './pages/Results';
import { Ranking } from './pages/Ranking';
import { useEffect } from 'react';
import { Howler } from 'howler';

function App() {
  useEffect(() => {
    // Unlock audio on first interaction
    const unlockAudio = () => {
      console.log('[App] Attempting to unlock audio...');
      if (Howler.ctx && Howler.ctx.state === 'suspended') {
        Howler.ctx.resume().then(() => {
          console.log('[App] AudioContext resumed successfully');
          // Dispatch a custom event to notify components that audio is ready
          window.dispatchEvent(new CustomEvent('audio_unlocked'));
        });
      } else {
        console.log('[App] AudioContext already running or not initialized');
        window.dispatchEvent(new CustomEvent('audio_unlocked'));
      }
      
      // Remove listeners after first interaction
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('click', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, []);

  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game-over" element={<Results />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
