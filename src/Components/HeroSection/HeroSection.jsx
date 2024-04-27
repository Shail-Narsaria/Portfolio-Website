import "./HeroSection.css"
import {motion} from "framer-motion"
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
  
  return (
    <div className="HeroSection">
      <div className="wrapperCont">
        <motion.div className="textCont" variants={textVariants} initial="initial" whileInView="animate">
          <motion.h2 variants={textVariants} className="heroh2">SHAIL NARSARIA</motion.h2>
          <motion.h1 variants={textVariants} className="heroh1">A {changingText}<Cursor cursorStyle=">"/></motion.h1>
          <motion.div variants={textVariants} className="btnConta">
            <a href="/myresume.pdf" download><motion.button variants={textVariants} className="herobtn">Download Resume</motion.button></a>
            <a href="#Contact"><motion.button variants={textVariants} className="herobtn herobtncontact">Contact Me</motion.button></a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="movingText" variants={MovingTextVariants} initial="initial" animate="animate">
        A Tech Enthusiast
      </motion.div>
      <div className="imgCont">
        <img src="/homepic.jpg" alt="myimg" id="homepic"></img>
      </div>
    </div>
  )
}

export default HeroSection