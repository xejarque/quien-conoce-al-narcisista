import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../../types';
import { clsx } from 'clsx';

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  hiddenOptions: number[];
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  isRevealing: boolean;
  lifelineResult?: {
    type: 'phoneFriend' | 'audience';
    suggestion?: number;
    votes?: number[];
  };
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  hiddenOptions,
  selectedAnswer,
  isCorrect,
  isRevealing,
  lifelineResult
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-8 text-center shadow-2xl relative overflow-hidden"
      >
        {/* Glow effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

        <h2 className={clsx(
          "text-2xl md:text-3xl font-bold text-white leading-relaxed relative z-10 drop-shadow-md transition-all duration-500",
          isCorrect === true && "text-green-300 scale-105"
        )}>
          {question.text}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-0">
        {question.options.map((option, index) => {
          if (hiddenOptions.includes(index)) {
            return <div key={index} className="invisible h-20" />;
          }

          let buttonStyle = "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-pink-400/50";
          const isActuallyCorrect = index === question.correctAnswer;

          if (selectedAnswer === index) {
            if (isRevealing) {
              buttonStyle = "bg-accent text-black border-accent font-bold scale-[1.02] md:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.6)] animate-pulse";
            } else if (isCorrect === true) {
              buttonStyle = "bg-green-500 border-green-400 text-white shadow-[0_0_30px_rgba(34,197,94,0.6)] z-20 scale-[1.02] md:scale-105";
            } else if (isCorrect === false) {
              buttonStyle = "bg-red-500/80 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]";
            }
          } else if (isCorrect !== null && isActuallyCorrect) {
            // Highlight the correct answer if the user failed
            buttonStyle = "bg-green-500/40 border-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] scale-[1.02] md:scale-105 z-10";
          }

          return (
            <motion.button
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: selectedAnswer === index && isCorrect === true ? (window.innerWidth < 768 ? 1.02 : 1.1) : 1,
                x: selectedAnswer === index && isCorrect === false ? [0, -10, 10, -10, 10, 0] : 0,
                opacity: 1
              }}
              whileTap={!selectedAnswer ? { scale: 0.95 } : {}}
              transition={{
                scale: { type: "spring", stiffness: 300, damping: 20 },
                x: { duration: 0.4 }
              }}
              onClick={() => onAnswer(index)}
              disabled={selectedAnswer !== null}
              className={clsx(
                "relative h-24 px-6 rounded-2xl border-2 flex items-center transition-all duration-300 shadow-lg group backdrop-blur-sm",
                buttonStyle
              )}
            >
              {/* Correct answer indicator (check icon) */}
              {isCorrect === true && selectedAnswer === index && (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-7 h-7 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  {/* Outer glow ring */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-2xl border-4 border-green-400 z-0"
                  />
                </>
              )}

              <div className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 text-lg transition-colors",
                selectedAnswer === index ? "bg-black/20 text-white" : "bg-white/10 text-pink-300 group-hover:bg-pink-500 group-hover:text-white"
              )}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-lg font-medium text-left flex-1 leading-tight">
                {option}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Lifeline Results Visualisation */}
      <AnimatePresence>
        {lifelineResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            {lifelineResult.type === 'phoneFriend' ? (
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="text-pink-300 font-bold">Consejo del Experto</h4>
                  <p className="text-white">"Creo que la respuesta correcta es la <span className="text-accent font-bold">{String.fromCharCode(65 + (lifelineResult.suggestion ?? 0))}</span>. Estoy bastante seguro."</p>
                </div>
              </div>
            ) : lifelineResult.type === 'audience' && (
              <div>
                <h4 className="text-purple-300 font-bold mb-4 flex items-center gap-2">
                  <span>📊</span> Resultados del Público
                </h4>
                <div className="grid grid-cols-4 gap-4">
                  {lifelineResult.votes?.map((vote, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div className="w-full bg-white/5 rounded-lg h-24 relative overflow-hidden flex items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${vote}%` }}
                          className="w-full bg-gradient-to-t from-purple-600 to-pink-500"
                        />
                        <span className="absolute top-0 w-full text-center text-[10px] text-white/50 pt-1">{vote}%</span>
                      </div>
                      <span className="font-bold text-white/70">{String.fromCharCode(65 + idx)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
