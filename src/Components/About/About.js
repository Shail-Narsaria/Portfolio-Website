import React , { useRef } from 'react'
import "./About.css"
import Timeline from '../Timeline/Timeline'
import {motion} from "framer-motion"

const variants={
  initial:{
    x:-500,
    y:0,
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


const About = () => {
  
  const ref=useRef();

  return (
    <>
    <motion.div className='about' ref={ref} variants={variants} initial="initial" whileInView="animate">
         <section id="about" variants={variants}>
            <h2>How It All Began</h2>
            <div class="container" variants={variants}>
              <div class="about-image">
                <img src="white.png" alt=""></img>
              </div>
              <motion.div class="about-content" variants={variants}>
                <p>Hello World! I'm Shail Narsaria, a second-year Computer Science Engineering undergraduate driven by a passion for coding and a commitment to self-improvement. Ever since I embarked on my journey into the world of technology, I've been captivated by the endless possibilities that programming offers and the boundless opportunities for innovation it presents.
                  My fascination with coding goes beyond mere syntax and algorithms; it's about the thrill of solving real-world problems and the satisfaction of bringing ideas to life through lines of code. 
                  In addition to my technical prowess, I place great emphasis on cultivating essential soft skills that are instrumental in navigating the ever-evolving landscape of technology. Effective communication, empathetic collaboration, and adaptability are pillars of my professional ethos, enabling me to thrive in diverse team environments and forge meaningful connections with colleagues and peers.
                  I eagerly seize opportunities to participate in hackathons, attend workshops, and explore emerging technologies, constantly pushing the boundaries of my knowledge and skill set.
                  I firmly believe that the intersection of curiosity and creativity is where true innovation flourishes, and I'm determined to make my mark in this ever-evolving field.</p> 
              </motion.div>  
            </div>
          </section>
        
    </motion.div>
    <Timeline/>
    </>
  )
}

export default About
