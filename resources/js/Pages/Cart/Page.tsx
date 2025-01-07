import { useCart } from "@/hooks/use-cart";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { formatToDollar } from "@/lib/utils";
import { Head, Link } from "@inertiajs/react";
import CartCard from "./Partials/CartCard";

const Page = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.toString()) * item.amount,
    0,
  );
  return (
    <Authenticated>
      <Head title="Cart" />
      <div className="relative mx-auto min-h-screen max-w-screen-lg">
        <div className="flex flex-col justify-between gap-4 md:flex-row lg:gap-10">
          <div className="order-2 flex w-full flex-col gap-2 md:order-1">
            {cart.map((product, index) => (
              <CartCard product={product} key={index} />
            ))}
          </div>
        </div>
        <div className="mt-5 p-5">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-zinc-50 p-4 md:flex-row">
            <p className="text-lg lg:text-2xl">
              Estimated total
              <span className="text-destructive ml-2 font-bold">
                {formatToDollar(totalPrice)}
              </span>
            </p>
            <Link
              href="/checkout"
              className="btn-primary checkout font-koulen !ml-0 flex h-[58px] w-full items-center justify-center rounded-[6px] border border-black bg-black text-[24px] tracking-wider text-white hover:bg-white hover:text-black md:w-[320px]">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Page;
