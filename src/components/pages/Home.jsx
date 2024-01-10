import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rova Fitia</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developper</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Self-taught passionate about web development, I stand out for my speed of learning and my determination to continually evolve through passion.
Web development is not just a profession for me, it is a deliberate choice, fueled by the love of turning ideas into reality.</p>
            <div>
                <button className='text-white group border-2 py-3 px-6 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className="ml-3"/>
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home