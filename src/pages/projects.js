import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout';
import { AnimatedText } from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/icons';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"


const FeaturedProject = ( type , title ,summary , img ,link , github ) =>{
  return(
    <div>

      <article>

        <Link href={link} target={"_blank"} >

          <Image src={img} alt={title} className='w-full h-auto ' />
        </Link>

        <div>
          <span>{type} </span>
          <Link>
          <h2> {title} </h2>
          </Link>
          <p> {summary} </p>

          <div>
          <Link href={github} target={"_blank"}> <GithubIcon/> </Link> 
          <Link href={github} target={"_blank"}> Visit Project </Link> 

          </div>
        </div>
      </article>

    </div>
  )
}

export const projects = () => {
  return (
    <>
     <Head>
      <title>
        Vibhu || Projects page
        <meta name='description' content='any thing that you want to write '/>
      </title>
      
    </Head>

    <main className='text-[4rem] mb-16 flex flex-col items-center justify-center  ' >
      <Layout className='pt-16' >
        <AnimatedText  text="Imagination Trumps Knowledge!" />



        <div className='grid grid-col-12 gap-24  '>


          <div className='col-span-12 '>
            <FeaturedProject 
            
            title="Crypto Screener Application"

            img={project1}
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            github="/"
            type="Featured project"

            />

          </div>

          <div className='col-span-6 '>
             Project-1
          </div>

          <div className='col-span-6 '>
             Project-2
          </div>

          <div className='col-span-12 '>
          Featured Project
          </div>

          <div className='col-span-6 '>
             Project-3
          </div>

          <div className='col-span-6 '>
             Project-4
          </div>


        </div>

        
      </Layout>
    </main>
    </>
  )
}

export default projects;
