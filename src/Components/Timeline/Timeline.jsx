import React from 'react'
import "./Timeline.css"
import {color, motion} from "framer-motion"

const Timeline = () => {

  return (
    <>
        <marquee
        direction="down"
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            fontWeight: '500',
            marginTop: '2rem'
        }} className='timelinetitle'>MY EDUCATION</marquee>
        <div className='timeline'>
            <motion.div className="timelineCont left-timelineCont" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}}>
                <div className="timelineCircleCont left-timelineCircleCont"></div>
                <div className="timelineTextCont">
                    <h2>Vellore Institute of Technology</h2>
                    <small>2022-2026</small>
                    <div className="timelineDescCont">
                        <p>Bachelor of Technology, Computer Science</p>
                        <p>Current CGPA: 9.63</p>
                    </div>
                </div>
                <div className="left-timelineArrow"></div>
            </motion.div>

            <motion.div className="timelineCont right-timelineCont"  initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}}>
            <div className="timelineCircleCont right-timelineCircleCont"></div>
                <div className="timelineTextCont">
                    <h2>Delhi Public School</h2>
                    <small>2020-2022</small>
                    <div className="timelineDescCont">
                        <p>PCM with Computer Science</p>
                        <p>CBSE 12th Boards: 95.2%</p>
                    </div>
                </div>
                <div className="right-timelineArrow"></div>
            </motion.div>

            <motion.div className="timelineCont left-timelineCont"  initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}}>
            <div className="timelineCircleCont left-timelineCircleCont"></div>
                <div className="timelineTextCont">
                    <h2>Delhi Public School</h2>
                    <small>2019-2020</small>
                    <div className="timelineDescCont">
                        <p>CBSE 10th Boards: 97.2%</p>
                    </div>
                </div>
                <div className="left-timelineArrow"></div>
            </motion.div>

        </div>
    </>
    
  )
}

export default Timeline
