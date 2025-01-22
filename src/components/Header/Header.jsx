import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import css from './Header.module.css';
import clsx from 'clsx';

export default function Header({ toggleMenu }) {
  const location = useLocation();
  const [originalTitle] = useState(document.title);
  const sectionConfig = {
    '/': { title: originalTitle, className: 'home_container' },
    '/pricing': { title: 'Listino prezzi' },
    '/contact': { title: 'Contatti' },
  };
  const currentSection = sectionConfig[location.pathname] || {
    title: 'Not Found',
    className: '',
  };

  useEffect(() => {
    document.title = currentSection.title;
  }, [location.pathname, currentSection.title]);

  return (
    <header
      className={clsx(css.header_container, css[currentSection.className])}
    >
      <Logo
        width={87}
        height={24}
        xlinkHref={'./images/icons.svg#icon-logo-header-org'}
      />
      <BurgerMenu toggleMenu={toggleMenu} />
    </header>
  );
}
