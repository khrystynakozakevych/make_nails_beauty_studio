import { useState } from 'react';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
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
    </>
  );
}
