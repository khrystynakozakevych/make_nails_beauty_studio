import { Link } from 'react-router-dom';
import css from './Logo.module.css';
import Icon from '../Icon/Icon';

export default function Logo({ width, height, xlinkHref }) {
  return (
    <Link to="/" className={css.logo_container}>
      <Icon width={width} height={height} xlinkHref={xlinkHref} />
    </Link>
  );
}
