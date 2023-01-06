import { useState, useEffect } from "react"
// import useSanityClient from "../hooks/useSanityClient.js"
import styles from '../styles/Hero.module.css'

export default function Hero({ heroHeading, heroParagraph, heroCTA }) {
    return (
        <main className={styles.hero}>
            <h1>{heroHeading}</h1>
            <p>{heroParagraph}</p>
            <p>{heroCTA}</p>
        </main>
    )
}
