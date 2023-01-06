import Nav from "../components/Nav.js"
import Hero from "../components/Hero.js"
import Iphone from "../components/Iphone.js"
import Gallery from "../components/Gallery.js"
import Socials from "../components/Socials.js"
import client from "../helpers/sanityClient.js"

export default function Home({ heroSection, gallery }) {
    return (
        <>
            <Nav></Nav>
            <Hero {...heroSection}></Hero>
            <Iphone ></Iphone>
            <Gallery gallery={gallery}></Gallery>
            <Socials></Socials>
            {/* <ContactForm></ContactForm>  */}
            {/* <Footer></Footer>  */}
        </>
    )
}

export async function getStaticProps() {

    const heroSection = await client.fetch(`*[_type=="heroSection"][0]{heroHeading,heroParagraph,heroCTA}`);
    const gallery = await client.fetch(`*[_type=="gallery"]`);

    return {
        props: {
            heroSection,
            gallery
        }
    };
}
