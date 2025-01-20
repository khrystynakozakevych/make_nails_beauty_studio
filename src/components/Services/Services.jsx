import ListinoPrezzi from '../ListinoPrezzi/ListinoPrezzi';
import css from './Services.module.css';

export default function Services() {
  return (
    <div className={css.services_container}>
      <h2>Listino prezzi</h2>
      <ul>
        <li>
          <ListinoPrezzi
            name={'Manicure combinata con livellamento'}
            price={'€45'}
          />
        </li>
        <li>
          <ListinoPrezzi
            name={'Manicure combinata con livellamento'}
            price={'€45'}
          />
        </li>
        <li>
          <ListinoPrezzi
            name={'Manicure combinata con livellamento'}
            price={'€45'}
          />
        </li>
        <li>
          <ListinoPrezzi
            name={'Manicure combinata con livellamento'}
            price={'€45'}
          />
        </li>
        <li>
          <ListinoPrezzi
            name={'Manicure combinata con livellamento'}
            price={'€45'}
          />
        </li>
      </ul>
    </div>
  );
}
