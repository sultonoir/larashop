import { useCart } from "@/hooks/use-cart";
import { formatToDollar } from "@/lib/utils";
import { Product } from "@/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Props {
  product: Product & {
    size: string;
    amount: number;
  };
}
const CartCard = ({ product }: Props) => {
  const { remove, mutate } = useCart();

  const handleRemove = () => {
    remove({ id: product.id, size: product.size });
    toast.success("Removed from the cart");
  };

  const calculated = formatToDollar(product.price * product.amount);
  return (
    <div key={product.id} className="flex w-full gap-5">
      <img
        src={product.image_url}
        alt={product.name}
        className="h-[100px] w-20 flex-none rounded-lg object-cover"
      />
      <div className="mt-1 flex w-full flex-col justify-start gap-3 leading-none">
        <div className="inline-flex w-full items-center justify-between">
          <p className="border-border w-fit rounded-lg border px-2 py-0.5 text-sm">
            Size : {product.size}
          </p>
          <button
            className="ring-offset-background border-muted-foreground hover:text-accent-foreground text-muted-foreground relative inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full border px-2 py-1 text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleRemove}>
            <Trash2 className="size-4" />
            Remove
          </button>
        </div>
        <div className="inline-flex w-full items-center justify-between">
          <p className="font-bold">{product.name}</p>
          <p className="text-destructive text-lg font-bold">{calculated}</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() =>
              mutate({ id: product.id, amount: product.amount - 1 })
            }
            className="flex size-6 items-center justify-center rounded-lg border border-gray-300 hover:border-gray-900">
            <Minus className="size-4" />
          </button>
          <span className="text-center">{product.amount}</span>
          <button
            onClick={() =>
              mutate({ id: product.id, amount: product.amount + 1 })
            }
            className="flex size-6 items-center justify-center rounded-lg border border-gray-300 hover:border-gray-900">
            <Plus className="size-4" />
          </button>
        </div>
        <p className="text-destructive font-bold">
          {formatToDollar(product.price)}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
