import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./LiIcon";


const Details = ({position , company , companyLink , time , address ,work}) =>{

  const ref = useRef(null);

  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center  ">
   
   <LiIcon  reference={ref} />


    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5 , type:"spring"}}

    className="border-2 solid bg-dark/85  rounded-lg  
    hover:bg-dark/75  hover:text-light  p-6 hover:cursor-pointer shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] 
    "
    >
      <h3  className=" capotalize font-bold text-2xl   ">{position}  &nbsp; <a href={companyLink} 
      target={"_blank"}
      className="text-primary capitalize cursor-pointer"
      >@{company}</a></h3>
      <span className=" capotalize font-medium text-dark/75   ">
             {time} | {address}
      </span>
      <p  className="font-medium w-full">
          {work}
      </p>
    </motion.div>
  </li>

}
export const Experience = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      
      target:ref ,
      offset:["start end " , " center start "]
    }
  )


  return (
    <div className="my-64 ">
      
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative  ">


       <motion.div 
       style={{scaleY: scrollYProgress}}
       className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top    "/>

        <ul className="w-full flex flex-col items-start justify-between ml-4   ">

        


<Details 
        
        position={"Now i am Fresher"}
        company={"ApplyIng For Job"}
        companyLink={"https://www.google.com/"}
        time={"2022-Present"}
        address={" Remote Job , Developer"}
        work={"Worked I Can Do : Frontent Developement , Basics Of Backend ,Problem Solveing ,  DSA.  "}

        />


        </ul>

        
        
      </div>

    </div>
  );
};
