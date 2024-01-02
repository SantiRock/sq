import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { videosApi } from "./videoapi";
import { Images } from "../images/Images";


function VideoProjects ({obj}) {

  return(
    <div class={styles.container}>
      <h4 class={styles.title}>{obj.title}</h4>
      <p><span class={styles.bold}>Fecha:</span> {obj.fecha}</p>
      <p><span class={styles.bold}>Lugar:</span> {obj.lugar}</p>
      <p><span class={styles.bold}>Cargo desempeñado:</span> {obj.cargo}</p>
      <p><span class={styles.bold}>Equipo:</span></p>        
      <ul>
        {obj.equipo.map(({id, nombre, cargo}) => (
          <li key={id} class={styles.list}>{cargo}: {nombre}</li>
        ))}
      </ul>
      <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
      <p><span class={styles.bold}>Misiones:</span> {obj.misiones}</p>
      {obj.duracion && (<p><span class={styles.bold}>Duración:</span> {obj.duracion}</p>)}
      {obj.aforo && (<p><span class={styles.bold}>Aforo:</span> {obj.aforo}</p>)}
      {obj.reconocimientos && (<p><span class={styles.bold}>Reconocimientos:</span> {obj.reconocimientos}</p>)}
      {obj.apoyo && (<p><span class={styles.bold}>Con el apoyo de:</span> {obj.apoyo}</p>)}
      {obj.enlaces && (
        <>
          <p class={styles.bold}>Enlaces:</p>
          <ul>
            {obj.enlaces.map(({id, enlace, text}) => (
              <li key={id}><a href={enlace} target="_blank">{text}</a></li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export function Video () {
  const [showRioRadio, setShowRioRadio] = createSignal(false);

  const open_RioRadio = () => {
    setShowRioRadio(prev => !prev);
  }

    return(
      <div class={styles.container}>
        <ul>
          <li class={styles.proyecto} onclick={open_RioRadio}>Río/Radio: Correspondencia anfibia <span class={styles.type}>AV Performance</span> 2021</li>
          {showRioRadio() && (<VideoProjects obj={videosApi.la_magdalena}/>)}
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