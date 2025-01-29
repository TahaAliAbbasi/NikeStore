import { defineQuery } from "next-sanity";



export const allProducts = defineQuery(`
    *[_type == "product"]{
   _id,
   price,
   status,
   category,
   colors,
   productName,
   inventory,
   description,
   "imageurl": image.asset->url
}
    `)

    export const getProductById = `
  *[_type == "product" && _id == $id][0]{
    _id,
    price,
    status,
    category,
    colors,
    productName,
    inventory,
    "imageurl": image.asset->url,
    description
  }
`;
