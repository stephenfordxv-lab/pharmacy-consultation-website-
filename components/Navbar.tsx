// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Consult a Pharmacist', href: '/consult' },
  { name: 'Health Resources', href: '/resources' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo.jpg" alt="Patients' Right Medicine" className="h-10 w-auto mr-2" />
            <span className="font-semibold text-xl text-navy">PRMLTD</span>
          </Link>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-navy hover:text-gold transition-colors">
                {item.name}
              </Link>
            ))}
            <Link
              href="/consult"
              className="ml-4 bg-gold text-white px-4 py-2 rounded-md hover:bg-deepNavy transition-colors"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <XIcon className="h-6 w-6 text-navy" /> : <MenuIcon className="h-6 w-6 text-navy" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-lightBg"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/consult"
              className="block w-full text-center mt-2 bg-gold text-white px-3 py-2 rounded-md hover:bg-deepNavy"
              onClick={() => setOpen(false)}
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
