import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import styless from "./Prod.module.css";

function CaribeSound () {

  return(
    <>
      <h4>CaribeSound </h4>
      <p><span class={styless.bold}>Fecha:</span> 22 de Junio de 2019</p>
      <p><span class={styless.bold}>Lugar:</span> Mix'Art Myrys, Toulouse, Francia</p>
      <p><span class={styless.bold}>Cargo desempeñado:</span> Jefe de Proyecto</p>
      <p><span class={styless.bold}>Misiones:</span> Imaginar, planear y ejecutar. Yo contacté a los participantes y coordiné todo el proyecto.</p>
      <p><span class={styless.bold}>Concepto:</span> Festival musical y de artes visuales de pequeño formato alrededor de la cultura <span class={styless.obra}>"picotera"</span> del caribe colombiano</p>
      <p><span class={styless.bold}>Equipo técnico, artístico y logístico:</span> 60 personas</p>
      <p><span class={styless.bold}>Aforo:</span> 700 personas</p>
      <p><span class={styless.bold}>Cover:</span> Entrada libre y necesaría</p>
      <p class={styless.bold}>Programación:</p>
      <ul>
        <li class={styless.artists}>Mural por <span class={styless.artista}>Soma</span> (Colombia) y <span class={styless.artista}>Nav Svit</span> (Francia)</li>
        <li class={styless.artists}>Exposición <span class={styless.obra}>"Desde Abajo"</span> de <span class={styless.artista}>Lesli Moquin</span> (Francia)</li>
        <li class={styless.artists}>Proyección de film <span class={styless.obra}>"Picó: la maquina musical del Caribe"</span> de <span class={styless.artista}>Roberto de Zubiria</span> (Colombia)</li>
        <li class={styless.artists}>Muestra musical por <span class={styless.artista}>DJ Galletas Calientes</span> (Colombia) y <span class={styless.artista}>DJ NoBreakfast</span> (Francia)</li>
        <li class={styless.artists}>Video Mapping por <span class={styless.artista}>Felipe Vargas</span> (Colombia)</li>
        <li class={styless.artists}>Instalación audiovisual interactiva <span class={styless.artista}>Le Proyectarium</span> (Francia)</li>
        <li class={styless.artists}>Parranda Vallenata por <span class={styless.artista}>Grupo La Olla</span> (Colombia)</li>
        <li class={styless.artists}>Clase de danza por <span class={styless.artista}>Anika Dance</span> (Colombia)</li>
        <li class={styless.artists}>Comida y productos colombianos</li>
      </ul>
      <p><span class={styless.bold}>Con el apoyo de:</span> Mix'Art Myrys, Festival Locombia, Guayabo Colectivo, Talowa Producciones, Latino Graff, Le Proyectarium, Roots of One Tree Sound System, Anika Dance</p>
      <p class={styless.bold}>Enlaces:</p>
      <ul>
        <li><a href="https://emelinejonetcom.wordpress.com/2019/07/31/colombian-caribbean-festival/" target="_blank">Reseña Emiline Jonet</a></li>
        <li><a href="https://www.facebook.com/1213624855/videos/10219478278126960/" target="_blank">Video de un asistente</a></li>
        <li><a href="https://fb.watch/pfkIBV71P4/" target="_blank">Mural por Soma</a></li>
      </ul>
      
  

    
    </>
  )
}


export function Prod () {
  const [showCaribeSound, setShowCaribeSound] = createSignal(false);

  const open_CaribeSound = () => {
    setShowCaribeSound(prev => !prev);
  }

    return(
        <div class={styles.container}>
          <ul>
            <li class={styles.proyecto} onclick={open_CaribeSound}>
              CaribeSound <span class={styles.type}>Festival Interdiciplinar</span>  2019
            </li>
            {showCaribeSound() && (<CaribeSound/>)}
          </ul>
          
        </div>
    );
}