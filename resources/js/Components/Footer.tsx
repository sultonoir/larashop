import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">About LUXE</h3>
            <p className="text-gray-400">
              Discover the latest in fashion and lifestyle with LUXE. Premium
              quality, sustainable fashion for the modern individual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-white focus:outline-none"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © 2024 LUXE. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Facebook className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white" />
              <Twitter className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white" />
              <Instagram className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white" />
              <Youtube className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
