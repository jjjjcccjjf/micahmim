import { createContext } from "react";
import imageUrlBuilder from '@sanity/image-url'
import client from "../helpers/sanityClient.js"

const AppContext = createContext();

function AppProvider(props) {
    var context;

    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }

    context = { client, builder, urlFor }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };