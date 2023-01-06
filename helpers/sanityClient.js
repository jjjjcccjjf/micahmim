import { createClient } from "next-sanity"

export default createClient({
    projectId: "b76aftxs",
    dataset: "production",
    apiVersion: (new Date()).toISOString().split('T')[0],
    useCdn: false
});