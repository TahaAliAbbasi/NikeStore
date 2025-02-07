import { sanityFetch } from "@/sanity/lib/fetch";
import { getProductById } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  price: number;
  status: string;
  category: string;
  colors: string | string[];
  productName: string;
  inventory: number;
  imageurl: string | null;
  description: string;
};

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product: Product | null = await sanityFetch({
    query: getProductById,
    params: { id: params.id },
  });

  // Handle missing product
  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="text-gray-500 mt-2">The product you are looking for does not exist or has been removed.</p>
        <Link href="/allproducts">
          <button className="mt-4 rounded-3xl px-4 py-2 border-2 border-black bg-black text-white hover:scale-105 shadow-md">
            Back to all products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6 flex-wrap">
        {/* Handle missing image */}
        <Image
          src={product.imageurl || "/fallback-image.jpg"}
          alt={product.productName || "Product image"}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />

        <div className="w-full md:w-[367px]">
          <h1 className="text-2xl font-bold text-[48px] leading-snug">{product.productName}</h1>
          <p className="text-lg text-yellow-600">{product.status}</p>
          <p className="text-lg">
            Price: <span className="text-sm">RS</span>. {product.price}
          </p>
          <p className="text-md">Category: {product.category}</p>
          <p className="text-md">Colors: {Array.isArray(product.colors) ? product.colors.join(", ") : product.colors}</p>
          <p className="text-md">Quantity: {product.inventory}</p>
          <p className="mt-4">{product.description}</p>

          {/* Back to all products */}
          <Link href="/allproducts">
            <button className="mt-4 rounded-3xl px-4 py-2 border-2 border-black bg-black text-white hover:scale-105 shadow-md">
              Back to all products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
