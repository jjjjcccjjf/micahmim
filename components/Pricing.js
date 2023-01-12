import styles from "../styles/Pricing.module.css"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Image from "next/image"

export default function Pricing({ pricing }) {


    return (
        <>
            <section className={styles.pricingSection}>
                <h2 className={styles.pricingSectionHeading}>Comms comms comms</h2>
                <p className={styles.pricingSectionSubHeading}>Subheading Enim ipsum sit ex aliquip reprehenderit ex ex labore.</p>
                <div className={styles.pricing}>
                    {pricing.map((item, index) => (
                        <PricingSlide key={index} item={item}></PricingSlide>
                    ))}
                </div>
            </section>
        </>
    )
}

function PricingSlide(props) {
    const { index, item } = props
    const { urlFor } = useContext(AppContext)

    return (
        <>
            <figure key={index} className={styles.pricingContainer}>
                {/* <img
                                src={`${urlFor(item.image).quality(80).url()}`}
                                srcSet={`${urlFor(item.image).quality(80).url()}`}
                                alt={item.alt}
                                loading="lazy"
                            /> */}
                <div className={styles.imageContainer}>
                    <Image src={urlFor(item.image).quality(80).url()} fill alt={item.heading}></Image>
                </div>
                <div className={styles.headingPricing}>
                    <p>{item.heading}</p>
                    <p>{item.price}</p>
                </div>
                <div className={styles.pricingDescription}>
                    <p>{item.description}</p>
                </div>
            </figure>
        </>
    )
}