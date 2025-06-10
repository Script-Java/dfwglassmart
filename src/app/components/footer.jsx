"use client";
import Link from "next/link";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black pt-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 text-center text-sm">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="flex flex-wrap justify-center gap-4">
            <li><Link href="/" className="hover:underline hover:text-primary">Home</Link></li>
            <li><Link href="/auto" className="hover:underline hover:text-primary">Auto Glass</Link></li>
            <li><Link href="/residential" className="hover:underline hover:text-primary">Residential Glass</Link></li>
            <li><Link href="/tools" className="hover:underline hover:text-primary">Tools</Link></li>
            <li><Link href="/quote" className="hover:underline hover:text-primary">Quote</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="flex flex-wrap justify-center gap-6">
            <li className="flex items-center gap-2">
              <FaPhone />
              <Link href="tel:9729003117" className="hover:underline hover:text-primary">(972) 900-3117</Link>
            </li>
            <li className="flex items-center gap-2">
              <IoIosMail />
              <Link href="mailto:info@dfwglassmart.com" className="hover:underline hover:text-primary">info@dfwglassmart.com</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaLocationArrow />
              <span>Dallas, Texas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center p-2 bg-black text-white text-sm">
        © {currentYear} DFW GLASS MART. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
