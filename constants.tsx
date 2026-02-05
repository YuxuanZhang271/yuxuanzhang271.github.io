
import { Publication, NewsItem, ResearchArea, Experience, Project, Teaching } from './types';

export const PERSONAL_INFO = {
  name: "Yuxuan Zhang",
  title: "Master in AI Systems Student",
  institution: "National University of Singapore",
  department: "School of Computing / ISS",
  email: "e1216649@u.nus.edu",
  location: "Singapore",
  avatar: "./profile.jpeg",
  bio: "I am a Master's student in Artificial Intelligence Systems at the National University of Singapore. My research interests lie at the intersection of Embodied AI, Robot Learning, and Human-Robot Interaction. I am passionate about developing intelligent agents that can perceive, reason, and interact with the physical world effectively.",
  socials: {
    scholar: "https://yuxuanzhang271.github.io",
    github: "https://github.com/yuxuanzhang271",
    linkedin: "https://linkedin.com/in/yuxuanzhang271",
    twitter: "https://twitter.com"
  }
};

export const NEWS: NewsItem[] = [
  { id: '1', date: '2025-08', content: "Started Master in Artificial Intelligence Systems at NUS.", type: 'education' },
  { id: '2', date: '2025-06', content: "Paper 'VLA-OS' accepted at NeurIPS 2025.", type: 'publication' },
  { id: '3', date: '2025-01', content: "Graduated with Graduate Diploma in System Analysis from NUS.", type: 'education' },
];

export const RESEARCH_AREAS: ResearchArea[] = [
  { 
    title: "Embodied AI & Robot Learning", 
    description: "Developing intelligent agents that learn to perform complex tasks in physical environments using RL and VLA models.",
    icon: "bot"
  },
  { 
    title: "Manipulation & 3D Perception", 
    description: "Enabling robots to perceive and interact with objects using 3D vision and advanced control policies.",
    icon: "box"
  },
  { 
    title: "Human-Robot Interaction", 
    description: "Studying how robots can collaborate effectively with humans in daily life settings.",
    icon: "users"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: "VLA-OS: Structuring and Dissecting Planning Representations and Paradigms in Vision-Language-Action Models",
    authors: ["Chongkai Gao", "Zixuan Liu", "Zhenghao Chi", "Junshan Huang", "Xin Fei", "Yiwen Hou", "Yuxuan Zhang", "Yudi Lin", "Zhirui Fang", "Zeyu Jiang", "Lin Shao"],
    venue: "NeurIPS",
    year: 2025,
    links: { pdf: "https://arxiv.org/abs/2506.17561" },
    tags: ["VLM", "Robotics", "Planning"],
    isPreprint: false
  },
  {
    id: 'p2',
    title: "ManiLadder: Benchmarking Manipulation Intelligence Frontier via a Categorized and Multi-Level Task Ladder",
    authors: ["Chongkai Gao", "Jieao Shi", "Xuchuan Huang", "Mu Zhaoyu", "Yuxuan Zhang", "Zhuoran Li", "Anqi Chen", "Nga Teng Chan", "Shengjia Zhu", "Boren Zheng", "Lin Shao"],
    venue: "RSS 2026 Submission",
    year: 2026,
    links: { openreview: "#" },
    tags: ["Benchmarking", "Manipulation"],
    isPreprint: true
  },
  {
    id: 'p3',
    title: "Learning to Synthesize Novel Human-Object Interaction in Collaborative Task-Based Settings",
    authors: ["Haziq Razali", "Yuxuan Zhang", "Qianli Xu", "Yiannis Demiris"],
    venue: "AAAI 2026 Workshop HCM",
    year: 2026,
    links: { openreview: "#" },
    tags: ["HRI", "Synthesis"],
    isPreprint: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Research Intern (Hardware / Software / System Design)",
    organization: "AMD",
    period: "Mar 2026 – Aug 2026",
    location: "Singapore",
    highlights: ["System architecture and optimization for AI hardware."]
  },
  {
    role: "Development Intern",
    organization: "FatFish Technology Pte. Ltd.",
    period: "Oct 2025 – Dec 2025",
    location: "Singapore",
    highlights: [
      "Integrated a humanoid robot with CPU-only MiniPC and Intel RealSense.",
      "Built a ROS/ROS2 stack connecting perception, language, and control.",
      "Implemented SLAM and object tracking for physical navigation.",
      "Developed RL/IK/VLA-based policies for locomotion."
    ]
  },
  {
    role: "Research Intern",
    organization: "AdaComp Lab, NUS",
    period: "Jun 2025 – Sep 2025",
    location: "Singapore",
    highlights: [
      "Integrated quadruped robot with 360 LiDAR and panoramic camera.",
      "Built navigation with LiDAR-based obstacle avoidance.",
      "Used panoramic vision to detect interaction objects like elevators/doors."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Automated Calibration System for A/D Modules",
    type: "Undergraduate Thesis",
    period: "Oct 2023 – May 2024",
    location: "HIT, China",
    highlights: ["Built a 16-channel selection PCB + RS-232 firmware.", "Integrated PXIe readout and LabVIEW automation."]
  },
  {
    title: "Automated Drone Docking & Charging Platform",
    type: "Innovation Training",
    period: "Oct 2021 – Sep 2022",
    location: "HIT, China",
    highlights: ["Built an automated landing system for DJI Matrice 100.", "Used GPS + AprilTag localization for closed-loop landing."]
  }
];

export const SKILLS = {
  programming: ["Python", "C++", "C", "Bash", "SQL", "MATLAB", "Verilog", "Java", "C#"],
  tools: ["Linux", "Git", "CMake", "Docker", "CUDA", "ROS/ROS2", "PyTorch", "TensorFlow", "OpenCV", "PCL", "Open3D", "Isaac Gym", "MuJoCo"],
  languages: ["Chinese (Native)", "English (Fluent)"]
};

export const TEACHING: Teaching[] = [
  {
    course: "System Analysis & Design",
    role: "Teaching Assistant",
    period: "Jul 2024 - Dec 2024",
    institution: "National University of Singapore"
  }
];
