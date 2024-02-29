import "./Sidebar.css"
import Links from "./Links/Links.js" 
import ToggleBtn from "./ToggleBtn/ToggleBtn.js"
import {useState} from "react"
import {motion} from "framer-motion"


const variants={

  opened:{
    clipPath: "circle(1230px at 50px 50px)",
    transition:{
      type:"spring",
      stiffness:30
    }
  },

  closed:{
    clipPath: "circle(30px at 50px 50px)",
    transition:{
      delay:0.1,
      type:"spring",
      stiffness:300,
      damping:30
    }
  }
}

const Sidebar = () => {
  const [open,setOpen]=useState(false)
  
  return (
    <motion.div className="sidebar" animate={open? "opened":"closed"}>
      <motion.div className="sidebarOption" variants={variants}>
        <Links/>
      </motion.div>
      <ToggleBtn setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
