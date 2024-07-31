// aboutus.tsx
import React from "react";
import { ProjectCard } from "../components/project-card";
import { FaGithub, FaLink } from "react-icons/fa";
import { WiDayThunderstorm } from "react-icons/wi";

const projects = [
  {
    title: "Restaurant Ordering app",
    href: "",
    description:
      "For patrons: A complete revamp of the restaurant experience, order with friends, split the bill, know the status of your order right at your fingertips. For restaurants: A paradigm shift in restaurant management, know your patrons' needs instantly with the online ordering feature, track your tables, store billing for regulatory purposes,use CRM and loyalty to attact more customers, ",
    dates: "",
    tags: [
      "Next.js",
      "Firebase",
      "Google Cloud Platform",
      "Responsive Web Design",
    ],
    link: "",
    image: "/restaurant.png",
    video: "",
    width: "",
    links: [
      {
        icon: <FaLink />,
        type: "Live Demo",
        href: "https://nexusnerve.vercel.app/",
      },
    ],
    className: "custom-classname",
  },
  {
    title: "Regson Healthcare Official Website",
    href: "",
    description: "Designed Regson Healthcare’s official website.",
    dates: "",
    tags: ["Next.js", "Responsive Web Design"],
    link: "",
    image: "/regson.png",
    video: "",
    links: [
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
    description:
      "Handles CRUD operations for inventory items, shows analytics and has a chatbot for basic customer support",
    dates: "",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Recharts"],
    link: "",
    image: "/inv.png",
    video: "",
    links: [
      {
        icon: <FaGithub />,
        type: "GitHub",
        href: "https://github.com/nervewastaken/Inventory-Management",
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
      
    ],
    className: "custom-classname",
  },
  {
    title: "Vehicle Detection",
    href: "",
    description:
      "Creation and Annotation of a vehicle dataset (Car, Bike, Auto, Truck) achieving over 90% accuracy.",
    dates: "May 2024",
    tags: ["Pytorch", "YOLO v8", "Roboflow"],
    link: "",
    image: "",
    video: "",
    width: "",
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
