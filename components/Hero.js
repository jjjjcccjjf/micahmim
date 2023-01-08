import styles from '../styles/Hero.module.css'
import Image from "next/image"

export default function Hero({ heroHeading, heroParagraph, heroCTA }) {
    return (
        <main className={styles.hero}>
            <section>
                <div className={styles.left}>
                    <h1>{heroHeading}</h1>
                    <p>{heroParagraph}</p>
                    <p>{heroCTA}</p>
                </div>
                <div className={styles.right}>
                    <Image src="/chimes.jpg" fill={true}></Image>
                </div>
            </section>

        </main>
    )
}
