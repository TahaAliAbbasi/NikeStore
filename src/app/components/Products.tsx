import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      type: "Women's Shoes",
      price: 13995, // Stored as a number
      img: "/product1.png",
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      type: "Men's Shoes",
      price: 13995,
      img: "/product2.png",
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      type: "Men's Shoes",
      price: 16995,
      img: "/product3.png",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* Section Title */}
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">Best of Air Max</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105 duration-200"
          >
            {/* Product Image */}
            <Image
              src={product.img}
              alt={product.name || "Nike Product"}
              width={300}
              height={300}
              className="rounded-lg object-cover"
              onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
            />

            {/* Product Details */}
            <div className="text-center mt-4">
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-xs text-gray-500">{product.type}</p>
              <p className="text-sm font-bold">
                ₹{new Intl.NumberFormat("en-IN").format(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
