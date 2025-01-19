import css from './Socials.module.css';
import { RiFacebookFill } from 'react-icons/ri';
import { RiInstagramFill } from 'react-icons/ri';

export default function Socials() {
  return (
    <div className={css.wrapper}>
      <a
        className={css.socials}
        href="https://www.facebook.com/profile.php?id=100063342902294"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <RiFacebookFill />
      </a>
      <a
        className={css.socials}
        href="https://www.instagram.com/make_nails.beauty_studio?igsh=cXU4bzg1MDZ1ZnJz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="instagram"
      >
        <RiInstagramFill />
      </a>
    </div>
  );
}
