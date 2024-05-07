/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import HTML from '../../assets/skills/html-5.png'
import CSS from '../../assets/skills/css-3.png'
import JS from '../../assets/skills/js.png'
import PHP from '../../assets/skills/php.png'
import ReactLogo from '../../assets/skills/icons8-react-native-48.png'
import Symfony from '../../assets/skills/icons8-symfony-144.png'
import WordPress from '../../assets/skills/wordpress.png'
import Mysql from '../../assets/skills/icons8-mysql-144.png'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const data = [
    { title: 'HTML', image: HTML },
    { title: 'CSS', image: CSS },
    { title: 'JS', image: JS },
    { title: 'PHP', image: PHP },
    { title: 'React', image: ReactLogo },
    { title: 'Symfony', image: Symfony },
    { title: 'WordPress', image: WordPress },
    { title: 'Mysql', image: Mysql },
];

const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
};

const Skills = () => {

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
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-pink-600 inline'>Skills</p>
                <p className='py-6'>// These are a Technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        ref={(ref) => (elementRefs.current[index] = ref)}
                        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                        initial='hidden'
                        animate={controls}
                        variants={variants}
                        transition={{ delay: index * 0.5 }}
                    >
                        <img className='w-20 mx-auto' src={item.image} alt={`${item.title} Logo`} />
                        <p className='my-4'>{item.title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills