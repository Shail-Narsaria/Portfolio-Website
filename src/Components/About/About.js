import React from 'react'
import "./About.css"
import Timeline from '../Timeline/Timeline'

const About = () => {
  return (
    <div className='about'>
         <section id="about">
         <h2>How It All Began</h2>
            <div class="container">
              <div class="about-image">
                <img src="white.png" alt="Profile Picture"></img>
              </div>
              <div class="about-content">
                <p>Hello World! I'm [Your Name], a second-year Computer Science Engineering undergraduate driven by an unyielding passion for coding and an unwavering commitment to self-improvement. Ever since I embarked on my journey into the world of technology, I've been captivated by the endless possibilities that programming offers and the boundless opportunities for innovation it presents.

My fascination with coding goes beyond mere syntax and algorithms; it's about the thrill of solving intricate problems and the satisfaction of bringing ideas to life through lines of code. Whether I'm crafting elegant solutions to complex problems or diving into the depths of a new programming language, I approach each challenge with enthusiasm and a hunger for knowledge.

In addition to my technical prowess, I place great emphasis on cultivating essential soft skills that are instrumental in navigating the ever-evolving landscape of technology. Effective communication, empathetic collaboration, and adaptability are pillars of my professional ethos, enabling me to thrive in diverse team environments and forge meaningful connections with colleagues and peers.

Beyond the confines of the classroom, I'm an ardent advocate for continuous learning and personal growth. I eagerly seize opportunities to participate in hackathons, attend workshops, and explore emerging technologies, constantly pushing the boundaries of my knowledge and skill set.

When I'm not immersed in the world of coding, you can find me exploring the latest tech trends, delving into thought-provoking literature, or engaging in meaningful conversations with fellow enthusiasts. I firmly believe that the intersection of curiosity and creativity is where true innovation flourishes, and I'm determined to make my mark in this ever-evolving field.</p>
                
              </div>
              
            </div>
          </section>

        <Timeline/>
    </div>
  )
}

export default About
