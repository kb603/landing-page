import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="ml-10 w-full py-12 md:py-24 lg:py-32 xl:py-1">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="m-1 gap-1 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none">
                Managing your money <br /> has never been easier.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Welcome to Parap, the new era of mobile money. We accompany you
                every step of the way. We provide powerful tools to track your
                income.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We help you take the necessary steps to achieve your financial
                goals. value
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Open an account</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={550}
              height={550}
              className="aspect-square overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
