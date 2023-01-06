import { createClient } from "next-sanity";

export default createClient({
    projectId: "b76aftxs",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
});
