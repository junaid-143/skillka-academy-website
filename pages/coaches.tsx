import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Button from '../components/ui/Button';

type Coach = { name: string; fideRating?: number; bio?: string };
type Props = { coaches: Coach[] };

export default function Coaches({ coaches }: Props) {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating chess pieces background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float">♔</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>👨‍🏫</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-white/5 animate-float" style={{ animationDelay: '2s' }}>♕</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>⭐</div>
          <div className="absolute top-1/2 right-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>🏆</div>
          <div className="absolute top-60 left-1/3 text-5xl text-primary/15 animate-float" style={{ animationDelay: '2.5s' }}>♘</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">👨‍🏫</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Expert Team</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Meet Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse-slow">
              Expert Coaches
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            FIDE-rated chess masters dedicated to transforming your game and helping you reach your full potential
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
              <div className="absolute top-0 right-0 text-9xl">👨‍🏫</div>
              <div className="absolute bottom-0 left-0 text-9xl">🎓</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-block px-4 py-2 bg-primary/30 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">🌟 World Class Coaching</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-4">Learn from Champions</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Our coaches are FIDE-rated experts with years of competitive and teaching experience. They combine proven strategies with personalized attention to accelerate your chess development.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">FIDE Certified ✓</span>
                    </div>
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Championship Record ✓</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30" />
                    <div className="relative text-7xl sm:text-8xl animate-bounce">👨‍🏫</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COACHES GRID ============ */}
      <section className="relative py-24 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-support/20 mb-6">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-bold text-support uppercase tracking-wider">Our Team</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Experienced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-support to-accent"> Chess Masters</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto font-medium">
              Each coach brings unique expertise and a proven track record of developing tournament-winning players
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {coaches.map((c, i) => (
              <div
                key={c.name}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-accent hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Profile Header */}
                <div className="relative bg-gradient-to-br from-accent to-support p-8 text-center text-white">
                  {/* Avatar */}
                  <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-6xl border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                    ♔
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-black mb-3">{c.name}</h3>

                  {/* FIDE Rating Badge */}
                  {c.fideRating && (
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/30 backdrop-blur-sm border border-primary/50 rounded-full mb-4">
                      <span className="text-sm font-bold">📊 FIDE {c.fideRating}</span>
                    </div>
                  )}
                </div>

                {/* Bio Section */}
                <div className="relative p-8 text-center">
                  {c.bio && (
                    <p className="text-black/70 text-base leading-relaxed mb-6">{c.bio}</p>
                  )}
                  {!c.bio && c.fideRating && (
                    <p className="text-black/70 text-base leading-relaxed mb-6">Expert chess coach and dedicated mentor with proven tournament experience</p>
                  )}

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <span className="px-3 py-1 bg-primary/20 text-support font-semibold text-sm rounded-full">Strategic Training</span>
                    <span className="px-3 py-1 bg-accent/20 text-support font-semibold text-sm rounded-full">Tournament Prep</span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center gap-2 text-support font-bold group-hover:gap-3 transition-all">
                    <span>Learn with this coach</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS SECTION ============ */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-9xl text-primary">♔</div>
          <div className="absolute bottom-20 left-20 text-9xl text-accent">♕</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
              <span className="text-2xl">📈</span>
              <span className="text-sm font-bold text-black uppercase tracking-wider">Proven Results</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Why Students
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-support via-accent to-support"> Choose Skillka</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="text-5xl mb-4 inline-block">🎓</div>
                <div className="text-4xl font-black text-support mb-3">Personalized</div>
                <div className="text-black/70 font-medium">Customized learning paths for each student's unique needs</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="text-5xl mb-4 inline-block">🏆</div>
                <div className="text-4xl font-black text-support mb-3">Proven Track</div>
                <div className="text-black/70 font-medium">20+ champions trained with consistent tournament success</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="text-5xl mb-4 inline-block">⭐</div>
                <div className="text-4xl font-black text-support mb-3">Dedicated</div>
                <div className="text-black/70 font-medium">Individual attention and commitment to every student's growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-24 bg-gradient-to-br from-support via-accent to-primary overflow-hidden">
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 text-8xl animate-float">⭐</div>
          <div className="absolute top-40 right-20 text-7xl animate-float" style={{ animationDelay: '1s' }}>🎯</div>
          <div className="absolute bottom-32 left-1/4 text-9xl animate-float" style={{ animationDelay: '2s' }}>👑</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Train
            <span className="block">with Our Coaches?</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Join our academy and experience personalized coaching from FIDE-rated chess masters dedicated to your success
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group">
              <Button className="bg-primary hover:bg-secondary text-black font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transform w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Start Your Training
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg backdrop-blur-sm w-full sm:w-auto">
                Ask About Coaches
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-white/80 text-sm font-medium">
            <p>✓ Expert FIDE-Rated Coaches | ✓ Personalized Training | ✓ Tournament Success</p>
          </div>
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
