"use client";

import React, { useState } from "react";

type FormState = {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentType: "credit" | "debit";
  cardNumber: string;
  cardholderName: string;
  email: string;
  expiryDate: string;
  cvv: string;
};

const PaymentForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
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
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentTypeChange = (type: "credit" | "debit") => {
    setFormState((prev) => ({ ...prev, paymentType: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment submitted successfully!");
    console.log("Payment Details:", formState);
  };

  const subtotal = 15.0;
  const shippingCharge = 10.0;
  const tax = (subtotal + shippingCharge) * 0.03;
  const total = subtotal + shippingCharge + tax;

  return (
    <form
      onSubmit={handleSubmit}
      className="text-foreground mx-auto max-w-2xl rounded-lg bg-gray-50 p-6 text-white shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Address</h2>
      <p className="mb-4 text-sm">Add address for shipping</p>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="streetAddress" className="block text-sm font-medium">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formState.streetAddress}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
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
            value={formState.city}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
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
            value={formState.state}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
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
            value={formState.zipCode}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="country" className="block text-sm font-medium">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formState.country}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none">
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold">Payment Method</h2>
      <p className="mb-4 text-sm">Add a new payment method to your account</p>

      <div className="mb-4 flex items-center">
        <label className="mr-4 flex items-center">
          <input
            type="radio"
            name="paymentType"
            checked={formState.paymentType === "credit"}
            onChange={() => handlePaymentTypeChange("credit")}
            className="mr-2"
          />
          Credit Card
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentType"
            checked={formState.paymentType === "debit"}
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
            value={formState.cardNumber}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="cardholderName" className="block text-sm font-medium">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={formState.cardholderName}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
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
            value={formState.expiryDate}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
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
            value={formState.cvv}
            onChange={handleInputChange}
            className="border-border mt-1 w-full rounded-md border p-2 focus:outline-none"
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

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
