import Address from '../Address/Address';
import CloseMenu from '../CloseMenu/CloseMenu';
import Socials from '../Socials/Socials';
import css from './MobileMenu.module.css';
import clsx from 'clsx';

export default function MobileMenu({ toggleMenu }) {
  return (
    <div className={clsx(css.menu_container, css.open)}>
      <CloseMenu toggleMenu={toggleMenu} />
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Chi siamo</a>
          </li>
          <li>
            <a href="">Listino prezzi</a>
          </li>
          <li>
            <a href="">Servizi</a>
          </li>
          <li>
            <a href="">Contatti</a>
          </li>
        </ul>
      </nav>
      <Socials />
      <Address />
    </div>
  );
}
