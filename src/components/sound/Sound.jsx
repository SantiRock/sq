import styles from "../Components.module.css";

function Sonido ({obj}) {
  return(
    <div class={styles.container}>
       <h4 class={styles.title}>{obj.title}</h4>
         {obj.sound && (<div class={styles.video} innerHTML={obj.sound}></div>)}
        <p><span class={styles.bold}>Año:</span> {obj.fecha}</p>
        <p><span class={styles.bold}>Lugar:</span> {obj.lugar}</p>
        <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
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

export function Sound () {

    return(
      <div class={styles.container}>
        <ul>
          <li class={styles.proyecto}>Paisajes Sonoros / 2019-2021</li>
          <li class={styles.proyecto}>Exploraciones Musicales / 2021-Actualmente</li>
          <li class={styles.proyecto}>Colombian Tapes <span class={styles.type}>Podcast</span> 2020-Actualmente</li>
          <li class={styles.proyecto}>Sponidos experimentales del Abya Yala <span class={styles.type}>Corto Ficción</span> 2018</li>
          <li class={styles.proyecto}>DJ Selector / 2009-2020</li>
        </ul>
      </div>
    );
}