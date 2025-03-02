import React from "react";
import { motion } from "framer-motion"; // Import for animations

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project ",
      link: "https://github.com/yourusername/project1", // Add a project link
      image: "images/project1.jpg", // Path to an image for the project
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      link: "https://github.com/yourusername/project2",
      image: "images/project2.jpg",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      link: "https://github.com/yourusername/project3",
      image: "images/project3.jpg",
    },
    {
      title: "Project 4", // Add as many as you need
      description: "A brief description of Project 4.",
      link: "https://github.com/yourusername/project4",
      image: "images/project4.jpg",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-blue-400 to-green-400"> {/* Match background gradient */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" // Semi-transparent background
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
