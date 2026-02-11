'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-black">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600" />
              <span>EvolveWell</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Your connection to expert coaching for a fitter, stronger you.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="/trainers" className="hover:text-gray-900">
                  Find Trainers
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-gray-900">
                  Programs
                </a>
              </li>
              <li>
                <a href="/classes" className="hover:text-gray-900">
                  Classes
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-gray-900">
                  Equipment
                </a>
              </li>
            </ul>
          </div>

          {/* For Trainers */}
          <div>
            <h4 className="font-semibold text-gray-900">For Trainers</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#become-trainer" className="hover:text-gray-900">
                  Become a Trainer
                </a>
              </li>
              <li>
                <a href="#trainer-tools" className="hover:text-gray-900">
                  Trainer Tools
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-900">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#privacy" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>
            © {currentYear} EvolveWell. All rights reserved. Built by Yahya Abatorab, Andy Vargas, Oliver Giesller, and Yahya Daud.
          </p>
        </div>
      </div>
    </footer>
  );
}
