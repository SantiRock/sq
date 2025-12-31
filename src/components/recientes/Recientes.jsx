import { createSignal } from "solid-js";
import { recentapi } from "./recienteapi";
import styles from "../Components.module.css";

export const rc = Object.keys(recentapi).length;

function Recent ({obj}) {
    return(
    <div class={`${styles.container} ${styles.cp}`}>
        <h4 class={styles.title}>{obj.title}</h4>
        <p><span class={styles.bold}>Año:</span> {obj.fecha}</p>
        <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
        <p class={styles.bold}>Enlaces:</p>
        <ul class={styles.ul}>
            {obj.enlaces.map(({id, enlace, text}) => (
                <li key={id}><a href={enlace} target="_blank">{text}</a></li>
            ))}
        </ul>
    </div>
    )
}

export function Recientes () {
    const [showPipoca, setShowPipoca] = createSignal(false);
    const [showAi, setShowAi] = createSignal(false);
    const [showZhizwha, setShowZhizwha] = createSignal(false);
    const [showAstronativo, setShowAstronativo] = createSignal(false);

    const open_Pipoca = () => {
        setShowPipoca(prev => !prev);
    }

    const open_ai = () => {
        setShowAi(prev => !prev);
    }

    const open_Zhizhwa = () => {
        setShowZhizwha(prev => !prev);
    }

    const open_Astronativo = () => {
        setShowAstronativo(prev => !prev);
    }

    return(
        <div class={styles.container}>
            <ul>
                <li id="pipoca" class={styles.proyecto} onclick={open_Pipoca}>Pipoca <span class={styles.type}>Música</span> / 2026</li>
                {showPipoca() && (<Recent obj={recentapi.pipoca}/>)}

                <li id="ai" class={styles.proyecto} onclick={open_ai}>AI Generativa <span class={styles.type}>Image y Video</span> / 2025</li>
                {showAi() && (<Recent obj={recentapi.ai}/>)}

                <li id="zhizhwa" class={styles.proyecto} onclick={open_Zhizhwa}>Zhizhwa <span class={styles.type}>net art</span> / 2025</li>
                {showZhizwha() && (<Recent obj={recentapi.zhizhwa}/>)}

                <li id="astronativo" class={styles.proyecto} onclick={open_Astronativo}>Astronativo <span class={styles.type}>AV Performance</span> / 2024 - 2025</li>
                {showAstronativo() && (<Recent obj={recentapi.astronativo}/>)}
            </ul>
        </div>

    );

}
