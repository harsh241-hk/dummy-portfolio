import { Project, Experience, Achievement, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Kapuriya Harsh',
  title: 'Computer Science Undergrad',
  education: {
    degree: 'Bachelor of Engineering in Computer Science (BE-2, 2nd Year)',
    institution: 'The Maharaja Sayajirao University of Baroda',
    location: 'Vadodara, Gujarat',
    period: '2024 - Present',
    gpa: '8.7/10 (Current)'
  },
  bio: 'A passionate 2nd-year Computer Science student at MSU Baroda, specializing in full-stack web development, community building, and competitive programming. Dedicated to crafting visually stunning, ultra-performant, and highly intuitive digital experiences with a strong eye for detail.',
  roles: [
    'Club President @ Dev Infinity Club',
    'Web Team Member @ Code Vimarsh Club',
    'Full Stack Web Developer',
    'Competitive Programming Enthusiast'
  ],
  socials: {
    github: 'https://github.com/kapuriyaharsh',
    linkedin: 'https://linkedin.com/in/kapuriyaharsh',
    email: 'mailto:kapuriyaharsh8080@gmail.com',
    emailRaw: 'kapuriyaharsh8080@gmail.com',
    formspreeId: 'mgegnnzo' // Configurable Formspree form ID
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'devinfinity-hub',
    title: 'DevInfinity Hub',
    description: 'A dynamic collaborative hub and resource-sharing platform built for the Dev Infinity Club ecosystem.',
    longDescription: 'Created as a central command platform for 200+ developer club members. It streamlines internal events schedules, features an interactive calendar, provides curated peer-to-peer learning guides, and features group study channels. Leverages modern real-time capabilities to keep active club activities fully synced.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/kapuriyaharsh/devinfinity-hub',
    demoUrl: 'https://devinfinity-hub.vercel.app',
    category: 'web',
    featured: true,
    imageAccent: 'from-aurora-violet to-aurora-pink'
  },
  {
    id: 'codevimarsh-portal',
    title: 'Code Vimarsh Portal',
    description: 'An advanced event registration and dynamic leaderboards portal for the flagship Code Vimarsh competitions.',
    longDescription: 'Designed and built the registration engine and live result analytics system for the Code Vimarsh coding club. Includes a responsive team formation wizard, custom SVG certificate generator for participants, real-time submission statistics panels, and administrative monitoring dashboards.',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Formspree'],
    githubUrl: 'https://github.com/kapuriyaharsh/codevimarsh-portal',
    demoUrl: 'https://codevimarsh.vercel.app',
    category: 'web',
    featured: true,
    imageAccent: 'from-aurora-cyan to-aurora-violet'
  },
  {
    id: 'auraspace',
    title: 'AuraSpace Ambient Synthesizer',
    description: 'An immersive, premium browser-based productivity dashboard and multi-channel background noise generator.',
    longDescription: 'A sensory productivity workstation combining real-time synthesized ambient sounds (rain, forest, lo-fi, white noise) with an interactive customizable visualizer. Integrates a minimalist local Pomodoro tracker, floating draggable scratchpads, and keyboard-driven layout controls styled in a glowing frosted aesthetic.',
    tech: ['React', 'Web Audio API', 'Tailwind CSS', 'Framer Motion', 'Local Storage'],
    githubUrl: 'https://github.com/kapuriyaharsh/auraspace',
    demoUrl: 'https://auraspace-focus.vercel.app',
    category: 'ai',
    featured: true,
    imageAccent: 'from-aurora-pink to-aurora-amber'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'dev-infinity',
    role: 'Club President',
    organization: 'Dev Infinity Club',
    location: 'MSU Baroda',
    period: 'Jul 2025 - Present',
    bullets: [
      'Leading a vibrant community of over 200+ aspiring developers, directing core operations, and orchestrating weekly dev workshops.',
      'Organizing college-wide coding hackathons, technical speaker sessions, and project exhibition bootcamps to bridge academic theory with industry standards.',
      'Establishing cross-club partnerships to increase engagement, mentoring 50+ freshman students on modern web stack architectures.'
    ],
    logoText: 'DI',
    logoBg: 'bg-gradient-to-br from-aurora-violet to-aurora-pink'
  },
  {
    id: 'code-vimarsh',
    role: 'Web Team Lead & Core Member',
    organization: 'Code Vimarsh Club',
    location: 'MSU Baroda',
    period: 'Sep 2024 - Present',
    bullets: [
      'Developing and managing the official competition portals, resulting in seamless registration and score coordination for over 500+ student contestants.',
      'Collaborating with design and public relations teams to construct elegant responsive web assets and promotional landing micro-sites.',
      'Spearheading open-source initiatives within the college, and conducting regular peer coding circles focused on hands-on development.'
    ],
    logoText: 'CV',
    logoBg: 'bg-gradient-to-br from-aurora-cyan to-aurora-violet'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon Finalist',
    subtitle: 'Ministry of Education, Govt of India',
    period: 'Dec 2025',
    description: 'Designed and presented an innovative full-stack software prototype to tackle a national government-sponsored problem statement. Highly recognized by panel evaluators for visual execution and fluid user interaction models.',
    iconName: 'Award'
  },
  {
    id: 'msu-webdesign-1st',
    title: '1st Place Winner - MSU Web Design Hackathon',
    subtitle: 'The Maharaja Sayajirao University of Baroda',
    period: 'Apr 2025',
    description: 'Conceived, designed, and coded a responsive climate-impact analytical application with fully integrated local database logging within a compressed 24-hour timeline, competing against 30+ cross-department teams.',
    iconName: 'Trophy'
  },
  {
    id: 'cp-specialist',
    title: 'Codeforces & Competitive Programming Milestones',
    subtitle: 'Global Coding Platforms',
    period: 'Ongoing',
    description: 'Solved over 300+ problems across Codeforces, LeetCode, and HackerRank. Maintain a competitive standing, frequently ranking in the top tier of weekly and bi-weekly algorithmic challenges.',
    iconName: 'Code'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: 'Expert' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'C++', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'HTML5 & CSS3', level: 'Expert' },
      { name: 'SQL / PostgreSQL', level: 'Advanced' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'Node.js', level: 'Expert' },
      { name: 'Express', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Framer Motion', level: 'Advanced' },
      { name: 'Next.js', level: 'Intermediate' }
    ]
  },
  {
    title: 'Tools & Version Control',
    skills: [
      { name: 'Git & GitHub', level: 'Expert' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Vite', level: 'Expert' },
      { name: 'Postman', level: 'Expert' },
      { name: 'Vercel / Netlify', level: 'Advanced' },
      { name: 'Docker', level: 'Beginner' }
    ]
  }
];
