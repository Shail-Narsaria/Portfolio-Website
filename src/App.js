import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Project from './Components/Project/Project'

function App() {
  return (
    <div>
      <Cursor/>
      <section id="Home">
        <Navbar/>
        <HeroSection/>
      </section>
      {/* <section id="About">About</section>
      <section id="Skills">Skills</section>
      <section>Parralax</section> */}
      <section id="Project">
        <Project/>
      </section>
      {/* <section>Parralax</section> */}
      <section id="Contact">
        <Contact/>
      </section>
      
    </div>
  );
}

export default App;
