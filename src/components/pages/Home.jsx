import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {motion} from 'framer-motion'

const Home = () => {

    const elements = [
        { type: "paragraph", text: "Hi, my name is", className: "text-pink-600" },
        { type: "title", text: "Rova Fitia", className: "text-4xl sm:text-7xl font-bold text-[#ccd6f6]" },
        { type: "subtitle", text: "I'm a Full Stack Developper", className: "text-4xl sm:text-7xl font-bold text-[#8892b0]" },
        { type: "paragraph", text: "Self-taught passionate about web development, I stand out for my speed of learning and my determination to continually evolve through passion.", className: "text-[#8892b0] py-4 max-w-[700px]" },
    ];


  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center'>
            {elements.map((element, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: index * 1.5 }}
                className={element.className}
            >
                {element.type === 'title' && <h1>{element.text}</h1>}
                {element.type === 'subtitle' && <h2>{element.text}</h2>}
                {element.type === 'paragraph' && <p>{element.text}</p>}
            </motion.div>
            ))}
            
            <div>
                <motion.button
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: elements.length * 1.45 }}
                    className='text-white group border-2 py-3 px-6 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
                >
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className="ml-3"/>
                    </span>
                </motion.button>
            </div>
        </div>

    </div>
  )
}

export default Home