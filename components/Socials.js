import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import styles from "../styles/Socials.module.css"
import utils from "../styles/Utils.module.css"


export default function Socials() {
    return (
        <section className={styles.socialsSection}>
            <div className={styles.socials}>
                <div className={styles.socialHeader}>
                    <p>Artist / Illustrator</p>
                    <p>Hicami</p>
                    <p>Something else</p>
                </div>
                <div className={styles.socialContent}>
                    <p className={styles.haiku}>Brush strokes on canvas,<br></br>Creations of my heart and soul,<br></br>For sale, now behold.</p>
                    <a className={utils.buttonDefault} href="mailto:jinsei0004@gmail.com">Hire me! (pls)</a>
                </div>
                <div className={styles.socialFooter}>
                    <p>Artist / Illustrator</p>
                    <div className={styles.socialIcons}>
                        <FontAwesomeIcon icon={faHandSpock} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <p><a className={utils.underlineHover} href="#top">Back to top &uarr;</a></p>
                </div>

            </div>
        </section>
    )
}