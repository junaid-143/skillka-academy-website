import { useState } from 'react';
import Link from 'next/link';
import Button from './ui/Button';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden">
      <Button aria-label="Open menu" onClick={() => setOpen(!open)} className="text-white">☰</Button>
      {open && (
        <div className="absolute top-14 left-0 right-0 bg-white border-b-2 border-support shadow-lg">
          <div className="p-3 grid gap-2">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/programs', 'Programs'],
              ['/coaches', 'Coaches'],
              ['/achievements', 'Achievements'],
              ['/events', 'Events'],
              ['/gallery', 'Gallery'],
              ['/pricing', 'Pricing'],
              ['/contact', 'Contact'],
              ['/blog', 'Blog'],
              ['/register', 'Register']
            ].map(([href, label]) => (
              <Link key={href} href={href} className={`py-3 px-3 rounded font-medium transition ${
                href === '/register' ? 'bg-primary text-black hover:bg-secondary' : 'hover:bg-secondary/20 hover:text-support'
              }`}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
