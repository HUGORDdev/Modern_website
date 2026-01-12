import Footer from './components/Footer'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'


const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Footer />
      <Testimonials />
    </div>
  )
}

export default App