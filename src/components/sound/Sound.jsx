import { createSignal } from "solid-js";
import { soundapi } from "./soundapi";
import styles from "../Components.module.css";
import { Images } from "../images/Images";

export const sc = Object.keys(soundapi).length;

function Sonido ({obj}) {
  return(
    <div class={`${styles.container} ${styles.cp}`}>
       <h4 class={styles.title}>{obj.title}</h4>
        <p><span class={styles.bold}>Año:</span> {obj.fecha}</p>
        {obj.lugar && (<p><span class={styles.bold}>Lugar:</span> {obj.lugar}</p>)}
        <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
        {obj.duracion && (<p><span class={styles.bold}>Duración:</span> {obj.duracion}</p>)}
        {obj.aforo && (<p><span class={styles.bold}>Asistencia:</span> {obj.aforo}</p>)}
        {obj.sound && (<div class={styles.video} innerHTML={obj.sound}></div>)}
        {obj.enlaces && (
        <>
          <p class={styles.bold}>Enlaces:</p> 
          <ul class={styles.ul}>
            {obj.enlaces.map(({id, enlace, text}) => (
              <li key={id}><a href={enlace} target="_blank">{text}</a></li>
            ))}
          </ul>
         
        </>
      )}
      {obj.images && (<Images obj={obj}/>)}
    </div>
  )
}

export function Sound () {
  const [showPipoca, setShowPipoca] = createSignal(false);
  const [showPaisajesSonoros, setShowPaisajesSonoros] = createSignal(false);
  const [showMusic, setShowMusic] = createSignal(false);
  const [showColTapes, setShowColTapes] = createSignal(false);
  const [showAbyaYala, setShowAbyaYala] = createSignal(false);
  const [showDjSelector, setShowDjSelector] = createSignal(false);

  const open_Pipoca = () => {
    setShowPipoca(prev => !prev)
  }

  const open_PaisajesSonoros = () => {
    setShowPaisajesSonoros(prev => !prev)
  }

  const open_Music = () => {
    setShowMusic(prev => !prev)
  }

  const open_ColTapes = () => {
    setShowColTapes(prev => !prev)
  }

  const open_AbyaYala= () => {
    setShowAbyaYala(prev => !prev)
  }

  const open_DjSelector= () => {
    setShowDjSelector(prev => !prev)
  }

    return(
      <div class={styles.container}>
        <ul>
          <li id="pipoca" class={styles.proyecto} onclick={open_Pipoca}>Pipoca <span class={styles.type}>Música</span> / 2026</li>
          {showPipoca() && <Sonido obj={soundapi.pipoca}/>}

          <li id="music" class={styles.proyecto} onclick={open_Music}>Exploraciones Musicales <span class={styles.type}>Música</span> / 2021-Actualmente</li>
          {showMusic() && <Sonido obj={soundapi.exploracionesmusicales}/>}

          <li id="paisajesonoros" class={styles.proyecto} onclick={open_PaisajesSonoros}>Paisajes Sonoros <span class={styles.type}>Sonido</span> / 2019-2022</li>
          {showPaisajesSonoros() && (<Sonido obj={soundapi.paisajes_sonoros} />)}
          
          <li id="colombiantapes" class={styles.proyecto} onclick={open_ColTapes}>Colombian Tapes <span class={styles.type}>Podcast Musical</span> / 2020-2023</li>
          {showColTapes() && <Sonido obj={soundapi.colombiantapes}/>} 

          <li id="abyayala" class={styles.proyecto} onclick={open_AbyaYala}>Sonidos experimentales del Abya Yala <span class={styles.type}>Performance Sonoro</span> / 2018</li>
          {showAbyaYala() && (<Sonido obj={soundapi.abyayalasounds} />)}
          
          <li id="djselector" class={styles.proyecto} onclick={open_DjSelector}>DJ Selector / 2009-2024</li>
          {showDjSelector() && (<Sonido obj={soundapi.djselector} />)}

        </ul>
      </div>
    );
}