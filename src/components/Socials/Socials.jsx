import css from './Socials.module.css';
import { RiWhatsappFill } from 'react-icons/ri';
import { RiInstagramFill } from 'react-icons/ri';

export default function Socials() {
  return (
    <div className={css.wrapper}>
      <a
        className={css.socials}
        href="https://wa.me/390699784994"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="whatsapp"
      >
        <RiWhatsappFill />
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
