import React from "react";
import { motion } from "framer-motion"; // Import for animations

function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a passionate Web Developer with expertise in building elegant and functional web applications.
        </motion.p>
        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I specialize in JavaScript, React, and Node.js, and I love to learn and grow in the tech world.
        </motion.p>

        {/* Skills Section */}
        <div className="flex justify-center space-x-4">
          <motion.span
            className="bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            JavaScript
          </motion.span>
          <motion.span
            className="bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            React
          </motion.span>
          <motion.span
            className="bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Node.js
          </motion.span>
        </div>

        {/* Call to Action */}
        <motion.button
          className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200 transition duration-200"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Let's Connect!
        </motion.button>
      </div>
    </section>
  );
}

export default About;
