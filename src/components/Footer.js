import React from 'react'
import { Layout } from './Layout'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex item-center justify-between'>
            <span className='ml-[90px]'>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
           <div className='flex items-center'>
           Text Me <span className='text-primary text-2xl px-1'>&#9825;</span> <Link href="https://www.linkedin.com/in/vibhu-gupta-918042221/" target={"_blank"} className=' underline underline-offset-2'>Linkdin</Link>
           </div>
            <Link className='mr-[90px] underline underline-offset-2' href="gmail:vik6026717961@gmail.com" >Say Hello</Link>
        </Layout>
    </footer>
  )
}
