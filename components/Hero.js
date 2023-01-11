import Image from "next/image"
import styles from '../styles/Hero.module.css'
import utils from '../styles/Utils.module.css'
import chimes from "../public/chimes.jpg"

export default function Hero({ heroParagraph, heroCTA }) {
    return (
        <main className={styles.hero}>
            <section>
                <div className={styles.left}>
                    <h1>Hi, I'm Hicami!</h1>
                    <p>{heroParagraph}</p>
                    <p><a className={utils.buttonDefault} href="#gallery">{heroCTA}</a></p>
                </div>
                <div className={styles.right}>
                    <Image src={chimes} fill={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt="chimes" priority={true}></Image>
                    {/* <Image src="/rb.jpg" fill={true}></Image> */}
                </div>
            </section>
        </main>
    )
}
