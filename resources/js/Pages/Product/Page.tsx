"use client";

import NavLink from "@/Components/NavLink";
import Products from "@/Components/Products";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Pagination, Product } from "@/types";
import { Head } from "@inertiajs/react";

interface Props {
  title: string;
  products: Pagination<Product>;
  message?: string;
}

const ProductPage = ({ products, title, message }: Props) => {
  console.log({ products, message });
  return (
    <Authenticated>
      <Head title={title} />
      <Products title={title} message={message} />

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center space-x-2">
        {products.links.map((link, index) =>
          link.url ? (
            <NavLink
              active={false}
              key={index}
              href={link.url}
              className={`rounded-lg px-3 py-1 ${
                link.active
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          ) : (
            <span
              key={index}
              className="rounded bg-gray-300 px-3 py-1 text-gray-500"
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          ),
        )}
      </div>
    </Authenticated>
  );
};

export default ProductPage;
