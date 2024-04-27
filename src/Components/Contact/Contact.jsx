import { useRef } from "react"
import "./Contact.css"
import {motion,useInView} from "framer-motion"
import emailjs from '@emailjs/browser'

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
  const ref=useRef();
  const formRef=useRef();
  const isInView=useInView(ref,{margin:"-100px"});
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u7zaofj', 'template_rt2imff', formRef.current, {
        publicKey: 'GsCRAnX5c-2qHcdj5',
      })
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message due to...', error.text);
        },
      );
  };

  

  return (
    <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="contactTextCont" variants={variants}>
        <h1 variants={variants} className="contacth1">LET'S CONNECT</h1>
        <div className="contactInfo">
            <h2>E-MAIL:</h2>
            <span>shailnarsaria18@gmail.com</span>
        </div>
      </motion.div>
      <motion.div className="formCont" variants={formvariants}>
        <motion.div className="phonesvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:1,duration:1}}>
          <svg fill="#c99af3" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
            <motion.path initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration:2}} d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fillRule="evenodd"></motion.path> </g>
          </svg>
        </motion.div>
        <motion.form
        ref={formRef} onSubmit={sendEmail}
         initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2,duration:1}}>
            <input type="text" placeholder="Name" required name="name"></input>
            <input type="email" placeholder="E-Mail" required name="email"></input>
            <textarea placeholder="Message" rows={5} name="message"></textarea>
            <button>Send mail</button>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
