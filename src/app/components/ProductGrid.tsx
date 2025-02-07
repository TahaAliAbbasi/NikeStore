import React, { useState } from "react";
import Image from "next/image";

type Product = {
  _id: string;
  price: number;
  status: string;
  category: string;
  colors: string | string[]; // Supports array or single string
  productName: string;
  inventory: number;
  imageurl: string | null;
};

type ProductGridProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const ProductGrid = ({ products, addToCart }: ProductGridProps) => {
  const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>({});

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedToCart((prev) => ({ ...prev, [product._id]: true }));
    setTimeout(() => setAddedToCart((prev) => ({ ...prev, [product._id]: false })), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex flex-col items-center text-center"
        >
          {/* Product Image with Fallback */}
          <Image
            src={product.imageurl || "/fallback-image.jpg"}
            alt={product.productName}
            width={200}
            height={200}
            className="object-cover rounded-md"
            onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
          />

          {/* Product Info */}
          <h2 className="text-lg font-bold mt-3">{product.productName}</h2>
          <p className="text-gray-500 text-sm">{product.category}</p>
          <p className="text-yellow-600 font-semibold">Price: RS.{product.price}</p>

          {/* Colors */}
          <p className="text-gray-600 text-sm">
            Colors:{" "}
            {Array.isArray(product.colors) ? product.colors.join(", ") : product.colors}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(product)}
            className={`rounded-xl px-4 py-2 mt-4 transition-all ${
              addedToCart[product._id]
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
            disabled={addedToCart[product._id]}
            aria-label={`Add ${product.productName} to cart`}
          >
            {addedToCart[product._id] ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
