import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon } from "./icons";
import LeetCodeIcon from "./icons";
import {motion } from "framer-motion";


const CoustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={` h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5  
     group-hover:w-full transition-[width] ease duration-300 
     ${router.asPath === href ? "w-full" : "w-0"}
     
     `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
export const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CoustomLink href="/" title="Home" className="mr-4" />
        <CoustomLink href="/about" title="About" className="mx-4" />
        <CoustomLink href="/projects" title="Project" className="mx-4" />
        <CoustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <nav  className="flex item-center justify-center flex-wrap">
        <motion.a href="https://www.linkedin.com/in/vibhu-gupta-918042221/" target={"_blank"}
        whileHover={{y:-2}}
        className="w-6 mr-3"
        whileTap={{scale:0.9}}
        >
          <LinkedInIcon/>
        </motion.a>

        <motion.a href="https://github.com/viibhuGupta" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>

        <motion.a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>

        <motion.a href="https://www.google.com" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3"
        >
          <PinterestIcon />
        </motion.a>

        <motion.a href="https://www.google.com" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 ml-3"
        >
          <DribbbleIcon/>
        </motion.a>

      </nav>
    </header>
  );
};
export default NavBar;
