import styles from "../styles/Gallery.module.css"
import Image from "next/image"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery({ gallery }) {


    const { urlFor } = useContext(AppContext)

    return (
        <>
            {/* <section className={styles.gallery} id="gallery">

                {gallery.length ? gallery.map(item =>
                    <figure key={item._id}><Image src={urlFor(item.image).url()} fill={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt={item.alt}></Image></figure>
                ) : <p>Oops... No images found</p>}
            </section> */}
            <section className={styles.gallery}>

                <ImageList variant="masonry" cols={4} gap={8}>
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