import Image from "next/image";

export default function CashBack() {
  return (
    <div className="py-16">
      <h1 className="mt-14 text-center text-2xl font-bold">
        Earn cashback as you spend.
      </h1>
      <p className="mt-8 text-center">
        No need to figure out how to earn and spend your cashback. Papara
        Cashback is simple and quick without discount codes or points, instant
        cash rewards.
      </p>
      <div className="ml-5 mt-10 flex items-center gap-10">
        <Image
          src="/images/Music card.svg"
          alt="Music Card"
          width={300}
          height={312}
        />
        <Image
          src="/images/Streaming card.svg"
          alt="Music Card"
          width={300}
          height={312}
        />
        <Image
          src="/images/Groceries card.svg"
          alt="Music Card"
          width={300}
          height={312}
        />
        <Image
          src="/images/Food card.svg"
          alt="Music Card"
          width={300}
          height={312}
        />
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Image
          src="/images/indicator.svg"
          alt="indicator"
          width={312}
          height={14}
        />
      </div>
    </div>
  );
}
