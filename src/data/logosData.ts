import { TopicItem } from '../types';

export const logoQuestions: TopicItem[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'Four-Color Window Tile Logo',
    subtitle: 'Identify the Tech Giant',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'microsoft',
    description: 'A minimalist four-color geometric square grid consisting of red, green, blue, and yellow quadrants, representing software, Xbox, Windows, and hardware products.',
    keyPoints: [
      'Introduced in August 2012 alongside the Metro/Modern design language redesign.',
      'Red represents Office, Green represents Xbox/Gaming, Blue represents Windows/Azure, Yellow represents Bing/Hardware.',
      'One of the most recognized corporate marks worldwide.'
    ],
    question: 'Which global technology corporation is represented by this iconic four-color square grid logo?',
    options: [
      'Microsoft',
      'Alphabet / Google',
      'Sony Interactive',
      'Adobe Systems'
    ],
    correctAnswerIndex: 0,
    explanation: 'This 4-color square emblem is the official corporate logo of Microsoft, introduced in 2012 to unify Windows, Office, Xbox, and Surface.'
  },
  {
    id: 2,
    numberStr: '02',
    title: 'Bitten Fruit Silhouette Logo',
    subtitle: 'Identify the Brand',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'apple',
    description: 'A clean monochrome silhouette of an apple with a single bite taken out of the right side and a tilted leaf at the top, designed by Rob Janoff in 1977.',
    keyPoints: [
      'Designed by Rob Janoff in 1977, originally featuring rainbow stripes.',
      'The bite was added specifically so viewers would not confuse it with a cherry or tomato.',
      'Evolved into sleek monochrome and metallic finishes on consumer devices.'
    ],
    question: 'Which multinational electronics and software company uses this famous bitten fruit emblem?',
    options: [
      'BlackBerry',
      'Apple',
      'Orange Telecom',
      'Raspberry Pi Foundation'
    ],
    correctAnswerIndex: 1,
    explanation: 'Designed by Rob Janoff in 1977, the bitten apple logo is the world-renowned visual trademark of Apple Inc.'
  },
  {
    id: 3,
    numberStr: '03',
    title: 'Four-Color Lettermark & Search G',
    subtitle: 'Identify the Search Giant',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'google',
    description: 'A multi-colored circular emblem combining primary blue, red, yellow, and secondary green hues in a clean sans-serif geometric composition.',
    keyPoints: [
      'Features a deliberate color sequence: blue, red, yellow, blue, green, red to show the company "doesn\'t follow rules".',
      'Refreshed in 2015 using the Product Sans geometric typeface.',
      'Powers the world\'s most visited search engine, Android OS, and cloud tools.'
    ],
    question: 'Which search and cloud technology leader is symbolized by this vibrant four-colored geometric logo?',
    options: [
      'Yahoo!',
      'Google',
      'Baidu',
      'DuckDuckGo'
    ],
    correctAnswerIndex: 1,
    explanation: 'The multi-colored "G" and wordmark with blue, red, yellow, and green is the signature emblem of Google, unveiled with its 2015 brand redesign.'
  },
  {
    id: 4,
    numberStr: '04',
    title: 'Cyan Dot & Lowercase Wordmark',
    subtitle: 'Identify the Semiconductor Brand',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'intel',
    description: 'A modern blue and cyan badge featuring minimalist lowercase typography with a signature square accent above the letter "i".',
    keyPoints: [
      'World\'s leading x86 microprocessor designer and manufacturer founded by Gordon Moore and Robert Noyce.',
      'Known globally for the "Intel Inside" campaign and 5-note mnemonic sonic brand.',
      'Refreshed in 2020 with clean geometric lines and vibrant shades of blue.'
    ],
    question: 'Which pioneering semiconductor processor manufacturer is represented by this blue badge?',
    options: [
      'Qualcomm',
      'Intel',
      'Broadcom',
      'Texas Instruments'
    ],
    correctAnswerIndex: 1,
    explanation: 'This signature blue brand identity belongs to Intel Corporation, the pioneer of x86 microprocessors like the 8086, Pentium, and Core series.'
  },
  {
    id: 5,
    numberStr: '05',
    title: 'Vibrant Green Spiral & Eye Mark',
    subtitle: 'Identify the GPU & AI Giant',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'nvidia',
    description: 'A distinctive neon green eye-shaped logarithmic spiral curve against dark styling, symbolizing vision, graphics rendering, and computational foresight.',
    keyPoints: [
      'Co-founded in 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem.',
      'Pioneered the modern GPU (GeForce 256 in 1999) and CUDA parallel computing architecture.',
      'Powers the majority of modern AI accelerators, deep learning models, and gaming rigs.'
    ],
    question: 'Which graphics processing unit (GPU) and AI computing leader is represented by this green spiral emblem?',
    options: [
      'AMD Radeon',
      'NVIDIA',
      'Arm Holdings',
      'Imagination Technologies'
    ],
    correctAnswerIndex: 1,
    explanation: 'The iconic green logarithmic spiral "eye" is the trademark of NVIDIA Corporation, the market leader in graphics cards and AI computing chips.'
  },
  {
    id: 6,
    numberStr: '06',
    title: 'Tux the Friendly Penguin',
    subtitle: 'Identify the Open-Source OS',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'linux',
    description: 'A sitting, cheerful penguin named "Tux", created in 1996 by Larry Ewing using GIMP following a suggestion by Linus Torvalds.',
    keyPoints: [
      'Created by Larry Ewing in 1996 as the official mascot and logo of the Linux kernel.',
      'Named "Tux" as an abbreviation of "(T)orvalds (U)ni(X)".',
      'Symbolizes freedom, open-source software collaboration, and global developer community.'
    ],
    question: 'Which famous open-source operating system kernel uses Tux the penguin as its official mascot and logo?',
    options: [
      'OpenBSD',
      'Linux',
      'Solaris',
      'Minix'
    ],
    correctAnswerIndex: 1,
    explanation: 'Tux the penguin, created in 1996 by Larry Ewing, is the official mascot and universally recognized logo of the Linux operating system kernel.'
  },
  {
    id: 7,
    numberStr: '07',
    title: 'Green Bugdroid Robot with Antennae',
    subtitle: 'Identify the Mobile OS',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'android',
    description: 'A vibrant green robotic character with a semicircular head, twin antenna rods, and rounded rectangular torso, designed by Irina Blok in 2007.',
    keyPoints: [
      'Designed by Irina Blok in 2007 under an open-source Creative Commons license.',
      'Nicknamed "Bugdroid" or simply the "Android Robot".',
      'The world\'s most widely installed mobile operating system powering billions of smartphones.'
    ],
    question: 'Which mobile operating system is internationally identified by this friendly green robot character?',
    options: [
      'Symbian',
      'Android',
      'Windows Phone',
      'webOS'
    ],
    correctAnswerIndex: 1,
    explanation: 'Designed by Irina Blok in 2007, the green robot Bugdroid is the official mascot and logo of Google\'s Android mobile operating system.'
  },
  {
    id: 8,
    numberStr: '08',
    title: 'Eight Horizontal Striped Blue Monogram',
    subtitle: 'Identify "Big Blue"',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'ibm',
    description: 'An iconic 8-bar striped logotype created by legendary graphic designer Paul Rand in 1972, representing speed, dynamism, and institutional authority.',
    keyPoints: [
      'Designed by graphic design icon Paul Rand in 1972 using eight horizontal stripes.',
      'Stripes were introduced to suggest scan lines, speed, and precision electronics.',
      'Famously known as "Big Blue", a cornerstone of computing history for over a century.'
    ],
    question: 'Which historic computing enterprise, nicknamed "Big Blue", uses this 8-bar striped Paul Rand logotype?',
    options: [
      'IBM (International Business Machines)',
      'Hewlett-Packard',
      'Oracle Corporation',
      'Digital Equipment Corporation (DEC)'
    ],
    correctAnswerIndex: 0,
    explanation: 'The 8-bar striped blue logotype was designed by Paul Rand in 1972 for IBM (International Business Machines).'
  },
  {
    id: 9,
    numberStr: '09',
    title: 'Slanted Italicized Blue Circle Mark',
    subtitle: 'Identify the PC & Printer Giant',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'hp',
    description: 'A blue circular badge enclosing lowercase, high-angle italicized ascenders and descenders representing the founders\' surnames.',
    keyPoints: [
      'Founded in a Palo Alto garage in 1939 by Bill Hewlett and David Packard.',
      'The letters "h" and "p" feature diagonal tails extending beyond the circular frame.',
      'Global market leader in personal computers, workstations, and laser/inkjet printing.'
    ],
    question: 'Which Silicon Valley pioneer company, founded in a garage by Bill and Dave, uses this circular emblem?',
    options: [
      'Lenovo',
      'HP (Hewlett-Packard)',
      'Asus',
      'Acer'
    ],
    correctAnswerIndex: 1,
    explanation: 'The iconic blue circle with italicized lowercase letters represents HP (Hewlett-Packard), founded in 1939 by Bill Hewlett and Dave Packard.'
  },
  {
    id: 10,
    numberStr: '10',
    title: 'Tilted "E" Inside Blue Circle',
    subtitle: 'Identify the Computer Maker',
    category: 'logos',
    categoryLabel: 'Identify the Logo',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    logoSvgKey: 'dell',
    description: 'A bold, solid blue circular emblem featuring clean typography with a trademark slanted, tilted letter "E" at an angle of roughly 20 degrees.',
    keyPoints: [
      'Founded in 1984 by Michael Dell from his University of Texas dorm room.',
      'The slanted "E" was designed by Siegel & Gale in 1989 to symbolize "turning the world on its ear".',
      'Pioneered the direct-to-consumer custom PC build and logistics model.'
    ],
    question: 'Which major computer and server manufacturer features this distinctive slanted letter "E" in its circular logo?',
    options: [
      'Dell Technologies',
      'Gateway 2000',
      'Compaq',
      'Toshiba'
    ],
    correctAnswerIndex: 0,
    explanation: 'The tilted "E" inside a blue circle is the signature logo of Dell Technologies, representing founder Michael Dell\'s goal to turn the PC industry on its ear.'
  }
];
