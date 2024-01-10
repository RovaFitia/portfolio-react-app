/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import HTML from '../../assets/html-5.png'
import CSS from '../../assets/css-3.png'
import JS from '../../assets/js.png'
import PHP from '../../assets/php.png'
import ReactLogo from '../../assets/icons8-react-native-48.png'
import Symfony from '../../assets/icons8-symfony-144.png'
import WordPress from '../../assets/wordpress.png'
import Mysql from '../../assets/icons8-mysql-144.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-pink-600 inline'>Skills</p>
                <p className='py-4'>// These are a Technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Logo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt="Javascript Logo" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PHP} alt="PHP Logo" />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="REACT Logo" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Symfony} alt="Symfony Logo" />
                    <p className='my-4'>SYMFONY</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={WordPress} alt="WordPress Logo" />
                    <p className='my-4'>WORDPRESS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mysql} alt="Mysql Logo" />
                    <p className='my-4'>MySQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills