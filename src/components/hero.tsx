import React from 'react'
import { ReviewPin } from './review'
import { TodoPin } from './todo'
import { BloggerPin } from './blogger'
import { Aboutflips } from './webflips'



const Hero = () => {
  return (
    <>
    <section id='aboutus' className='justify-center items-center'>
   
    </section>
    <section id='webdev' className='justify-center items-center'>
      <Aboutflips/>
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
