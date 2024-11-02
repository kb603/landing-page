import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-40 bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Parap</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href=""
                className="transition-colors duration-300 hover:text-gray-300"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href=""
                className="transition-colors duration-300 hover:text-gray-300"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href=""
                className="transition-colors duration-300 hover:text-gray-300"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
