import React, { useState } from 'react';
import { ArrowLeft, Play, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { TopicId, TopicItem } from '../types';
import { TOPICS_META, getQuestionsByTopic } from '../data/allData';
import { ImageWithFallback } from './ImageWithFallback';
import { ItemDetailModal } from './ItemDetailModal';
import { soundManager } from '../utils/audio';

interface TopicListScreenProps {
  topicId: TopicId;
  onBackToHome: () => void;
  onStartQuiz: (topicId: TopicId) => void;
  onStartSingleItemQuiz: (item: TopicItem) => void;
}

export const TopicListScreen: React.FC<TopicListScreenProps> = ({
  topicId,
  onBackToHome,
  onStartQuiz,
  onStartSingleItemQuiz
}) => {
  const meta = TOPICS_META[topicId];
  const items = getQuestionsByTopic(topicId);
  const [selectedItem, setSelectedItem] = useState<TopicItem | null>(null);
  const isCyan = topicId === 'hardware' || topicId === 'slogans';

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Top Navigation & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
        <div className="space-y-2">
          {/* Back button */}
          <button
            id="back-to-topics-btn"
            onClick={() => {
              soundManager.playClick();
              onBackToHome();
            }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-cyan-400 transition-colors group mb-1 focus:outline-none py-1 -ml-1"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Curriculum</span>
          </button>

          <div className="space-y-1">
            <span className={`text-xs font-mono uppercase tracking-widest ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`}>
              Section {topicId === 'hardware' ? '01' : topicId === 'persons' ? '02' : topicId === 'logos' ? '03' : '04'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {meta.title}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-gray-400">
              {meta.subtitle} • 10 Verified Chapters
            </p>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
            {meta.description} Tap any item to inspect details or start the full timed quiz below.
          </p>
        </div>

        {/* Start Full Quiz CTA Banner Button */}
        <div className="flex items-center gap-3 self-start md:self-center shrink-0">
          <button
            id={`start-full-quiz-btn-${topicId}`}
            onClick={() => {
              soundManager.playClick();
              onStartQuiz(topicId);
            }}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group ${
              isCyan
                ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-900/40'
                : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/40'
            }`}
          >
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            <span>START {meta.title} QUIZ (10Q)</span>
          </button>
        </div>
      </div>

      {/* Book / List Style Container */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1 text-xs font-mono uppercase tracking-widest text-gray-500">
          <span>Numbered Curriculum • 10 Chapters</span>
          <span>Click to Inspect / Practice</span>
        </div>

        {/* 10 Numbered List Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                soundManager.playClick();
                setSelectedItem(item);
              }}
              className="group relative rounded-xl bg-[#121216] hover:bg-[#16161c] border border-white/10 hover:border-cyan-500/50 p-4 sm:p-5 transition-all duration-200 cursor-pointer shadow-md hover:shadow-cyan-500/10 flex items-start gap-4"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  soundManager.playClick();
                  setSelectedItem(item);
                }
              }}
            >
              {/* Number Box with Book Styling (01, 02, etc.) */}
              <div className="shrink-0 flex flex-col items-center justify-center w-12 h-14 rounded-lg bg-[#0a0a0c] border border-white/10 group-hover:border-cyan-500/40 text-cyan-400 font-mono font-bold text-base transition-colors">
                <span>{item.numberStr}</span>
                <span className="text-[8px] uppercase font-mono text-gray-500">ITEM</span>
              </div>

              {/* Item Thumbnail / Logo preview */}
              <div className="shrink-0 w-16 h-14 rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0c] flex items-center justify-center group-hover:scale-105 transition-transform">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  category={item.category}
                  logoSvgKey={item.logoSvgKey}
                  aspectRatio="aspect-square"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {topicId === 'logos' ? 'Identify Logo #' + item.numberStr : item.title}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>

                <p className="text-xs font-mono text-cyan-400/90 truncate mt-0.5">
                  {topicId === 'logos' ? item.subtitle : item.subtitle}
                </p>

                <p className="text-xs text-gray-400 line-clamp-2 mt-1.5 leading-relaxed font-sans">
                  {topicId === 'slogans' ? `Slogan: ${item.title}` : item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sticky Action / Banner */}
      <div className="rounded-2xl bg-[#121216] border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-semibold text-white flex items-center justify-center sm:justify-start gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Ready for the Timed Challenge?</span>
          </h4>
          <p className="text-xs text-gray-400">
            Each question gives you exactly 10 seconds, followed by 5 seconds of educational explanation review.
          </p>
        </div>

        <button
          id={`start-quiz-bottom-btn-${topicId}`}
          onClick={() => {
            soundManager.playClick();
            onStartQuiz(topicId);
          }}
          className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 ${
            isCyan
              ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-900/30'
              : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/30'
          }`}
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Launch 10Q Quiz</span>
        </button>
      </div>

      {/* Detailed Modal for item clicked */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        onTestItem={(item) => {
          setSelectedItem(null);
          onStartSingleItemQuiz(item);
        }}
        onStartFullQuiz={(cat) => {
          setSelectedItem(null);
          onStartQuiz(cat);
        }}
      />
    </div>
  );
};
