import css from './ListinoPrezzi.module.css';
export default function ListinoPrezzi({ name, price }) {
  return (
    <div className={css.price_container}>
      <p className={css.name}>{name}</p>
      <p className={css.price}>{price}</p>
    </div>
  );
}
