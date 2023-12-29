import styles from "./Video.module.css";

export function Video () {

    return(
      <div class={styles.container}>
        <ul>
          <li>La Magadalena <span class={styles.type}>AV Performance</span> 2021</li>
          <li>Pink Paradize Festival <span class={styles.type}>Video Performance</span> 2019</li>
          <li>Der Kirschgarten <span class={styles.type}>Teatro Contemporaneo</span> 2018</li>
          <li>Die Originale <span class={styles.type}>Circo Contemporaneo</span> 2018</li>
          <li>LPM Live Mapping Contest <span class={styles.type}>Video-Mapping</span> 2018</li>
          <li>Street Pack Festival <span class={styles.type}>Video-Mapping</span> 2017-2018-2019</li>
          <li>La Nuit Européen des Musées <span class={styles.type}>Video-Mapping</span> 2018-2019</li>
          <li>Ecos de Colombia <span class={styles.type}>AV Performance</span> 2018</li>
          <li>AV Instalation <span class={styles.type}>Instalación Interactiva</span> 2017</li>
          <li>VJ Panthera <span class={styles.type}>VJing</span> 2013-2018</li>
          <li>Guayabo Borthers <span class={styles.type}>VJing</span> 2017-2018</li>
          <li>Caliwood Remixed <span class={styles.type}>VJing</span> 2017</li>
          <li>Electric Mistakes: Estero Picnic <span class={styles.type}>VJing</span> 2016</li>
          <li>Imputaciones <span class={styles.type}>Cabaret Político Multimedia</span> 2016</li>
          <li>Famia Suto: Hip-Hop al Parque <span class={styles.type}>VJing</span> 2015</li>
          <li>A tu sombra <span class={styles.type}>Teatro Multimedia</span> 2012</li>
        </ul>
      </div>
    );
}