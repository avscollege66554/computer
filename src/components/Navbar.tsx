import React from 'react';
import { Volume2, VolumeX, MonitorPlay, ChevronRight } from 'lucide-react';
import { AppView, TopicId } from '../types';
import { TOPICS_META } from '../data/allData';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  currentView: AppView;
  selectedTopic: TopicId | null;
  onNavigateHome: () => void;
  onNavigateTopicList: () => void;
  onOpenStudyGuide?: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  selectedTopic,
  onNavigateHome,
  onNavigateTopicList,
  isMuted,
  onToggleSound
}) => {
  const currentTopicMeta = selectedTopic ? TOPICS_META[selectedTopic] : null;

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#0a0a0c]/90 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            id="nav-logo-btn"
            onClick={onNavigateHome}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-lg p-1"
            title="Return to Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-center glow-cyan-sm group-hover:border-cyan-500/50 transition-all">
              <MonitorPlay className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-base sm:text-lg text-white uppercase">
                  Computer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Quiz</span>
                </span>
                <span className="hidden sm:inline-flex px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase rounded bg-white/5 text-cyan-400 border border-white/10">
                  SYSTEM
                </span>
              </div>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase font-medium hidden xs:block">
                Test Your Computer Knowledge
              </p>
            </div>
          </button>
        </div>

        {/* Center Breadcrumb (Desktop) */}
        {currentView !== 'HOME' && currentTopicMeta && (
          <nav aria-label="Breadcrumb" className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <span className="text-gray-700">/</span>
            <button
              onClick={onNavigateTopicList}
              className={`hover:text-cyan-400 transition-colors ${currentView === 'TOPIC_LIST' ? 'text-white font-bold' : ''}`}
            >
              {currentTopicMeta.title}
            </button>
            {currentView !== 'TOPIC_LIST' && (
              <>
                <span className="text-gray-700">/</span>
                <span className="text-cyan-400 font-bold">
                  {currentView.replace('_', ' ')}
                </span>
              </>
            )}
          </nav>
        )}

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio toggle */}
          <button
            id="nav-sound-toggle-btn"
            onClick={() => {
              onToggleSound();
              if (isMuted) {
                soundManager.setMuted(false);
                soundManager.playClick();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-xs font-mono tracking-wider focus:outline-none focus:ring-1 focus:ring-cyan-500"
            title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-gray-500" />
                <span className="hidden sm:inline text-gray-500 text-[11px] uppercase">Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline text-cyan-400 text-[11px] uppercase">Sound ON</span>
              </>
            )}
          </button>

          {/* Quick Home action when deep in sub-views */}
          {currentView !== 'HOME' && (
            <button
              id="nav-home-btn"
              onClick={onNavigateHome}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all focus:outline-none focus:ring-1 focus:ring-cyan-500"
            >
              All Sections
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
