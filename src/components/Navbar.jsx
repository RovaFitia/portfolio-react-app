/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo.png";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] px-4 flex justify-between items-center bg-[#0a192f] text-gray-300">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo image" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li class='hover:text-pink-600'>
          <Link to="home" smooth={true} duration={500} >Home</Link>
        </li>
        <li class='hover:text-pink-600'>
          <Link to="about" smooth={true} duration={500} >About</Link>
        </li>
        <li class='hover:text-pink-600'>
          <Link to="skills" smooth={true} duration={500} >Skills</Link>
        </li>
        <li class='hover:text-pink-600'>
          <Link to="work" smooth={true} duration={500} >Work</Link>
        </li>
        <li class='hover:text-pink-600'>
          <Link to="contact" smooth={true} duration={500} >Contact</Link>
        </li>
      </ul>

      {/* Humberger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center'}>
        <li className="py-4 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link>
        </li>
        <li className="py-4 text-4xl hover:text-pink-600">
          <Link onClick={handleClick}  to="about" smooth={true} duration={500} >About</Link>
        </li>
        <li className="py-4 text-4xl hover:text-pink-600">
          <Link onClick={handleClick}  to="skills" smooth={true} duration={500} >Skills</Link>
        </li>
        <li className="py-4 text-4xl hover:text-pink-600">
          <Link onClick={handleClick}  to="work" smooth={true} duration={500} >Work</Link>
        </li>
        <li className="py-4 text-4xl hover:text-pink-600">
          <Link onClick={handleClick}  to="contact" smooth={true} duration={500} >Contact</Link>
        </li>

        <li className="py-4 mt-10 flex items-center justify-center gap-5">
          <a 
            href="https://www.linkedin.com/in/rova-fiti-0ba3272a3/"
            target="_blank"
            className="w-[40px] h-[40px] bg-blue-500 rounded flex justify-center items-center" rel="noreferrer">
            <FaLinkedin size={30}/>
          </a>
          <a 
            href="https://github.com/RovaFitia" 
            target="_blank" 
            className="w-[40px] h-[40px] bg-[#333] rounded flex justify-center items-center" rel="noreferrer">
            <FaGithub size={30}/>
          </a>
          <a 
            href="mailto:rovafiti@gmail.com" 
            target="_blank" 
            className="w-[40px] h-[40px] bg-[#6fc2b0] rounded flex justify-center items-center" rel="noreferrer">
            <HiOutlineMail size={30}/>
          </a>
          <a 
            href="https://drive.google.com/file/d/11EOupvA03XUT97QM39dNpcNNOcyGnuy3/view?usp=sharing" 
            target="_blank" 
            className="w-[40px] h-[40px] bg-[#565f69] rounded flex justify-center items-center" rel="noreferrer">
            <BsFillPersonLinesFill size={30}/>
          </a>
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
                    href="https://drive.google.com/file/d/11EOupvA03XUT97QM39dNpcNNOcyGnuy3/view?usp=sharing" target="_blank"
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
