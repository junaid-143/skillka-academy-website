import type { GetServerSideProps } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../components/ui/Button';

type Event = { title: string; description?: string; date?: string; imageUrl?: string };
type Props = { events: Event[] };

export default function Events({ events }: Props) {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const now = new Date();
  const upcoming = events.filter((e) => e.date && new Date(e.date) >= now);
  const past = events.filter((e) => e.date && new Date(e.date) < now);
  const display = tab === 'upcoming' ? upcoming : past;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating chess pieces background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float">📅</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>🎯</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-white/5 animate-float" style={{ animationDelay: '2s' }}>♕</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>♔</div>
          <div className="absolute top-1/2 right-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>🏆</div>
          <div className="absolute top-60 left-1/3 text-5xl text-primary/15 animate-float" style={{ animationDelay: '2.5s' }}>🎪</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">🎪</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Tournaments & Events</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Events &
            <span className="block text-white">
              Tournaments
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            Join exciting chess competitions, tournaments, and workshops designed to challenge and inspire every player
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
              <div className="absolute top-0 right-0 text-9xl">📅</div>
              <div className="absolute bottom-0 left-0 text-9xl">🎯</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-block px-4 py-2 bg-primary/30 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">🎪 Competitive Excellence</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-4">Level Up Your Game</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Participate in our tournaments to test your skills against other talented players, gain valuable experience, and climb the rankings. From beginners to advanced, we have competitions for every level.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Tournament Ready ✓</span>
                    </div>
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Skill Building ✓</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30" />
                    <div className="relative text-7xl sm:text-8xl animate-bounce">🎯</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TABS SECTION ============ */}
      <section className="relative py-16 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setTab('upcoming')}
              className={`px-8 py-4 font-bold text-lg rounded-full transition-all duration-300 ${
                tab === 'upcoming'
                  ? 'bg-gradient-to-r from-support to-accent text-white shadow-xl hover:shadow-2xl'
                  : 'bg-white border-2 border-gray-200 text-black hover:border-accent'
              }`}
            >
              📅 Upcoming ({upcoming.length})
            </button>
            <button
              onClick={() => setTab('past')}
              className={`px-8 py-4 font-bold text-lg rounded-full transition-all duration-300 ${
                tab === 'past'
                  ? 'bg-gradient-to-r from-support to-accent text-white shadow-xl hover:shadow-2xl'
                  : 'bg-white border-2 border-gray-200 text-black hover:border-accent'
              }`}
            >
              ✅ Past Events ({past.length})
            </button>
          </div>

          {/* Events Timeline */}
          {display.length === 0 ? (
            <div className="text-center py-24">
              <div className="inline-block mb-6">
                <div className="text-8xl animate-bounce">📭</div>
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">No {tab === 'upcoming' ? 'Upcoming' : 'Past'} Events</h3>
              <p className="text-lg text-black/60 mb-8">
                {tab === 'upcoming' 
                  ? 'Check back soon for exciting tournaments and events!'
                  : 'No past events recorded yet.'}
              </p>
              <Link href="/register">
                <Button className="bg-support hover:bg-accent text-white font-bold py-4 px-10 rounded-full transition-all duration-300">
                  Register for Upcoming Events
                </Button>
              </Link>
            </div>
          ) : (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-support hidden lg:block" />

              <div className="space-y-8">
                {display.map((evt, i) => (
                  <div
                    key={i}
                    className="relative lg:pl-24 animate-slide-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-6 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-white shadow-lg flex items-center justify-center hidden lg:flex z-10">
                      <span className="text-lg">{tab === 'upcoming' ? '🔜' : '✅'}</span>
                    </div>

                    {/* Event card */}
                    <div className="group bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-accent hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        {evt.imageUrl && (
                          <div className="sm:w-40 h-40 overflow-hidden bg-gradient-to-br from-accent/20 to-support/20">
                            <img
                              src={evt.imageUrl}
                              alt={evt.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <h3 className="text-2xl font-black text-black flex-1">{evt.title}</h3>
                              <span className="text-3xl flex-shrink-0">{tab === 'upcoming' ? '🔜' : '✅'}</span>
                            </div>

                            {/* Date Badge */}
                            {evt.date && (
                              <div className="inline-flex items-center gap-2 mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-black font-bold text-sm rounded-full">
                                  📅 {new Date(evt.date).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                  })}
                                </span>
                              </div>
                            )}

                            {/* Description */}
                            {evt.description && (
                              <p className="text-black/70 text-base leading-relaxed mb-4">{evt.description}</p>
                            )}
                          </div>

                          {/* CTA Link */}
                          <div className="flex items-center gap-2 text-support font-bold group-hover:gap-3 transition-all">
                            <span>Learn More</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-24 bg-gradient-to-br from-support via-accent to-primary overflow-hidden">
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 text-8xl animate-float">🎯</div>
          <div className="absolute top-40 right-20 text-7xl animate-float" style={{ animationDelay: '1s' }}>📅</div>
          <div className="absolute bottom-32 left-1/4 text-9xl animate-float" style={{ animationDelay: '2s' }}>♕</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Compete?
          </h2>

          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Register with our academy and gain exclusive access to all tournaments, competitions, and special events
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group">
              <Button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transform w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Register Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg backdrop-blur-sm w-full sm:w-auto">
                Get More Information
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-white/80 text-sm font-medium">
            <p>✓ Tournaments for All Levels | ✓ Expert Supervision | ✓ Certificate & Prizes</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const proto = (req.headers['x-forwarded-proto'] as string) || 'http';
  const host = req.headers.host;
  const url = `${proto}://${host}/api/events`;
  const res = await fetch(url);
  const data = await res.json();
  return { props: { events: data.events || [] } };
};
