import css from './Button.module.css';

export default function Button({ btnText, type, href, btn, link }) {
  return (
    <>
      {btn && (
        <button type={type} className={css.btn}>
          {btnText}
        </button>
      )}
      {link && (
        <a href={href} className={css.btn}>
          {btnText}
        </a>
      )}
    </>
  );
}
