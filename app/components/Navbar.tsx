import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <div className="logo-container">
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          </div>
          <div className="brand-name">
            <p className="text-2xl font-extrabold text-gray-600">Parap</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="flex items-center text-fuchsia-400">
              Personal
              <ChevronDown className="ml-1" />
            </Link>
            <Link href="/" className="flex items-center">
              Business <ChevronDown className="ml-1" />
            </Link>
          </div>
        </div>
        <div className="flex space-x-5">
          <Button variant="outline">Log In</Button>
          <Button>Sign Up</Button>
          <Button variant="secondary">English</Button>
        </div>
      </div>
    </nav>
  );
}
