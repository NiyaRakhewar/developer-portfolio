import {
  mobile,
  // backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  infosys,
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
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "DRDL",
    icon: "https://upload.wikimedia.org/wikipedia/en/6/68/Defence_Research_and_Development_Organisation_Logo.png",
    iconBg: "white",
    date: "April 2022 - July 2022",
    points: [
      "I successfully completed an internship at DRDL, where I gained invaluable hands-on experience in data acquisition systems alongside a proficient team of four members.",
      "I extensively collaborated with the PXI module, delving into its intricacies and harnessing its full potential.",
      "I demonstrated my technical prowess by developing a robust graphical user interface (GUI) using the Python Tkinter library, effectively augmenting the usability and functionality of the data acquisition system.",
    ],
  },
  {
    title: "System Engineer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Apr 2023",
    points: [
      "Staying updated with the latest frontend development trends and best practices.",
      "Participating in team meetings and contributing to project discussions.",
      "Troubleshooting and resolving frontend-related issues.",
    ],
  },
];

// const testimonials = [];

const projects = [
  {
    name: "MoshiMoshi",
    description:
      "A social media platform tailored for anime enthusiasts, featuring categorized content to facilitate connections, discussions, and exploration of various anime series, characters, and genres.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/NiyaRakhewar/social_media_app",
  },
  {
    name: "TheFace",
    description:
      "Experience a seamless skincare shopping experience on our e-commerce web app. Browse through diverse categories and utilize advanced filters to refine your search, helping you easily discover and purchase the ideal skincare products.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/NiyaRakhewar/ecommerce_website",
  },
  {
    name: "Trip Advisor",
    description:
      "Explore continents, countries, and remarkable destinations with our Trip Advisor web app. Discover the world's best places, plan your trips, and get valuable recommendations for unforgettable travel experiences.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/NiyaRakhewar/mcr7/tree/main",
  },
  {
    name: "Trip Advisor",
    description:
      "Explore continents, countries, and remarkable destinations with our Trip Advisor web app. Discover the world's best places, plan your trips, and get valuable recommendations for unforgettable travel experiences.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/NiyaRakhewar/mcr7/tree/main",
  },
];

export { services, technologies, experiences, projects };
