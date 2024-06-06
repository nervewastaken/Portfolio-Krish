import React from 'react'
import { ReviewPin } from './review'
import { TodoPin } from './todo'
import { BloggerPin } from './blogger'
import { Aboutflips } from './webflips'
import Skills from './tech'
import Education from './education'
import Experience from './expeience'
import { InvMang } from './invmang'
import { Vehicle } from './vehicle'
import { Restaurant } from './restaurant'




const Hero = () => {
  return (
    <>
    
    <section id='webdev' className='justify-center items-center'>
      <div className='flex justify-center items-center'>
        <span className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl '>Web Development</span>
        
      </div>
      <Aboutflips/>
      <Skills/>

      <section id='about' className='justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <span className='mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl '>About Me</span>
        <Experience/>
      </div>
    </section>

      <div className='flex justify-center items-center'>
        <InvMang/>
        <Vehicle/>
        <Restaurant/>
      </div>
      <div className='flex justify-center items-center'>
        <ReviewPin/>
        <TodoPin/>
        <BloggerPin/>
      </div>
    </section>
  
    
    </>
  )

}

export default Hero
