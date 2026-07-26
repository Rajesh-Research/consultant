export interface Publication {
  title: string;
  source: string; // Journal, Publisher, Conference
  year: number | string;
  url?: string;
  authors?: string;
}

export interface PortfolioData {
  name: string;
  titles: string[];
  bio: string;
  imageUrl: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  expertise: string[];
  speakingEngagements: {
    event: string;
    topic: string;
    date: string;
    location: string;
    description?: string;
    url?: string;
  }[];
  publications: {
    journals: Publication[];
    editedBooks: Publication[];
    conferences: Publication[];
    bookChapters: Publication[];
  };
  projects: {
    title: string;
    client: string;
    role: string;
    domain: string;
    technologies: string[];
    description: string;
    duration: string;
    outcome: string;
  }[];
  mentorship: {
    title: string;
    description: string;
    highlights: string[];
    metrics: { label: string; value: string }[];
  };
  researchAndConsultancy: {
    title: string;
    description: string;
    highlights: string[];
    projects: { title: string; client: string; value: string; duration: string }[];
  };
}

export const portfolioData: PortfolioData = {
  name: 'Dr. Rajesh Kumar K V',
  titles: [
    'Chief Technological Scientist – AI Research Centre',
    'Associate Dean – School of Technology',
    'Associate Professor – Business Analytics',
    'France Bélanger Chair Professor of Information Systems',
    'AI Researcher',
    'International Keynote & Technical Speaker'
  ],
  bio: `Dr. Rajesh Kumar K V is a distinguished academic, AI researcher, technology leader, and international speaker with extensive expertise in Artificial Intelligence, Machine Learning, Deep Learning, Data Analytics, Business Analytics, Sports Analytics, Biomedical AI, Human–Computer Interaction, and emerging digital technologies. He currently serves as the Chief Technological Scientist at the AI Research Centre (AIRC), Associate Dean of the School of Technology, and Associate Professor of Business Analytics at Woxsen University, Hyderabad, India. Through these leadership roles, Dr. Kumar contributes to AI-driven research, interdisciplinary innovation, technology strategy, academic transformation, curriculum development, and industry–academia collaboration. His research and professional work span multiple interdisciplinary domains, including AI-driven biomedical applications, Human–Computer Interface-based signal analytics, machine learning and deep learning, computer vision, sports analytics, wearable technologies, IoT, business intelligence, mobility, healthcare, network optimization, environmental monitoring, and data-driven decision systems. His work reflects a strong ability to translate advanced AI methods into practical solutions across business, healthcare, sports, engineering, and technology ecosystems.\n\nDr. Kumar’s research leadership is further demonstrated through his role as the France Bélanger Chair Professor of Information Systems and Co-Chairperson of the Centre of Excellence – Sports Analytics and Management. He has also served as the Advertflair Chair Professor in Marketing and Advertising, highlighting his interdisciplinary ability to bridge AI, information systems, analytics, marketing, and practical business applications.`,
  imageUrl: '/profile.jpg', // Path to profile image
  contact: {
    email: 'kvrkkumarphd@gmail.com',
    phone: '+91-9985622799',
    location: 'Hyderabad, India',
    linkedin: 'https://www.linkedin.com/in/kvrkkumar/',
    github: 'https://github.com/Rajesh-Research',
  },
  expertise: [
    'Artificial Intelligence & Machine Learning',
    'Deep Learning & Neural Networks',
    'Generative AI & Emerging AI',
    'Data Science & Business Analytics',
    'Computer Vision & Video Analytics',
    'Human–Computer Interaction (HCI)',
    'Biomedical Signal Analytics',
    'AI in Healthcare & Rehabilitation',
    'Sports Analytics & Performance Intelligence',
    'Wearable Technologies & IoT',
    'AI for Mobility & Smart Transportation',
    'Network Optimization',
    'Environmental AI & Air Quality Monitoring',
    'Microsoft Fabric & Business Intelligence',
    'Interdisciplinary AI Innovation'
  ],
  speakingEngagements: [
    {
      event: 'Data Con LA + IM Data 2022',
      location: 'California, USA',
      date: '2022',
      topic: 'Sports Analytics',
      description: 'Presented insights into Sports Analytics, demonstrating the role of AI and data-driven methods in enhancing sports performance and decision-making.',
      url: '#'
    },
    {
      event: 'ICRA 2023',
      location: 'London, UK',
      date: '2023',
      topic: 'Computer Vision for Wearable Robotics',
      description: 'Participated in the workshop organized by Harvard University, contributing to discussions on AI, computer vision, robotics, and wearable technologies.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_research-icra2023-computervision-activity-7060527151590100992-sd5w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Digital Innovation Summit',
      location: 'Bucharest, Romania',
      date: '2024',
      topic: 'Digital Landscape – Beyond AI',
      description: 'Served as a Panel Member, sharing perspectives on the evolving role of AI in the global digital economy.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_had-a-privilege-to-represent-woxsen-university-activity-7186345959201685506-PM6h?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'AI Tech Summit',
      location: 'Málaga, Spain',
      date: '2024',
      topic: 'How AI is Changing the Landscape of Work',
      description: 'Delivered a session examining AI-led transformation across industries and the future of work.',
      url: 'https://www.linkedin.com/feed/update/urn:li:groupPost:60878-7158729042752385024?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'MOVE Conference 2024',
      location: 'London, UK',
      date: '2024',
      topic: 'Future Cars: How Does It Look Like?',
      description: 'Presented on future cars, exploring the impact of AI on future mobility, autonomous systems, and intelligent transportation.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_london-mobility-expo-activity-7209449200625872896-Ei9X?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Health Tech Asia Conference 2024',
      location: 'Jakarta, Indonesia',
      date: '2024',
      topic: 'AI Integration in Healthcare',
      description: 'Delivered a Keynote Session on the integration of AI into healthcare, biomedical innovation, and intelligent patient-care applications.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_asia-healthcare-tech-activity-7213138420502528000-KwU8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Egypt Mining Forum 2024',
      location: 'Cairo, Egypt',
      date: '2024',
      topic: 'AI-Driven Mining Operations',
      description: 'Led a Technical Session exploring how AI-driven analytics and intelligent technologies can support and optimize modern mining operations.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_mining-egypt-cairo-activity-7219358052209020928-dzTv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Network X 2024',
      location: 'Paris, France',
      date: '8 October 2024',
      topic: 'AI/ML for Network Optimization',
      description: 'Served as a Technical Speaker, discussing intelligent methods for improving network performance and operational efficiency.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_networkx-6g-alumni-activity-7249732721537626112-09MM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Air Quality and Emissions Conference',
      location: 'Birmingham, UK',
      date: '10 October 2024',
      topic: 'Air Quality Monitoring & Gas Detection Using AI Technologies',
      description: 'Delivered a Technical Session, highlighting AI-enabled approaches to environmental monitoring and intelligent detection systems.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_sdg13-birmingham-ai-activity-7250531484153884672-ck7I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Manufacturing & Mobility LIVE',
      location: 'London, UK',
      date: '6 November 2024',
      topic: 'Transforming the Mobility Industry Using AI and IoT',
      description: 'Invited as an Exclusive Keynote Speaker, addressing AI- and IoT-driven transformation in future mobility ecosystems.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_iot-ai-mobility-activity-7259906515027832833-KEp8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Data Festival GmbH',
      location: 'Germany',
      date: '13 November 2024',
      topic: 'Sports Data Analytics Using AI/ML Methods and Models',
      description: 'Delivered a Keynote Session presenting advanced analytical approaches for sports intelligence and performance analysis.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_sportsanalytics-football-cricket-activity-7262480023335383040-EKbE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'New Zealand Virtual Conference',
      location: 'Virtual',
      date: 'February 2025',
      topic: 'Revolutionizing Sports Data Analytics Using Microsoft Fabric',
      description: 'Delivered a keynote session demonstrating how modern data platforms, analytics, and AI can transform sports decision-making and performance intelligence.',
      url: '#'
    },
    {
      event: 'INFORMS Conference',
      location: 'Singapore',
      date: '2025',
      topic: 'Operations Research & Analytics',
      description: 'Contributed conference insights at the intersection of analytics, AI, decision sciences, and intelligent systems.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_machinelearning-reinforcementlearning-optimization-activity-7353631654701142016-ee02?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Lund University',
      location: 'Sweden',
      date: '2025',
      topic: 'Cognitive Systems',
      description: 'Delivered a session contributing perspectives on AI, intelligent systems, interdisciplinary research, and the future of human–technology interaction.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_swecog2025-lunduniversity-artificialintelligence-activity-7382723264051212288-Y9u8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Sports Project Presentation',
      location: 'Hyderabad, India',
      date: '2024',
      topic: 'Cricket Performance Analytics',
      description: 'Presented advanced cricket biomechanics and sports analytics projects to MSK Prasad (former Indian Cricketer & Chief Selector).',
      url: 'https://www.linkedin.com/posts/kvrkkumar_mskprasad-cricket-cricket-activity-7324837492132610048-vqir?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: '"AI for Startups" Event at T-Hub',
      location: 'Hyderabad, India',
      date: '2024',
      topic: 'AI Startup Ecosystem & Integration',
      description: 'Keynote session at T-Hub sharing perspectives on AI integration, startup scaling, and tech strategy.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_hyderabad-startup-ecosystem-activity-7228081515622977537-YVCB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    },
    {
      event: 'Microsoft Power BI and Fabric Summit',
      location: 'Virtual',
      date: '2025',
      topic: 'Power BI & Microsoft Fabric Ecosystem',
      description: 'Presented at the Microsoft Power BI and Fabric Summit, exploring developments and deployment strategies inside the Fabric data ecosystem.',
      url: 'https://www.linkedin.com/posts/kvrkkumar_microsoft-powerbi-fabric-activity-7297875195334180867-llTT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAANbvn8BZP3HBjv0Ldn7aL2c9a0EfhrpE1w'
    }
  ],
  publications: {
    journals: [
      {
        title: 'Using Artificial Intelligence to Predict the Next Deceptive Movement Based on Video Sequence Analysis',
        source: 'ScienceDirect',
        year: 2025,
        url: 'https://doi.org/10.1016/j.jer.2025.01.007',
        authors: 'Dr. Rajesh Kumar K V, et al.'
      },
      {
        title: 'Real-time tracking of human neck postures and movements',
        source: 'Healthcare MDPI',
        year: 2021,
        url: '#',
        authors: 'Dr. Rajesh Kumar K V'
      },
      {
        title: 'Quantitative Analysis of Athlete Performance in Artistic Skating',
        source: 'Design Engineering',
        year: 2021,
        url: '#',
        authors: 'Dr. Rajesh Kumar K V'
      }
    ],
    editedBooks: [
      {
        title: 'Artificial Intelligence and Emerging Technologies in Smart Agriculture',
        source: 'Springer Nature',
        year: 2024,
        authors: 'Dr. Rajesh Kumar K V (Editor), et al.'
      },
      {
        title: 'Predictive Analytics and Machine Learning in Sports Biomechanics',
        source: 'Elsevier Science',
        year: 2023,
        authors: 'Dr. Rajesh Kumar K V (Editor)'
      }
    ],
    conferences: [
      {
        title: 'Deep Learning Based Rehabilitation Monitoring and Assessment System for Cervical Spondylosis',
        source: 'IEEE ICRA 2023 - London',
        year: 2023,
        url: '#',
        authors: 'Dr. Rajesh Kumar K V'
      },
      {
        title: 'Smart Neckband for Rehabilitation of Musculoskeletal Disorders',
        source: 'IEEE COMSNETS 2020',
        year: 2020,
        url: '#',
        authors: 'Dr. Rajesh Kumar K V'
      }
    ],
    bookChapters: [
      {
        title: 'Human Movement Tracking and Gesture Recognition Using EMG Signals',
        source: 'Advanced Materials & Sensors for Biomedical Engineering, CRC Press',
        year: 2022,
        authors: 'Dr. Rajesh Kumar K V'
      },
      {
        title: 'Muscle Fatigue Prediction Using Deep Learning in Sports Training',
        source: 'IoT and AI in Modern Healthcare Systems, Wiley',
        year: 2021,
        authors: 'Dr. Rajesh Kumar K V'
      }
    ]
  },
  projects: [
    {
      title: 'AI-Based Predictive Model for Deceptive Movements in Cricket',
      client: 'AI Research Centre, Woxsen University',
      role: 'Lead Researcher and AI Model Developer',
      domain: 'Sports Biomechanics & AI-Powered Video Analysis',
      technologies: ['Machine Learning', 'Deep Neural Networks', 'OpenPose', 'Python', 'OpenCV'],
      description: 'Developed an AI model to predict deceptive movements in professional cricket players using video sequence analysis. Achieved up to 70% accuracy in predicting deceptive movements.',
      duration: 'Sep 2023 – Sep 2024',
      outcome: 'Published in ScienceDirect - Using Artificial Intelligence to Predict Deceptive Movements',
    },
    {
      title: 'Ad Tech – AI-Powered Intelligent Video Recommendation System',
      client: 'Advertflair LLC, NYC',
      role: 'Developer and Project Manager',
      domain: 'Digital Marketing – Video Recommendation System',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Python', 'Streamlit'],
      description: 'Extracted KPIs from ad videos and compared them with performance benchmarks to provide intelligent content recommendations.',
      duration: 'Sep 2021 – Feb 2022',
      outcome: '10,00,000/- INR Consultancy Project successfully completed',
    },
    {
      title: 'Simulation Model for Predictive Load Carriage Analysis',
      client: 'DIPAS-DRDO, Government of India',
      role: 'Junior Research Fellow',
      domain: 'Biomechanical Simulation Modelling',
      technologies: ['OpenSim', 'Muscle Fatigue Analysis', 'Metabolic Cost Estimation'],
      description: 'Designed and developed a simulation model for predictive analysis of load carriage. Conducted extensive biomechanical modeling and human performance assessment.',
      duration: 'Oct 2019 – May 2020 & Apr 2021 – July 2021',
      outcome: 'Advanced simulation-based analysis for military load optimization',
    }
  ],
  mentorship: {
    title: 'Mentorship and Guidance Experience',
    description: 'Fostering academic excellence and research capabilities across undergraduate, postgraduate, and doctoral levels.',
    highlights: [
      'Successfully guided and mentored over 50+ students in research projects and academic theses.',
      'Providing technical supervision and academic path planning in advanced data science, artificial intelligence, and embedded systems.',
      'Active leadership in student research groups at the Woxsen School of Technology and School of Business.',
      'Organized multiple hands-on workshops on Python, R, Power BI, and Machine Learning libraries to upskill student cohorts.'
    ],
    metrics: [
      { label: 'Students Mentored', value: '50+' },
      { label: 'Research Tracks Led', value: '5+' },
      { label: 'Industry Placements Supported', value: '40+' },
      { label: 'Academic Years', value: '11+' }
    ]
  },
  researchAndConsultancy: {
    title: 'Research and Consultancy Experience',
    description: 'Dr. Kumar bridges cutting-edge academic investigation with high-value industry partnerships, delivering solutions that achieve significant commercial and societal impact.',
    highlights: [
      'France Bélanger Chair Professor of Information Systems, leading key research initiatives at the intersection of AI and business processes.',
      'Advertflair Chair Professor in Marketing and Advertising, bridging data-driven consumer behavior analysis and deep learning recommendation systems.',
      'Co-Chairperson of the Centre of Excellence – Sports Analytics and Management, steering real-time tracking research and sports tech innovations.',
      'Chief Technological Scientist at Woxsen AI Research Centre, supervising multiple concurrent research streams in computer vision and biomedical AI.',
      'Lead Researcher in collaborative projects with defense organizations (DRDO) and international commercial clients (Advertflair LLC).'
    ],
    projects: [
      {
        title: 'Intelligent Video Recommendation System (Ad Tech)',
        client: 'Advertflair LLC, NYC',
        value: '1,000,000 INR',
        duration: '6 Months'
      },
      {
        title: 'Predictive Load Carriage Analysis Simulation',
        client: 'DIPAS-DRDO, Govt. of India',
        value: 'Research Grant / JRF',
        duration: '1+ Years'
      },
      {
        title: 'AI Cricket Deceptive Movement Analytics',
        client: 'AI Research Centre, Woxsen University',
        value: 'Internal Research Funding',
        duration: '1 Year'
      }
    ]
  }
};
