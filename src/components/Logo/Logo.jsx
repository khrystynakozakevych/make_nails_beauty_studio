import { Link } from 'react-router-dom';
import css from './Logo.module.css';
import Icon from '../Icon/Icon';

export default function Logo({ width, height, xlinkHref }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolla in cima alla pagina
  };
  return (
    <Link to="/" className={css.logo_container} onClick={handleClick}>
      <Icon width={width} height={height} xlinkHref={xlinkHref} />
    </Link>
  );
}
