//TODO : code 1

import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const threshold = 400;
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Element name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 2 }}
        className="flex flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Rova Fitia, nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p>Self-taught passionate about web development, I stand out for my speed of learning and my determination to continually evolve through passion. Web development is not just a profession for me, it is a deliberate choice, fueled by the love of turning ideas into reality.</p>
          </div>
        </div>
      </motion.div>
    </Element>
  );
};

export default About;