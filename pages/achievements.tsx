import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Button from '../components/ui/Button';

type Achievement = { studentName: string; title: string; description?: string; imageUrl?: string };
type Props = { achievements: Achievement[] };

export default function Achievements({ achievements }: Props) {
  const stats = [
    { label: 'Champions Trained', value: '20+', icon: '👑' },
    { label: 'Tournaments Won', value: '50+', icon: '🏆' }
  ];



  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating chess pieces background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float">🏆</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>👑</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-white/5 animate-float" style={{ animationDelay: '2s' }}>⭐</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>♕</div>
          <div className="absolute top-1/2 right-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>🥇</div>
          <div className="absolute top-60 left-1/3 text-5xl text-primary/15 animate-float" style={{ animationDelay: '2.5s' }}>♔</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">🏅</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Excellence Proven</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Champions
            <span className="block text-white">
              in the Making
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            Celebrate the incredible victories and milestones of our students who transformed their chess dreams into reality
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
              <div className="absolute top-0 right-0 text-9xl">🏆</div>
              <div className="absolute bottom-0 left-0 text-9xl">⭐</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-block px-4 py-2 bg-primary/30 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">🌟 Pride of Skillka</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-4">Our Legacy of Excellence</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Every student achievement is a testament to our commitment to excellence. From first tournament wins to national championships, we celebrate every milestone on the path to mastery.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Proven Coaching ✓</span>
                    </div>
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Championship Results ✓</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30" />
                    <div className="relative text-7xl sm:text-8xl animate-bounce">🏆</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS SECTION ============ */}
      <section className="relative py-24 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-9xl text-primary">👑</div>
          <div className="absolute bottom-20 left-20 text-9xl text-accent">🏆</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
              <span className="text-2xl">📊</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">By The Numbers</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Our Winning
              <span className="text-white"> Track Record</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <div className="text-6xl mb-4 inline-block">{stat.icon}</div>
                  <div className="text-5xl font-black text-support mb-3">{stat.value}</div>
                  <div className="text-lg font-semibold text-black">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACHIEVEMENTS GRID ============ */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
              <span className="text-2xl">🌟</span>
              <span className="text-sm font-bold text-black uppercase tracking-wider">Student Showcase</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Meet Our
              <span className="text-white"> Champion Students</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto font-medium">
              Inspiring stories of dedication, growth, and championship success
            </p>
          </div>

          {/* Achievements Grid */}
          {achievements.length === 0 ? (
            <div className="text-center py-24">
              <div className="inline-block mb-6">
                <div className="text-8xl animate-bounce">🎉</div>
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">Achievements Coming Soon</h3>
              <p className="text-lg text-black/60 mb-8">
                Our students are creating new success stories every day. Check back soon to see their amazing victories!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button className="bg-support hover:bg-accent text-white font-bold py-4 px-10 rounded-full transition-all duration-300">
                    Become Our Next Champion
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="border-2 border-support text-support hover:bg-support/10 font-bold py-4 px-10 rounded-full transition-all duration-300">
                    Get More Info
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((a, i) => (
                <div
                  key={`${a.studentName}-${a.title}`}
                  className="group relative bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-accent hover:shadow-2xl transition-all duration-300"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🏆</span>
                  </div>

                  {/* Image */}
                  {a.imageUrl && (
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent/20 to-support/20">
                      <img
                        src={a.imageUrl}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className={`p-8 ${a.imageUrl ? '' : 'bg-gradient-to-br from-accent/10 to-support/10'}`}>
                    <h3 className="text-2xl font-black text-black mb-3 line-clamp-2">{a.title}</h3>

                    {/* Student Name Badge */}
                    {a.studentName && (
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-accent to-support px-4 py-2 rounded-full">
                          👤 {a.studentName}
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    {a.description && (
                      <p className="text-black/70 text-base leading-relaxed mb-6">{a.description}</p>
                    )}

                    {/* View Details Link */}
                    <div className="flex items-center gap-2 text-support font-bold group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
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
          <div className="absolute top-20 left-10 text-8xl animate-float">⭐</div>
          <div className="absolute top-40 right-20 text-7xl animate-float" style={{ animationDelay: '1s' }}>🏆</div>
          <div className="absolute bottom-32 left-1/4 text-9xl animate-float" style={{ animationDelay: '2s' }}>👑</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Write
            <span className="block">Your Success Story?</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Join hundreds of champions who have transformed their chess dreams into reality with Skillka Academy
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group">
              <Button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transform w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Start Training Today
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
            <p>✓ Join 500+ trained students | ✓ 50+ district champions | ✓ Expert FIDE-rated coaches</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const proto = (req.headers['x-forwarded-proto'] as string) || 'http';
  const host = req.headers.host;
  const url = `${proto}://${host}/api/achievements`;
  const res = await fetch(url);
  const data = await res.json();
  return { props: { achievements: data.achievements || [] } };
};
