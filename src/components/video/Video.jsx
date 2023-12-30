import styles from "../Components.module.css";

export function Video () {

    return(
      <div class={styles.container}>
        <ul>
          <li class={styles.proyecto}>La Magadalena <span class={styles.type}>AV Performance</span> 2021</li>
          <li class={styles.proyecto}>Pink Paradize Festival <span class={styles.type}>Video Performance</span> 2019</li>
          <li class={styles.proyecto}>Der Kirschgarten <span class={styles.type}>Teatro Contemporaneo</span> 2018</li>
          <li class={styles.proyecto}>Die Originale <span class={styles.type}>Circo Contemporaneo</span> 2018</li>
          <li class={styles.proyecto}>LPM Live Mapping Contest <span class={styles.type}>Video-Mapping</span> 2018</li>
          <li class={styles.proyecto}>Street Pack Festival <span class={styles.type}>Video-Mapping</span> 2017-2018-2019</li>
          <li class={styles.proyecto}>La Nuit Européen des Musées <span class={styles.type}>Video-Mapping</span> 2018-2019</li>
          <li class={styles.proyecto}>Ecos de Colombia <span class={styles.type}>AV Performance</span> 2018</li>
          <li class={styles.proyecto}>AV Instalation <span class={styles.type}>Instalación Interactiva</span> 2017</li>
          <li class={styles.proyecto}>VJ Panthera <span class={styles.type}>VJing</span> 2013-2018</li>
          <li class={styles.proyecto}>Guayabo Borthers <span class={styles.type}>VJing</span> 2017-2018</li>
          <li class={styles.proyecto}>Caliwood Remixed <span class={styles.type}>VJing</span> 2017</li>
          <li class={styles.proyecto}>Electric Mistakes: Estero Picnic <span class={styles.type}>VJing</span> 2016</li>
          <li class={styles.proyecto}>Imputaciones <span class={styles.type}>Cabaret Político Multimedia</span> 2016</li>
          <li class={styles.proyecto}>Famia Suto: Hip-Hop al Parque <span class={styles.type}>VJing</span> 2015</li>
          <li class={styles.proyecto}>A tu sombra <span class={styles.type}>Teatro Multimedia</span> 2012</li>
        </ul>
      </div>
    );
}