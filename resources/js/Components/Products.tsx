import { useCart } from "@/hooks/use-cart";
import { formatToDollar } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

interface Props {
  title?: string;
  message?: string;
}

const Products = ({ title = "All products", message }: Props) => {
  const { data: products } = usePage().props.products;
  const { add } = useCart();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 inline-flex flex-col">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-lg text-zinc-600">{message}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <button
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => {
                add({ ...product, size: "S", amount: 1 });
                toast.success("Add to cart");
              }}>
              <ShoppingBag className="h-4 w-4" />
            </button>
            <Link href={`/product/${product.name}`}>
              <img
                src={product.image_url}
                alt={product.name}
                className="h-[400px] w-full rounded-lg object-cover"
              />
            </Link>
            <Link href={`/product/${product.name}`} className="mt-4 block">
              <p className="text-sm text-gray-700">{product.category}</p>
              <h3 className="text-lg font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="text-lg font-semibold text-gray-900">
                {formatToDollar(product.price)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
