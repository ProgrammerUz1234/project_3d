import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  rakhmonov,
  programmer,
  mohirdev,
  uzitgroup,
  carrental,
  nikeclone,
  tradingview,
  threejs,
  vue,
  vuex,
  vuetify
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Vue js",
    icon: vue,
  },
  {
    name: "Vuex",
    icon: vuex,
  },
  {
    name: "Vuetify",
    icon: vuetify,
  },
];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "Programmer Uz",
    icon: programmer,
    iconBg: "#383E56",
    date: "February 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using Vue.js, Vuex and Vuetify and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "React.js Developer",
    company_name: "Rakhmonov IT School",
    icon: rakhmonov,
    iconBg: "#383E56",
    date: "June 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and Three.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Python/Django Developer",
    company_name: "Mohirdev",
    icon: mohirdev,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Developing and maintaining backstage of web applications using Python and Django related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "React.js Developer",
    company_name: "UzIt Group",
    icon: uzitgroup,
    iconBg: "#383E56",
    date: "May 2024 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Give lessons from the front-end part of web sites"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Diyor proved me wrong.",
    name: "Kamila",
    designation: "CFO",
    company: "UzIt Group",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Diyor does.",
    name: "Jakhongir",
    designation: "COO",
    company: "Rakhmonov It School",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    testimonial:
      "After Diyor optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Temur",
    designation: "CTO",
    company: "Musa Servis",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rental",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrental,
  },
  {
    name: "Nike Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nikeclone,
  },
  {
    name: "Trading View",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tradingview,
  },
];

export { services, technologies, experiences, testimonials, projects };
