import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar/>
        <HeroSection/>
      </section>
      <section id="About">About</section>
      <section id="Skills">Skills</section>
      <section>Parralax</section>
      <section id="Projects">Projects</section>
      <section>Parralax</section>
      <section id="Contact">
        <Contact/>
      </section>
      <Cursor/>
    </div>
  );
}

export default App;
