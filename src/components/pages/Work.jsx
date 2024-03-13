/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react" ;
import Image1 from "../../assets/Igoblog.png" ;
import Image2 from "../../assets/Nir-info.png" ;
import Image3 from "../../assets/Leslandines.png" ;
import Image4 from "../../assets/myexpat.png" ;
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const datas = [
    {image: Image1, title: 'Blog du site Igoblog', url: 'https://igoblog.fr'} ,
    {image: Image2, title: 'Blog de l\'entreprise IT Nir\'info', url: 'https://nir-info.mg'} ,
    {image: Image3, title: 'Blog du l\'entreprise Leslandines', url:'https://leslandines.com'} ,
    {image: Image4, title: 'Blog du l\'entreprise My expat', url:'https://myexpat.fr'} ,
] ;

const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
};
const Work = () => {
    const controls = useAnimation();
    const elementRefs = useRef([]);
    
    useEffect(() => {
        const handleScroll = () => {
            elementRefs.current.forEach((elementRef, index) => {
                const elementTop = elementRef.offsetTop;
                const scrollPosition = window.scrollY + window.innerHeight;

                if (scrollPosition > elementTop) {
                    controls.start('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">Work</p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
      {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid-item */}

            {datas.map((item, index) => (
                <motion.div 
                    key={index}
                    ref={(ref) => (elementRefs.current[index] = ref)}
                    style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'top center'}}  
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    initial='hidden'
                    animate={controls}
                    variants={variants}
                    transition={{ delay: index * 0.5 }}
                >
                
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-[18px] font-bold text-white tracking-wider text-center'>
                            {item.title}
                        </span>
                        <div className='pt-8 text-center'>
                            <a href={item.url} target="_bank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/RovaFitia" target="_bank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}

        </div>

      </div>
    </div>
  );
};

export default Work;
