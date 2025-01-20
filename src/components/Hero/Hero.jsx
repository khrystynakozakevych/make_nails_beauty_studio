import Button from '../Button/Button';
import css from './Hero.module.css';
export default function Hero() {
  return (
    <div className={css.hero_wrapper}>
      <h1>Frase carina titolo della pagina</h1>
      <p>sottotitolo</p>
      <Button btn btnText="Prenota" type="button" />
    </div>
  );
}
