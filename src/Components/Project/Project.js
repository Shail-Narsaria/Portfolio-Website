import React, { useRef } from 'react'
import "./Project.css"
import {motion,useScroll,useSpring} from "framer-motion"

const items=[
    {
      id:1,
      name: "Project1",
      img: "",
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
    return(
        <section>
            {item.name}
        </section>
    )
}

const Project = () => {

    const ref=useRef()

    const {scrollYLine} = useScroll({
        target:ref,
        offset:["end end","start start"]
    })

  return (
    <div className='project'>
        <div className="project-cont">
            <h1>Projects Showcase</h1>
            <div className="lineLen"></div>
        </div>
        {items.map(item=>(
            <EachProject item={item} key={item.id}/>
        ))}
      
    </div>
  )
}

export default Project
