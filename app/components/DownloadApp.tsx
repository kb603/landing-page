import Image from "next/image";

export default function DownloadApp() {
  return (
    <div>
      <div className="m-5 mt-10 flex items-start">
        {/* Image section */}
        <div className="mr-20 flex-shrink-0">
          <Image
            src="/images/3D app mockup.svg"
            alt="Business solutions"
            className="dark: ml-20 mr-5"
            width={500}
            height={500}
          />
        </div>

        {/* Text content */}
        <div className="m-10 flex flex-1 flex-col">
          <h1 className="text-3xl font-bold">Download Parap mobile</h1>
          <p className="mt-5">
            Manage your money smartly and earn while you <br /> spend with just
            one app
          </p>

          {/* QR code and App icons section */}
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="md: flex flex-col items-center gap-8 lg:flex-row">
              {/* QR Code */}
              <div className="h-40 w-40">
                <Image
                  src="/images/QR with logo.svg"
                  alt="QR code"
                  width={160}
                  height={160}
                />
              </div>

              {/* App icons */}
              <div className="flex flex-col space-y-5">
                <Image
                  src="/images/App store.svg"
                  alt="Download on the App Store"
                  width={217}
                  height={64}
                />
                <Image
                  src="/images/Play store.svg"
                  alt="Get it on Google Play"
                  width={217}
                  height={64}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
