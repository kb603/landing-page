import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Brands() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        {/* Text content */}
        <div className="max-w-xl flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Cutting-edge financial solutions tailored for modern businesses
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Parap Business solutions allow organizations to make hassle-free,
            single-click payouts on web and app with a seamless integration.
          </p>
          <Button className="mt-6 px-8" size="lg">
            Learn More
          </Button>
        </div>

        {/* Image section */}
        <div className="flex-shrink-0">
          <Image
            src="/images/Brands.svg"
            alt="Business solutions illustration"
            width={500}
            height={500}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
