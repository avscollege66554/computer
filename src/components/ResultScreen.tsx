import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, RotateCcw, ListChecks, ArrowLeft, Home, Award, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { UserAnswerRecord, TopicId, PerformanceTier } from '../types';
import { TOPICS_META } from '../data/allData';
import { soundManager } from '../utils/audio';

interface ResultScreenProps {
  topicId: TopicId;
  answers: UserAnswerRecord[];
  score: number;
  totalQuestions: number;
  onRestartQuiz: () => void;
  onViewAnswers: () => void;
  onBackToTopics: () => void;
  onNavigateHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  topicId,
  answers,
  score,
  totalQuestions,
  onRestartQuiz,
  onViewAnswers,
  onBackToTopics,
  onNavigateHome
}) => {
  const meta = TOPICS_META[topicId];

  // Calculate statistics
  const correctCount = answers.filter(a => a.isCorrect).length;
  const timeUpCount = answers.filter(a => a.isTimeUp).length;
  const wrongCount = answers.filter(a => !a.isCorrect && !a.isTimeUp).length;

  // Enforce total verification: Correct + Wrong + Unanswered === totalQuestions
  const unansweredCount = timeUpCount;

  // Determine Performance Tier based on score
  const getPerformanceTier = (sc: number): { tier: PerformanceTier; badgeColor: string; description: string } => {
    if (sc === 10) {
      return {
        tier: 'COMPUTER MASTER',
        badgeColor: 'bg-amber-400 text-slate-950 shadow-amber-500/20',
        description: 'Flawless perfection! You demonstrated master-level computer literacy.'
      };
    }
    if (sc >= 8) {
      return {
        tier: 'EXCELLENT',
        badgeColor: 'bg-cyan-400 text-slate-950 shadow-cyan-500/20',
        description: 'Outstanding performance! You have a deep command of computer technology.'
      };
    }
    if (sc >= 6) {
      return {
        tier: 'GREAT JOB',
        badgeColor: 'bg-emerald-400 text-slate-950 shadow-emerald-500/20',
        description: 'Solid knowledge! A few more reviews and you will be a master.'
      };
    }
    if (sc >= 4) {
      return {
        tier: 'GOOD EFFORT',
        badgeColor: 'bg-purple-500 text-white shadow-purple-500/20',
        description: 'Good foundation! Check the curriculum chapters to strengthen key topics.'
      };
    }
    return {
      tier: 'KEEP LEARNING',
      badgeColor: 'bg-[#181820] text-gray-300 border border-white/10',
      description: 'Keep studying! Review the numbered chapters and test yourself again.'
    };
  };

  const performance = getPerformanceTier(score);

  // Trigger celebration confetti for great scores (>= 7)
  useEffect(() => {
    if (score >= 7) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    }
  }, [score]);

  return (
    <div className="py-6 sm:py-12 px-4 sm:px-8 lg:px-16 max-w-3xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
      {/* Result Card */}
      <div className="rounded-2xl bg-[#121216] border border-white/10 p-6 sm:p-10 shadow-2xl text-center space-y-8 relative overflow-hidden glow-cyan">
        {/* Header Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0a0c] border border-white/10 text-xs font-mono font-bold text-cyan-400">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>{meta.title} QUIZ COMPLETED</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            QUIZ RESULTS
          </h1>
        </div>

        {/* Big Score Display */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex items-baseline gap-2">
            <span className="text-6xl sm:text-8xl font-bold font-mono tracking-tight text-white">
              {score}
            </span>
            <span className="text-2xl sm:text-4xl font-bold font-mono text-gray-600">
              / {totalQuestions}
            </span>
          </div>

          {/* Performance Tier Badge */}
          <div className="mt-4">
            <span className={`inline-block px-6 py-2 rounded-xl font-bold font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg ${performance.badgeColor}`}>
              🏆 {performance.tier}
            </span>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 max-w-md mx-auto leading-relaxed">
              {performance.description}
            </p>
          </div>
        </div>

        {/* Detailed Stats Breakdown */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-[#0a0a0c] border border-white/10 text-center">
          {/* Correct */}
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Correct</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
              {correctCount}
            </div>
          </div>

          {/* Wrong */}
          <div className="space-y-1 border-x border-white/10">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
              <XCircle className="w-4 h-4" />
              <span>Wrong</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
              {wrongCount}
            </div>
          </div>

          {/* Unanswered (Time Up) */}
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              <AlertCircle className="w-4 h-4" />
              <span>Time Up</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
              {unansweredCount}
            </div>
          </div>
        </div>

        {/* Mathematical verification guarantee */}
        <div className="text-[11px] font-mono text-gray-500">
          Verification: {correctCount} (Correct) + {wrongCount} (Wrong) + {unansweredCount} (Time Up) = {totalQuestions} Questions Total
        </div>

        {/* All Four Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
          {/* 1. RESTART QUIZ */}
          <button
            id="restart-quiz-btn"
            onClick={() => {
              soundManager.playClick();
              onRestartQuiz();
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-900/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>RESTART QUIZ</span>
          </button>

          {/* 2. VIEW ANSWERS */}
          <button
            id="view-answers-btn"
            onClick={() => {
              soundManager.playClick();
              onViewAnswers();
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold font-mono text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-purple-900/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <ListChecks className="w-4 h-4" />
            <span>VIEW ANSWERS</span>
          </button>

          {/* 3. BACK TO TOPICS */}
          <button
            id="back-to-topics-btn"
            onClick={() => {
              soundManager.playClick();
              onBackToTopics();
            }}
            className="w-full py-3 px-4 rounded-xl bg-[#0a0a0c] hover:bg-[#181820] border border-white/10 text-gray-300 hover:text-white font-mono text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO TOPICS</span>
          </button>

          {/* 4. HOME */}
          <button
            id="home-btn"
            onClick={() => {
              soundManager.playClick();
              onNavigateHome();
            }}
            className="w-full py-3 px-4 rounded-xl bg-[#0a0a0c] hover:bg-[#181820] border border-white/10 text-gray-300 hover:text-white font-mono text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>HOME</span>
          </button>
        </div>
      </div>
    </div>
  );
};
