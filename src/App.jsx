import { createSignal } from 'solid-js';
import styles from './App.module.css';
import { About } from './components/about/About';
import { Prod } from './components/prod/Prod';
import { Video } from './components/video/Video';
import { Movies } from './components/movies/Movies';
import { Sound } from './components/sound/Sound';
import { Web } from './components/code/Web';
import { Espacios } from './components/espacios/Espacios';

function App() {
  const [showProd, setShowProd] = createSignal(false);
  const [showVideo, setShowVideo] = createSignal(false);
  const [showMovies, setShowMovies] = createSignal(false);
  const [showSound, setShowSound] = createSignal(false);
  const [showWeb, setShowWeb] = createSignal(false);
  const [showEspacios, setShowEspacios] = createSignal(false);


  const open_Prod = () => {
      setShowProd(prev => !prev);
      setShowVideo(false);
      setShowMovies(false);
      setShowSound(false);
      setShowWeb(false);
      setShowEspacios(false);
  }

  const open_Video = () => {
    setShowProd(false);
    setShowVideo(prev => !prev);
    setShowMovies(false);
    setShowSound(false);
    setShowWeb(false);
    setShowEspacios(false);
  }

  const open_Movies = () => {
    setShowProd(false);
    setShowVideo(false);
    setShowMovies(prev => !prev);
    setShowSound(false);
    setShowWeb(false);
    setShowEspacios(false);
  }

  const open_Sound = () => {
    setShowProd(false);
    setShowVideo(false);
    setShowMovies(false);
    setShowSound(prev => !prev);
    setShowWeb(false);
    setShowEspacios(false);
  }

  const open_Web = () => {
    setShowProd(false);
    setShowVideo(false);
    setShowMovies(false);
    setShowSound(false);
    setShowWeb(prev => !prev);
    setShowEspacios(false);
  }

  const open_Espacios = () => {
    setShowProd(false);
    setShowVideo(false);
    setShowMovies(false);
    setShowSound(false);
    setShowWeb(false);
    setShowEspacios(prev => !prev);
  }


  return (
    <div class={styles.container}>
      <About />
      <main>
        <h3 onclick={open_Prod}>Producción de eventos</h3>
        {showProd() && (<Prod />)}

        <h3 onclick={open_Video}>Video</h3>
        {showVideo() && (<Video />)}

        <h3 onclick={open_Movies}>Filmografía</h3>
        {showMovies() && (<Movies />)}

        <h3 onclick={open_Sound}>Sonido</h3>
        {showSound() && (<Sound />)} 

        <h3 onclick={open_Web}>Desarrollo Web</h3>
        {showWeb() && (<Web />)}

        <h3 onclick={open_Espacios}>Espacios & Asociaciones</h3>
        {showEspacios() && (<Espacios />)}
      </main>
    </div>
  );
}

export default App;
