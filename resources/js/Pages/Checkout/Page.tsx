"use client";

import InputError from "@/Components/InputError";
import { useCart } from "@/hooks/use-cart";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import { toast } from "sonner";

const PaymentForm: React.FC = () => {
  const { clear } = useCart();
  const { data, setData, post, errors, processing, reset } = useForm({
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    paymentType: "credit",
    cardNumber: "",
    cardholderName: "",
    email: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    // Pastikan hanya menerima kunci yang valid dari state `data`
    if (name in data) {
      setData(name as keyof typeof data, value);
    }
  };

  const handlePaymentTypeChange = (type: "credit" | "debit") => {
    setData("paymentType", type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("checkout.store"), {
      onSuccess: () => {
        reset();
        clear();
        toast.success("successful payment, check your email for a receipt");
      },
    });
  };

  const subtotal = 15.0;
  const shippingCharge = 10.0;
  const tax = (subtotal + shippingCharge) * 0.03;
  const total = subtotal + shippingCharge + tax;

  return (
    <Authenticated>
      <Head title="Checkout" />
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-5 max-w-2xl rounded-lg bg-gray-50 p-6 text-gray-800 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Address</h2>
        <p className="mb-4 text-sm">Add address for shipping</p>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={data.streetAddress}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={data.city}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium">
              State/Province
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={data.state}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={data.zipCode}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="country" className="block text-sm font-medium">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={data.country}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold">Payment Method</h2>
        <p className="mb-4 text-sm">Add a new payment method to your account</p>
        <div className="col-span-2 mb-3">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="mr-4 flex items-center">
            <input
              type="radio"
              name="paymentType"
              checked={data.paymentType === "credit"}
              onChange={() => handlePaymentTypeChange("credit")}
              className="mr-2"
            />
            Credit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentType"
              checked={data.paymentType === "debit"}
              onChange={() => handlePaymentTypeChange("debit")}
              className="mr-2"
            />
            Debit Card
          </label>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="col-span-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={data.cardNumber}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="cardholderName"
              className="block text-sm font-medium">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={data.cardholderName}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium">
              Expiry Date (MM/YY)
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={data.expiryDate}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium">
              CVV
            </label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              value={data.cvv}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold">Order Summary</h2>
        <div className="mb-6 w-full">
          <p className="flex items-center justify-between">
            Subtotal: <span className="font-bold">${subtotal.toFixed(2)}</span>
          </p>
          <p className="flex items-center justify-between">
            Shipping Charge:{" "}
            <span className="font-bold">${shippingCharge.toFixed(2)}</span>
          </p>
          <p className="flex items-center justify-between">
            Estimated Tax (3%):{" "}
            <span className="font-bold">${tax.toFixed(2)}</span>
          </p>
          <p className="mt-2 flex items-center justify-end text-xl font-bold">
            Total: ${total.toFixed(2)}
          </p>
        </div>
        <InputError className="mt-2" message={errors.email} />
        <button
          type="submit"
          disabled={processing}
          className={`w-full rounded-md bg-blue-600 px-4 py-2 text-white transition ${
            processing ? "cursor-not-allowed opacity-50" : "hover:bg-blue-700"
          }`}>
          {processing ? "Processing..." : "Pay"}
        </button>
      </form>
    </Authenticated>
  );
};

export default PaymentForm;
