import styles from "../Components.module.css";

export function Sound () {

    return(
      <div class={styles.container}>
        <ul>
          <li class={styles.proyecto}>Paisajes Sonoros / 2019-2021</li>
          <li class={styles.proyecto}>Exploraciones Musicales / 2021-Actualmente</li>
          <li class={styles.proyecto}>Colombian Tapes <span class={styles.type}>Podcast</span> 2020-Actualmente</li>
          <li class={styles.proyecto}>Sponidos experimentales del Abya Yala <span class={styles.type}>Corto Ficción</span> 2018</li>
          <li class={styles.proyecto}>DJ Selector / 2009-2020</li>
        </ul>
      </div>
    );
}