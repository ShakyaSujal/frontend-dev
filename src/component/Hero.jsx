const Hero = () => {
  return (
    <div className="relative bg-neutral-900 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4532FC]/90 to-[#4532FC]/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              <span className="block">Get instant cash</span>
              <span className="block">flow with invoice factoring</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-white/80 max-w-md mx-auto lg:mx-0">
              Why wait? Get same day funding and a faster way to access cash
              flow.
            </p>
            <div className="mt-6 sm:mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base sm:text-lg font-medium rounded-full text-[#4532FC] bg-white hover:bg-neutral-100 w-full sm:w-auto"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 hidden sm:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10 h-48 sm:h-64 flex items-center justify-center">
                <svg
                  className="w-24 h-24 sm:w-32 sm:h-32 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
