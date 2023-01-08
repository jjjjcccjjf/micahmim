import Image from "next/image"
import styles from '../styles/Hero.module.css'
import utils from '../styles/Utils.module.css'


export default function Hero({ heroHeading, heroParagraph, heroCTA }) {
    return (
        <main className={styles.hero}>
            <section>
                <div className={styles.left}>
                    <h1>{heroHeading}</h1>
                    <p>{heroParagraph}</p>
                    <p><a className={utils.buttonDefault} href="#gallery">{heroCTA}</a></p>
                </div>
                <div className={styles.right}>
                    <Image src="/chimes.jpg" fill={true}></Image>
                </div>
            </section>
        </main>
    )
}
