import React, { useRef } from 'react'
import "./Project.css"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items=[
    {
      id:1,
      name: "Project1",
      img: "/p1.jpeg",
      desc: "sdfasda"
    },
    {
        id:2,
        name: "Project2",
        img: "/p2.jpeg",
        desc: "sdfasda"
    },
    {
        id:3,
        name: "Project3",
        img: "/p3.jpeg",
        desc: "sdfasda"
    },
]

const EachProject =({item})=>{
    
    const ref=useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
    });

    const y =useTransform(scrollYProgress,[0,1],[-250,250])

    return(
        <section>
            <div className="eachProjectCont">
                <div className="eachProjectWrapper">
                    <div className="eachProjectImgCont" ref={ref}>
                        <img src={item.img} alt={item.name}></img>
                    </div>
                    <motion.div className="eachProjectTextCont" style={{y}}>
                        <h2 className='eachProjecth2'>{item.name}</h2>
                        <p className='eachProjectp'>{item.desc}</p>
                        <button className='eachProjectButton'>Visit Website</button>
                    </motion.div>
                </div> 
            </div>
        </section>
    )
}
 

const Project = () => {

    const ref=useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"]
    })

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })

  return (
    <div className='project' ref={ref}>
        <div className="project-cont">
            <h1>Projects Showcase</h1>
            <motion.div style={{scaleX}} className="lineLen"></motion.div>
        </div>
        {items.map(item=>(
            <EachProject item={item} key={item.id}/>
        ))}
      
    </div>
  )
}

export default Project