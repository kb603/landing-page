import Image from "next/image";

export default function AppPresentation() {
  return (
    <div className="py-16">
      {/* Header Section */}
      <h1 className="mt-14 text-center text-2xl font-bold">
        Enjoy your financial freedom with <br /> a single app.
      </h1>
      <p className="mt-8 text-center">
        All you need is <span className="text-pink-400">Parap</span>
      </p>

      {/* Image and Description Section */}
      <div className="mt-16 flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
        {/* Left Descriptions */}
        <div className="ml-5 space-y-6 md:w-1/3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-bold text-gray-700">Open an account</p>
              <p className="mt-3 text-sm">
                Open your account in just a few clicks, <br /> anywhere,
                anytime.
              </p>
            </div>
            <Image
              src="/images/UserAccount.svg"
              alt="Open account icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-bold text-gray-700">Spend debt free</p>
              <p className="mt-3 text-sm">
                Know where your money goes. Track your spendings with charts in
                real time.
              </p>
            </div>
            <Image
              src="/images/Send-money -circle.svg"
              alt="Manage finances icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-bold text-pink-400">Earn cashback</p>
              <p className="mt-3 text-sm">
                Earn instant cashback as you spend. No minimum spending limits
                or complicated rules.
              </p>
            </div>
            <Image
              src="/images/Cashback-Fill.svg"
              alt="Secure transactions icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className="my-10 flex justify-center md:my-0 md:w-1/3">
          <Image
            width={247}
            height={500}
            src="/images/iPhone-14-Pro-Space-Black-Mockup.svg"
            alt="App Preview"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Descriptions */}
        <div className="space-y-6 text-left md:w-1/3">
          <div className="flex items-start gap-5">
            <Image
              src="/images/Save money circle.svg"
              alt="24/7 Support icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
            <div>
              <p className="text-lg font-bold text-gray-700">Save Money</p>
              <p className="mt-3 text-sm">
                Open saving account,save money regularly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Image
              src="/images/Save money circle.svg"
              alt="24/7 Support icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
            <div>
              <p className="text-lg font-bold text-gray-700">Save Money</p>
              <p className="mt-3 text-sm">
                Open saving account,save money regularly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Image
              src="/images/Save money circle.svg"
              alt="24/7 Support icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
            <div>
              <p className="text-lg font-bold text-gray-700">Save Money</p>
              <p className="mt-3 text-sm">
                Open saving account,save money regularly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
