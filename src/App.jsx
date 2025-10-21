import { createSignal } from 'solid-js';
import styles from './App.module.css';
import { About } from './components/about/About';
import { Prod } from './components/prod/Prod';
import { Video } from './components/video/Video';
import { Movies } from './components/movies/Movies';
import { Sound } from './components/sound/Sound';
import { Web } from './components/code/Web';
import { Espacios } from './components/espacios/Espacios';
import { Footer } from './components/footer/Footer';

function App() {
  const [showProd, setShowProd] = createSignal(false);
  const [showVideo, setShowVideo] = createSignal(false);
  const [showMovies, setShowMovies] = createSignal(false);
  const [showSound, setShowSound] = createSignal(false);
  const [showWeb, setShowWeb] = createSignal(false);
  const [showEspacios, setShowEspacios] = createSignal(false);

  const open_Prod = () => {
      setShowProd(prev => !prev);
  }

  const open_Video = () => {
    setShowVideo(prev => !prev); 
  }

  const open_Movies = () => {
    setShowMovies(prev => !prev);
  }

  const open_Sound = () => {
    setShowSound(prev => !prev);
  }

  const open_Web = () => {
    setShowWeb(prev => !prev);
  }

  const open_Espacios = () => {
    setShowEspacios(prev => !prev);
  }


  return (
    <div class={styles.container}>
      <About />
      <main>
       
        <h3 id="video" onclick={open_Video}>Video Performance</h3>
        {showVideo() && (<Video />)}

        <h3 id="web" onclick={open_Web}>Web</h3>
        {showWeb() && (<Web />)}

        <h3 id="movies" onclick={open_Movies}>Filmografía</h3>
        {showMovies() && (<Movies />)}

        <h3 id="sound" onclick={open_Sound}>Sonido</h3>
        {showSound() && (<Sound />)}

        <h3 id="spaces" onclick={open_Espacios}>Espacios & Asociaciones</h3>
        {showEspacios() && (<Espacios />)}

         <h3 id="prod" onclick={open_Prod}>Producción de eventos</h3>
        {showProd() && (<Prod />)}

      </main>
      <Footer />
    </div>
  );
}

export default App;
