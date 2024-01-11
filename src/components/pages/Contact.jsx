/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300'>
        <form action="https://getform.io/f/a2241859-20af-4fc7-a9ff-dbd6891cfa39" className='flex flex-col max-w-[600px] w-full t' method='POST'>
            <div className='pb-8'>
                <p className='text-4xl inline font-bold border-b-4 border-pink-600'>Contact</p>
                <p className='py-6'>// Submit the form bellow or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] focus:bg-[#fff] text-gray-950' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] focus:bg-[#fff] text-gray-950' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-[#ccd6f6] focus:bg-[#fff] text-gray-950' name="message" rows="6" placeholder='Message'></textarea>
            <button className='border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center justify-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact