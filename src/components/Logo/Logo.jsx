import css from './Logo.module.css';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import clsx from 'clsx';

export default function Logo({ logoVariant }) {
  return (
    <a href="/index.html" className={clsx(css.wrapper, css[logoVariant])}>
      <img className={css.logo1} src={logo1} alt="logo" width="206"></img>
      <img className={css.logo2} src={logo2} alt="logo" width="206"></img>
    </a>
  );
}
