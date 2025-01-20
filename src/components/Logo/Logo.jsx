import css from './Logo.module.css';
import Icon from '../Icon/Icon';

export default function Logo({ width, height, xlinkHref }) {
  return (
    <a href="/index.html" className={css.logo_container}>
      <Icon width={width} height={height} xlinkHref={xlinkHref} />
    </a>
  );
}
