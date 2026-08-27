import React from 'react';
import { X, Play, Zap, CheckCircle2, ArrowLeft, BookOpen, Layers } from 'lucide-react';
import { TopicItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { TOPICS_META } from '../data/allData';
import { soundManager } from '../utils/audio';

interface ItemDetailModalProps {
  item: TopicItem | null;
  isOpen: boolean;
  onClose: () => void;
  onTestItem: (item: TopicItem) => void;
  onStartFullQuiz: (topicId: TopicItem['category']) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onTestItem,
  onStartFullQuiz
}) => {
  if (!isOpen || !item) return null;

  const meta = TOPICS_META[item.category];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#121216] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] glow-cyan"
        role="dialog"
        aria-modal="true"
        aria-labelledby="item-modal-title"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#0a0a0c]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono font-bold text-cyan-400 bg-white/5 border border-white/10 rounded-md">
              CHAPTER {item.numberStr}
            </span>
            <span className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
              {meta.title}
            </span>
          </div>

          <button
            id="close-item-modal-btn"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Top section: Visual Media */}
          <div className="w-full max-w-md mx-auto">
            <ImageWithFallback
              src={item.image}
              alt={item.title}
              category={item.category}
              logoSvgKey={item.logoSvgKey}
              aspectRatio="aspect-video"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="text-center sm:text-left space-y-1">
            <h2 id="item-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {item.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-cyan-400">
              {item.subtitle}
            </p>
          </div>

          {/* Educational Overview */}
          <div className="rounded-xl bg-[#0a0a0c] border border-white/10 p-4 space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              Overview &amp; Concept
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              {item.description}
            </p>
          </div>

          {/* Key Facts / Important Points */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              Key Technical Takeaways
            </h3>
            <ul className="space-y-2.5">
              {item.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-5 border-t border-white/5 bg-[#0a0a0c] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            id="back-to-list-btn"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to List</span>
          </button>

          <div className="flex items-center gap-2.5 flex-1 sm:flex-initial">
            <button
              id="test-yourself-btn"
              onClick={() => {
                soundManager.playClick();
                onTestItem(item);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-900/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-slate-950 fill-current" />
              <span>Test Concept (10s)</span>
            </button>

            <button
              id="start-full-topic-quiz-btn"
              onClick={() => {
                soundManager.playClick();
                onStartFullQuiz(item.category);
              }}
              className="hidden xs:flex px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-purple-300 hover:text-white font-mono font-medium text-xs uppercase tracking-wider transition-colors items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Full 10Q Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
