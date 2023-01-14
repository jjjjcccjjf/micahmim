import Image from "next/image"
import styles from '../styles/Hero.module.css'
import utils from '../styles/Utils.module.css'
import chimes from "../public/chimes.jpg"
import { useEffect, useRef } from "react"

export default function Hero({ heroParagraph, heroCTA }) {

    const parallaxItem = useRef()
    useEffect(() => {
        function parallax(event) {
                const position = parallaxItem.current.getAttribute("value");
                const x = (window.innerWidth - event.pageX * position) / 90;
                const y = (window.innerHeight - event.pageY * position) / 90;

                parallaxItem.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }

        document.addEventListener("mousemove", parallax);

        return () => {
            document.removeEventListener("mousemove", parallax)
        }
    }, [])

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

                <span value="5" ref={parallaxItem}></span>
            </section>
        </main>
    )
}
