import { useState } from 'react';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
// import css from './App.module.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      <main>
        <Hero />
        <AboutUs />
        <Gallery />
        <Services />
      </main>
      <Footer />
    </>
  );
}
