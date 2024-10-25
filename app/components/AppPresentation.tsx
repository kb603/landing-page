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
              <p className="text-lg font-bold text-gray-700">
                Manage your finances
              </p>
              <p className="mt-3 text-sm">
                Keep track of your expenses and income <br /> with our intuitive
                tools.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=68&width=68"
              alt="Manage finances icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-bold text-gray-700">
                Secure transactions
              </p>
              <p className="mt-3 text-sm">
                Enjoy peace of mind with our advanced <br /> security measures.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=68&width=68"
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
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-bold text-gray-700">24/7 Support</p>
              <p className="mt-3 text-sm">
                Get help anytime, anywhere with our <br /> dedicated support
                team.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=68&width=68"
              alt="24/7 Support icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-bold text-gray-700">Easy Transfers</p>
              <p className="mt-3 text-sm">
                Send money to friends and family <br /> with just a few taps.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=68&width=68"
              alt="Easy Transfers icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-bold text-gray-700">
                Investment Options
              </p>
              <p className="mt-3 text-sm">
                Grow your wealth with our diverse <br /> investment
                opportunities.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=68&width=68"
              alt="Investment Options icon"
              width={68}
              height={68}
              className="ml-4 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
