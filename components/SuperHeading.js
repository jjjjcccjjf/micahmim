import utils from "../styles/Utils.module.css"

export default function SuperHeading() {
    return <div>
        <style jsx>{`
            #superHeading {
                margin-top: var(--nav-height);
                padding: 1rem 0;
                font-size: 5rem;
                font-weight: normal;
                letter-spacing: 1rem;
                white-space: nowrap;
                animation: scroll 40s linear alternate infinite;
                margin-left: 20rem;
            }
            @keyframes scroll {

                100% {
                    transform: translateX(-100%);
                }
            }

            .scroll-text {

            }
            
      `}</style>
        <h1 id="superHeading" className={utils.superHeading}>ARTIST x ILLUSTRATOR x PET LOVER x HELLO WORLD</h1>
    </div>
}