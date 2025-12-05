// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Education Section Logo's
import aktuLogo from './assets/education_logo/AKTU_logo.png';
import svmLogo from './assets/education_logo/SVM_logo.png';

// Project Section Logo's
import crimereportLogo from './assets/work_logo/Crime_Report_APP.png';
import beatcancerLogo from './assets/work_logo/Beat_Cancer.png';
import apnateamLogo from './assets/work_logo/APNA_TEAM_11.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'angular', logo: bootstrapLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];  
  export const education = [
    {
      id: 0,
      img: aktuLogo,
      school: "Dr. A.P.J. Abdul Kalam Technical University ",
      date: "July 2021 - July 2025",
      grade: "7.16 CGPA",
      desc: "I have completed my Bachelor's of Techncology in Computer Science from AKTU University. During my college time , I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at My College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor's of Techncology in Computer Science - B.Tech",
    },
    {
      id: 2,
      img: svmLogo,
      school: "Saraswati Vidya Mandir",
      date: "Apr 2019 - March 2020",
      grade: "79.6%",
      desc: "I completed my class 12 education from Saraswati Vidya Mandir Sr. Secondary School, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: svmLogo,
      school: "Saraswati Vidya Mandir Sr. Secondary School",
      date: "Apr 2017 - March 2018",
      grade: "84.83%",
      desc: "I completed my class 10 education from Saraswati Vidya Mandir Sr. Secondary School, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Beat Cancer",
      description:
      "Engineered a secure, AI-driven healthcare platform using Next.js and TypeScript to ensure type safety and high performance. Integrated Generative AI models to process patient data and generate personalized recovery plans in real-time. Implemented Privy for seamless, secure user authentication and utilized Context API for complex global state management.",
      image: beatcancerLogo,
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Aceternity UI", "Context API", "Privy", "AI", "Healthcare Tech"],
      github: "https://github.com/Shivang2608/Beat-Cancer-Project-",
       webapp: "https://beat-cancer-project.vercel.app/",
    },
    {
      id: 2,
      title: "Anonymous Crime Report App",
      description:
      "Built a secure, anonymous reporting platform prioritizing user privacy through advanced data encryption. Developed a streamlined submission flow using React to ensure zero-latency reporting. Integrated AI-driven analysis algorithms to categorize incidents automatically and filter spam, ensuring data integrity. Architected a scalable backend connection to handle high-volume report submissions securely.",
      image: crimereportLogo,
      tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AI", "Data Security"],
      github: "https://github.com/Shivang2608/Crime-report-app",
      webapp: "http://crime-report-app-olive.vercel.app",
    },
    {
      id: 3,
      title: "Apna Team 11 Fantasy Sports App",
      description:
      "Developed a logic-heavy fantasy sports engine using React and Context API to manage complex global state, including credit budget constraints and strict team validation rules. Implemented dynamic algorithms to simulate match schedules and randomize player data. Engineered a robust selection system that enforces gameplay logic in real-time and utilized local persistence to maintain user sessions across reloads.",
      image: apnateamLogo,
      tags: ["React.js", "Tailwind CSS", "Context API", "Fantasy Sports", "Frontend Development", "Responsive Design"],
      github: "https://github.com/Shivang2608/APNATEAM11",
      webapp:"https://apnateam11.vercel.app/",
    },
  ];  