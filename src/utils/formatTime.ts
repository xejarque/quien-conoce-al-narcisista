export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const calculateScore = (level: number, timeLeft: number): number => {
  const baseScore = level * 1000;
  const timeBonus = timeLeft * 10;
  const difficultyMultiplier = 1 + (level - 1) * 0.1; // Increases by 10% each level
  return Math.floor((baseScore + timeBonus) * difficultyMultiplier);
};
