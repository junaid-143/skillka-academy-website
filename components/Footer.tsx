import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Coaches', href: '/coaches' },
    { label: 'Achievements', href: '/achievements' }
  ];

  const resourceLinks = [
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' }
  ];

  const socialLinks = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '▶️', label: 'YouTube', href: '#' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-support/10 to-black" />
        
        {/* Animated colorful blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow opacity-60" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/25 rounded-full blur-3xl animate-pulse-slow opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow opacity-60" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-support/25 rounded-full blur-3xl animate-pulse-slow opacity-60" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Floating animated chess pieces */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-20 text-9xl animate-float" style={{ animationDelay: '0s', color: 'rgba(244, 247, 84, 0.3)' }}>♔</div>
        <div className="absolute bottom-40 right-10 text-8xl animate-float" style={{ animationDelay: '1s', color: 'rgba(207, 173, 193, 0.3)' }}>♘</div>
        <div className="absolute top-1/3 right-1/4 text-7xl animate-float" style={{ animationDelay: '2s', color: 'rgba(78, 97, 211, 0.3)' }}>♕</div>
        <div className="absolute bottom-1/4 left-1/4 text-6xl animate-float" style={{ animationDelay: '0.5s', color: 'rgba(233, 212, 132, 0.3)' }}>♗</div>
        <div className="absolute top-1/2 right-1/3 text-5xl animate-float" style={{ animationDelay: '1.5s', color: 'rgba(244, 247, 84, 0.2)' }}>♙</div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1 group">
              <div className="flex items-center gap-3 mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary via-secondary to-primary animate-pulse-slow group-hover:shadow-2xl group-hover:shadow-primary/80 transition-all duration-300">
                  <Image src="/logo.png" alt="Skillka Chess Academy Logo" width={48} height={48} className="h-12 w-12 object-contain" />
                </div>
                <div>
                  <p className="font-black text-2xl text-white">
                    Skillka Chess
                  </p>
                  <p className="text-xs text-white font-black uppercase tracking-wider">Academy</p>
                </div>
              </div>
              <p className="text-sm text-white/85 leading-relaxed mb-8 font-medium">
                Expert chess training for all levels. Master the game with our FIDE-rated coaches and proven methodology.
              </p>
              
              {/* Animated Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 hover:from-primary hover:to-secondary border-2 border-white/30 hover:border-primary text-white hover:text-black flex items-center justify-center text-lg transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-primary/70 animate-bounce-slow"
                    style={{ animationDelay: `${i * 0.1}s` }}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="group">
              <h3 className="font-black text-white mb-7 uppercase tracking-wider text-lg relative pb-4">
                🧭 Navigation
                <span className="absolute bottom-0 left-0 w-16 h-2 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-32 transition-all duration-500" />
              </h3>
              <ul className="space-y-4">
                {navigationLinks.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href} 
                      className="text-white/80 hover:text-primary transition-all duration-300 flex items-center gap-3 group/link font-semibold text-base"
                    >
                      <span className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 group-hover/link:opacity-100 group-hover/link:scale-150 transition-all duration-300 shadow-lg shadow-primary/50 group-hover/link:shadow-primary/100" />
                      <span className="group-hover/link:translate-x-2 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="group">
              <h3 className="font-black text-white mb-7 uppercase tracking-wider text-lg relative pb-4">
                📚 Resources
                <span className="absolute bottom-0 left-0 w-16 h-2 bg-gradient-to-r from-accent to-support rounded-full group-hover:w-32 transition-all duration-500" />
              </h3>
              <ul className="space-y-4">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href} 
                      className="text-white/80 hover:text-accent transition-all duration-300 flex items-center gap-3 group/link font-semibold text-base"
                    >
                      <span className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-support opacity-60 group-hover/link:opacity-100 group-hover/link:scale-150 transition-all duration-300 shadow-lg shadow-accent/50 group-hover/link:shadow-accent/100" />
                      <span className="group-hover/link:translate-x-2 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section - Enhanced */}
            <div className="lg:col-span-2 group">
              <h3 className="font-black text-white mb-7 uppercase tracking-wider text-lg relative pb-4">
                📞 Get in Touch
                <span className="absolute bottom-0 left-0 w-16 h-2 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-40 transition-all duration-500" />
              </h3>
              
              {/* Contact Card - More Vibrant */}
              <div className="relative space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white/10 via-primary/5 to-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-primary hover:from-white/20 hover:via-primary/15 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/50">
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-bl-3xl group-hover:opacity-20 transition-opacity" />
                
                <div className="relative group/item">
                  <p className="text-sm uppercase text-white font-black tracking-widest mb-3">📍 Location</p>
                  <p className="text-white/95 font-bold text-lg hover:text-primary transition-colors group-hover/item:text-primary">
                    Kottakkal Bus Stand, Malappuram
                  </p>
                </div>

                <div className="relative group/item">
                  <p className="text-sm uppercase text-white font-black tracking-widest mb-3">📞 Phone</p>
                  <a 
                    href="tel:6238793828"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary font-black text-2xl hover:from-secondary hover:to-primary transition-all duration-300 flex items-center gap-3 group-hover/item:scale-110 origin-left"
                  >
                    6238793828
                    <span className="text-lg text-primary group-hover/item:text-secondary transition-colors">↗</span>
                  </a>
                </div>

                <Link 
                  href="/contact" 
                  className="relative inline-flex items-center gap-3 mt-8 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-primary text-black font-black rounded-full hover:shadow-2xl hover:shadow-primary/80 transition-all duration-300 hover:scale-110 hover:-translate-y-2 text-lg group-hover:animate-bounce-slow"
                >
                  <span>Get in Touch</span>
                  <span className="text-2xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Animated Divider */}
          <div className="relative h-1.5 bg-gradient-to-r from-primary via-accent via-support via-secondary to-primary mb-12 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
          </div>

          {/* Bottom Section - Vibrant */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-10">
            {/* Copyright with more pizzazz */}
            <div className="text-center md:text-left group">
              <p className="text-sm text-white/80 font-bold mb-2">© {currentYear} Skillka Chess Academy</p>
              <p className="text-white font-black text-lg">
                🏆 Building champions, one move at a time.
              </p>
            </div>

            {/* Stats - More Vibrant */}
            <div className="flex gap-6 justify-center">
              <div className="relative p-5 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/20 border-2 border-primary/50 hover:border-primary hover:from-primary/50 hover:to-secondary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/50 group-hover:scale-110">
                <p className="text-white font-black text-3xl">500+</p>
                <p className="text-xs text-white/75 uppercase tracking-wider font-bold mt-2">Students</p>
              </div>
              <div className="w-1.5 h-16 bg-gradient-to-b from-primary via-accent to-secondary rounded-full opacity-70" />
              <div className="relative p-5 rounded-xl bg-gradient-to-br from-accent/30 to-support/20 border-2 border-accent/50 hover:border-accent hover:from-accent/50 hover:to-support/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/50 group-hover:scale-110">
                <p className="text-white font-black text-3xl">50+</p>
                <p className="text-xs text-white/75 uppercase tracking-wider font-bold mt-2">Champions</p>
              </div>
            </div>

            {/* Quick Actions - More Dynamic */}
            <div className="flex gap-4 justify-center md:justify-end">
              <Link 
                href="/register"
                className="px-7 py-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-black rounded-full font-black transition-all duration-300 text-base hover:shadow-2xl hover:shadow-primary/70 hover:scale-110 hover:-translate-y-1 transform"
              >
                🎓 Register
              </Link>
              <Link 
                href="/programs"
                className="px-7 py-3 bg-gradient-to-r from-accent to-support hover:from-support hover:to-accent text-white rounded-full font-black transition-all duration-300 text-base hover:shadow-2xl hover:shadow-accent/70 hover:scale-110 hover:-translate-y-1 transform"
              >
                📚 Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Animated bottom gradient bar */}
        <div className="relative h-2 bg-gradient-to-r from-primary via-accent via-support via-secondary to-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-50 transition-opacity duration-500 animate-shimmer" />
        </div>
      </div>
    </footer>
  );
}
