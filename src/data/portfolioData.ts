import { Project, SkillGroup, CareerInterest, Certification, ContactDetails } from '../types';

export const portfolioContact: ContactDetails = {
  name: 'PRATHAM P. MADANTHYAR',
  role: '<STUDENT DEVELOPER />',
  degree: 'B.Tech – Artificial Intelligence & Data Science',
  university: 'REVA University, Bengaluru',
  location: 'Bengaluru, Karnataka, India',
  email: 'prathampmrocker@gmail.com',
  phone: '+91 9606209954',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
};

export const careerInterests: CareerInterest[] = [
  { title: 'Artificial Intelligence', icon: 'psychology', color: 'text-primary' },
  { title: 'Data Science', icon: 'analytics', color: 'text-secondary' },
  { title: 'Software Development', icon: 'developer_mode_tv', color: 'text-tertiary' },
  { title: 'Problem Solving', icon: 'lightbulb', color: 'text-primary' },
  { title: 'Technology & Innovation', icon: 'rocket_launch', color: 'text-secondary' },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'code',
    colorClass: 'text-primary',
    badgeClass: 'text-secondary',
    skills: ['C', 'Python'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    colorClass: 'text-secondary',
    badgeClass: 'text-primary',
    skills: ['DBMS', 'SQL'],
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    icon: 'hub',
    colorClass: 'text-tertiary',
    badgeClass: 'text-on-surface',
    skills: ['Artificial Intelligence Fundamentals', 'Data Science Fundamentals'],
  },
  {
    id: 'core-strengths',
    title: 'Core Strengths',
    icon: 'stars',
    colorClass: 'text-primary',
    badgeClass: 'text-tertiary',
    skills: ['Problem Solving', 'Programming Fundamentals', 'Continuous Learning'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'project-1',
    projectCode: 'PROJECT_01',
    title: 'Project 01 — Coming Soon',
    status: 'In Pipeline',
    description: 'An upcoming project demonstrating programming and problem-solving skills in AI/Data Science.',
    tags: ['Python', 'SQL', 'Data Analysis'],
    githubUrl: 'https://github.com/prathampmrocker',
    details: {
      overview: 'End-to-end data analytics and exploratory modeling pipeline exploring real-world datasets with statistical evaluation, automated preprocessing, and pattern recognition.',
      objectives: [
        'Perform exploratory data analysis (EDA) using NumPy, Pandas, and Matplotlib',
        'Design efficient SQL queries for transactional data aggregation',
        'Deploy exploratory predictive models with baseline benchmarking',
      ],
      plannedTech: ['Python 3.11', 'Pandas', 'PostgreSQL', 'Scikit-Learn'],
      timeline: 'Q3 2025 - Active Development',
    },
  },
  {
    id: 'project-2',
    projectCode: 'PROJECT_02',
    title: 'Project 02 — Coming Soon',
    status: 'In Pipeline',
    description: 'Hands-on exploration in relational database design, query optimization, and structured problem solving.',
    tags: ['C', 'DBMS', 'SQL'],
    githubUrl: 'https://github.com/prathampmrocker',
    details: {
      overview: 'Low-level schema modeling and memory-managed record serialization in C with a relational SQL query execution layer.',
      objectives: [
        'Understand low-level B-tree indexing and disk paging mechanisms',
        'Implement ACID-compliant relational schemas with foreign key integrity',
        'Optimize complex multi-join queries with execution plan analysis',
      ],
      plannedTech: ['C (C17)', 'SQLite / PostgreSQL', 'Bash Scripts', 'GDB'],
      timeline: 'Q4 2025 - Research & Prototyping',
    },
  },
  {
    id: 'project-3',
    projectCode: 'PROJECT_03',
    title: 'Project 03 — Coming Soon',
    status: 'In Pipeline',
    description: 'Foundational algorithmic problem solving and practical programming implementations.',
    tags: ['Python', 'Algorithms'],
    githubUrl: 'https://github.com/prathampmrocker',
    details: {
      overview: 'Curated repository of algorithmic solutions tackling dynamic programming, graph traversal, search trees, and computational complexity proofs.',
      objectives: [
        'Master asymptotic complexity analysis (Big-O, Omega, Theta)',
        'Implement custom data structures: heaps, disjoint sets, and segment trees',
        'Benchmark real runtime memory footprints against theoretical limits',
      ],
      plannedTech: ['Python', 'PyTest', 'Algorithm Visualizer', 'Markdown Docs'],
      timeline: 'Continuous Exploration',
    },
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'ibm-python',
    title: 'IBM Python Certificate',
    issuer: 'IBM',
    issueDate: '[Issue Date - Pending]',
    credentialId: '[Credential ID - Pending]',
    verifyUrl: '[Verify URL]',
    skillsLearned: [
      'Python Data Types & Control Structures',
      'Object-Oriented Programming (OOP) in Python',
      'Data Analysis with Pandas and NumPy',
      'Working with Web APIs and JSON Data',
    ],
  },
];

export const currentlyLearningItems = [
  { name: 'C Programming', color: 'bg-secondary' },
  { name: 'Python', color: 'bg-primary' },
  { name: 'DBMS', color: 'bg-tertiary' },
  { name: 'SQL', color: 'bg-secondary' },
  { name: 'Artificial Intelligence', color: 'bg-primary', fullWidth: true },
  { name: 'Data Science', color: 'bg-tertiary', fullWidth: true },
];
