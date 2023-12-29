import styles from "./Sound.module.css";

export function Sound () {

    return(
      <div class={styles.container}>
        <ul>
          <li>Paisajes Sonoros / 2019-2021</li>
          <li>Exploraciones Musicales / 2021-Actualmente</li>
          <li>Colombian Tapes <span class={styles.type}>Podcast</span> 2020-Actualmente</li>
          <li>Sponidos experimentales del Abya Yala <span class={styles.type}>Corto Ficción</span> 2018</li>
          <li>DJ Selector / 2009-2020</li>
        </ul>
      </div>
    );
}