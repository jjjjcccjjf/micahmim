import styles from "../styles/Gallery.module.css"
import Image from "next/image"
import { useContext, useRef, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery({ gallery }) {

    const [galleryCols, setGalleryCols] = useState(4)

    const imageListRef = useRef()

    const { urlFor } = useContext(AppContext)

    useEffect(() => {
        // set the initial number of items based on default window width
        if (window.innerWidth < 1024) {
            setGalleryCols(2);
        }

        function handleWindowResize() {
            if (window.innerWidth < 1024) {
                setGalleryCols(2)
            } else {
                setGalleryCols(4)
            }
        }

        window.addEventListener("resize", handleWindowResize, true)

        return () => {
            window.removeEventListener("resize", handleWindowResize, true)
        }
    }, [])

    return (
        <>
            {/* <section className={styles.gallery} id="gallery">

                {gallery.length ? gallery.map(item =>
                    <figure key={item._id}><Image src={urlFor(item.image).url()} fill={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt={item.alt}></Image></figure>
                ) : <p>Oops... No images found</p>}
            </section> */}
            <section className={styles.gallery} id="gallery">

                <ImageList variant="masonry" cols={galleryCols} gap={8} ref={imageListRef}>
                    {gallery.map((item, index) => (
                        <ImageListItem key={index}>
                            {/* <Image src={urlFor(item.image).auto('format').fit('max').width(720).quality(80).url()} fill alt={item.alt}></Image> */}
                            <img
                                src={`${urlFor(item.image).quality(80).url()}`}
                                srcSet={`${urlFor(item.image).quality(80).url()}`}
                                alt={item.alt}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </section>
        </>
    )
}