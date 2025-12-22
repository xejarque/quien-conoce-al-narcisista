import { useCallback } from 'react';
import { Howl } from 'howler';

// Sounds would need to be added to assets folder later
// For now we will just setup the structure
const sounds = {
  correct: new Howl({ src: ['/sounds/correct.mp3'] }),
  wrong: new Howl({ src: ['/sounds/wrong.mp3'] }),
  tick: new Howl({ src: ['/sounds/tick.mp3'] }),
  win: new Howl({ src: ['/sounds/win.mp3'] }),
  background: new Howl({ src: ['/sounds/background.mp3'], loop: true, volume: 0.5 }),
};

export const useSound = () => {
  const playSound = useCallback((soundName: keyof typeof sounds) => {
    // sounds[soundName].play(); // Commented out until files exist to avoid errors
    console.log(`Playing sound: ${soundName}`);
  }, []);

  const stopSound = useCallback((soundName: keyof typeof sounds) => {
    // sounds[soundName].stop();
    console.log(`Stopping sound: ${soundName}`);
  }, []);

  return { playSound, stopSound };
};
