import { TopicItem } from '../types';

export const personsQuestions: TopicItem[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'Charles Babbage',
    subtitle: 'Father of the Computer',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    description: 'English polymath, mathematician, and mechanical engineer who originated the concept of a digital programmable mechanical computer.',
    keyPoints: [
      'Designed the Difference Engine to calculate mathematical tables automatically.',
      'Conceptualized the Analytical Engine, incorporating arithmetic logic, branching, and memory.',
      'Widely revered as the "Father of the Computer".'
    ],
    question: 'Which pioneering mechanical computing machine was designed by Charles Babbage in the 19th century?',
    options: [
      'The Analytical Engine',
      'The ENIAC mainframe',
      'The Apple I circuit board',
      'The Altair 8800'
    ],
    correctAnswerIndex: 0,
    explanation: 'Charles Babbage designed the Analytical Engine in 1837, which contained all the basic elements of modern computers including the mill (CPU) and store (memory).'
  },
  {
    id: 2,
    numberStr: '02',
    title: 'Ada Lovelace',
    subtitle: 'First Computer Programmer',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'English mathematician who wrote the first algorithm intended to be executed by Charles Babbage\'s Analytical Engine, becoming the world\'s first computer programmer.',
    keyPoints: [
      'Wrote an algorithm in 1843 to calculate Bernoulli numbers using the Analytical Engine.',
      'Foreseen that computers could manipulate symbols and compose complex music and graphics.',
      'The US Department of Defense named the Ada programming language in her honor.'
    ],
    question: 'Why is Ada Lovelace historically celebrated as the world\'s first computer programmer?',
    options: [
      'She constructed the physical electronic vacuum tubes for ENIAC',
      'She wrote the first documented algorithm intended for machine execution in 1843',
      'She founded the first commercial Silicon Valley software company',
      'She invented the optical fiber internet transmission cable'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ada Lovelace published extensive notes on Babbage\'s Analytical Engine, including Note G which outlined an algorithm for computing Bernoulli numbers—the first published computer program.'
  },
  {
    id: 3,
    numberStr: '03',
    title: 'Alan Turing',
    subtitle: 'Father of Theoretical Computer Science & AI',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    description: 'British mathematician, logician, and cryptanalyst who formalized computation concepts with the Turing Machine and played a pivotal role in cracking Enigma ciphers.',
    keyPoints: [
      'Introduced the Turing Machine model defining computational theory and algorithms.',
      'Developed the Bombe machine at Bletchley Park to break the German Enigma code.',
      'Proposed the famous Turing Test (Imitation Game) for evaluating artificial intelligence.'
    ],
    question: 'What famous conceptual model did Alan Turing formulate to define the fundamental limits of algorithmic computation?',
    options: [
      'The Turing Machine',
      'The Von Neumann bus',
      'The Relational Database Model',
      'The TCP/IP Handshake'
    ],
    correctAnswerIndex: 0,
    explanation: 'Alan Turing introduced the Turing Machine in his 1936 paper, creating the mathematical foundation for modern computer science and theoretical computability.'
  },
  {
    id: 4,
    numberStr: '04',
    title: 'Tim Berners-Lee',
    subtitle: 'Inventor of the World Wide Web',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    description: 'British computer scientist who invented the World Wide Web at CERN in 1989, implementing the first communication between a client and server via HTTP and HTML.',
    keyPoints: [
      'Authored the original HTML, HTTP, and URI/URL specifications.',
      'Created WorldWideWeb, the first web browser and web editor, on a NeXT computer.',
      'Founded the World Wide Web Consortium (W3C) to maintain open web standards.'
    ],
    question: 'Which revolutionary technology did Sir Tim Berners-Lee invent while working at CERN in 1989?',
    options: [
      'The C++ programming language',
      'The World Wide Web (WWW)',
      'The Linux Operating System',
      'The relational database management system'
    ],
    correctAnswerIndex: 1,
    explanation: 'Sir Tim Berners-Lee invented the World Wide Web in 1989, creating HTML, HTTP, URLs, and the first web server and browser to share information globally.'
  },
  {
    id: 5,
    numberStr: '05',
    title: 'Bill Gates',
    subtitle: 'Co-founder of Microsoft & PC Pioneer',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    description: 'American business magnate, software developer, and philanthropist who co-founded Microsoft in 1975, leading the personal computing software revolution with MS-DOS and Windows.',
    keyPoints: [
      'Co-founded Microsoft with Paul Allen in Albuquerque, New Mexico.',
      'Licensed MS-DOS to IBM in 1981, establishing an industry-standard PC platform.',
      'Spearheaded the development and mass adoption of Microsoft Windows and Office suites.'
    ],
    question: 'Which software company did Bill Gates co-found with Paul Allen in 1975?',
    options: [
      'Apple Computer',
      'Microsoft Corporation',
      'Oracle Systems',
      'Sun Microsystems'
    ],
    correctAnswerIndex: 1,
    explanation: 'Bill Gates and Paul Allen founded Microsoft in 1975 to develop and sell BASIC interpreters for the Altair 8800, later creating MS-DOS and Windows.'
  },
  {
    id: 6,
    numberStr: '06',
    title: 'Steve Jobs',
    subtitle: 'Co-founder of Apple & Tech Visionary',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    description: 'American visionary entrepreneur and industrial designer who co-founded Apple, revolutionizing personal computing, animated movies (Pixar), music (iPod), and smartphones (iPhone).',
    keyPoints: [
      'Co-founded Apple Computer with Steve Wozniak in 1976, launching Apple I and II.',
      'Introduced the original Macintosh in 1984, popularizing graphical user interfaces (GUI) and mice.',
      'Unveiled transformational consumer hardware including the iMac, iPod, iPhone, and iPad.'
    ],
    question: 'Which revolutionary personal computer with a commercial Graphical User Interface (GUI) was introduced by Steve Jobs in 1984?',
    options: [
      'Apple Macintosh',
      'IBM PC 5150',
      'Commodore 64',
      'ZX Spectrum'
    ],
    correctAnswerIndex: 0,
    explanation: 'Steve Jobs unveiled the Apple Macintosh in 1984, bringing mouse-driven graphical user interfaces, bitmapped graphics, and desktop typography to the masses.'
  },
  {
    id: 7,
    numberStr: '07',
    title: 'Dennis Ritchie',
    subtitle: 'Creator of C & Co-creator of UNIX',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    description: 'American computer scientist at Bell Labs who created the C programming language and co-developed the UNIX operating system with Ken Thompson.',
    keyPoints: [
      'Created C language between 1969 and 1973, which formed the basis for C++, Java, C#, and JavaScript.',
      'Co-developed UNIX, shaping modern operating system concepts like filesystems and pipes.',
      'Co-authored the landmark textbook "The C Programming Language" (known as K&R).'
    ],
    question: 'Dennis Ritchie is widely renowned for creating which foundational programming language at Bell Labs?',
    options: [
      'Python',
      'The C Programming Language',
      'Ruby on Rails',
      'Swift'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dennis Ritchie created the C programming language at Bell Labs between 1969 and 1973, which remains one of the most influential and widely used languages in history.'
  },
  {
    id: 8,
    numberStr: '08',
    title: 'James Gosling',
    subtitle: 'Father of Java',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    description: 'Canadian computer scientist best known as the founder and lead designer of the Java programming language while working at Sun Microsystems.',
    keyPoints: [
      'Designed Java and its original compiler and virtual machine (JVM) in 1994.',
      'Championed the "Write Once, Run Anywhere" (WORA) cross-platform paradigm.',
      'Implemented Gosling Emacs and contributed extensively to windowing systems.'
    ],
    question: 'James Gosling is acclaimed as the lead architect and father of which programming language?',
    options: [
      'Java',
      'PHP',
      'Kotlin',
      'Rust'
    ],
    correctAnswerIndex: 0,
    explanation: 'James Gosling created the Java programming language at Sun Microsystems in 1994, introducing the Java Virtual Machine (JVM) for platform-independent computing.'
  },
  {
    id: 9,
    numberStr: '09',
    title: 'Linus Torvalds',
    subtitle: 'Creator of Linux & Git',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    description: 'Finnish software engineer who developed the open-source Linux operating system kernel in 1991 and created the Git distributed version control system in 2005.',
    keyPoints: [
      'Announced Linux in August 1991 as a free open-source alternative to MINIX.',
      'Created Git in 2005 to manage Linux kernel development among distributed developers.',
      'Continues to serve as the chief coordinator and benevolent lead of Linux kernel development.'
    ],
    question: 'Which open-source operating system kernel and version control system did Linus Torvalds create?',
    options: [
      'Linux Kernel and Git',
      'FreeBSD and SVN',
      'Windows NT and Mercurial',
      'Solaris and CVS'
    ],
    correctAnswerIndex: 0,
    explanation: 'Linus Torvalds created the Linux kernel in 1991 (powers cloud servers, supercomputers, Android) and the Git distributed version control system in 2005.'
  },
  {
    id: 10,
    numberStr: '10',
    title: 'John von Neumann',
    subtitle: 'Pioneer of Computer Architecture',
    category: 'persons',
    categoryLabel: 'Important Persons',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80',
    description: 'Hungarian-American mathematician and physicist who described the stored-program computer architecture that serves as the blueprint for almost all modern computers.',
    keyPoints: [
      'Authored the 1945 "First Draft of a Report on the EDVAC", detailing modern CPU/RAM structure.',
      'Pioneered stored-program architecture where instructions and data share the same memory space.',
      'Made foundational contributions to quantum mechanics, game theory, and cellular automata.'
    ],
    question: 'What foundational architectural principle is named after John von Neumann in computing?',
    options: [
      'Stored-Program Architecture (shared memory for instructions and data)',
      'The Quantum Superposition Bus',
      'Neural Network Backpropagation',
      'Peer-to-Peer Blockchain Consensus'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Von Neumann architecture established the design model where program instructions and data reside in the same read-write memory, processed sequentially by a CPU.'
  }
];
