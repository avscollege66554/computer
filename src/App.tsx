/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect } from 'react';
import { AppView, TopicId, TopicItem, UserAnswerRecord } from './types';
import { TOPICS_META, getQuestionsByTopic } from './data/allData';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { TopicListScreen } from './components/TopicListScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { ReviewScreen } from './components/ReviewScreen';
import { soundManager } from './utils/audio';

export default function App() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<AppView>('HOME');
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('hardware');

  // Quiz active state
  const [activeQuestions, setActiveQuestions] = useState<TopicItem[]>([]);
  const [isSingleItemTest, setIsSingleItemTest] = useState(false);
  const [completedAnswers, setCompletedAnswers] = useState<UserAnswerRecord[]>([]);
  const [finalScore, setFinalScore] = useState(0);

  // Audio mute state
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleSound = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      soundManager.setMuted(next);
      return next;
    });
  }, []);

  // Handlers for Navigation
  const handleNavigateHome = useCallback(() => {
    setCurrentView('HOME');
  }, []);

  const handleSelectTopic = useCallback((topicId: TopicId) => {
    setSelectedTopic(topicId);
    setCurrentView('TOPIC_LIST');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Start 10-question full quiz
  const handleStartFullQuiz = useCallback((topicId: TopicId) => {
    setSelectedTopic(topicId);
    const questions = getQuestionsByTopic(topicId);
    setActiveQuestions(questions);
    setIsSingleItemTest(false);
    setCompletedAnswers([]);
    setFinalScore(0);
    setCurrentView('QUESTION');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Start single item practice test
  const handleStartSingleItemQuiz = useCallback((item: TopicItem) => {
    setSelectedTopic(item.category);
    setActiveQuestions([item]);
    setIsSingleItemTest(true);
    setCompletedAnswers([]);
    setFinalScore(0);
    setCurrentView('QUESTION');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Finish quiz callback
  const handleFinishQuiz = useCallback((answers: UserAnswerRecord[], score: number) => {
    setCompletedAnswers(answers);
    setFinalScore(score);
    setCurrentView('RESULT');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Exit quiz early
  const handleExitQuiz = useCallback(() => {
    if (isSingleItemTest) {
      setCurrentView('TOPIC_LIST');
    } else {
      setCurrentView('TOPIC_LIST');
    }
  }, [isSingleItemTest]);

  // Restart active quiz
  const handleRestartQuiz = useCallback(() => {
    if (isSingleItemTest && activeQuestions.length > 0) {
      handleStartSingleItemQuiz(activeQuestions[0]);
    } else {
      handleStartFullQuiz(selectedTopic);
    }
  }, [isSingleItemTest, activeQuestions, selectedTopic, handleStartSingleItemQuiz, handleStartFullQuiz]);

  // View Answers (Review screen)
  const handleViewAnswers = useCallback(() => {
    setCurrentView('REVIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Back to Result from Review
  const handleBackToResult = useCallback(() => {
    setCurrentView('RESULT');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Back to Topic List
  const handleBackToTopicList = useCallback(() => {
    setCurrentView('TOPIC_LIST');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 antialiased font-sans">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        selectedTopic={currentView !== 'HOME' ? selectedTopic : null}
        onNavigateHome={handleNavigateHome}
        onNavigateTopicList={handleBackToTopicList}
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area based on active view state */}
      <main className="flex-1">
        {currentView === 'HOME' && (
          <HomeScreen
            onSelectTopic={handleSelectTopic}
            onDirectStartQuiz={handleStartFullQuiz}
          />
        )}

        {currentView === 'TOPIC_LIST' && (
          <TopicListScreen
            topicId={selectedTopic}
            onBackToHome={handleNavigateHome}
            onStartQuiz={handleStartFullQuiz}
            onStartSingleItemQuiz={handleStartSingleItemQuiz}
          />
        )}

        {(currentView === 'QUESTION' || currentView === 'ANSWER') && (
          <QuizScreen
            key={`${selectedTopic}-${activeQuestions.length}-${isSingleItemTest ? 'single' : 'full'}`}
            topicId={selectedTopic}
            questions={activeQuestions}
            isSingleItemTest={isSingleItemTest}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={handleExitQuiz}
          />
        )}

        {currentView === 'RESULT' && (
          <ResultScreen
            topicId={selectedTopic}
            answers={completedAnswers}
            score={finalScore}
            totalQuestions={activeQuestions.length}
            onRestartQuiz={handleRestartQuiz}
            onViewAnswers={handleViewAnswers}
            onBackToTopics={handleBackToTopicList}
            onNavigateHome={handleNavigateHome}
          />
        )}

        {currentView === 'REVIEW' && (
          <ReviewScreen
            topicId={selectedTopic}
            answers={completedAnswers}
            score={finalScore}
            onBackToResult={handleBackToResult}
            onRestartQuiz={handleRestartQuiz}
            onNavigateHome={handleNavigateHome}
          />
        )}
      </main>

      {/* Modern Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/60 py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold text-slate-300">Computer Quiz &amp; Study Guide</span>
            <span>• Hardware, Pioneers, Logos &amp; Slogans</span>
          </div>
          <div>
            10-Second State Timed Quiz Engine with 5-Second Review System
          </div>
        </div>
      </footer>
    </div>
  );
}
