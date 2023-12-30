import styles from "../Components.module.css";

export function Movies () {

    return(
      <div class={styles.container}>
        <ul>
          <li class={styles.proyecto}>Agua Salada <span class={styles.type}>Corto Ficción</span> 2022</li>
          <li class={styles.proyecto}>Andrómeda <span class={styles.type}>Corto Experimental</span> 2016</li>
          <li class={styles.proyecto}>Balada Rock <span class={styles.type}>Corto Ficción</span> 2014</li>
          <li class={styles.proyecto}>Ecuador <span class={styles.type}>Corto Ficción</span> 2011</li>
          <li class={styles.proyecto}>Kinoclaje <span class={styles.type}>Animación</span> 2005-2009</li>
          <li class={styles.proyecto}>J'attends la pluie <span class={styles.type}>Cubrimiento de evento</span> 2019</li>
          <li class={styles.proyecto}>ARB <span class={styles.type}>Institucional</span> 2014</li>
          <li class={styles.proyecto}>+</li>
        </ul>
      </div>
    );
}