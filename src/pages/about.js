import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'

const AnimateNumbers = ({value}) =>{
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue , {duration:300})
  const isInViews = useInView(ref);

  useEffect(() =>{
     if(isInViews){
      motionValue.set(value);
     }
  },[isInViews,value , motionValue]);

  useEffect (() =>{
    springValue.on("change" , (latest) =>{
      if(ref.current && latest.toFixed (0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }

    } )

    },[springValue ,value])

  return <span ref={ref}></span>
}



export const about = () => {
  return (
    <>
    <Head>
      <title>
        Vibhu || about
        <meta name='description' content='any thing that you want to write '/>
      </title>
      
    </Head>\

    <main className='flex w-full flex-col items-center justify-center '>
       <Layout className='pt-16 pb-16'>
       <AnimatedText text="Passion Fuels Purpose!" className='text-[80px] mb-16'/>
       <div className='grid w-full grid-cols-8  gap-16 '>

        <div className='col-span-3 flex flex-col item-start justify-start ml-20' >
          <h2 className='font-bold  uppercase text-lg  text-dark/75 mb-4'>About Me</h2>
          <p className='font-medium'>
          Hi, I'm Vibhu Gupta, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
         
          </p>

          <p className=' my-4 font-medium'>
           I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users. 

          </p>
          <p className=' my-4 font-medium'>
          Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
          </p>
        </div>

        <div className='col-span-3 relative h-max w-[500px] rounded-2xl border-2 border-solid border-dark bg-light p-8 '>
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark '/>

          <Image src={profilePic} alt='Vibhu' className=' w-[600px] h-[400px] rounded-2xl '/>
        </div>
       
       <div className='col-span-2 flex flex-col item-end justify-between '>

        <div className='flex flex-col item-end justify-center'>
          <span className='inline-block text-7xl font-bold'>
          <AnimateNumbers value={3}/>+
          </span>
          <h2 className='text-xl font-medium text-dark/75 capitalize'>LeetCode Start</h2>
        </div>
       


       
        <div className='flex flex-col item-end justify-center'>
          <span className='inline-block text-7xl font-bold'>
          <AnimateNumbers value={5}/>+
          </span>
          <h2 className='text-xl font-medium capitalize text-dark/75'>Projects</h2>
        </div>
       


       
        <div className='flex flex-col item-end justify-center'>
          <span className='inline-block text-7xl font-bold'>
          <AnimateNumbers value={10}/>+
          </span >
          <h2 className='text-xl font-medium capitalize text-dark/75'>Skills</h2>
          </div>

       </div>
       

       </div>

       
      
       <Skills/>
       <Experience/>
       
       </Layout>
      </main>
    </>
  )
}

export default about
