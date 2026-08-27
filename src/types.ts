export type TopicId = 'hardware' | 'persons' | 'logos' | 'slogans';

export type AppView = 
  | 'HOME'
  | 'TOPIC_LIST'
  | 'QUESTION'
  | 'ANSWER'
  | 'RESULT'
  | 'REVIEW';

export interface QuizOption {
  id: number;
  text: string;
}

export interface TopicItem {
  id: number;
  numberStr: string; // e.g. "01", "02"
  title: string;
  subtitle: string;
  category: TopicId;
  categoryLabel: string;
  image: string;
  logoSvgKey?: string; // For crisp vector logos
  description: string;
  keyPoints: string[];
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0, 1, 2, or 3
  explanation: string;
}

export interface UserAnswerRecord {
  questionIndex: number;
  item: TopicItem;
  selectedOptionIndex: number | null; // null if time up
  isCorrect: boolean;
  isTimeUp: boolean;
  timeSpentSeconds: number;
}

export interface QuizState {
  topicId: TopicId;
  questions: TopicItem[];
  currentIndex: number;
  selectedOption: number | null;
  isLocked: boolean;
  status: 'QUESTION' | 'ANSWER' | 'COMPLETED';
  questionTimeRemaining: number; // starts at 10
  answerTimeRemaining: number; // starts at 5
  answers: UserAnswerRecord[];
  score: number;
  isSingleItemTest?: boolean;
}

export type PerformanceTier = 
  | 'COMPUTER MASTER'
  | 'EXCELLENT'
  | 'GREAT JOB'
  | 'GOOD EFFORT'
  | 'KEEP LEARNING';
