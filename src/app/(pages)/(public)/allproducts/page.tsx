import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/queries";
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
};

export default async function Allproducts() {
  const products: Product[] = await sanityFetch({ query: allProducts });

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6 flex flex-wrap gap-6 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div className="border-2 hover:scale-105 rounded-lg shadow-md p-4 transition-transform duration-200">
                {/* Handle missing image */}
                <Image
                  src={product.imageurl || "/fallback-image.jpg"}
                  alt={product.productName || "Product image"}
                  width={348}
                  height={348}
                  className="object-cover rounded-md"
                />

                <div className="flex justify-between mt-2">
                  <p className="text-yellow-600">{product.status}</p>
                  <p>
                    <span className="text-sm">RS</span>. {product.price}
                  </p>
                </div>

                <h2 className="font-bold mt-1">{product.productName || "Unnamed Product"}</h2>

                <div className="flex justify-between text-gray-600 text-sm mt-1">
                  <p>Colors: {Array.isArray(product.colors) ? product.colors.join(", ") : product.colors}</p>
                  <p>{product.category}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
    </div>
  );
}
