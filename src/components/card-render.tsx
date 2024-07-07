// aboutus.tsx
import React from "react";
import { ProjectCard } from "../components/project-card";
import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    title: "Regson Healthcare Official Website",
    href: "",
    description: "Designed Regson Healthcare’s official website.",
    dates: "",
    tags: ["Next.js", "Responsive Web Design"],
    link: "",
    image: "",
    video: "",
    links: [
      {
        icon: <FaGithub />,
        type: "GitHub",
        href: "",
      },
      {
        icon: <FaLink />,
        type: "Live Demo",
        href: "",
      },
    ],
    className: "custom-classname",
  },
  {
    title: "Inventory Management",
    href: "",
    description: "",
    dates: "",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Recharts"],
    link: "",
    image: "",
    video: "",
    links: [
      {
        icon: <FaGithub />,
        type: "GitHub",
        href: "",
      },
      {
        icon: <FaLink />,
        type: "Live Demo",
        href: "",
      },
    ],
    className: "custom-classname",
  },
  {
    title: "Blogger App",
    href: "",
    description: "",
    dates: "",
    tags: ["React", "Node.js", "Express", "JSON Web Tokens", "PostgreSQL"],
    link: "",
    image: "",
    video: "",
    links: [
      {
        icon: <FaGithub />,
        type: "GitHub",
        href: "",
      },
      {
        icon: <FaLink />,
        type: "Live Demo",
        href: "",
      },
    ],
    className: "custom-classname",
  },
  {
    title: "Logger App",
    href: "",
    description:
      "Tracks a robot’s movements and displays them in client web application.",
    dates: "",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Flask",
      "Axios",
      "PostgreSQL",
      "Socket.io",
      "Python",
    ],
    link: "",
    image: "",
    video: "",
    links: [
      {
        icon: <FaGithub />,
        type: "GitHub",
        href: "",
      },
      {
        icon: <FaLink />,
        type: "Live Demo",
        href: "",
      },
    ],
    className: "custom-classname",
  },
  {
    title: "Vehicle Detection",
    href: "",
    description: "",
    dates: "",
    tags: ["Pytorch", "YOLO v8", "Roboflow"],
    link: "",
    image: "",
    video: "",
    links: [
      {
        icon: <FaGithub />,
        type: "GitHub",
        href: "",
      },
      {
        icon: <FaLink />,
        type: "Live Demo",
        href: "",
      },
    ],
    className: "custom-classname",
  },
  {
    title: "Sentiment Analysis of Oppenheimer Reviews",
    href: "",
    description: "",
    dates: "",
    tags: ["Pytorch", "Natural Language Processing Toolkit", "Scikit-Learn"],
    link: "",
    image: "",
    video: "",
    links: [
      {
        icon: <FaGithub />,
        type: "GitHub",
        href: "",
      },
      {
        icon: <FaLink />,
        type: "Live Demo",
        href: "",
      },
    ],
    className: "custom-classname",
  },
];

const RenderCard = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default RenderCard;
