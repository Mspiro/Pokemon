'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-32 h-10">
            <Image
              src="/pokemon-logo.png"
              alt="Pokemon"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Hamburger Toggle */}
        {!menuOpen && (
          <button
            className="sm:hidden text-gray-700 z-50 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        )}


        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-x-6 text-sm sm:text-base font-medium">
          <Link href="/pokemon-list" className="hover:text-indigo-600">List of Pokemon</Link>
          <Link href="/learn-more" className="hover:text-indigo-600">Learn More</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex justify-end">
          <nav className="bg-white w-64 h-full p-6 shadow-xl flex flex-col gap-4 animate-slide-in rounded-l-xl">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-24 h-8">
                <Image src="/pokemon-logo.png" alt="Pokemon" fill className="object-contain" />
              </div>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-gray-700 cursor-pointer" />
              </button>
            </div>
            <Link href="/pokemon-list" onClick={() => setMenuOpen(false)} className="text-indigo-700 hover:underline">List of Pokemon</Link>
            <Link href="/learn-more" onClick={() => setMenuOpen(false)} className="text-indigo-700 hover:underline">Learn More</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-indigo-700 hover:underline">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-indigo-700 hover:underline">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
