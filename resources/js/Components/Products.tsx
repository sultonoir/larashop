import { Link, usePage } from "@inertiajs/react";
import { Heart } from "lucide-react";

const Products = () => {
  const { data: products } = usePage().props.products;
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">All Products</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.name}`}
            className="group">
            <div className="relative">
              <img
                src={product.image_url}
                alt={product.name}
                className="h-[400px] w-full rounded-lg object-cover"
              />
              <button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">{product.category}</p>
              <h3 className="mt-1 text-lg font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
