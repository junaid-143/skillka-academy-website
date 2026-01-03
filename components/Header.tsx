import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-support to-accent shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-white flex items-center gap-2">
          <span className="text-primary">♔</span> Skillka Chess Academy
        </Link>
        <nav className="hidden sm:flex gap-4 text-sm text-white">
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/programs" className="hover:text-primary transition">Programs</Link>
          <Link href="/coaches" className="hover:text-primary transition">Coaches</Link>
          <Link href="/achievements" className="hover:text-primary transition">Achievements</Link>
          <Link href="/events" className="hover:text-primary transition">Events</Link>
          <Link href="/gallery" className="hover:text-primary transition">Gallery</Link>
          <Link href="/pricing" className="hover:text-primary transition">Pricing</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          <Link href="/blog" className="hover:text-primary transition">Blog</Link>
          <Link href="/register" className="bg-primary text-black px-3 py-1 rounded-lg font-semibold hover:bg-secondary transition">Register</Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
