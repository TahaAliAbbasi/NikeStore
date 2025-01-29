import { sanityFetch } from "@/sanity/lib/fetch";
import { getProductById } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  price: number;
  status: string;
  category: string;
  colors: string;
  productName: string;
  inventory: number;
  imageurl: string;
  description: string; 
};

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product: Product = await sanityFetch({
    query: getProductById,
    params: { id: params.id },
  });

  if (!product) {
    return <div>Product not found</div>;
  }
  

  

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Image src={product.imageurl} alt={product.productName} width={500} height={500} />
        <div className="w-[367px]">
          <h1 className=" text-2xl font-bold text-[48px] leading-snug  max-w-[367px]">{product.productName}</h1>
          <p className="text-lg text-yellow-600">{product.status}</p>
          <p className="text-lg">Price : <span className="text-sm">RS</span>.{product.price}</p>
          <p className="text-md">Category : {product.category}</p>
          <p className="text-md">Colors : {product.colors}</p>
          <p className="text-md">Quantity : {product.inventory}</p>
          <p className="mt-4 w-[367px]">{product.description}</p>
          <br />
          <button className="rounded-3xl p-2 border-2 border-black bg-black text-white hover:scale-105 shadow-md"><Link href="/allproducts">Back to all products</Link></button>
        </div>
      </div>
      
    </div>
  );
}
