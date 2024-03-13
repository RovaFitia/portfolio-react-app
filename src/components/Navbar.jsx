/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/geek.png";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] px-4 flex justify-between items-center bg-[#0a192f] text-gray-300">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo image" style={{ width: "40px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} >Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} >About</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} >Skills</Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} >Work</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} >Contact</Link>
        </li>
      </ul>

      {/* Humberger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center'}>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick}  to="about" smooth={true} duration={500} >About</Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick}  to="skills" smooth={true} duration={500} >Skills</Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick}  to="work" smooth={true} duration={500} >Work</Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleClick}  to="contact" smooth={true} duration={500} >Contact</Link>
        </li>
      </ul>

      {/* Social Network */}
      <div className="hidden lg:flex flex-col fixed left-0 top-[35%]">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                <a 
                    href="https://www.linkedin.com/in/rova-fiti-0ba3272a3/"
                    target="_blank"
                    className="flex justify-between items-center w-full text-gray-300"
                    rel="noreferrer"
                >
                    Linkedin 
                    <FaLinkedin size={30}/> 
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
                <a 
                    href="https://github.com/RovaFitia" target="_blank"
                    className="flex justify-between items-center w-full text-gray-300" 
                    rel="noreferrer"
                >
                    GitHub 
                    <FaGithub size={30}/> 
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                <a 
                    href="mailto:rovafiti@gmail.com" target="_blank" 
                    className="flex justify-between items-center w-full text-gray-300" 
                    rel="noreferrer"
                >
                    Email 
                    <HiOutlineMail size={30}/> 
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                <a 
                    href="#" 
                    className="flex justify-between items-center w-full text-gray-300"
                >
                    Resume
                    <BsFillPersonLinesFill size={30}/> 
                </a>
            </li>
        </ul>
      </div>
      
    </div>
    
  );
};

export default Navbar;
