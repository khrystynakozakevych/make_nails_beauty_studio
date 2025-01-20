import { IoMdClose } from 'react-icons/io';
import css from './CloseMenu.module.css';
// import clsx from 'clsx';

export default function CloseMenu({ toggleMenu }) {
  return (
    <>
      <button type="button" onClick={toggleMenu} className={css.cls_btn}>
        <IoMdClose size={20} />
      </button>
    </>
  );
}
