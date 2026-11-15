// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deepNavy text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/assets/logo.jpg" alt="Patients' Right Medicine" className="h-12 w-auto mb-4" />
          <p className="text-sm">© {new Date().getFullYear()} Patients' Right Medicine Ltd.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Our Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Telegram: <a href="https://t.me/PRMLTD" className="hover:underline" target="_blank" rel="noopener noreferrer">@PRMLTD</a></p>
          <p className="text-sm">Email: <a href="mailto:joepharm91@gmail.com" className="hover:underline">joepharm91@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
