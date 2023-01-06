import styles from "../styles/Gallery.module.css"
import Image from "next/image"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Gallery({ gallery }) {


    const { urlFor } = useContext(AppContext)

    return (
        <section className={styles.gallery}>

            {gallery.length ? gallery.map(item =>
                <figure key={item._id}><Image src={urlFor(item.image).url()} fill={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt={item.alt}></Image></figure>
            ) : <p>Oops... No images found</p>}
        </section>
    )
}