import { useRef } from "react"
import "./Contact.css"
import {motion,useInView} from "framer-motion"

const variants={
  initial:{
    x:-300,
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

const formvariants={
  initial:{
    x:-300,
    y:0,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:0.2,
      StaggerChildren:0.1
    }
  }
}

const Contact = () => {
  const ref=useRef()
  const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="contactTextCont" variants={variants}>
        <h1 variants={variants}>LET'S CONNECT</h1>
        <div className="contactInfo">
            <h2>E-Mail</h2>
            <span>shailnarsaria18@gmail.com</span>
        </div>
      </motion.div>
      <motion.div className="formCont" variants={formvariants}>
        <motion.div className="phonesvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:1,duration:2}}>
          <svg fill="#ffa500" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
            <motion.path initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration:1}} d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"></motion.path> </g>
          </svg>
        </motion.div>
        <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:3,duration:2}}>
            <input type="text" placeholder="Name" required></input>
            <input type="email" placeholder="E-Mail" required></input>
            <textarea placeholder="Message" rows={5}></textarea>
            <button>Submit</button>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
