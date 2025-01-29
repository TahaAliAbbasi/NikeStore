import { createClient } from "next-sanity";


const client = createClient({
    projectId : "nh9yzxlz",
    dataset : "production",
    useCdn : true , 
})

export async function sanityFetch({query,params = {}}:{query : string , params?: any}){
     return await client.fetch(query,params)
}