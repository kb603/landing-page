import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        {/* Image section */}
        <div className="w-full max-w-md flex-shrink-0 md:w-1/2 lg:w-5/12">
          <Image
            src="/images/3D app mockup.svg"
            alt="Parap mobile app mockup"
            width={500}
            height={500}
            className="h-auto w-full"
          />
        </div>

        {/* Text and download content */}
        <div className="flex w-full max-w-md flex-col md:w-1/2 lg:w-6/12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Download Parap mobile
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Manage your money smartly and earn while you spend with just one app
          </p>

          {/* QR code and App icons section */}
          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            {/* QR Code */}
            <div className="h-40 w-40 flex-shrink-0">
              <Image
                src="/images/QR with logo.svg"
                alt="QR code to download Parap mobile app"
                width={160}
                height={160}
                className="h-auto w-full"
              />
            </div>

            {/* App icons */}
            <div className="flex flex-col space-y-4">
              <a href="#" className="inline-block">
                <Image
                  src="/images/App store.svg"
                  alt="Download on the App Store"
                  width={217}
                  height={64}
                  className="h-auto w-full max-w-[217px]"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/images/Play store.svg"
                  alt="Get it on Google Play"
                  width={217}
                  height={64}
                  className="h-auto w-full max-w-[217px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
