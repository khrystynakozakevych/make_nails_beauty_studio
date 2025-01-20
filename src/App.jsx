import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
// import css from './App.module.css';

export default function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [previousTitle, setPreviousTitle] = useState(document.title);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     setPreviousTitle(prev => prev || document.title); // Salva il titolo precedente
  //     document.title = 'Menu';
  //   } else {
  //     document.title = previousTitle; // Ripristina il titolo precedente
  //   }
  // }, [isMenuOpen, previousTitle]);

  const [activeSection, setActiveSection] = useState(null);
  const [previousTitle, setPreviousTitle] = useState(document.title);

  // Cambia il titolo dinamicamente in base alla sezione attiva
  useEffect(() => {
    if (activeSection) {
      setPreviousTitle(prev => prev || document.title); // Salva il titolo corrente
      document.title = `${activeSection}`;
    } else {
      document.title = previousTitle; // Ripristina il titolo precedente
    }
  }, [activeSection, previousTitle]);

  // Funzione per aprire/chiudere una sezione
  const toggleSection = section => {
    setActiveSection(prevSection => (prevSection === section ? null : section));
  };
  return (
    <>
      {/* <Header toggleMenu={toggleMenu} /> */}
      {/* {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />} */}
      <Header
        homeContainer={'home_container'}
        toggleMenu={() => toggleSection('Menu')}
      />
      {activeSection === 'Menu' && (
        <MobileMenu toggleMenu={() => toggleSection('Menu')} />
      )}
      <main>
        <Hero />
        <AboutUs />
        <Gallery />
        <Services />
        {/* {activeSection === 'Home' && (
          <Home closeHome={() => toggleSection('Home')}>
            <Hero />
            <AboutUs />
            <Gallery />
            <Services />
          </Home>
        )} */}
        {/* {activeSection === 'Gallery' && (
          <Gallery closeGallery={() => toggleSection('Gallery')} />
        )} */}
      </main>

      <Footer />
    </>
  );
}
