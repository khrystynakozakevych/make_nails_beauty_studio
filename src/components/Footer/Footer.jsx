import css from './Footer.module.css';
import Address from '../Address/Address';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';

export default function Footer() {
  return (
    <footer className={css.footer_container}>
      <Logo
        width={50}
        height={72.5}
        xlinkHref={'./images/icons.svg#icon-logo-footer-org'}
      />
      <Socials />
      <Address />
    </footer>
  );
}
