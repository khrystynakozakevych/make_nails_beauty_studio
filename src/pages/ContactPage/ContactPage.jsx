import css from './ContactPage.module.css';
export default function ContactPage() {
  const address = "Via dell'Olmata, 24";
  return (
    <div className={css.contacts_container}>
      <h2>Contatti</h2>
      <address>
        <ul>
          <li className={css.contacts_list}>
            <p>Orario</p>
            <ul>
              <li>
                <p className={css.day}>Lunedì</p> <p>Chiuso</p>
              </li>
              <li>
                <p className={css.day}>Martedì</p> <p>10 - 19</p>
              </li>
              <li>
                <p className={css.day}>Mercoledì</p> <p>10 - 19</p>
              </li>
              <li>
                <p className={css.day}>Giovedì</p> <p>10 - 19</p>
              </li>
              <li>
                <p className={css.day}>Venerdì</p> <p>10 - 19</p>
              </li>
              <li>
                <p className={css.day}>Sabato</p> <p>Chiuso</p>
              </li>
              <li>
                <p className={css.day}>Domenica</p> <p>Chiuso</p>
              </li>
            </ul>
          </li>
          <li className={css.contacts_list}>
            <p>Telefono</p>
            <a href="tel:+390699784994">+39 06 9978 4994</a>
          </li>
          <li className={css.contacts_list}>
            <p>Indirizzo</p>
            <a
              href="https://www.google.com/maps/place/MAKE+nails%26beauty+studio/@41.8959037,12.4970554,17z/data=!3m1!4b1!4m6!3m5!1s0x132f6172ab7399a3:0xcbbc5041568a66e8!8m2!3d41.8959037!4d12.4970554!16s%2Fg%2F11jj37ty57?hl=it&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
              <br />
              00184 Roma
            </a>
          </li>
        </ul>
      </address>
    </div>
  );
}
