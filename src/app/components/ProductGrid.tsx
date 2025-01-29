import React from "react";

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
type ProductGridProps = {
  products: product[];
  addToCart: (product: product) => void;
};

const ProductGrid = ({ products, addToCart }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg">
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p>Price: RS.{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 rounded-xl p-2 text-white mt-4"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
