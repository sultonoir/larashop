import ApplicationLogo from "@/Components/ApplicationLogo";
import Cart from "@/Components/Cart";
import Footer from "@/Components/Footer";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Search from "@/Components/Search";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { Toaster } from "sonner";

export default function Authenticated({
  header,
  children,
}: PropsWithChildren<{ header?: ReactNode }>) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Link href="/" aria-label="home page">
                  <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink
                  href={route("product")}
                  active={route().current("product")}>
                  All
                </NavLink>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink
                  href={route("women")}
                  active={route().current("women")}>
                  Woment
                </NavLink>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink href={route("men")} active={route().current("men")}>
                  Men
                </NavLink>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink
                  href={route("accessories")}
                  active={route().current("accessories")}>
                  Accessories
                </NavLink>
              </div>
            </div>
            <div className="mx-2 flex grow items-center sm:hidden">
              <Search />
            </div>
            <div className="hidden gap-2 sm:ms-6 sm:flex sm:items-center">
              <Search />
              <Cart />
            </div>

            <div className="-me-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState,
                  )
                }
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    className={
                      !showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
          }>
          <div className="space-y-1 pb-3 pt-2">
            <ResponsiveNavLink
              href={route("product")}
              active={route().current("product")}>
              All
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route("women")}
              active={route().current("women")}>
              Woment
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route("men")}
              active={route().current("men")}>
              Men
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route("accessories")}
              active={route().current("accessories")}>
              Accessories
            </ResponsiveNavLink>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white shadow dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      <main className="mx-auto max-w-screen-xl p-5">{children}</main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
