import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
// import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0);
  const name = "Saaransh Garg"; // Define the name constant
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <Header scrollY={scrollY} name={name} />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
