import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { webapi } from "./webapi";

function Site ({obj}) {
  return(
    <div class={`${styles.container} ${styles.cp}`} >
      <h4 class={styles.title}>{obj.title}</h4>
      <p><span class={styles.bold}>Fecha:</span> {obj.fecha}</p>
      <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
      <p><span class={styles.bold}>Stack:</span> {obj.stack}</p>
      <p class={styles.bold}>Enlaces:</p> 
      <ul class={styles.ul}>
        {obj.enlaces.map(({id, enlace, text}) => (
          <li key={id}><a href={enlace} target="_blank">{text}</a></li>
        ))}
      </ul>
    </div>
  )
}

export function Web () {
  const [showZhizhwa, setShowZhizhwa] = createSignal(false);
  const [showPetronico, setShowPetronico] = createSignal(false);
  const [showSkull, setShowSkull] = createSignal(false);
  const [showWebGL, setShowWebGL] = createSignal(false);
  const [showFilmoteka, setShowFilmoteka] = createSignal(false);
  const [showKinopoisk, setShowKinopoisk] = createSignal(false);
  const [showSwapi, setShowSwapi] = createSignal(false);
  const [showIceCream, setShowIceCream] = createSignal(false);
  const [showWebStudio, setShowWebStudio] = createSignal(false);
  const [showSqpweb, setShowSqpweb] = createSignal(false);

  const open_Zhizhwa = () => {
    setShowZhizhwa(prev => !prev);
  };

  const open_Petronico = () => {
    setShowPetronico(prev => !prev);
  };

  const open_Skull = () => {
    setShowSkull(prev => !prev);
  };

  const open_WebGL = () => {
    setShowWebGL(prev => !prev);
  };

  const open_Filmoteka = () => {
    setShowFilmoteka(prev => !prev);
  };

  const open_Kinopoisk = () => {
    setShowKinopoisk(prev => !prev);
  };

  const open_Swapi = () => {
    setShowSwapi(prev => !prev);
  };

  const open_IceCream = () => {
    setShowIceCream(prev => !prev);
  };

  const open_WebStudio = () => {
    setShowWebStudio(prev => !prev);
  };

  const open_Sqpweb = () => {
    setShowSqpweb(prev => !prev);
  };


  return(
    <div class={styles.container}>
      <ul>
        <li id="zhizhwa" class={styles.proyecto} onclick={open_Zhizhwa}>Zhizhwa / 2025</li>
        {showZhizhwa() && (<Site obj={webapi.zhizhwa}/>)}

        <li id="skull" class={styles.proyecto} onclick={open_Skull}>Skull Test / 2025</li>
        {showSkull() && (<Site obj={webapi.skull}/>)}

        <li id="webgl" class={styles.proyecto} onclick={open_WebGL}>WebGL Drawing Modes / 2024</li>
        {showWebGL() && (<Site obj={webapi.webgldm}/>)}

        <li id="petronico" class={styles.proyecto} onclick={open_Petronico}>Petronico / 2024</li>
        {showPetronico() && (<Site obj={webapi.petronico}/>)}

        <li id="filmoteka" class={styles.proyecto} onclick={open_Filmoteka}>Filmoteka / 2023</li>
        {showFilmoteka() && (<Site obj={webapi.filmoteka}/>)}
        
        <li id="kinopoisk" class={styles.proyecto} onclick={open_Kinopoisk}>Kinopoisk / 2023</li>
        {showKinopoisk() && (<Site obj={webapi.kinopoisk}/>)}
        
        <li id="swapi" class={styles.proyecto} onclick={open_Swapi}>Swapi-Challenge / 2023</li>
        {showSwapi() && (<Site obj={webapi.swapi}/>)}

        <li id="frontendstudio" class={styles.proyecto} onclick={open_Sqpweb}>Front-End Studio / 2024</li>
        {showSqpweb() && (<Site obj={webapi.sqpweb}/>)}
        
        <li id="icecream" class={styles.proyecto} onclick={open_IceCream}>IceCream / 2022</li>
        {showIceCream() && (<Site obj={webapi.icecream}/>)}

        <li id="webstudio" class={styles.proyecto} onclick={open_WebStudio}>WebStudio / 2022</li>
        {showWebStudio() && (<Site obj={webapi.webstudio}/>)}

      </ul>
    </div>  
  );
}