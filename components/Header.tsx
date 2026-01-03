import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-support to-accent shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-white flex items-center gap-2 text-lg sm:text-xl">
          <Image src="/logo.png" alt="Skillka Chess Academy Logo" width={40} height={40} className="h-10 w-10 object-contain" />
          <span>Skillka Chess Academy</span>
        </Link>
        <nav className="hidden sm:flex gap-6 text-base text-white">
          <Link href="/about" className="hover:text-primary transition font-medium">About</Link>
          <Link href="/coaches" className="hover:text-primary transition font-medium">Coaches</Link>
          <Link href="/achievements" className="hover:text-primary transition font-medium">Achievements</Link>
          <Link href="/events" className="hover:text-primary transition font-medium">Events</Link>
          <Link href="/gallery" className="hover:text-primary transition font-medium">Gallery</Link>
          <Link href="/pricing" className="hover:text-primary transition font-medium">Program & Pricing</Link>
          <Link href="/contact" className="hover:text-primary transition font-medium">Contact</Link>
          <Link href="/blog" className="hover:text-primary transition font-medium">Blog</Link>
          <Link href="/register" className="bg-primary text-black px-4 py-2 rounded-lg font-bold hover:bg-secondary transition">Register</Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
