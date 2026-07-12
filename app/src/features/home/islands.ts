export interface IslandDef {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  /** Tile background — gradients ported from v1 styles.css island classes. */
  gradient: string;
  to: string;
  ariaLabel: string;
}

export const ISLANDS: IslandDef[] = [
  {
    id: 'english',
    title: 'English',
    subtitle: 'Phonics and words',
    emoji: '📘',
    gradient: 'linear-gradient(140deg, #ff7650, #ff8f70)',
    to: '/subject/english',
    ariaLabel: 'English Island',
  },
  {
    id: 'math',
    title: 'Math',
    subtitle: 'Count, add, subtract, shapes',
    emoji: '➕',
    gradient: 'linear-gradient(140deg, #17b890, #36c3a2)',
    to: '/subject/math',
    ariaLabel: 'Math Island',
  },
  {
    id: 'kannada',
    title: 'Kannada',
    subtitle: 'Letters and words',
    emoji: 'ಅ',
    gradient: 'linear-gradient(140deg, #558bff, #6aa8ff)',
    to: '/subject/kannada',
    ariaLabel: 'Kannada Island',
  },
  {
    id: 'hindi',
    title: 'हिन्दी',
    subtitle: 'अक्षर और शब्द',
    emoji: 'अ',
    gradient: 'linear-gradient(140deg, #ff9933, #e65c00)',
    to: '/subject/hindi',
    ariaLabel: 'Hindi Island',
  },
  {
    id: 'science',
    title: 'Science',
    subtitle: 'EVS & everyday life',
    emoji: '🔬',
    gradient: 'linear-gradient(140deg, #00b09b, #96c93d)',
    to: '/subject/science',
    ariaLabel: 'Science Island',
  },
  {
    id: 'computer',
    title: 'Computer',
    subtitle: 'Parts, devices & uses',
    emoji: '💻',
    gradient: 'linear-gradient(140deg, #2193b0, #6dd5ed)',
    to: '/subject/computer',
    ariaLabel: 'Computer Island',
  },
  {
    id: 'rhymes',
    title: 'Rhymes',
    subtitle: 'Nursery & Marigold poems',
    emoji: '🎵',
    gradient: 'linear-gradient(140deg, #f7971e, #ffd200)',
    to: '/subject/rhymes',
    ariaLabel: 'Rhymes Island',
  },
  {
    id: 'gk',
    title: 'GK',
    subtitle: 'India, symbols & festivals',
    emoji: '🌍',
    gradient: 'linear-gradient(140deg, #667eea, #764ba2)',
    to: '/subject/gk',
    ariaLabel: 'General Knowledge Island',
  },
  {
    id: 'mental_math',
    title: 'Mental Math',
    subtitle: 'Quick thinking & calculations',
    emoji: '🧠',
    gradient: 'linear-gradient(140deg, #8e2de2, #4a00e0)',
    to: '/subject/mental_math',
    ariaLabel: 'Mental Math Island',
  },
  {
    id: 'fun',
    title: 'Fun Games',
    subtitle: 'Balloon, Memory & more!',
    emoji: '🎮',
    gradient: 'linear-gradient(140deg, #f857a6, #ff5858)',
    to: '/fun',
    ariaLabel: 'Fun Games',
  },
  {
    id: 'stories',
    title: 'Story Time',
    subtitle: 'Lion, Crow, Tortoise & more!',
    emoji: '📖',
    gradient: 'linear-gradient(140deg, #f9a825, #e65100)',
    to: '/stories',
    ariaLabel: 'Story Time',
  },
  {
    id: 'assessment',
    title: 'Assessment',
    subtitle: 'Test your knowledge',
    emoji: '📋',
    gradient: 'linear-gradient(140deg, #ff6b6b, #ff8e72)',
    to: '/assessment',
    ariaLabel: 'Assessment',
  },
];
