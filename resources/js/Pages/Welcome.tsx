import Feature from "@/Components/Feature";
import Products from "@/Components/Products";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export default function Welcome() {
  return (
    <Authenticated>
      <Head title="Official larashop" />
      <div className="relative size-full overflow-hidden rounded-lg px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0" style={{ height: "100%" }}>
          <img
            className="size-full object-cover"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Fashion Hero"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            New Season Arrivals
          </h1>
          <p className="mt-4 text-xl text-white">
            Discover the latest trends in fashion and explore our new
            collection.
          </p>
          <div className="mt-8">
            <Link
              href="/product"
              className="inline-flex items-center space-x-2 rounded-md bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100">
              <span>Shop Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* feature */}
      <Feature />

      {/* Categories */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Link href="/product" className="group relative cursor-pointer">
            <img
              className="h-[400px] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Women's Fashion"
            />
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-25 transition-all group-hover:bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-semibold text-white">Women</h3>
            </div>
          </Link>
          <Link href="/product" className="group relative cursor-pointer">
            <img
              className="h-[400px] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Men's Fashion"
            />
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-25 transition-all group-hover:bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-semibold text-white">Men</h3>
            </div>
          </Link>
          <Link href="/product" className="group relative cursor-pointer">
            <img
              className="h-[400px] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Accessories"
            />
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-25 transition-all group-hover:bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-semibold text-white">Accessories</h3>
            </div>
          </Link>
        </div>
      </div>

      <Products />
    </Authenticated>
  );
}
