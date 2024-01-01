import { createSignal, onCleanup } from "solid-js";
import styles from "./Images.module.css";

function Gallery ({close_gallery, src, alt, credit, next, prev, clickclose}) {
    
    return(
        <div class={styles.gallery_container} onclick={clickclose}>
              <button class={styles.btn_close} onclick={close_gallery}>X</button>

              <div class={styles.gallery} onclick={clickclose}>
                <button class={styles.btn} onclick={prev}>&lt;</button>
                
                <div class={styles.image_container}>
                  <img
                    class={styles.gallery_item}
                    src={src}
                    alt={alt}
                  />
                  <p class={styles.credit}>{credit}</p>
                </div>

                <button class={styles.btn} onclick={next}>&gt;</button>
              </div>

        </div>
    )
}

export function Images ({arr}) {
    const [showGallery, setShowGallery] = createSignal(false);
    const [currentImage, setCurrentImage] = createSignal('');
    const [currentAlt, setCurrentAlt] = createSignal('');
    const [currentCredit, setCurrentCredit] = createSignal('');
    const [currentId, setCurrentId] = createSignal(0);

    const close_Gallery = () => {
        setShowGallery(false);
    }

    const handleEsc = evt => {
        if(evt.key === 'Escape') {
            setShowGallery(false);
        }
    }

    document.addEventListener('keydown', handleEsc);

    onCleanup(() => {
        document.addEventListener('keydown', handleEsc);
    })

    const clickClose = evt => {
        if (evt.currentTarget === evt.target) {
            setShowGallery(false);
        }
    }

    const open_Gallery = (imagetoshow, imageAlt, ccredit, cid) => {
        setCurrentImage(imagetoshow);
        setCurrentAlt(imageAlt);
        setCurrentCredit(ccredit);
        setShowGallery(true);
        setCurrentId(cid);
    }

    const lastId = arr[0].images.length;

    const next = () => {
        if( currentId() === lastId){
            setShowGallery(false);
            setCurrentImage(arr[0].images[0].image);
            setCurrentAlt(arr[0].images[0].alt);
            setCurrentCredit(arr[0].images[0].credit);
            setShowGallery(true);
            setCurrentId(arr[0].images[0].id);
        } else {
            setShowGallery(false);
            setCurrentImage(arr[0].images[currentId()].image);
            setCurrentAlt(arr[0].images[currentId()].alt);
            setCurrentCredit(arr[0].images[currentId()].credit);
            setShowGallery(true);
            setCurrentId(arr[0].images[currentId()].id);
        }
    }

    const prev = () => {
        if( currentId() === 1){
            setShowGallery(false);
            setCurrentImage(arr[0].images[lastId - 1].image);
            setCurrentAlt(arr[0].images[lastId - 1].alt);
            setCurrentCredit(arr[0].images[lastId - 1].credit);
            setShowGallery(true);
            setCurrentId(arr[0].images[lastId - 1].id);
        } else {
            setShowGallery(false);
            setCurrentImage(arr[0].images[currentId() - 2].image);
            setCurrentAlt(arr[0].images[currentId() - 2].alt);
            setCurrentCredit(arr[0].images[currentId() - 2].credit);
            setShowGallery(true);
            setCurrentId(arr[0].images[currentId() - 2].id);
        }
    }


    return(
        <>
          <ul class={styles.images}>
            {arr[0].images.map(({id, srcset, src, alt, image, credit}) => (
              <li key={id} onclick={() => open_Gallery(image, alt, credit, id)}>
                <img 
                  class={styles.images_item}
                  srcset={srcset}
                  src={src}
                  alt={alt}
                />
              </li>
            ))}
          </ul>
          {showGallery() && (<Gallery 
            close_gallery={close_Gallery} 
            src={currentImage()}
            alt={currentAlt()}
            credit={currentCredit()}
            next={next}
            prev={prev}
            clickclose={clickClose}
          />)}
        </>
    )
}

