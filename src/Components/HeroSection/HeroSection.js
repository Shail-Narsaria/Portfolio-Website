import "./HeroSection.css"
import {motion} from "framer-motion"

const textVariants={
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
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
  return (
    <div className="HeroSection">
      <div className="wrapperCont">
        <motion.div className="textCont" variants={textVariants} initial="initial" whileInView="animate">
          <motion.h2 variants={textVariants}>SHAIL NARSARIA</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="btnConta">
            <motion.button variants={textVariants}><a href="#Projects">Projects</a></motion.button>
            <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="movingText" variants={MovingTextVariants} initial="initial" animate="animate">
        A Coding Enthusiast
      </motion.div>
      <div className="imgCont">
        <img src="/Screenshot 2024-02-22 233241.png" alt="myimg"></img>
      </div>
    </div>
  )
}

export default HeroSection
