import { Globe } from "lucide-react";

const Benefits = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900">
            Outsource payment collection
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto">
            Faster and flexible access to cash flow from one or all your
            invoices.
          </p>
        </div>

        <div className="mt-10 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className=" h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-pink-700 mb-4 mx-auto">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 text-center">
                Access up to $100,000
              </h3>
              <p className="mt-2 text-base text-neutral-500 text-center">
                We fund each invoice once approved and collect payment to
                optimise your cash flow.*
              </p>
            </div>

            <div className="text-lg font-medium text-neutral-900  h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-pink-700 mb-4 mx-auto">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 text-center">
                You choose invoices to get paid
              </h3>
              <p className="mt-2 text-base text-neutral-500 text-center">
                Self-serve online portal available 24/7 or connect from your CRM
                or invoicing platform.
              </p>
            </div>

            <div className="text-lg font-medium text-neutral-900  h-full sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-pink-700 mb-4 mx-auto">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 text-center">
                Simple pricing
              </h3>
              <p className="mt-2 text-base text-neutral-500 text-center">
                Only pay for what you use, if you don't need us, there are no
                costs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-pink-700 mb-4 mx-auto">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 text-center">
                Click and quick
              </h3>
              <p className="mt-2 text-base text-neutral-500 text-center">
                We fund each invoice once approved and collect payment to
                optimise your cash flow.*
              </p>
            </div>

            <div className="bg-white p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-pink-700 mb-4 mx-auto">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 text-center">
                Flexible
              </h3>
              <p className="mt-2 text-base text-neutral-500 text-center">
                Self-serve online portal available 24/7 or connect from your CRM
                or invoicing platform.
              </p>
            </div>

            <div className="bg-white p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-pink-700 mb-4 mx-auto">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 text-center">
                Invest in your business
              </h3>
              <p className="mt-2 text-base text-neutral-500 text-center ">
                Only pay for what you use, if you don't need us, there are no
                costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
