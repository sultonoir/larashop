"use client";

import { Input } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import React from "react";

const CreateProduct = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    image: null as File | null,
    price: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("product.store"), {
      onSuccess: () => {
        reset();
        alert("Product created successfully!");
      },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setData("image", e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <Input
          id="name"
          type="text"
          value={data.name}
          onChange={(e) => setData("name", e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          placeholder="Product name"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Image */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium">
          Image
        </label>
        <input
          id="image"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="mt-1 block w-full"
        />
        {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
      </div>

      {/* Price */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium">
          Price
        </label>
        <input
          id="price"
          type="number"
          value={data.price}
          onChange={(e) => setData("price", e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          placeholder="Price in USD"
        />
        {errors.price && <p className="text-sm text-red-500">{errors.price}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={data.description}
          onChange={(e) => setData("description", e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          placeholder="Product description"
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={processing}
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50">
          {processing ? "Submitting..." : "Create Product"}
        </button>
      </div>
    </form>
  );
};

export default CreateProduct;
