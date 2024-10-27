import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="w-ful py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="relative h-[400px] w-full max-w-[600px]">
              <Image
                src="/images/card-carousel.png"
                alt="Feature Image"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="mb-4 text-3xl font-bold">
              The simplicity of the debit card with credit card rewards we
              combined.
            </h2>
            <p className="text-lg text-gray-600">
              Spend your available balance with Parap Card.No overdrafts, no
              overspending. Track your spendings in real time.
            </p>
            <p className="mt-3 text-lg text-gray-600">No more card fees!</p>
            <Button className="mt-5">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
