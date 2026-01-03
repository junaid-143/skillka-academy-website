import type { GetServerSideProps } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../components/ui/Button';

type Image = { title: string; url: string; event?: string; date?: string };
type Props = { images: Image[] };

export default function Gallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Image | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating chess pieces background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float">📸</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>🎨</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-white/5 animate-float" style={{ animationDelay: '2s' }}>♕</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
          <div className="absolute top-1/2 right-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>🖼️</div>
          <div className="absolute top-60 left-1/3 text-5xl text-primary/15 animate-float" style={{ animationDelay: '2.5s' }}>🎭</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">📸</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Photo Gallery</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Moments from Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse-slow">
              Chess Journey
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            Capturing the excitement, achievements, and community spirit of Skillka Chess Academy
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED HIGHLIGHT ============ */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-accent via-support to-primary rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 text-9xl">🎨</div>
              <div className="absolute bottom-0 left-0 text-9xl">📸</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-block px-4 py-2 bg-primary/30 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">🌟 Our Story in Pictures</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-4">Visual Memories</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Explore our gallery of tournaments, training sessions, celebrations, and special moments that define the Skillka Chess Academy community. Each photo captures the passion and dedication of our students and coaches.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Tournaments ✓</span>
                    </div>
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Events & Updates ✓</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30" />
                    <div className="relative text-7xl sm:text-8xl animate-bounce">🖼️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GALLERY GRID ============ */}
      <section className="relative py-24 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-support/20 mb-6">
              <span className="text-2xl">🎬</span>
              <span className="text-sm font-bold text-support uppercase tracking-wider">Photo Collection</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Gallery
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-support to-accent"> Highlights</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto font-medium">
              Click on any image to view it in full detail
            </p>
          </div>

          {/* Gallery Grid */}
          {images.length === 0 ? (
            <div className="text-center py-24">
              <div className="inline-block mb-6">
                <div className="text-8xl animate-bounce">📸</div>
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">Gallery Coming Soon</h3>
              <p className="text-lg text-black/60 mb-8">
                We're building our photo collection! Check back soon for tournament moments and academy events.
              </p>
              <Link href="/register">
                <Button className="bg-support hover:bg-accent text-white font-bold py-4 px-10 rounded-full transition-all duration-300">
                  Register to Join Us
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((img, i) => (
                <button
                  key={img.url}
                  onClick={() => {
                    setSelected(img);
                    setOpen(true);
                  }}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-accent"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <img 
                      src={img.url} 
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-end justify-end p-4">
                      <div className="text-white text-right">
                        <p className="font-bold text-sm leading-tight">{img.title}</p>
                        {img.event && <p className="text-xs text-primary mt-1">{img.event}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    🔍
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ LIGHTBOX MODAL ============ */}
      {open && selected && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div 
            className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition font-bold text-2xl text-black"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative bg-gray-100">
              <img 
                src={selected.url} 
                alt={selected.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-8 bg-white border-t-4 border-accent">
              <h3 className="text-3xl font-black text-black mb-4">{selected.title}</h3>
              
              <div className="space-y-3">
                {selected.event && (
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-black/60 uppercase font-bold tracking-wider">Event</p>
                      <p className="text-lg font-semibold text-support">{selected.event}</p>
                    </div>
                  </div>
                )}
                
                {selected.date && (
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-sm text-black/60 uppercase font-bold tracking-wider">Date</p>
                      <p className="text-lg font-semibold text-black">{new Date(selected.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-24 bg-gradient-to-br from-support via-accent to-primary overflow-hidden">
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 text-8xl animate-float">⭐</div>
          <div className="absolute top-40 right-20 text-7xl animate-float" style={{ animationDelay: '1s' }}>📸</div>
          <div className="absolute bottom-32 left-1/4 text-9xl animate-float" style={{ animationDelay: '2s' }}>👑</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Be Part of Our
            <span className="block">Success Story</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Join Skillka Chess Academy and create your own memorable moments with expert coaching and a supportive community
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group">
              <Button className="bg-primary hover:bg-secondary text-black font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transform w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Register Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg backdrop-blur-sm w-full sm:w-auto">
                Get More Info
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-white/80 text-sm font-medium">
            <p>✓ Expert Coaching | ✓ Championship Results | ✓ Community Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const proto = (req.headers['x-forwarded-proto'] as string) || 'http';
  const host = req.headers.host;
  const url = `${proto}://${host}/api/gallery`;
  const res = await fetch(url);
  const data = await res.json();
  return { props: { images: data.images || [] } };
};
