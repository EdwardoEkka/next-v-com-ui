import { Product } from "@/app/types";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { name, description, images, price, stock, category } = product;

  return (
    <div className="bg-black border shadow-lg overflow-hidden cursor-pointer">
      {/* Product Image */}
      <div className="relative bg-white">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-64 object-scale-down"
        />
        {stock.stockStatus === "out of stock" && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-xl font-bold">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-100">{name}</h3>
        <p
          className="text-white text-sm mt-2"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
          }}
        >
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center mt-4">
          <span className="text-lg font-semibold text-gray-800">
            {price.discountedPrice ? (
              <span className="line-through text-red-500 mr-2">
                {price.currency} {price.price}
              </span>
            ) : (
              `${price.currency} ${price.price}`
            )}
            {price.discountedPrice && (
              <span className="text-green-600">
                {price.currency} {price.discountedPrice}
              </span>
            )}
          </span>
        </div>

        {/* Stock Status */}
        <div className="mt-4">
          <span
            className={`text-sm font-semibold ${
              stock.stockStatus === "in stock"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {stock.stockStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
