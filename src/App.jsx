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

  function smoothScroll(targetId) {
    const target = document.querySelector(targetId);

    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - 20,
        behavior: 'smooth'
      });
    }
  }


  const open_Prod = () => {
      setShowProd(prev => !prev);
      setShowVideo(false);
      setShowMovies(false);
      setShowSound(false);
      setShowWeb(false);
      setShowEspacios(false);
      smoothScroll("#prod")
  }

  const open_Video = () => {
    setShowProd(false);
    setShowVideo(prev => !prev);
    setShowMovies(false);
    setShowSound(false);
    setShowWeb(false);
    setShowEspacios(false);
    smoothScroll("#video")
 
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
    smoothScroll("#movies")
  }

  const open_Web = () => {
    setShowProd(false);
    setShowVideo(false);
    setShowMovies(false);
    setShowSound(false);
    setShowWeb(prev => !prev);
    setShowEspacios(false);
    smoothScroll("#web")
  }

  const open_Espacios = () => {
    setShowProd(false);
    setShowVideo(false);
    setShowMovies(false);
    setShowSound(false);
    setShowWeb(false);
    setShowEspacios(prev => !prev);
    smoothScroll("#spaces")
  }


  return (
    <div class={styles.container}>
      <About />
      <main>
        <h3 id="prod" onclick={open_Prod}>Producción de eventos</h3>
        {showProd() && (<Prod />)}

        <h3 id="video" onclick={open_Video}>Video</h3>
        {showVideo() && (<Video />)}

        <h3 id="movies" onclick={open_Movies}>Filmografía</h3>
        {showMovies() && (<Movies />)}

        <h3 id="sound" onclick={open_Sound}>Sonido</h3>
        {showSound() && (<Sound />)} 

        <h3 id="web" onclick={open_Web}>Desarrollo Web</h3>
        {showWeb() && (<Web />)}

        <h3 id="spaces" onclick={open_Espacios}>Espacios & Asociaciones</h3>
        {showEspacios() && (<Espacios />)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
