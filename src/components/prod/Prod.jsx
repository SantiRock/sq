import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { caribesoundimages } from "./prodapi";
import { Images } from "../images/Images";


function CaribeSound () {

  return(
    <div class={styles.container}>
      <h4 class={styles.title}>CaribeSound </h4>
      <p><span class={styles.bold}>Fecha:</span> 22 de Junio de 2019</p>
      <p><span class={styles.bold}>Lugar:</span> Mix'Art Myrys, Toulouse, Francia</p>
      <p><span class={styles.bold}>Cargo desempeñado:</span> Jefe de Proyecto</p>
      <p><span class={styles.bold}>Misiones:</span> Imaginar, planear y ejecutar. Yo contacté a los participantes y coordiné todo el proyecto.</p>
      <p><span class={styles.bold}>Concepto:</span> Festival musical y de artes visuales de pequeño formato alrededor de la cultura <span class={styles.obra}>"picotera"</span> del caribe colombiano</p>
      <p><span class={styles.bold}>Equipo técnico, artístico y logístico:</span> 60 personas</p>
      <p><span class={styles.bold}>Aforo:</span> 700 personas</p>
      <p><span class={styles.bold}>Cover:</span> Entrada libre y necesaría</p>
      <p class={styles.bold}>Programación:</p>
      <ul class={styles.ul}>
        <li class={styles.list}>Mural por <span class={styles.artista}>Soma</span> (Colombia) y <span class={styles.artista}>Nav Svit</span> (Francia)</li>
        <li class={styles.list}>Exposición <span class={styles.obra}>"Desde Abajo"</span> de <span class={styles.artista}>Lesli Moquin</span> (Francia)</li>
        <li class={styles.list}>Proyección de film <span class={styles.obra}>"Picó: la maquina musical del Caribe"</span> de <span class={styles.artista}>Roberto de Zubiria</span> (Colombia)</li>
        <li class={styles.list}>Muestra musical por <span class={styles.artista}>DJ Galletas Calientes</span> (Colombia) y <span class={styles.artista}>DJ NoBreakfast</span> (Francia)</li>
        <li class={styles.list}>Video Mapping por <span class={styles.artista}>Felipe Vargas</span> (Colombia)</li>
        <li class={styles.list}>Instalación audiovisual interactiva por <span class={styles.artista}>Le Proyectarium</span> (Francia)</li>
        <li class={styles.list}>Parranda Vallenata por <span class={styles.artista}>Grupo La Olla</span> (Colombia)</li>
        <li class={styles.list}>Clase de danza por <span class={styles.artista}>Anika Dance</span> (Colombia)</li>
        <li class={styles.list}>Comida y productos colombianos</li>
      </ul>
      <p><span class={styles.bold}>Con el apoyo de:</span> Mix'Art Myrys, Festival Locombia, Guayabo Colectivo, Talowa Producciones, Latino Graff, Le Proyectarium, Roots of One Tree Sound System, Anika Dance</p>
      <p class={styles.bold}>Enlaces:</p>
      <ul>
        <li><a href="https://emelinejonetcom.wordpress.com/2019/07/31/colombian-caribbean-festival/" target="_blank">Reseña Emiline Jonet</a></li>
        <li><a href="https://www.facebook.com/1213624855/videos/10219478278126960/" target="_blank">Video de un asistente</a></li>
        <li><a href="https://fb.watch/pfkIBV71P4/" target="_blank">Mural por Soma</a></li>
      </ul>
      <Images obj={caribesoundimages[0]}/>
    </div>
  )
}


export function Prod () {
  const [showCaribeSound, setShowCaribeSound] = createSignal(false);

  function smoothScroll(targetId) {
    const target = document.querySelector(targetId);

    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - 13,
        behavior: 'smooth'
      });
    }
  }

  const open_CaribeSound = () => {
    setShowCaribeSound(prev => !prev);
    smoothScroll("#caribesound");
  }

    return(
        <div class={styles.container}>
          <ul>
            <li id="caribesound" class={styles.proyecto} onclick={open_CaribeSound}>
              CaribeSound <span class={styles.type}>Festival Interdiciplinar</span>  2019
            </li>
            {showCaribeSound() && (<CaribeSound/>)}
          </ul>    
        </div>
    );
}