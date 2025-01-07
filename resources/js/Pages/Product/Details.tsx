import Feature from "@/Components/Feature";
import Products from "@/Components/Products";
import { useCart } from "@/hooks/use-cart";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { formatToDollar } from "@/lib/utils";
import { Product } from "@/types";
import { Head } from "@inertiajs/react";
import { Minus, Plus, Star } from "lucide-react";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function Details({ product }: Props) {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const { add } = useCart();
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddCart = () => {
    if (selectedSize === "") {
      return;
    }
    add({ ...product, size: selectedSize, amount: quantity });
  };

  return (
    <Authenticated>
      <Head title="hallo" />
      <div className="size-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <div className="aspect-w-3 aspect-h-4">
            <img
              src={product.image_url}
              alt="Product"
              className="h-[600px] w-full rounded-lg object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
              <div className="mb-4 flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(121 reviews)</span>
              </div>
              <p className="mb-6 text-2xl font-semibold">
                {formatToDollar(product.price)}
              </p>
              <p className="mb-6 text-gray-600">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h2 className="mb-4 font-semibold">Select Size</h2>
              <div className="flex space-x-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                      selectedSize === size
                        ? "border-gray-50 bg-sky-500 text-white"
                        : "border-gray-300 hover:border-sky-900"
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h2 className="mb-4 font-semibold">Quantity</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-900">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-900">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mb-8 flex space-x-4">
              <button
                className="flex-1 rounded-full bg-sky-500 py-4 text-white transition-colors hover:bg-sky-900"
                onClick={handleAddCart}>
                Add to Cart
              </button>
            </div>

            {/* Shipping Info */}
            <Feature className="grid md:grid-cols-2" />
          </div>
        </div>
      </div>
      <Products />
    </Authenticated>
  );
}
