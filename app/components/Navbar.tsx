import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-3">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-3 lg:space-x-5">
          <div className="logo-container">
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          </div>
          <div className="brand-name">
            <p className="text-xl font-extrabold text-gray-600 lg:text-2xl">
              Parap
            </p>
          </div>
          <div className="flex gap-2 text-sm lg:gap-3 lg:text-base">
            <Link href="/" className="flex items-center text-fuchsia-400">
              Personal
              <ChevronDown className="ml-1 h-4 w-4 lg:h-5 lg:w-5" />
            </Link>
            <Link href="/" className="flex items-center">
              Business
              <ChevronDown className="ml-1 h-4 w-4 lg:h-5 lg:w-5" />
            </Link>
          </div>
        </div>

        <div className="hidden sm:flex sm:space-x-2">
          <Button variant="outline" size="sm" className="text-xs lg:text-sm">
            Log In
          </Button>
          <Button size="sm" className="text-xs lg:text-sm">
            Sign Up
          </Button>
          <Button variant="secondary" size="sm" className="text-xs lg:text-sm">
            English
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu />
        </Button>
      </div>
    </nav>
  );
}
