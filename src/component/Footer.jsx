const Footer = () => {
  return (
    <footer className="bg-purple-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Left Column */}
          <div>
            <p className="text-neutral-600 text-sm">
              Curabitur consequat, purus a scelerisque sagittis, nulla metus
              tincidunt elit, vel venenatis nulla libero nec nulla. Suspendisse
              potenti. Aenean a justo vel sapien pellentesque tincidunt. Sed
              luctus, elit ac interdum convallis, ligula libero egestas orci, at
              auctor felis ligula nec odio.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* LinkedIn */}
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 
                      5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
                      19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 
                      1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 
                      1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
                      0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 
                      7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Email */}
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <span className="sr-only">Email</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 4h20v16H2z" fill="none" />
                  <path d="M2 4v16h20V4H2zm18 2v.511L12 13 4 6.511V6h16zM4 18V8.122l8 6.489 8-6.489V18H4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Columns */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Products
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Invoice Factoring</a>
                </li>
                <li>
                  <a href="#">Invoice finance</a>
                </li>
                <li>
                  <a href="#">Supplier finance</a>
                </li>
                <li>
                  <a href="#">Customer finance</a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#">Frequently asked questions</a>
                </li>
                <li>
                  <a href="#">Knowledge base</a>
                </li>
                <li>
                  <a href="#">API documentation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col md:flex-row justify-between text-sm text-neutral-400 border-t pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#">Privacy policy</a>
            <a href="#">Contact us</a>
          </div>
          <div className="flex space-x-4 justify-center md:justify-end">
            <a href="#">Site map</a>
            <span>@ebpearls</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
