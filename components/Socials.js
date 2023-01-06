import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import styles from "../styles/Socials.module.css"


export default function Socials() {
    return (
        <section className={styles.socials}>
            <FontAwesomeIcon icon={faHandSpock} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
        </section>
    )
}