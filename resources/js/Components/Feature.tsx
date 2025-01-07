import { cn } from "@/lib/utils";
import { Headphones, RefreshCw, TrendingUp, Truck } from "lucide-react";
import React from "react";

type FeatureProps = React.HtmlHTMLAttributes<HTMLDivElement>;

const Feature = ({ className }: FeatureProps) => {
  return (
    <div className="mt-10 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-4", className)}>
          <div className="flex flex-col items-center text-center">
            <TrendingUp className="mb-4 h-8 w-8 text-gray-900" />
            <h3 className="mb-2 text-lg font-semibold">Trending Styles</h3>
            <p className="text-gray-600">
              Stay ahead with the latest fashion trends
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="mb-4 h-8 w-8 text-gray-900" />
            <h3 className="mb-2 text-lg font-semibold">Free Shipping</h3>
            <p className="text-gray-600">On orders over $50</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <RefreshCw className="mb-4 h-8 w-8 text-gray-900" />
            <h3 className="mb-2 text-lg font-semibold">Easy Returns</h3>
            <p className="text-gray-600">30-day return policy</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Headphones className="mb-4 h-8 w-8 text-gray-900" />
            <h3 className="mb-2 text-lg font-semibold">24/7 Support</h3>
            <p className="text-gray-600">Here to help anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
