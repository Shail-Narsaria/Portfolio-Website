import React, { useRef } from 'react'
import "./Project.css"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items=[
    {
      id:1,
      name: "DrawFlow",
      img: "/drawflowimg1.png",
      desc: "A digital whiteboard application designed to draw lines and patterns , add sticky notes , download the drawing with undo and redo features using Canvas API",
      link: "https://drawflow.netlify.app/",
      github:"https://github.com/Shail-Narsaria/DrawFlow"
    },
    {
        id:2,
        name: "E-Commerce Clone",
        img: "/flipkartcloneimg.png",
        desc: "A responsive online shopping website with a user friendly interface and intuitive design replicated from Flipkart's website",
        link: "https://shailnarsariaflipkart.netlify.app/",
        github:"https://github.com/Shail-Narsaria/Flipkart-Clone"
    },
    // {
    //     id:3,
    //     name: "Project3",
    //     img: "/p3.jpeg",
    //     desc: "sdfasda"
    // },

    //changes css in App.css after adding new project
]

const EachProject =({item})=>{
    
    const ref=useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
    });

    const y =useTransform(scrollYProgress,[0,1],[-250,250])

    return(
        <section className='project'>
            <div className="eachProjectCont">
                <div className="eachProjectWrapper">
                    <div className="eachProjectImgCont" ref={ref}>
                        <img src={item.img} alt={item.name}></img>
                    </div>
                    <motion.div className="eachProjectTextCont" style={{y}}>
                        <h2 className='eachProjecth2'>{item.name}</h2>
                        <p className='eachProjectp'>{item.desc}</p>
                        <div className="eachProjectButtonCont">
                            <button className='eachProjectButton'><a href={item.link} target="_blank" rel="noreferrer">Visit Website</a></button>
                            <button className='eachProjectButton'><a href={item.github} target="_blank" rel="noreferrer">Github</a></button>
                        </div>
                        
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