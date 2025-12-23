import { Howl, Howler } from 'howler';
import { useCallback, useEffect, useState } from 'react';

// Force global unlock settings
Howler.autoUnlock = true;

const SOUNDS = {
  // bgMusic: '/sounds/meditation_bg.mp3', // Note: Renamed to bust cache
  correct: '/sounds/correct.mp3',     // Win/Success
  wrong: '/sounds/wrong.mp3',         // Fail/Wrong
  click: '/sounds/click.wav',         // Click/Interface
  win: '/sounds/win.mp3',             // Big Victory
  // suspense: '/sounds/meditation_bg.mp3',   // Game Suspense
  // tension: '/sounds/ticking.mp3',     // Tension during reveal (placeholder)
  lifeline: '/sounds/click.wav',   // Changed from lifeline.mp3 to click.wav as requested
  ticking: '/sounds/ticking.mp3',     // Clock Ticking
};

const SOUND_VOLUMES: { [key: string]: number } = {
  // bgMusic: 0.05,
  // suspense: 0.05,
  click: 0.4,
  lifeline: 0.4,
  correct: 0.6,
  wrong: 0.5,
  win: 0.7,
  // tension: 0.2,
  ticking: 0.3,
};

// Global sound instances to persist across navigations
const globalSounds: { [key: string]: Howl } = {};
let currentMusic: string | null = null;

export const useSoundManager = () => {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('game_muted');
    return saved === 'true';
  });

  useEffect(() => {
    // Initialize global sounds once
    Object.entries(SOUNDS).forEach(([key, url]) => {
      if (!globalSounds[key]) {
        // const isMusic = key === 'bgMusic' || key === 'suspense' || key === 'tension';
        globalSounds[key] = new Howl({
          src: [url],
          html5: false,
          preload: true,
          loop: false, // No looping sounds anymore
          volume: SOUND_VOLUMES[key] || 0.5,
          mute: isMuted,
          onload: () => console.log(`[SoundManager] Loaded: ${key}`),
          onloaderror: (_id, err) => console.error(`[SoundManager] Error loading ${key}:`, err),
          onplayerror: (_id, err) => {
            console.error(`[SoundManager] Error playing ${key}:`, err);
          }
        });
      }
    });

    // Listen for the custom audio_unlocked event from App.tsx
    // const handleAudioUnlocked = () => {
    //   console.log('[SoundManager] Received audio_unlocked event');
    //   // Only resume the currently intended music if it exists and isn't playing
    //   if (currentMusic && globalSounds[currentMusic]) {
    //     const sound = globalSounds[currentMusic];
    //     if (sound.state() === 'loaded' && !sound.playing() && !isMuted) {
    //       console.log(`[SoundManager] Resuming ${currentMusic} after unlock`);
    //       sound.play();
    //     }
    //   }
    // };

    // window.addEventListener('audio_unlocked', handleAudioUnlocked);
    // return () => window.removeEventListener('audio_unlocked', handleAudioUnlocked);
  }, []);

  useEffect(() => {
    // Update mute state for all global sounds when isMuted changes
    Object.values(globalSounds).forEach(sound => sound.mute(isMuted));
    localStorage.setItem('game_muted', String(isMuted));
  }, [isMuted]);

  const playSound = useCallback((name: keyof typeof SOUNDS) => {
    const sound = globalSounds[name];
    console.log(`[SoundManager] Request to play: ${name}`, {
      exists: !!sound,
      state: sound?.state(),
      playing: sound?.playing(),
      muted: isMuted
    });

    if (sound) {
      // if (name === 'bgMusic' || name === 'suspense' || name === 'tension') {
      //   // Stop other music first to prevent overlap
      //   const musicKeys = ['bgMusic', 'suspense', 'tension'];
      //   musicKeys.forEach(key => {
      //       if (key !== name && globalSounds[key]?.playing()) {
      //           globalSounds[key].stop();
      //       }
      //   });

      //   // Set this as the current active music
      //   currentMusic = name as string;

      //   if (!sound.playing()) {
      //     const playId = sound.play();
      //     // If it failed to play (e.g. because of autoplay policy), try to resume context and play again
      //     if (sound.state() === 'loaded' && !sound.playing()) {
      //       Howler.ctx?.resume().then(() => {
      //         console.log(`Retrying ${name} after context resume`);
      //         sound.play(playId);
      //       });
      //     }
      //   }
      // } else {
        // For SFX, just play
        sound.play();
      // }
    } else {
      console.warn(`Sound not found: ${name}`);
    }
  }, [isMuted]);

  const stopSound = useCallback((name: keyof typeof SOUNDS) => {
    const sound = globalSounds[name];
    if (sound) {
      sound.stop();
      if (currentMusic === name) {
        currentMusic = null;
      }
    }
  }, []);

  const stopAll = useCallback(() => {
    Object.values(globalSounds).forEach(sound => sound.stop());
    currentMusic = null;
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  const fadeSound = useCallback((name: keyof typeof SOUNDS, from: number, to: number, duration: number) => {
    const sound = globalSounds[name];
    if (sound && sound.playing()) {
      sound.fade(from, to, duration);
    }
  }, []);

  return { playSound, stopSound, stopAll, isMuted, toggleMute, fadeSound };
};
