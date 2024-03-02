import "./Contact.css"
import {motion} from "framer-motion"

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
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="contactTextCont" variants={variants}>
        <h1 variants={variants}>LET'S CONNECT</h1>
        <div className="contactInfo">
            <h2>E-Mail</h2>
            <span>shailnarsaria18@gmail.com</span>
        </div>
      </motion.div>
      <motion.div className="formCont" variants={formvariants}>
        <form>
            <input type="text" placeholder="Name" required></input>
            <input type="email" placeholder="E-Mail" required></input>
            <textarea placeholder="Message" rows={5}></textarea>
            <button>Submit</button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
