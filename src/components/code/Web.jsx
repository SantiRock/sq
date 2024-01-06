import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { webapi } from "./webapi";

function Site ({obj}) {
  return(
    <div class={styles.container} >
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
  const [showGLSL, setShowGLSL] = createSignal(false);
  const [showFilmoteka, setShowFilmoteka] = createSignal(false);
  const [showKinopoisk, setShowKinopoisk] = createSignal(false);
  const [showSwapi, setShowSwapi] = createSignal(false);
  const [showIceCream, setShowIceCream] = createSignal(false);
  const [showWebStudio, setShowWebStudio] = createSignal(false);
  const [showPhoneBookApp, setShowPhoneBookApp] = createSignal(false);

  const open_GLSL = () => {
    setShowGLSL(prev => !prev);
    setShowFilmoteka(false);
    setShowKinopoisk(false);
    setShowSwapi(false);
    setShowIceCream(false);
    setShowWebStudio(false);
    setShowPhoneBookApp(false);
  };

  const open_Filmoteka = () => {
    setShowFilmoteka(prev => !prev);
    setShowGLSL(false);
    setShowKinopoisk(false);
    setShowSwapi(false);
    setShowIceCream(false);
    setShowWebStudio(false);
    setShowPhoneBookApp(false);
  };

  const open_Kiinopoisk = () => {
    setShowKinopoisk(prev => !prev);
    setShowFilmoteka(false);
    setShowGLSL(false);
    setShowSwapi(false);
    setShowIceCream(false);
    setShowWebStudio(false);
    setShowPhoneBookApp(false);
  };

  const open_Swapi = () => {
    setShowSwapi(prev => !prev);
    setShowFilmoteka(false);
    setShowKinopoisk(false);
    setShowGLSL(false);
    setShowIceCream(false);
    setShowWebStudio(false);
    setShowPhoneBookApp(false);
  };

  const open_IceCream = () => {
    setShowIceCream(prev => !prev);
    setShowFilmoteka(false);
    setShowKinopoisk(false);
    setShowSwapi(false);
    setShowGLSL(false);
    setShowWebStudio(false);
    setShowPhoneBookApp(false);
  };

  const open_WebStudio = () => {
    setShowWebStudio(prev => !prev);
    setShowFilmoteka(false);
    setShowKinopoisk(false);
    setShowSwapi(false);
    setShowIceCream(false);
    setShowGLSL(false);
    setShowPhoneBookApp(false);
  };

  const open_PhoneBookApp = () => {
    setShowPhoneBookApp(prev => !prev);
    setShowFilmoteka(false);
    setShowKinopoisk(false);
    setShowSwapi(false);
    setShowIceCream(false);
    setShowWebStudio(false);
    setShowGLSL(false);
  };


  return(
    <div class={styles.container}>
      <ul>
        <li class={styles.proyecto} onclick={open_GLSL}>GLSL Research / 2023</li>
        {showGLSL() && (<Site obj={webapi.glslresearch}/>)}

        <li class={styles.proyecto} onclick={open_Filmoteka}>Filmoteka / 2023</li>
        {showFilmoteka() && (<Site obj={webapi.filmoteka}/>)}
        
        <li class={styles.proyecto} onclick={open_Kiinopoisk}>Kinopoisk / 2023</li>
        {showKinopoisk() && (<Site obj={webapi.kinopoisk}/>)}
        
        <li class={styles.proyecto} onclick={open_Swapi}>Swapi-Challenge / 2023</li>
        {showSwapi() && (<Site obj={webapi.swapi}/>)}
        
        <li class={styles.proyecto} onclick={open_IceCream}>Ice-Cream / 2022</li>
        {showIceCream() && (<Site obj={webapi.icecream}/>)}

        <li class={styles.proyecto} onclick={open_WebStudio}>WebStudio / 2022</li>
        {showWebStudio() && (<Site obj={webapi.webstudio}/>)}

        <li class={styles.proyecto} onclick={open_PhoneBookApp}>PhoneBook App / 2023</li>
        {showPhoneBookApp() && (<Site obj={webapi.phonebookapp}/>)}

      </ul>
    </div>  
  );
}