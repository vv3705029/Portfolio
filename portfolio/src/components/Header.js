import React from "react";
// import { Link } from "react-scroll"; // Import Link for smooth scrolling
import { NavLink } from "react-router-dom"; // For routing

function Header() {
  return (
    <header className="bg-gray-800 text-white fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">Vikas Portfolio</NavLink>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-400">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="hover:text-blue-400">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-400">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
