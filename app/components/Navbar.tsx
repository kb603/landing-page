"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { IoIosArrowDropdown } from "react-icons/io";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                className="h-8 w-auto"
                src="/images/logo.png"
                alt="Your Company"
                width={32}
                height={32}
              />
            </Link>
            <div className="ml-10 hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link
                  href="#"
                  className="text-2xl font-medium text-foreground hover:text-primary"
                >
                  Parap
                </Link>
                <Link
                  href="#"
                  className="m-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Personal
                </Link>
                <IoIosArrowDropdown />

                <Link
                  href="#"
                  className="m-5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Business
                </Link>
                <IoIosArrowDropdown />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" className="text-sm font-medium">
                Log in
              </Button>
              <Button className="ml-3 text-sm font-medium">Sign up</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="ml-3">
                    <span className="sr-only">Choose language</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>French</DropdownMenuItem>
                  <DropdownMenuItem>German</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Features
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              About
            </Link>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center px-5">
              <Button variant="ghost" className="text-base font-medium">
                Log in
              </Button>
              <Button className="ml-3 text-base font-medium">Sign up</Button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-base font-medium"
              >
                English
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-base font-medium"
              >
                French
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-base font-medium"
              >
                German
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
