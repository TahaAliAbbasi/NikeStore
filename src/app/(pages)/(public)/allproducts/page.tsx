import { sanityFetch } from "@/sanity/lib/fetch"
import { allProducts } from "@/sanity/lib/queries"
import Image from "next/image";
import Link from "next/link";


type product = {
  _id : string,
  price : number,
  status : string,
  category : string,
  colors : string,
  productName : string,
  inventory : number,
  imageurl : string
}

export default async function Allproducts(){
  const products:product[] = await sanityFetch({query:allProducts}) 

  return(
    <div className="max-w-[1440px] mx-auto px-4 py-6 flex gap-6 ">

      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {
            products.map((product)=>(
              <Link href={`/product/${product._id}`} key={product._id}>
              <div className="border-2 hover:scale-105 rounded-lg shadow-md p-4" key={product._id}>
                <Image src={product.imageurl} alt={product.productName} width={348} height={348} />
                
                <div className="flex justify-between">
                <p className="text-yellow-600">{product.status}</p>
                <p><span className="text-sm">RS</span>.{product.price}</p>
                </div>
                
                <h2 className="font-bold">{product.productName}</h2>

                <div className="flex justify-between">
                <p>Colors : {product.colors}</p>
                <p>{product.category}</p>
                </div>
                
                
                
              </div>
              </Link>
            ))
          }
      </div>

    </div>
  )
}


