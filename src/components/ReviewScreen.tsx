import React from 'react';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, RotateCcw, Home, BookOpen } from 'lucide-react';
import { UserAnswerRecord, TopicId } from '../types';
import { TOPICS_META } from '../data/allData';
import { soundManager } from '../utils/audio';

interface ReviewScreenProps {
  topicId: TopicId;
  answers: UserAnswerRecord[];
  score: number;
  onBackToResult: () => void;
  onRestartQuiz: () => void;
  onNavigateHome: () => void;
}

export const ReviewScreen: React.FC<ReviewScreenProps> = ({
  topicId,
  answers,
  score,
  onBackToResult,
  onRestartQuiz,
  onNavigateHome
}) => {
  const meta = TOPICS_META[topicId];

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div className="space-y-1">
          <button
            id="review-back-to-result-btn"
            onClick={() => {
              soundManager.playClick();
              onBackToResult();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-cyan-400 transition-colors mb-1 focus:outline-none py-1 -ml-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Result</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Question Review &amp; Explanations
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-mono">
            {meta.title} • Score: <span className="text-cyan-400 font-bold">{score} / {answers.length}</span>
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            id="review-restart-btn"
            onClick={() => {
              soundManager.playClick();
              onRestartQuiz();
            }}
            className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart</span>
          </button>

          <button
            id="review-home-btn"
            onClick={() => {
              soundManager.playClick();
              onNavigateHome();
            }}
            className="px-3.5 py-2 rounded-xl bg-[#121216] hover:bg-[#181820] text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider border border-white/10 flex items-center gap-1.5 transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </div>
      </div>

      {/* 10 Detailed Question Review Cards */}
      <div className="space-y-6">
        {answers.map((record, index) => {
          const item = record.item;
          const isCorrect = record.isCorrect;
          const isTimeUp = record.isTimeUp;

          return (
            <div
              key={index}
              className={`rounded-2xl border p-5 sm:p-6 shadow-xl space-y-4 transition-all bg-[#121216] ${
                isCorrect
                  ? 'border-emerald-500/40 shadow-emerald-500/5'
                  : isTimeUp
                  ? 'border-amber-500/40 shadow-amber-500/5'
                  : 'border-rose-500/40 shadow-rose-500/5'
              }`}
            >
              {/* Question Header & Status Badge */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#0a0a0c] border border-white/10 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>

                {/* Status Indicator */}
                <div>
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>✓ Correct</span>
                    </span>
                  ) : isTimeUp ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>⏱ Time Up</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>✕ Wrong</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Question Prompt */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {item.question}
              </h3>

              {/* Answer Comparison Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* User Answer */}
                <div className="p-3.5 rounded-xl bg-[#0a0a0c] border border-white/10 space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
                    Your Answer
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold ${
                    record.selectedOptionIndex === null
                      ? 'text-amber-400 italic font-mono'
                      : isCorrect
                      ? 'text-emerald-400'
                      : 'text-rose-400'
                  }`}>
                    {record.selectedOptionIndex !== null
                      ? item.options[record.selectedOptionIndex]
                      : 'No answer submitted (Time expired)'}
                  </div>
                </div>

                {/* Correct Answer */}
                <div className="p-3.5 rounded-xl bg-[#0a0a0c] border border-emerald-500/30 space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                    Correct Answer
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {item.options[item.correctAnswerIndex]}
                  </div>
                </div>
              </div>

              {/* Explanation Note */}
              <div className="p-4 rounded-xl bg-[#0a0a0c] border border-white/10 space-y-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Educational Note:</span>
                </div>
                <p>{item.explanation}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <button
          id="review-bottom-back-btn"
          onClick={() => {
            soundManager.playClick();
            onBackToResult();
          }}
          className="px-5 py-2.5 rounded-xl border border-white/10 bg-[#121216] hover:bg-[#181820] text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Result</span>
        </button>

        <button
          id="review-bottom-restart-btn"
          onClick={() => {
            soundManager.playClick();
            onRestartQuiz();
          }}
          className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider shadow-lg shadow-cyan-900/30 transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restart {meta.title} Quiz</span>
        </button>
      </div>
    </div>
  );
};
