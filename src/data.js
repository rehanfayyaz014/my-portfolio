export const portfolioData = {
  personal: {
    name: 'MUHAMMAD REHAN',
    tagline: 'CS Student @ UCP | Machine Learning Enthusiast | Full Stack Web Developer',
    subtitle: 'ML Models • Web Applications • Database Systems • Data-Driven Solutions',
    phone: '03360504355',
    email: 'rehanfayyaz014@gmail.com',
    location: 'Gujranwala',
    profileImage: '/my-pic.jpg', // Replace with your image URL
  },

  about: {
    summary: 'CS Student @ UCP with a strong foundation in C++, OOP, and DSA. I have pivoted my focus toward Machine Learning, mastering Python to build intelligent solutions. My unique edge is bridging the gap between Data Science and Web Development by deploying models into functional Web Applications. A self-driven learner seeking opportunities in a professional organization to grow and deliver value.',
  },

  skillsData: [
    {
      category: 'Core Fundamentals',
      skills: [
        'Data Structures',
        'C++',
        'OOP',
        'x86 Assembly Language',
        'DBMS',
        'SQL',
        'Problem Solving',
      ],  
    },
    {
      category: 'Machine Learning & Data',
      skills: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Data Analysis',
        'Kaggle',
      ],
    },
    {
      category: 'Web & Tools',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'Prompt Engineering',
        'Microsoft Office',
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Email Spam Classifier',
      subtitle: 'End-to-End ML Project',
      technologies: ['Python', 'Flask', 'Scikit-Learn', 'Vercel'],
      description: [
        'Engineered a live web application capable of analyzing and detecting spam emails with high confidence using natural language processing (NLP).',
        'Designed the predictive pipeline using TF-IDF and Logistic Regression, handling data manipulation with Pandas.',
        'Deployed the full-stack application on Vercel, demonstrating hands-on experience with web hosting, serverless environments, and continuous integration via GitHub.',
      ],
      link: 'https://email-spam-classifier-rho.vercel.app/',
      icon: '📧',
    },
    {
      id: 2,
      title: 'AI-Powered Expense Tracking System',
      subtitle: 'Web + DAA Project',
      technologies: ['Python', 'Flask', 'SQLite', 'ML', 'React'],
      description: [
        'Developed a full-stack expense tracking system integrating algorithmic and ML-based categorization.',
        'Implemented Red–Black Tree data structure for efficient expense insertion and range-based monthly summaries.',
        'Built backend using Python & Flask with SQLite for persistent storage.',
        'Designed an adaptive expense categorization pipeline using Regex, rule-based logic, and Scikit-learn ML model.',
        'Added OCR-based receipt input and voice-based expense entry.',
        'Implemented a retrainable ML workflow using CSV-based daily data logging.',
      ],
      link: null,
      icon: '💰',
    },
    {
      id: 3,
      title: 'Gender Pay Gap Analysis',
      subtitle: 'Big Data Project',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      description: [
        'Analyzed the Panel Study of Income Dynamics (PSID) dataset to uncover gender pay disparities across years and regions.',
        'Cleaned and processed large-scale socio-economic data with Python (Pandas, NumPy), normalized gender categories, and calculated pay gap percentages.',
        'Created clear visual insights using Matplotlib & Seaborn, including bar charts of gender pay gap trends over time and pie charts of top regions with highest disparities.',
      ],
      link: null,
      icon: '📊',
    },
    {
      id: 4,
      title: 'Weather Web App',
      subtitle: 'Interactive Web Application',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js', 'OpenWeatherMap'],
      description: [
        'Built an interactive web application using Leaflet.js and the OpenWeatherMap API to display real-time weather data on a map.',
        'Features a modern UI with popups, live geocoding, and forecast cards.',
        'Implemented with HTML, CSS, and JavaScript.',
      ],
      link: null,
      icon: '🌤️',
    },
    {
      id: 5,
      title: 'School Management System',
      subtitle: 'C++ Console Application',
      technologies: ['C++', 'OOP', 'File Handling', 'Data Structures'],
      description: [
        'Developed a C++ console-based application for managing school records, including student information, marks, and academic performance tracking.',
        'Showcased skills in object-oriented programming, file handling, and data structures.',
      ],
      link: null,
      icon: '🏫',
    },
    {
      id: 6,
      title: 'Snake Game',
      subtitle: 'C++ Game Development',
      technologies: ['C++', 'OOP', 'Windows Console API', 'Game Logic'],
      description: [
        'Developed a console-based Snake Game in C++ using OOP concepts.',
        'Implemented real-time movement, food spawning, collision detection, and scoring system.',
        'Built with Windows Console API, handling keyboard input, screen rendering, and game loop logic.',
      ],
      link: null,
      icon: '🐍',
    },
    {
      id: 7,
      title: 'Hotel Management System',
      subtitle: 'Database Project',
      technologies: ['SQL', 'Database Design', 'Data Integrity', 'Queries'],
      description: [
        'Designed and implemented a Hotel Management System database to efficiently manage hotel operations.',
        'Tracks room availability, staff details, guest information, and reservations.',
        'Built using SQL with a focus on data integrity, relationships, and query optimization.',
      ],
      link: null,
      icon: '🏨',
    },
  ],

  stats: {
    problemSolving: {
      count: 200,
      label: 'Problems Solved (DSA/C++)',
    },
  },

  education: [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University Of Central Punjab',
      duration: '2023 - 2027',
      details: 'CGPA: 3.75 / 4.0',
    },
    {
      degree: 'ICS',
      institution: 'Punjab College',
      duration: '2021 - 2023',
      details: '',
    },
    {
      degree: 'Matric',
      institution: 'Al-Noor Public Secondary School Mandi Bahauddin',
      duration: '2021',
      details: '',
    },
  ],

  socials: {
    linkedin: 'https://www.linkedin.com/in/muhammad-rehan-b20888283',
    github: 'https://github.com/rehanfayyaz014',
    email: 'rehanfayyaz014@gmail.com',
  },
};
