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
      <div className="relative mx-auto min-h-screen max-w-screen-lg py-5">
        <div className="flex min-h-96 w-full flex-col items-center justify-center gap-5">
          {cart.length < 1 ? (
            <>
              <p className="text-2xl lg:text-4xl">
                your shopping cart is empty
              </p>
              <Link
                href="/product"
                className="rounded-lg bg-primary px-4 py-2 text-white">
                Explore now
              </Link>
            </>
          ) : (
            <div className="flex w-full flex-col gap-2 md:order-1">
              {cart.map((product, index) => (
                <CartCard product={product} key={index} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 p-5">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-zinc-50 p-4 md:flex-row">
            <p className="text-lg lg:text-2xl">
              Estimated total
              <span className="ml-2 font-bold text-destructive">
                {formatToDollar(totalPrice)}
              </span>
            </p>
            <Link
              href="/checkout"
              className="btn-primary checkout font-koulen !ml-0 flex h-[58px] w-full items-center justify-center rounded-[6px] border border-sky-500 bg-sky-500 text-[24px] tracking-wider text-white hover:bg-sky-400 md:w-[320px]">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Page;
