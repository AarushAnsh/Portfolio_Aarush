import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';


function App() {
  const [showNav, setShowNav] = useState(true);
  const observerRef = useRef(null);

  const handleContentClick = (e) => {
    const target = e.target;
    // Don't toggle nav if clicking on interactive elements or resume dropdown
    if (target.closest('a, button, input, textarea, select, label, .hero-resume-container, .hero-resume-options')) return;
    setShowNav((prev) => !prev);
  };

  // Scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  useEffect(()=>{
    const elements = document.querySelectorAll('.reveal');
    observerRef.current = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
        }
      })
    }, { threshold: 0.15 });
    elements.forEach(el => observerRef.current.observe(el));
    return ()=> observerRef.current && observerRef.current.disconnect();
  }, [])

  return (
    <div className="App">
      <Navbar hidden={!showNav} />
      <div onClick={handleContentClick}>
        <Hero/>
        <About/>
        <Services/>
        {/* <MyWork/> */}
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
