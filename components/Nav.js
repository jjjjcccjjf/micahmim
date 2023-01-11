import styles from '../styles/Nav.module.css';
import Image from 'next/image';

import logo from "../public/🐑👻🍓🎐🌸.png"

export default function Nav() {
    return (
        <nav className={styles.nav} id="top">
            <ul>
                {/* <li className={styles.textLogo}>🐑👻🍓🎐🌸</li> */}
                <li className={styles.imageLogo}><Image src={logo} width={188} height={38} alt="site logo"></Image></li>
            </ul>
            <ul>
                <li>Gallery</li>
                <li>Commission Pricing</li>
                <li>Socials</li>
                <li>Hire me!</li>
            </ul>
        </nav>
    )
}