import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Brands() {
  return (
    <div className="m-5 flex items-start">
      {/* Text content */}
      <div className="m-10 flex flex-1 flex-col">
        <h1 className="text-3xl font-bold">
          Cutting-edge financial solutions <br /> tailored for modern businesses
        </h1>
        <p className="mt-5">
          Parap Business solutions allow organizations to make <br />
          hassle-free, single-click payouts on web and app with a <br />
          seamless integration.
        </p>
        <Button className="mt-5 flex w-28 items-start px-20">Learn More</Button>
      </div>

      {/* Image section */}
      <div className="flex-shrink-0">
        <Image
          src="/images/Brands.svg"
          alt="Business solutions"
          className="dark: ml-20 mr-5"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
