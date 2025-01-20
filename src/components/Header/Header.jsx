import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import css from './Header.module.css';
import clsx from 'clsx';

export default function Header({ toggleMenu }) {
  return (
    <header className={clsx(css.header_container, css.container)}>
      <Logo
        width={87}
        height={24}
        xlinkHref={'./images/icons.svg#icon-logo-header-org'}
      />
      <BurgerMenu toggleMenu={toggleMenu} />
    </header>
  );
}
