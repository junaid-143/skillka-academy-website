import type { GetServerSideProps } from 'next';
import { useState } from 'react';

type Event = { title: string; description?: string; date?: string; imageUrl?: string };
type Props = { events: Event[] };

export default function Events({ events }: Props) {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const now = new Date();
  const upcoming = events.filter((e) => e.date && new Date(e.date) >= now);
  const past = events.filter((e) => e.date && new Date(e.date) < now);
  const display = tab === 'upcoming' ? upcoming : past;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-support to-support text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">📅</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Events & Tournaments</h1>
          <p className="text-xl text-white/80">Join us for exciting chess competitions and workshops</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-primary border-b">
        <div className="max-w-4xl mx-auto px-4 flex justify-center gap-4">
          <button
            onClick={() => setTab('upcoming')}
            className={`px-8 py-3 font-semibold rounded-full transition ${
              tab === 'upcoming'
                ? 'bg-primary text-black shadow-lg'
                : 'bg-black/5 text-black/70 hover:bg-black/10'
            }`}
          >
            Upcoming ({upcoming.length})
          </button>
          <button
            onClick={() => setTab('past')}
            className={`px-8 py-3 font-semibold rounded-full transition ${
              tab === 'past'
                ? 'bg-primary text-black shadow-lg'
                : 'bg-black/5 text-black/70 hover:bg-black/10'
            }`}
          >
            Past Events ({past.length})
          </button>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4">
          {display.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-black/60 text-lg">No {tab} events at the moment</p>
            </div>
          ) : (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-support hidden sm:block"></div>

              <div className="space-y-8">
                {display.map((evt, i) => (
                  <div 
                    key={i} 
                    className="relative sm:pl-20 animate-slide-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-5 top-6 w-7 h-7 bg-accent rounded-full border-4 border-white shadow-lg items-center justify-center hidden sm:flex">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* Event card */}
                    <div className="card-hover bg-gradient-to-br from-accent to-support rounded-2xl p-6 shadow-lg">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        {evt.imageUrl && (
                          <img 
                            src={evt.imageUrl} 
                            alt={evt.title}
                            className="w-full sm:w-32 h-32 object-cover rounded-xl border-2 border-white/30"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white">{evt.title}</h3>
                            <span className="text-2xl">{tab === 'upcoming' ? '🔜' : '✅'}</span>
                          </div>
                          {evt.date && (
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-sm font-semibold text-black bg-primary px-3 py-1 rounded-full">
                                📅 {new Date(evt.date).toLocaleDateString('en-IN', { 
                                  day: 'numeric', 
                                  month: 'long', 
                                  year: 'numeric' 
                                })}
                              </span>
                            </div>
                          )}
                          {evt.description && <p className="text-white/80 leading-relaxed">{evt.description}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Participate?</h2>
          <p className="text-black/70 text-lg mb-6">
            Register for our programs and get exclusive access to all tournaments
          </p>
          <a 
            href="/register"
            className="inline-block px-8 py-4 bg-accent hover:opacity-90 text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            Register Now
          </a>
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
