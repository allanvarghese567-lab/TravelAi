import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/"><a className="text-xl font-semibold">TravelAI</a></Link>

          <nav className="hidden md:flex space-x-4">
            <Link href="/locations"><a className="text-sm">Locations</a></Link>
            <Link href="/trips"><a className="text-sm">Trips</a></Link>
            <Link href="/recommendations"><a className="text-sm">Recommendations</a></Link>
          </nav>

          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="p-2 rounded-md focus:outline-none focus:ring">
              {!open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-2">
            <Link href="/locations"><a className="block py-2">Locations</a></Link>
            <Link href="/trips"><a className="block py-2">Trips</a></Link>
          </div>
        )}
      </div>
    </header>
  );
}
