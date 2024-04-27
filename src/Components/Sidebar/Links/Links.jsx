import {motion} from "framer-motion"

const variants={
  opened:{
    transition:{
      staggerChildren: 0.15
    }
  },
  closed:{
    transition:{
      staggerChildren: 0.15,
      staggeredDirection: -1
    }
  }
}

const itemVariants={
  opened:{
    y:0,
    opacity:1
  },
  closed:{
    y:50,
    opacity:0
  }
}

const Links = () => {

  const items=["Home","About","Skills","Project","Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((e)=>(
        <motion.a href={`#${e}`} key={e} variants={itemVariants}
          whileHover={{scale:1.2}} whileTap={{scale:0.5}}> 
          {e}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links
