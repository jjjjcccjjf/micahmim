import styles from "../styles/Gallery.module.css"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Gallery() {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages([
            { id: 1, media_url: "/itlog.jpg", caption: "..." },
            { id: 2, media_url: "/chimes.jpg", caption: "..." },
            { id: 3, media_url: "/rb.jpg", caption: "..." },
            { id: 4, media_url: "/kiki.jpg", caption: "..." },
            { id: 5, media_url: "/witch.jpg", caption: "..." },
            { id: 6, media_url: "/chibi.jpg", caption: "..." },
            { id: 7, media_url: "/711bag.jpg", caption: "..." },
        ])
    }, [])

    return (
        <section className={styles.gallery}>

            {images.length ? images.map(image =>
                <figure key={image.id}><Image  src={image.media_url} fill={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt={image.caption}></Image></figure>
            ) : <p>Oops... No images found</p>}
        </section>
    )
}