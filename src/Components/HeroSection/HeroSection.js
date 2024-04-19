import "./HeroSection.css"
import React, { useRef } from 'react'
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
//npm i react-simple-typewriter
import {useTypewriter,Cursor} from "react-simple-typewriter"

const textVariants={
  initial:{
    x:0,
    y:-500,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1,
      StaggerChildren:0.1
    }
  }
}

const MovingTextVariants={
  initial:{
    x:-0,
  },
  animate:{
    x:"-50%",
    transition:{
      duration:3,
      repeat:Infinity,
      repeatType:"mirror"
    }
  }
}


const HeroSection = () => {

  const [changingText]=useTypewriter({
    words: ["Web Developer","Passionate Coder"],
    loop:{}
  })

  const ref=useRef()

  const {scrollYProgress} = useScroll({
      target:ref,
  });

  const y =useTransform(scrollYProgress,[0,1],[-350,100])

  
  return (
    <div className="HeroSection">
      <div className="wrapperCont" ref={ref}>
        <motion.div className="trial" style={{y}}>
          <img src="white.png" className="trialimg"></img>
        </motion.div>
        <motion.div className="textCont" variants={textVariants} initial="initial" whileInView="animate">
          <motion.h2 variants={textVariants} className="heroh2">SHAIL NARSARIA</motion.h2>
          <motion.h1 variants={textVariants} className="heroh1">A {changingText}<Cursor cursorStyle=">"/></motion.h1>
          <motion.div variants={textVariants} className="btnConta">
            <a href="/myresume.pdf" download><motion.button variants={textVariants} className="herobtn">Download Resume</motion.button></a>
            <a href="#Contact"><motion.button variants={textVariants} className="herobtn">Contact Me</motion.button></a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="movingText" variants={MovingTextVariants} initial="initial" animate="animate">
        A Tech Enthusiast
      </motion.div>
      <div className="imgCont">
        <img src="/white.png" alt="myimg"></img>
      </div>
    </div>
  )
}

export default HeroSection