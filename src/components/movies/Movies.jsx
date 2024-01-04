import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { moviesapi } from "./moviesapi";

function Movie ({obj}) {
  return(
    <div class={styles.container}>
      <h4 class={styles.title}>{obj.title}</h4>
      {obj.video && (<div class={styles.video} innerHTML={obj.video}></div>)}
      <p><span class={styles.bold}>Año:</span> {obj.fecha}</p>
      <p><span class={styles.bold}>Lugar:</span> {obj.lugar}</p>
      {obj.duracion && (<p><span class={styles.bold}>Duración:</span> {obj.duracion}</p>)}
      <p><span class={styles.bold}>Cargo desempeñado:</span> {obj.cargo}</p>
      <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
      <p><span class={styles.bold}>Equipo:</span></p>  
      <ul class={styles.ul}>
        {obj.equipo.map(({id, nombre, cargo}) => (
          <li key={id} class={styles.list}>{cargo} - {nombre}</li>
        ))}
      </ul>
      {obj.presentaciones && (
        <>
          <p class={styles.bold}>Presentaciones:</p>
          <ul class={styles.ul}>
            {obj.presentaciones.map(({id, fest}) => (
              <li key={id} class={styles.list}>{fest}</li>
            ))}
          </ul>
        </>
      )}
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

    </div>
  )
}

function Kinoclaje () {
  return(
    <div class={styles.container}>
      <h4 class={styles.title}>Kinoclaje</h4>
      <p><span class={styles.bold}>Año:</span> 2005-2008</p>
      <p><span class={styles.bold}>Lugar:</span> Bogotá, Colombia</p>
      <p><span class={styles.bold}>Cargo desempeñado:</span> Animador</p>
      <p><span class={styles.bold}>Concepto:</span> Colectivo de animación experimental a partir de la intervención directa a cintas de 35mm.</p>
      <p class={styles.bold}>Proyectos en los que participé:</p>
      <ul class={styles.ul}>
        <li class={styles.list}><span class={styles.obra}>Kinoclaje</span>, 16min, 2005</li>
        <li class={styles.list}><span class={styles.obra}>Tomasita y el Caimán</span>, 4min, 2007</li>
        <li class={styles.list}><span class={styles.obra}>Casa e' Palo</span>, videoclip para el grupo Nawal, 4min, 2006</li>
        <li class={styles.list}><span class={styles.obra}>Spot promocional del III Festival de Cine y Video de DD.HH de Sucre, Bolivia</span>, 1min, 2007</li>
        <li class={styles.list}><span class={styles.obra}>Intersección cruce y encuentro</span>, 2min, 2009</li>
      </ul>
      <p class={styles.bold}>Enlaces:</p>
      <ul class={styles.ul}>
        <li class={styles.list}><a href="https://vimeo.com/kinoclaje" traget="_blank">Canal Vimeo</a></li>
        <li class={styles.list}><a href="https://kinoclaje.blogspot.com/" traget="_blank">Blog</a></li>
      </ul>
    </div>
  )
}

export function Movies () {
  const [showAguaSalada, setShowAguaSalada] = createSignal(false);
  const [showAndromeda, setShowAndromeda] = createSignal(false);
  const [showBaladaRock, setShowBaladaRock] = createSignal(false);
  const [showEcuador, setShowEcuador] = createSignal(false);
  const [showKinoclaje, setShowKinoclaje] = createSignal(false);
  const [showJattends, setShowJattends] = createSignal(false);

  const open_AguaSalada = () => {
    setShowAguaSalada(prev => !prev);
    setShowAndromeda(false);
    setShowBaladaRock(false);
    setShowEcuador(false);
    setShowKinoclaje(false);
    setShowJattends(false);
  }

  const open_Andormeda = () => {
    setShowAndromeda(prev => !prev);
    setShowAguaSalada(false);
    setShowBaladaRock(false);
    setShowEcuador(false);
    setShowKinoclaje(false);
    setShowJattends(false);
  }

  const open_BaladaRock = () => {
    setShowBaladaRock(prev => !prev);
    setShowAguaSalada(false);
    setShowAndromeda(false);
    setShowEcuador(false);
    setShowKinoclaje(false);
    setShowJattends(false);
  }

  const open_Ecuador = () => {
    setShowEcuador(prev => !prev);
    setShowAguaSalada(false);
    setShowAndromeda(false);
    setShowBaladaRock(false);
    setShowKinoclaje(false);
    setShowJattends(false);
  }

  const open_Kinoclaje = () => {
    setShowKinoclaje(prev => !prev);
    setShowAguaSalada(false);
    setShowAndromeda(false);
    setShowBaladaRock(false);
    setShowEcuador(false);
    setShowJattends(false);
  }

  const open_Jattends = () => {
    setShowJattends(prev => !prev);
    setShowAguaSalada(false);
    setShowAndromeda(false);
    setShowBaladaRock(false);
    setShowEcuador(false);
    setShowKinoclaje(false);
  }

    return(
      <div class={styles.container}>
        <ul>
          <li class={styles.proyecto} onclick={open_AguaSalada}>Agua Salada <span class={styles.type}>Corto Ficción</span> 2022</li>
          {showAguaSalada() && (<Movie obj={moviesapi.aguasalada}/>)}
          
          <li class={styles.proyecto} onclick={open_Andormeda}>Andrómeda <span class={styles.type}>Corto Experimental</span> 2016</li>
          {showAndromeda() && (<Movie obj={moviesapi.andromeda} />)}
          
          <li class={styles.proyecto} onclick={open_BaladaRock}>Balada Rock <span class={styles.type}>Corto Ficción</span> 2014</li>
          {showBaladaRock() && (<Movie obj={moviesapi.baladarock}/>)}
          
          <li class={styles.proyecto} onclick={open_Ecuador}>Ecuador <span class={styles.type}>Corto Ficción</span> 2011</li>
          {showEcuador() && (<Movie obj={moviesapi.equador} />)}
          
          <li class={styles.proyecto} onclick={open_Kinoclaje}>Kinoclaje <span class={styles.type}>Animación</span> 2005-2009</li>
          {showKinoclaje() && (<Kinoclaje />)}
          
          <li class={styles.proyecto} onclick={open_Jattends}>J'attends la pluie <span class={styles.type}>Cubrimiento de evento</span> 2019</li>
          {showJattends() && ( <Movie obj={moviesapi.jattends} />)}

          <li class={styles.proyecto}>ARB <span class={styles.type}>Institucional</span> 2014</li>
          
          <li class={styles.proyecto}>+</li>

        </ul>
      </div>
    );
}