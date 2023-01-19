import Image from "next/image"
import styles from '../styles/Hero.module.css'
import utils from '../styles/Utils.module.css'
import chimes from "../public/chimes.jpg"
import bg from "../public/bg.jpg"
import { useEffect, useRef } from "react"

export default function Hero({ heroParagraph, heroCTA }) {

    const parallaxItem1 = useRef()
    const parallaxItem2 = useRef()

    useEffect(() => {
        function parallax(event) {
            const position1 = parallaxItem1.current.getAttribute("value");
            const x1 = (window.innerWidth - event.pageX * position1) / 90;
            const y1 = (window.innerHeight - event.pageY * position1) / 90;
            
            const position2 = parallaxItem2.current.getAttribute("value");
            const x2 = (window.innerWidth - event.pageX * position2) / 90;
            const y2 = (window.innerHeight - event.pageY * position2) / 90;

            parallaxItem1.current.style.transform = `translateX(${x1}px) translateY(${y1}px) scale(1.03)`;
            parallaxItem2.current.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
        }

        document.addEventListener("mousemove", parallax);

        return () => {
            document.removeEventListener("mousemove", parallax)
        }
    }, [])

    return (
        <main className={styles.hero}>

            <div className={styles.bg} >
                <Image src={bg} fill={true} alt="bg" priority={true} ref={parallaxItem1} value="1"></Image>
            </div>

            <section>
                <div className={styles.left}>
                    <h1>Hi, I'm Hicami!</h1>
                    <p>{heroParagraph}</p>
                    <p><a className={utils.buttonDefault} href="#gallery">{heroCTA}</a></p>
                </div>
                <div className={styles.right}>
                    <Image src={chimes} fill={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt="chimes" priority={true} ref={parallaxItem2} value="-1"></Image>
                    {/* <Image src="/rb.jpg" fill={true}></Image> */}
                </div>

            </section>
        </main>
    )
}
