"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center justify-between w-2/3">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl md:text-2xl font-bold text-neutral-800">
                Logoipsum
              </span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8 text-black">
              <a
                href="#"
                className="border-transparent 
                
                hover:border-neutral-300 hover:text-neutral-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="border-transparent hover:border-neutral-300 hover:text-neutral-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Solutions
              </a>
              <a
                href="#"
                className="border-transparent hover:border-neutral-300 hover:text-neutral-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Help center
              </a>
              <a
                href="#"
                className="border-transparent hover:border-neutral-300 hover:text-neutral-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <a
              href="#"
              className=" text-[#4532FC]  px-4 py-2 rounded-md text-sm font-medium"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-[#4532FC] text-white hover:bg-[#4632fce1] px-4 py-2 rounded-full text-sm font-medium"
            >
              Request a demo
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-neutral-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Products
            </a>
            <a
              href="#"
              className="border-transparent hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Solutions
            </a>
            <a
              href="#"
              className="border-transparent hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Help center
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-neutral-200">
            <div className="space-y-1">
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300"
              >
                Login
              </a>
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300"
              >
                Get started
              </a>
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50"
              >
                Request a demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
