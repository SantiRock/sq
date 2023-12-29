import styles from "./Movies.module.css";

export function Movies () {

    return(
      <div class={styles.container}>
        <ul>
          <li>Agua Salada <span class={styles.type}>Corto Ficción</span> 2022</li>
          <li>Andrómeda <span class={styles.type}>Corto Experimental</span> 2016</li>
          <li>Balada Rock <span class={styles.type}>Corto Ficción</span> 2014</li>
          <li>Ecuador <span class={styles.type}>Corto Ficción</span> 2011</li>
          <li>Kinoclaje <span class={styles.type}>Animación</span> 2005-2009</li>
          <li>J'attends la pluie <span class={styles.type}>Cubrimiento de evento</span> 2019</li>
          <li>ARB <span class={styles.type}>Institucional</span> 2014</li>
          <li>+</li>
        </ul>
      </div>
    );
}