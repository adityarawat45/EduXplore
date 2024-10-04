import React from 'react'
import Nav from '../components/Nav'
import codingpic from "../images/coding.png"
const Landing = () => {
  return (
    <div className='bg-slate-950 h-screen w-full'>
       <Nav></Nav>
       <div className='flex-col justify-center items-center p-20'>
       <div className='text-5xl text-center text-slate-100 font-extrabold'>Empower Your Future with <span className='text-cyan-500'>Coding Skills</span></div>
        <p className='px-20 pt-10 text-center text-slate-200 font-bold text-xl'>EduXplore offers personalized, expert-led courses designed to fit your learning style and goals. Unlock new skills and opportunities with flexible, interactive education—anytime, anywhere!</p>
       </div>
       <div className='flex justify-between px-12 items-center text-white'>
         <img className="size-80 ml-40" src={codingpic}></img>
         <div className='text-white font-bold text-2xl'>
           <div>Sign In</div>
           <div>Log In</div>
         </div>
       </div>
    </div>
  )
}

export default Landing