import type { GetServerSideProps } from 'next';

type Coach = { name: string; fideRating?: number; bio?: string };
type Props = { coaches: Coach[] };

export default function Coaches({ coaches }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-accent via-support to-support text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">♔</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Coaches</h1>
          <p className="text-xl text-white/80">FIDE-rated experts guiding your chess journey</p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {coaches.map((c, i) => (
              <div key={c.name} className="card-hover" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-gradient-to-br from-accent to-support rounded-2xl shadow-xl overflow-hidden h-full">
                  {/* Profile Header */}
                  <div className="p-6 text-white text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-5xl border-4 border-white/30 shadow-lg">
                      ♔
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{c.name}</h3>
                    {c.fideRating && (
                      <div className="inline-block bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold mt-2">
                        FIDE {c.fideRating}
                      </div>
                    )}
                  </div>
                  {/* Bio */}
                  <div className="p-6">
                    {c.bio && (
                      <p className="text-white/90 text-center leading-relaxed">{c.bio}</p>
                    )}
                    {!c.bio && c.fideRating && (
                      <p className="text-white/80 text-center italic">Expert chess coach and mentor</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Learn from the Best</h2>
          <p className="text-black/70 mb-6">Start your training with our experienced coaches today</p>
          <a href="/register" className="inline-block bg-support hover:bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg transition btn-glow">
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
  const url = `${proto}://${host}/api/coaches`;
  
  try {
    const res = await fetch(url);
    const data = await res.json(); 
    
    // If no coaches found, use default data
    if (!data.coaches || data.coaches.length === 0) {
      return {
        props: {
          coaches: [
            { name: 'Sanjay S. Pillai', fideRating: 2074, bio: 'Head Coach, Former Kerala State Champion' },
            { name: 'Pathros Thrissur', fideRating: 1976, bio: 'Early coach connected to Nihal Sarin' },
            { name: 'Junaid A', fideRating: 1621, bio: 'Dedicated coach and mentor' },
            { name: 'Nasar Vengara', fideRating: 1624, bio: 'Experienced chess trainer' }
          ]
        }
      };
    }
    
    return { props: { coaches: data.coaches } };
  } catch (err) {
    // Fallback to default coaches if API fails
    return {
      props: {
        coaches: [
          { name: 'Sanjay S. Pillai', fideRating: 2074, bio: 'Head Coach, Former Kerala State Champion' },
          { name: 'Pathros Thrissur', fideRating: 1976, bio: 'Early coach connected to Nihal Sarin' },
          { name: 'Junaid A', fideRating: 1621, bio: 'Experienced chess trainer' },
          { name: 'Nasar Vengara', fideRating: 1624, bio: 'Dedicated coach and mentor' }
        ]
      }
    };
  }
};
