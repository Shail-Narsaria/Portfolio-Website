import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';

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
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
