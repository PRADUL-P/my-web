import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Logo from '../assets/image.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed right-0 top-0 w-full">
      <div className="flex items-center justify-between h-16 px-6 bg-gray-800 bg-opacity-60 backdrop-blur-lg">
        <div>
          <Link to='/'>
           
             activeClass="active"
        smooth={true}
        spy={true}
        offset={-200} <h1 className='h-[60px] font-monton uppercase mt-7'>pradul</h1>
            {/* <img className='h-[50px]' src={Logo} alt=''/> */}
          </Link>
        </div>
      </div>

      <button
        className="fixed right-0 top-0 mt-2 z-50 p-3 block text-white"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="text-2xl"
        />
      </button>

      <div
        className={`fixed top-0 right-0 w-/3 h-full bg-gray-800 bg-opacity-60 backdrop-blur-lg flex justify-end transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-4 mt-20">
          <Link
            to="home"
         
           activeClass="active"
        smooth={true}
        spy={true}
        offset={-200}   className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
        
          activeClass="active"
        smooth={true}
        spy={true}
        offset={-200}    className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="portfolio"
    
      activeClass="active"
        smooth={true}
        spy={true}
        offset={-200}        className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            to="services"
     
       activeClass="active"
        smooth={true}
        spy={true}
        offset={-200}       className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="contact"
      
        activeClass="active"
        smooth={true}
        spy={true}
        offset={-200}      className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="projects"
     
       activeClass="active"
        smooth={true}
        spy={true}
        offset={-200}       className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;