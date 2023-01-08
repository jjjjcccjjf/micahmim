import styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav} id="top">
            <ul>
                <li>Logo</li>
                <li>Another</li>
            </ul>
            <ul>
                <li>Back to top</li>
                <li>Gallery</li>
                <li>Socials</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}