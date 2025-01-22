import Address from '../Address/Address';
import CloseMenu from '../CloseMenu/CloseMenu';
import Socials from '../Socials/Socials';
import { Link } from 'react-router-dom';
import css from './MobileMenu.module.css';
import clsx from 'clsx';

export default function MobileMenu({ toggleMenu, isOpen }) {
  return (
    <div className={clsx(css.menu_container, { [css.open]: isOpen })}>
      <CloseMenu toggleMenu={toggleMenu} />
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" onClick={toggleMenu}>
              Chi siamo
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={toggleMenu}>
              Listino prezzi
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contatti
            </Link>
          </li>
        </ul>
      </nav>
      <Socials />
      <Address />
    </div>
  );
}
