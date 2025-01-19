import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import css from './Header.module.css';

export default function Header({ toggleMenu }) {
  return (
    <header className={css.container}>
      <Logo />
      <BurgerMenu toggleMenu={toggleMenu} />
    </header>
  );
}
