import { useCart } from "@/hooks/use-cart";
import { Link } from "@inertiajs/react";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  const { cart } = useCart();
  return (
    <Link
      href="/cart"
      className="ring-offset-background hover:bg-accent hover:text-accent-foreground text-muted-foreground relative inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50">
      <ShoppingBag />
      {cart.length > 0 && (
        <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-sky-500 text-xs text-white">
          {cart.length}
        </div>
      )}
    </Link>
  );
};

export default Cart;
