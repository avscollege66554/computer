import { TopicId, TopicItem } from '../types';
import { hardwareQuestions } from './hardwareData';
import { personsQuestions } from './personsData';
import { logoQuestions } from './logosData';
import { sloganQuestions } from './slogansData';

export interface TopicMeta {
  id: TopicId;
  title: string;
  subtitle: string;
  sectionCode: string;
  description: string;
  iconName: string;
  accentColor: string;
  textColor: string;
  barColor: string;
  borderColor: string;
  glowColor: string;
  glowClass: string;
  badgeBg: string;
  itemCount: number;
}

export const TOPICS_META: Record<TopicId, TopicMeta> = {
  hardware: {
    id: 'hardware',
    title: 'Hardware',
    subtitle: 'Processors, Storage, and Components',
    sectionCode: 'Section 01',
    description: 'Explore the fundamental electronic and electromechanical components that build modern computer systems.',
    iconName: 'Cpu',
    accentColor: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    barColor: 'bg-cyan-500',
    borderColor: 'border-white/10 hover:border-cyan-500/60',
    glowColor: 'shadow-cyan-500/10 hover:shadow-cyan-500/25',
    glowClass: 'glow-cyan',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    itemCount: 10
  },
  persons: {
    id: 'persons',
    title: 'Persons',
    subtitle: 'Visionaries and Pioneers of Computing',
    sectionCode: 'Section 02',
    description: 'Discover the visionary mathematicians, engineers, and founders who shaped the digital world.',
    iconName: 'Users',
    accentColor: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    barColor: 'bg-purple-500',
    borderColor: 'border-white/10 hover:border-purple-500/60',
    glowColor: 'shadow-purple-500/10 hover:shadow-purple-500/25',
    glowClass: 'glow-purple',
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    itemCount: 10
  },
  logos: {
    id: 'logos',
    title: 'Logos',
    subtitle: 'Corporate Visual Identities & Brands',
    sectionCode: 'Section 03',
    description: 'Test your visual recognition of iconic computing emblems, hardware brands, and software marks.',
    iconName: 'ShieldCheck',
    accentColor: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    barColor: 'bg-purple-500',
    borderColor: 'border-white/10 hover:border-purple-500/60',
    glowColor: 'shadow-purple-500/10 hover:shadow-purple-500/25',
    glowClass: 'glow-purple',
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    itemCount: 10
  },
  slogans: {
    id: 'slogans',
    title: 'Slogans',
    subtitle: 'Famous Catchphrases & Identities',
    sectionCode: 'Section 04',
    description: 'Challenge your knowledge of iconic tech taglines, corporate mottos, and transformational campaigns.',
    iconName: 'Tag',
    accentColor: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    barColor: 'bg-cyan-500',
    borderColor: 'border-white/10 hover:border-cyan-500/60',
    glowColor: 'shadow-cyan-500/10 hover:shadow-cyan-500/25',
    glowClass: 'glow-cyan',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    itemCount: 10
  }
};

export function getQuestionsByTopic(topicId: TopicId): TopicItem[] {
  switch (topicId) {
    case 'hardware':
      return [...hardwareQuestions];
    case 'persons':
      return [...personsQuestions];
    case 'logos':
      return [...logoQuestions];
    case 'slogans':
      return [...sloganQuestions];
    default:
      return [...hardwareQuestions];
  }
}

export function getAllTopicItems(): Record<TopicId, TopicItem[]> {
  return {
    hardware: hardwareQuestions,
    persons: personsQuestions,
    logos: logoQuestions,
    slogans: sloganQuestions
  };
}
