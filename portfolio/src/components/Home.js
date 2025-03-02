import React from "react";
import { motion } from "framer-motion"; // Import for animations
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // Import icons

function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section: Text */}
        <div className="text-center md:text-left md:w-1/2">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Vikas
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A passionate developer creating amazing things for the web.
          </motion.p>
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/vikas-verma-33b3842b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/vikas_verma_9630/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Section: Photo */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <motion.img
            src="/images/vikas.jpg" // Ensure this is correctly placed in `public/images/`
            alt="Vikas"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
