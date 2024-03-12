import React, { useRef } from 'react'
import "./Project.css"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items=[
    {
      id:1,
      name: "Project1",
      img: "./p1.png",
      desc: "sdfasda"
    },
    {
        id:2,
        name: "Project2",
        img: "dsf",
        desc: "sdfasda"
    },
    {
        id:3,
        name: "Project3",
        img: "dsf",
        desc: "sdfasda"
    },
]

const EachProject =({item})=>{
    const ref=useRef()

    const {scrollYLine} = useScroll({
        target:ref,
    })

    const y =useTransform(scrollYLine,[0,1],[-100,100])


    return(
        <section ref={ref}>
            <div className="eachProjectCont">
                <img src={item.img} alt={item.name}></img>
                <div className="eachProjectTextCont">
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    <button>Visit Website</button>
                </div>
            </div>
        </section>
    )
}

const Project = () => {

    const ref=useRef()

    const {scrollYLine} = useScroll({
        target:ref,
        offset:["end end","start start"]
    })

    const scaleX=useSpring(scrollYLine,{
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