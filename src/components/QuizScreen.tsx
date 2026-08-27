import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, Clock, CheckCircle2, XCircle, AlertCircle, FastForward, Award, HelpCircle, BookOpen } from 'lucide-react';
import { TopicItem, UserAnswerRecord, TopicId } from '../types';
import { TOPICS_META } from '../data/allData';
import { ImageWithFallback } from './ImageWithFallback';
import { soundManager } from '../utils/audio';

interface QuizScreenProps {
  topicId: TopicId;
  questions: TopicItem[];
  isSingleItemTest?: boolean;
  onFinishQuiz: (answers: UserAnswerRecord[], score: number) => void;
  onExitQuiz: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  topicId,
  questions,
  isSingleItemTest = false,
  onFinishQuiz,
  onExitQuiz
}) => {
  const meta = TOPICS_META[topicId];
  const totalQuestions = questions.length;

  // Quiz progression state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'QUESTION' | 'ANSWER'>('QUESTION');
  
  // Interaction & locking
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [answers, setAnswers] = useState<UserAnswerRecord[]>([]);
  const [score, setScore] = useState(0);

  // Timers (exact seconds)
  const [questionTimer, setQuestionTimer] = useState(10);
  const [answerTimer, setAnswerTimer] = useState(5);

  // Timer reference to guarantee only ONE interval runs
  const activeIntervalRef = useRef<number | null>(null);

  const currentQuestion = questions[currentIndex] || questions[0];

  // Helper to clear any active timer safely
  const clearCurrentTimer = useCallback(() => {
    if (activeIntervalRef.current !== null) {
      window.clearInterval(activeIntervalRef.current);
      activeIntervalRef.current = null;
    }
  }, []);

  // Handle Answer selection (User clicks an option)
  const handleSelectOption = useCallback((optionIdx: number) => {
    if (isLocked || phase !== 'QUESTION') return;

    // 1. Lock immediately to prevent double-clicks/rapid re-entry
    setIsLocked(true);
    setSelectedOptionIndex(optionIdx);
    clearCurrentTimer();

    const isCorrect = optionIdx === currentQuestion.correctAnswerIndex;
    const timeSpent = 10 - questionTimer;

    // 2. Play sound feedback
    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playWrong();
    }

    // 3. Record answer
    const record: UserAnswerRecord = {
      questionIndex: currentIndex,
      item: currentQuestion,
      selectedOptionIndex: optionIdx,
      isCorrect,
      isTimeUp: false,
      timeSpentSeconds: Math.max(1, timeSpent)
    };

    setAnswers(prev => [...prev, record]);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // 4. Transition to Answer Phase
    setPhase('ANSWER');
    setAnswerTimer(5);
  }, [isLocked, phase, currentQuestion, currentIndex, questionTimer, clearCurrentTimer]);

  // Handle Time Up (10 seconds expired)
  const handleTimeUp = useCallback(() => {
    if (isLocked || phase !== 'QUESTION') return;

    // 1. Lock options
    setIsLocked(true);
    setSelectedOptionIndex(null);
    clearCurrentTimer();

    // 2. Play time up sound
    soundManager.playTimeUp();

    // 3. Record timeout record (0 points)
    const record: UserAnswerRecord = {
      questionIndex: currentIndex,
      item: currentQuestion,
      selectedOptionIndex: null,
      isCorrect: false,
      isTimeUp: true,
      timeSpentSeconds: 10
    };

    setAnswers(prev => [...prev, record]);

    // 4. Transition to Answer Phase
    setPhase('ANSWER');
    setAnswerTimer(5);
  }, [isLocked, phase, currentQuestion, currentIndex, clearCurrentTimer]);

  // Move to next question or complete quiz
  const handleAdvanceNext = useCallback(() => {
    clearCurrentTimer();

    if (currentIndex + 1 < totalQuestions) {
      // Advance to next question
      setCurrentIndex(prev => prev + 1);
      setPhase('QUESTION');
      setSelectedOptionIndex(null);
      setIsLocked(false);
      setQuestionTimer(10);
      setAnswerTimer(5);
    } else {
      // Quiz completed!
      // Pass the latest answers and score
      onFinishQuiz(answers, score);
    }
  }, [clearCurrentTimer, currentIndex, totalQuestions, onFinishQuiz, answers, score]);

  // Question Phase Timer (10 Seconds)
  useEffect(() => {
    if (phase !== 'QUESTION') return;

    clearCurrentTimer();
    setQuestionTimer(10);

    const interval = window.setInterval(() => {
      setQuestionTimer(prev => {
        if (prev <= 1) {
          window.clearInterval(interval);
          activeIntervalRef.current = null;
          handleTimeUp();
          return 0;
        }
        if (prev <= 4) {
          soundManager.playWarning();
        } else {
          soundManager.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    activeIntervalRef.current = interval;

    return () => {
      if (activeIntervalRef.current === interval) {
        window.clearInterval(interval);
        activeIntervalRef.current = null;
      }
    };
  }, [phase, currentIndex, clearCurrentTimer, handleTimeUp]);

  // Answer Phase Timer (5 Seconds)
  useEffect(() => {
    if (phase !== 'ANSWER') return;

    clearCurrentTimer();
    setAnswerTimer(5);

    const interval = window.setInterval(() => {
      setAnswerTimer(prev => {
        if (prev <= 1) {
          window.clearInterval(interval);
          activeIntervalRef.current = null;
          handleAdvanceNext();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    activeIntervalRef.current = interval;

    return () => {
      if (activeIntervalRef.current === interval) {
        window.clearInterval(interval);
        activeIntervalRef.current = null;
      }
    };
  }, [phase, currentIndex, clearCurrentTimer, handleAdvanceNext]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearCurrentTimer();
    };
  }, [clearCurrentTimer]);

  // Status computation for Answer screen
  const latestAnswer = answers[answers.length - 1];
  const isCorrect = latestAnswer?.isCorrect;
  const isTimeUp = latestAnswer?.isTimeUp;

  // Visual circular progress calculation
  const questionProgress = ((10 - questionTimer) / 10) * 100;
  const answerProgress = ((5 - answerTimer) / 5) * 100;

  return (
    <div className="py-4 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
      {/* Top Header Bar: Exit button, Category, and Counter */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/5">
        <button
          id="exit-quiz-btn"
          onClick={() => {
            soundManager.playClick();
            if (window.confirm('Are you sure you want to exit the quiz? Current progress will be lost.')) {
              clearCurrentTimer();
              onExitQuiz();
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-rose-400 transition-colors py-1.5 px-3 rounded-lg bg-[#121216] border border-white/10 hover:border-white/20"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit Quiz</span>
        </button>

        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border ${meta.badgeBg}`}>
            {meta.title}
          </span>
          {isSingleItemTest && (
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
              PRACTICE
            </span>
          )}
        </div>

        {/* Question Counter (e.g. Question 1 / 10) */}
        <div className="text-right">
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            Question
          </div>
          <div className="text-sm sm:text-base font-bold text-white font-mono">
            <span className="text-cyan-400">{currentIndex + 1}</span>
            <span className="text-gray-600"> / </span>
            <span>{totalQuestions}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#121216] h-1.5 rounded-full overflow-hidden border border-white/5">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* QUESTION PHASE (10 SECONDS) */}
      {phase === 'QUESTION' && (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
          {/* Active 10-Second Timer Bar */}
          <div className="rounded-2xl bg-[#121216] border border-white/10 p-4 sm:p-5 flex items-center justify-between gap-4 shadow-xl glow-cyan">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono text-2xl font-bold transition-colors ${
                questionTimer <= 3 
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse' 
                  : questionTimer <= 6
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
              }`}>
                {questionTimer}
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Clock className={`w-3.5 h-3.5 ${questionTimer <= 3 ? 'text-rose-400 animate-spin' : 'text-cyan-400'}`} />
                  <span>Question Timer</span>
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {questionTimer <= 3 ? 'Hurry! Time running out...' : 'Select the single best answer'}
                </div>
              </div>
            </div>

            {/* Timer visual pill */}
            <div className="w-24 sm:w-40 bg-[#0a0a0c] h-2.5 rounded-full overflow-hidden border border-white/10">
              <div
                className={`h-full transition-all duration-1000 ease-linear rounded-full ${
                  questionTimer <= 3 ? 'bg-rose-500' : questionTimer <= 6 ? 'bg-amber-500' : 'bg-cyan-500'
                }`}
                style={{ width: `${(questionTimer / 10) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="rounded-2xl bg-[#121216] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Visual media (Image / Logo) */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto">
              <ImageWithFallback
                src={currentQuestion.image}
                alt={currentQuestion.title}
                category={currentQuestion.category}
                logoSvgKey={currentQuestion.logoSvgKey}
                aspectRatio="aspect-video"
              />
            </div>

            {/* Question Text */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                {topicId === 'logos' ? 'Visual Recognition' : topicId === 'slogans' ? 'Slogan Identification' : 'Technical Concept'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {currentQuestion.question}
              </h2>
            </div>

            {/* 4 Multiple Choice Options */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentQuestion.options.map((optionText, idx) => {
                const optionLetter = ['A', 'B', 'C', 'D'][idx];

                return (
                  <button
                    key={idx}
                    id={`quiz-opt-${idx}`}
                    disabled={isLocked}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 sm:p-5 rounded-xl bg-[#0a0a0c] hover:bg-[#181820] border border-white/10 hover:border-cyan-500/60 focus:border-cyan-400 text-gray-200 hover:text-white font-medium text-sm sm:text-base transition-all duration-150 flex items-center gap-4 group active:scale-[0.99] disabled:pointer-events-none"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#121216] border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 font-mono font-bold text-sm flex items-center justify-center shrink-0 transition-colors">
                      {optionLetter}
                    </span>
                    <span className="flex-1 leading-snug">{optionText}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ANSWER & EXPLANATION PHASE (5 SECONDS) */}
      {phase === 'ANSWER' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Answer Countdown Banner (5 Seconds) */}
          <div className="rounded-2xl bg-[#121216] border border-white/10 p-4 sm:p-5 flex items-center justify-between gap-4 shadow-xl glow-purple">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-mono text-2xl font-bold">
                {answerTimer}
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Next Question in {answerTimer} Seconds
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  Reviewing answer &amp; technical explanation
                </div>
              </div>
            </div>

            {/* Quick Skip Button */}
            <button
              id="skip-to-next-btn"
              onClick={() => {
                soundManager.playClick();
                handleAdvanceNext();
              }}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md focus:outline-none focus:ring-1 focus:ring-cyan-500 shrink-0"
            >
              <span>Next Now</span>
              <FastForward className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Result Card */}
          <div className={`rounded-2xl border p-6 sm:p-8 shadow-2xl space-y-6 bg-[#121216] ${
            isCorrect 
              ? 'border-emerald-500/50 shadow-emerald-500/10' 
              : isTimeUp
              ? 'border-amber-500/50 shadow-amber-500/10'
              : 'border-rose-500/50 shadow-rose-500/10'
          }`}>
            {/* Feedback Status Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400 tracking-wide">✓ CORRECT!</h3>
                    <p className="text-xs font-mono text-emerald-300/80">+1 Point Earned</p>
                  </div>
                </>
              ) : isTimeUp ? (
                <>
                  <AlertCircle className="w-8 h-8 text-amber-400 shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-400 tracking-wide">⏱ TIME UP!</h3>
                    <p className="text-xs font-mono text-amber-300/80">10 Seconds Expired • +0 Points</p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="w-8 h-8 text-rose-400 shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-rose-400 tracking-wide">✕ WRONG ANSWER</h3>
                    <p className="text-xs font-mono text-rose-300/80">+0 Points</p>
                  </div>
                </>
              )}
            </div>

            {/* Answer Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Your Answer */}
              <div className="p-4 rounded-xl bg-[#0a0a0c] border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
                  Your Answer
                </span>
                <div className={`text-sm font-semibold ${
                  selectedOptionIndex === null 
                    ? 'text-amber-400 italic font-mono' 
                    : isCorrect 
                    ? 'text-emerald-400' 
                    : 'text-rose-400'
                }`}>
                  {selectedOptionIndex !== null 
                    ? currentQuestion.options[selectedOptionIndex]
                    : 'No answer submitted (Time expired)'}
                </div>
              </div>

              {/* Correct Answer */}
              <div className="p-4 rounded-xl bg-[#0a0a0c] border border-emerald-500/30 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Correct Answer
                </span>
                <div className="text-sm font-semibold text-white">
                  {currentQuestion.options[currentQuestion.correctAnswerIndex]}
                </div>
              </div>
            </div>

            {/* Educational Explanation Box */}
            <div className="p-5 rounded-xl bg-[#0a0a0c] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                <BookOpen className="w-4 h-4" />
                <span>Why this is correct:</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
