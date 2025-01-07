"use client";

import NavLink from "@/Components/NavLink";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Pagination, Product } from "@/types";
import { Head, useForm } from "@inertiajs/react";

interface Props {
  title: string;
  products: Pagination<Product>;
}

const ProductPage = ({ products, title }: Props) => {
  const { delete: remove, processing } = useForm();

  const handleDelete = (id: number) => {
    // Menangani penghapusan todo
    remove(route("product.destroy", id));
  };

  console.log({ products });
  return (
    <Authenticated>
      <Head title={title} />
      <h1 className="mb-4 text-2xl font-bold">Product List</h1>

      {/* Product List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.data.map((product) => (
          <div
            key={product.id}
            className={`rounded border p-4 ${processing ? "opacity-50" : ""}`}
            onClick={() => handleDelete(product.id)}>
            <img
              src={product.image_url}
              alt={product.name}
              className="h-40 w-full rounded object-cover"
            />
            <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
            <p className="text-sm text-gray-700">{product.description}</p>
            <p className="mt-2 font-bold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>

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
