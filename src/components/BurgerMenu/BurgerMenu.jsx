import { RxHamburgerMenu } from 'react-icons/rx';
import css from './BurgerMenu.module.css';

export default function BurgerMenu({ toggleMenu }) {
  return (
    <>
      <button type="button" onClick={toggleMenu} className={css.opn_btn}>
        <RxHamburgerMenu size={20} />
      </button>
    </>
  );
}
