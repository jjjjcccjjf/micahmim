import Nav from "../components/Nav.js"
import Hero from "../components/Hero.js"
import Iphone from "../components/Iphone.js"
import Gallery from "../components/Gallery.js"
import Socials from "../components/Socials.js"
import Pricing from "../components/Pricing.js"
import SuperHeading from "../components/SuperHeading.js"

import client from "../helpers/sanityClient.js"


export default function Home({ heroSection, gallery, pricing }) {
    return (
        <>
            <Nav></Nav>
            {/* <SuperHeading></SuperHeading> */}
            <Hero {...heroSection}></Hero>
            {/* <Iphone ></Iphone> */}
            <Gallery gallery={gallery}></Gallery>
            <Pricing pricing={pricing}></Pricing>
            <Socials></Socials>
            {/* <ContactForm></ContactForm>  */}
            {/* <Footer></Footer>  */}
        </>
    )
}

export async function getStaticProps() {

    const heroSection = await client.fetch(`*[_type=="heroSection"][0]{heroHeading,heroParagraph,heroCTA}`);
    const gallery = await client.fetch(`*[_type=="gallery"]`);
    const pricing = await client.fetch(`*[_type=="pricing"]`);

    return {
        props: {
            heroSection,
            gallery,
            pricing
        }
    };
}
