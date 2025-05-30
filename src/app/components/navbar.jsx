"use client";
import { useState } from "react";
import logo from "../assets/logo-white.svg";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full z-50 bg-black lg:bg-transparent">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-40" priority />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-4">
          <li><Link className="btn btn-ghost" href="/">Home</Link></li>
          <li><Link className="btn btn-ghost" href="/auto">Auto</Link></li>
          <li><Link className="btn btn-ghost" href="/residential">Residential</Link></li>
          <li><Link className="btn btn-ghost" href="/tools">Tools</Link></li>
          <li><Link className="btn btn-outline" href="tel:+19729003117">(972) 900-3117</Link></li>
          <li><Link className="btn btn-primary" href="/quote">Free Quote</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="lg:hidden btn btn-ghost">
          {isOpen ? <IoMdClose size={24} /> : <MdOutlineMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black text-white border-t border-base-300 shadow-md">
          <ul className="flex flex-col p-4 space-y-2 items-center">
            {[
              { label: "Home", href: "/" },
              { label: "Auto", href: "/auto" },
              { label: "Residential", href: "/residential" },
              { label: "Tools", href: "/tools" },
              { label: "(972) 900-3117", href: "tel:+19729003117", className: "btn-outline" },
              { label: "Free Quote", href: "/quote", className: "btn-primary" },
            ].map(({ label, href, className = "btn-ghost" }, i) => (
              <li key={i} className={`btn w-full ${className}`}>
                <Link href={href} onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
