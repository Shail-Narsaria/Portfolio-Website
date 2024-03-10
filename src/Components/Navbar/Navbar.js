import Sidebar from "../Sidebar/Sidebar"
import "./Navbar.css"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        {/* <motion.span initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration:0.5}}>Shail Narsaria</motion.span> */}
        <motion.div initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration:0.5}} className="profiles">
          <a href="https://leetcode.com/shailnarsaria10/" target="blank"><img src="/leetcode.png" alt="LeetCode"></img></a>
          <a href="https://github.com/Shail-Narsaria" target="blank"><img src="/github.png" alt="Github"></img></a>
          <a href="https://www.hackerrank.com/profile/shailnarsaria10" target="blank"><img src="/hackerrank.png" alt="HackerRank"></img></a>
          <a href="https://www.linkedin.com/in/shail-narsaria-7b41a0275/" target="blank"><img src="/linkedin.png" alt="LinkedIn"></img></a>
        </motion.div>
      </div>  
    </div>
  )
}

export default Navbar


