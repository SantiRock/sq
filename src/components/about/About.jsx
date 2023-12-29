import { createSignal } from "solid-js";
import styles from "./About.module.css";

export function About () {
  const [copied, setCopied] = createSignal("Dale click al correo para copiarlo");



  const copyText = () => {
    const textToCopy = 'santiagoquinteropintoo@gmail.com';
    navigator.clipboard.writeText(textToCopy);
    setCopied("El correo ha sido copiado");

    setTimeout(() => {
      setCopied("Dale click al correo para copiarlo");
    }, 2500);
  }

  return(
    <header>
      <h1>Santiago Quintero</h1>
      <h2 class={styles.portafolio}>Portafolio</h2>
      <div class={styles.contact_container}>
        <p class={styles.contact} onClick={copyText}>
          Contacto: <span class={styles.email}>santiagoquinteropintoo@gmail.com</span>
        </p>
        <span class={styles.tooltipText}>
          {copied}
        </span>
      </div>
      <p class={styles.msn}>He dividido los proyectos por secciones, solo debes dar click en la sección y luego en el nombre del proyecto.</p>
    </header>
    );
}