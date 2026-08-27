import { TopicItem } from '../types';

export const hardwareQuestions: TopicItem[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'CPU',
    subtitle: 'Central Processing Unit',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    description: 'The primary component of a computer that executes instructions comprising a computer program. Often referred to as the "brain" of the computer.',
    keyPoints: [
      'Executes fetch-decode-execute instruction cycles at billions of cycles per second (GHz).',
      'Consists of the Arithmetic Logic Unit (ALU), Control Unit (CU), and Cache memory registers.',
      'Major architectures include x86/x64 (Intel, AMD) and ARM (Apple Silicon, Qualcomm).'
    ],
    question: 'What fundamental role does the Central Processing Unit (CPU) perform inside a computer?',
    options: [
      'Provides permanent long-term file storage for applications',
      'Executes program instructions and processes arithmetic and logic operations',
      'Supplies direct electrical AC power from the wall outlet',
      'Transmits optical radio signals to wireless peripherals'
    ],
    correctAnswerIndex: 1,
    explanation: 'The CPU is the central computing engine that fetches instructions from memory, decodes them, and executes arithmetic/logical operations.'
  },
  {
    id: 2,
    numberStr: '02',
    title: 'RAM',
    subtitle: 'Random Access Memory',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80',
    description: 'High-speed volatile primary memory used by the operating system and running software to store actively used data and code for rapid read/write access.',
    keyPoints: [
      'Volatile memory: loses all stored data when electrical power is turned off.',
      'Provides direct byte-level random access significantly faster than storage drives.',
      'Modern computer systems typically use DDR4 and DDR5 SDRAM modules.'
    ],
    question: 'Why is RAM classified as "volatile" memory in computer architecture?',
    options: [
      'It can catch fire if subjected to high temperatures',
      'It automatically erases files when disk storage gets full',
      'It requires continuous power and loses its data immediately when turned off',
      'It only allows data to be read sequentially from the beginning'
    ],
    correctAnswerIndex: 2,
    explanation: 'Volatile memory requires electrical power to maintain its stored information. When the computer is powered down, all data stored in RAM is cleared.'
  },
  {
    id: 3,
    numberStr: '03',
    title: 'ROM',
    subtitle: 'Read-Only Memory',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    description: 'Non-volatile semiconductor memory containing permanent or semi-permanent startup firmware (such as BIOS or UEFI) essential for booting the computer.',
    keyPoints: [
      'Non-volatile memory: retains written data permanently even without power.',
      'Houses the Power-On Self-Test (POST) and initial bootloader routines.',
      'Modern systems use Flash EEPROM, allowing firmware updates to be written.'
    ],
    question: 'What is the primary function of ROM (Read-Only Memory) on a computer motherboard?',
    options: [
      'Holding the essential boot firmware (BIOS/UEFI) required to start the PC',
      'Storing downloaded high-definition video files permanently',
      'Calculating 3D vector graphics rendering in video games',
      'Managing physical ethernet network cables and Wi-Fi packets'
    ],
    correctAnswerIndex: 0,
    explanation: 'ROM stores essential boot firmware like BIOS/UEFI that checks system hardware and bootstraps the operating system when the computer is turned on.'
  },
  {
    id: 4,
    numberStr: '04',
    title: 'Motherboard',
    subtitle: 'Main System Circuit Board',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    description: 'The main printed circuit board (PCB) that houses and interconnects the CPU, memory, expansion slots, power delivery, and peripheral interfaces.',
    keyPoints: [
      'Contains high-speed bus traces (PCIe, SATA, USB) connecting components.',
      'Features the CPU socket (e.g., LGA, AM5) and chipset controller.',
      'Equipped with power delivery VRMs (Voltage Regulator Modules) for clean power.'
    ],
    question: 'Which component serves as the central communication backbone connecting the CPU, RAM, and storage?',
    options: [
      'Uninterruptible Power Supply (UPS)',
      'The Motherboard (Mainboard)',
      'The Graphics Processing Unit (GPU)',
      'The Heat Sink and Cooling Fan'
    ],
    correctAnswerIndex: 1,
    explanation: 'The motherboard is the foundational printed circuit board containing electrical circuitry and buses that allow all hardware parts to communicate.'
  },
  {
    id: 5,
    numberStr: '05',
    title: 'Keyboard',
    subtitle: 'Primary Alphanumeric Input Device',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    description: 'An electromechanical input device containing an array of switches and keys used to input alphanumeric text, numeric symbols, and system commands.',
    keyPoints: [
      'Employs either membrane switches, mechanical key switches, or optical triggers.',
      'Key matrices scan row and column intersections to generate key scan codes.',
      'Standard layout is QWERTY, with variants like AZERTY, Dvorak, and Colemak.'
    ],
    question: 'How does a computer keyboard detect which specific key has been pressed by the user?',
    options: [
      'Through micro-cameras situated beneath each individual keycap',
      'By scanning an electrical switch matrix for closed circuit coordinates',
      'By measuring the atmospheric pressure displacement in the chassis',
      'By detecting ambient temperature shifts on keycap surfaces'
    ],
    correctAnswerIndex: 1,
    explanation: 'A keyboard utilizes a grid circuit matrix where pressing a key closes a circuit between a row and column, signaling the specific scan code to the controller.'
  },
  {
    id: 6,
    numberStr: '06',
    title: 'Mouse',
    subtitle: 'Handheld Pointing & Cursor Device',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    description: 'A handheld pointing peripheral that detects two-dimensional planar motion relative to a surface and translates it into graphic cursor movement.',
    keyPoints: [
      'Modern mice use optical LED or laser sensors capturing surface snapshots (DPI/CPI).',
      'Invented by Douglas Engelbart in 1964 using wooden housing and orthogonal wheels.',
      'Includes left/right buttons, clickable scroll wheel, and optional side buttons.'
    ],
    question: 'Who is recognized for inventing the first computer mouse prototype in 1964?',
    options: [
      'Douglas Engelbart',
      'Steve Wozniak',
      'Grace Hopper',
      'Linus Torvalds'
    ],
    correctAnswerIndex: 0,
    explanation: 'Douglas Engelbart invented the computer mouse in 1964 at Stanford Research Institute (SRI), demonstrated famously in the 1968 "Mother of All Demos".'
  },
  {
    id: 7,
    numberStr: '07',
    title: 'Monitor',
    subtitle: 'Visual Display Output Device',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    description: 'An electronic visual display terminal that outputs images, text, and user interfaces generated by a graphics card through matrix pixel illumination.',
    keyPoints: [
      'Common technologies: IPS/VA LCD (with LED backlights), OLED, and QD-OLED.',
      'Key specifications include Resolution (1080p, 4K), Refresh Rate (Hz), and Aspect Ratio.',
      'Connects via digital interfaces such as HDMI, DisplayPort, and USB-C/Thunderbolt.'
    ],
    question: 'What metric represents how many times per second a monitor refreshes its displayed image?',
    options: [
      'Dots Per Inch (DPI)',
      'Refresh Rate measured in Hertz (Hz)',
      'Thermal Design Power (TDP) in Watts',
      'Bus Bandwidth in Gigabytes per second'
    ],
    correctAnswerIndex: 1,
    explanation: 'Refresh rate (measured in Hertz, Hz) specifies how many times per second the display redraws the screen image (e.g. 60Hz, 120Hz, 144Hz, 240Hz).'
  },
  {
    id: 8,
    numberStr: '08',
    title: 'Printer',
    subtitle: 'Hard Copy Output Device',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    description: 'An external hardware output device that accepts text and graphic output from a computer and transfers the data onto physical media such as paper.',
    keyPoints: [
      'Laser printers use toner powder, electrostatic drums, and fuser heaters.',
      'Inkjet printers spray microscopic droplets of liquid ink through precision nozzles.',
      'Print resolution is commonly measured in DPI (Dots Per Inch).'
    ],
    question: 'Which type of printer uses an electrostatic drum, laser beam, and dry toner powder?',
    options: [
      'Inkjet Printer',
      'Laser Printer',
      'Dot Matrix Impact Printer',
      'Thermal Receipt Printer'
    ],
    correctAnswerIndex: 1,
    explanation: 'Laser printers use a laser beam to create an electrostatic image on a photoconductive drum, attracting toner powder which is then fused onto paper with heat.'
  },
  {
    id: 9,
    numberStr: '09',
    title: 'Hard Disk',
    subtitle: 'Hard Disk Drive (HDD)',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    description: 'An electromechanical non-volatile data storage device using rotating magnetic platters and actuator read/write heads to store digital data.',
    keyPoints: [
      'Platters spin at high rotational speeds (e.g., 5400 RPM, 7200 RPM, 15000 RPM).',
      'Stores data magnetically across concentric circular tracks divided into sectors.',
      'Provides high storage capacity at an economical cost per gigabyte.'
    ],
    question: 'How do traditional Hard Disk Drives (HDDs) physically record digital information?',
    options: [
      'By burning microscopic pits into aluminum foil with UV lasers',
      'By magnetizing microscopic ferromagnetic particles on spinning platters',
      'By charging floating-gate transistors inside solid flash cells',
      'By etching analog waveforms on quartz crystal matrices'
    ],
    correctAnswerIndex: 1,
    explanation: 'HDDs record data by altering the magnetic orientation of microscopic domains on rapidly rotating ferromagnetic platters via electromagnetic read/write heads.'
  },
  {
    id: 10,
    numberStr: '10',
    title: 'SSD',
    subtitle: 'Solid State Drive',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    description: 'A high-speed non-volatile solid-state storage device that uses semiconductor NAND flash memory assemblies with no moving mechanical parts.',
    keyPoints: [
      'Zero moving mechanical components, providing near-instant access times (<0.1ms).',
      'Utilizes NVMe protocols over PCIe lanes or SATA III buses for high transfer speeds.',
      'Significantly more shock-resistant and power-efficient than mechanical HDDs.'
    ],
    question: 'What gives Solid State Drives (SSDs) their speed advantage over mechanical Hard Disk Drives (HDDs)?',
    options: [
      'They feature platters spinning at more than 100,000 RPM',
      'They utilize semiconductor NAND flash memory with zero moving mechanical parts',
      'They connect exclusively through analog audio ribbon cables',
      'They require cryogenic liquid cooling to access data'
    ],
    correctAnswerIndex: 1,
    explanation: 'SSDs use electronic NAND flash memory chips and a dedicated controller, eliminating the mechanical seek and rotational latency inherent to HDDs.'
  }
];
