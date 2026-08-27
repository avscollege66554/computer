import React from 'react';
import { Cpu, Users, ShieldCheck, Tag, ArrowRight, BookOpen, Clock, Award } from 'lucide-react';
import { TopicId } from '../types';
import { TOPICS_META } from '../data/allData';
import { soundManager } from '../utils/audio';

interface HomeScreenProps {
  onSelectTopic: (topicId: TopicId) => void;
  onDirectStartQuiz: (topicId: TopicId) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTopic,
  onDirectStartQuiz
}) => {
  const topics: TopicId[] = ['hardware', 'persons', 'logos', 'slogans'];

  const getTopicSectionNumber = (id: TopicId) => {
    switch (id) {
      case 'hardware':
        return 'Section 01';
      case 'persons':
        return 'Section 02';
      case 'logos':
        return 'Section 03';
      case 'slogans':
        return 'Section 04';
    }
  };

  const getTopicSvgBackground = (id: TopicId) => {
    switch (id) {
      case 'hardware':
        return (
          <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="15" x2="23" y2="15"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="15" x2="4" y2="15"></line>
          </svg>
        );
      case 'persons':
        return (
          <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case 'logos':
        return (
          <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
            <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"></polygon>
          </svg>
        );
      case 'slogans':
        return (
          <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
        );
    }
  };

  const getProgressWidth = (id: TopicId) => {
    switch (id) {
      case 'hardware':
        return 'w-1/3 bg-cyan-500';
      case 'persons':
        return 'w-2/3 bg-purple-500';
      case 'logos':
        return 'w-1/4 bg-purple-500';
      case 'slogans':
        return 'w-1/2 bg-cyan-500';
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between py-8 sm:py-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[400px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-blue-600/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Main Header with Sophisticated Dark Styling */}
      <header className="flex-none pt-4 pb-8 sm:pb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-6 border-b border-white/5">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-2 uppercase">
            Computer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-500">Quiz</span>
          </h1>
          <p className="text-cyan-400/80 font-semibold tracking-widest uppercase text-xs sm:text-sm flex items-center gap-2.5">
            <span className="w-8 h-[1px] bg-cyan-500/50"></span>
            Test Your Computer Knowledge
          </p>
        </div>
        <div className="flex flex-col sm:items-end bg-[#121216]/60 border border-white/5 sm:border-transparent px-4 py-2.5 sm:p-0 rounded-xl">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-0.5">Curriculum Coverage</span>
          <span className="text-xl sm:text-2xl font-light text-white font-mono tracking-tighter italic">40 Verified Topics</span>
        </div>
      </header>

      {/* Main Grid with Sidebar Accent Line */}
      <main className="flex-grow py-8 sm:py-10 flex gap-6 lg:gap-12">
        <div className="hidden lg:block flex-none w-1 sidebar-line rounded-full"></div>

        {/* 2x2 Sophisticated Dark Cards */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {topics.map((topicId) => {
            const meta = TOPICS_META[topicId];
            const sectionNumber = getTopicSectionNumber(topicId);
            const isCyan = topicId === 'hardware' || topicId === 'slogans';
            const glowClass = isCyan ? 'glow-cyan' : 'glow-purple';
            const sectionColor = isCyan ? 'text-cyan-400' : 'text-purple-400';
            const progressClass = getProgressWidth(topicId);

            return (
              <div
                key={topicId}
                className={`relative group flex flex-col justify-between p-7 sm:p-8 bg-[#121216] border border-white/10 rounded-2xl transition-all duration-300 text-left overflow-hidden ${glowClass} hover:-translate-y-1 hover:border-white/20`}
              >
                {/* SVG Watermark in background */}
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  {getTopicSvgBackground(topicId)}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-xs font-mono uppercase tracking-widest ${sectionColor}`}>
                      {sectionNumber}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      10 Items
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-1.5 tracking-tight group-hover:text-white transition-colors">
                    {meta.title}
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium mb-3">
                    {meta.subtitle}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {meta.description}
                  </p>

                  {/* Progress bar accent */}
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-6">
                    <div className={`h-full ${progressClass} rounded-full`}></div>
                  </div>
                </div>

                {/* Actions: Open List or Quick Start */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/5">
                  <button
                    id={`topic-btn-${topicId}`}
                    onClick={() => {
                      soundManager.playClick();
                      onSelectTopic(topicId);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 uppercase tracking-wider transition-all shadow-md active:scale-[0.98] ${
                      isCyan
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-900/40'
                        : 'bg-purple-500 hover:bg-purple-400 text-white shadow-purple-900/40'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Study Book List</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id={`quick-quiz-btn-${topicId}`}
                    onClick={() => {
                      soundManager.playClick();
                      onDirectStartQuiz(topicId);
                    }}
                    className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 focus:outline-none"
                    title={`Start 10-Question Timed Quiz for ${meta.title}`}
                  >
                    <Clock className={`w-3.5 h-3.5 ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
                    <span>Quiz (10s)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Mechanics / Info Strip with Sophisticated Dark Card style */}
      <div className="pt-4 max-w-4xl mx-auto w-full">
        <div className="rounded-xl bg-[#121216] border border-white/10 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">10s Question Timer</div>
              <div className="text-[11px] text-gray-400">Fast state-based countdown</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Numbered Lists (01-10)</div>
              <div className="text-[11px] text-gray-400">Detailed inspection notes</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">5s Explanation Review</div>
              <div className="text-[11px] text-gray-400">Instant answer validation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
