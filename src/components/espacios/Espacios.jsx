import styles from "../Components.module.css";

export function Espacios () {

    return(
      <div class={styles.container}>
        <ul>
          <li class={styles.proyecto}>Mix'Art Myrys <span class={styles.type}>Asociación de Artistas</span> 2017-2019</li>
          <li class={styles.proyecto}>Le Proyectarium <span class={styles.type}>Asociación de Artistas Audiovisuales</span> 2017-2019</li>
          <li class={styles.proyecto}>Spektrum: art, science & community <span class={styles.type}>Escpacio Artistico</span> 2018</li>
          <li class={styles.proyecto}>Guayabo Colectivo <span class={styles.type}>Asociación Cultural</span> 2017-2020</li>
          <li class={styles.proyecto}>Gaira Café & Cumbia House <span class={styles.type}>Restaurante-Auditorio</span> 2014-2016</li>
          <li class={styles.proyecto}>La Redada <span class={styles.type}>Casa Cultural</span> 2011-2016</li>
          <li class={styles.proyecto}>Quince16 <span class={styles.type}>Casa Culturual</span> 2009-2011</li>
        </ul>
    </div> 
    );
}