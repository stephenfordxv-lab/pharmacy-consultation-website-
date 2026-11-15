// components/FloatingButtons.tsx
import { useEffect } from 'react';

export default function FloatingButtons() {
  // Ensure buttons stay on top of other content and are accessible.
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      {/* Telegram */}
      <a
        href="https://t.me/PRMLTD"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#0088CC] text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat with us on Telegram"
        title="Chat with us on Telegram"
      >
        {/* Telegram icon (simple SVG) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="h-6 w-6 fill-current">
          <circle cx="120" cy="120" r="120" fill="#0088CC" />
          <path d="M104.9 146.5c-1.5 0-1.7-1.6-3.2-2.2l-7.5-13.9 45.7-38" fill="#fff"/>
          {/* Simplified; actual Telegram logo omitted for brevity */}
        </svg>
      </a>
      {/* Email */}
      <a
        href="mailto:joepharm91@gmail.com"
        className="flex items-center bg-gold text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Send us an email"
        title="Send us an email"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M2 4h20v16H2z" fill="#fff" opacity="0.2" />
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="#fff" />
        </svg>
      </a>
    </div>
  );
}
