import type { GetServerSideProps } from 'next';

type Achievement = { studentName: string; title: string; description?: string; imageUrl?: string };
type Props = { achievements: Achievement[] };

export default function Achievements({ achievements }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-support to-support text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Achievements</h1>
          <p className="text-xl text-white/80">Celebrating excellence and success stories</p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-12 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border-l-4 border-accent p-6 rounded-xl shadow-lg mb-8">
            <p className="text-lg font-semibold text-gray-800">🌟 Our academy students are champions in almost every district category</p>
          </div>
          
          {achievements.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-gray-500 text-lg">More achievements coming soon!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((a, i) => (
                <div 
                  key={`${a.studentName}-${a.title}`}
                  className="card-hover bg-gradient-to-br from-accent to-support rounded-2xl overflow-hidden shadow-lg"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {a.imageUrl && (
                    <div className="relative h-48">
                      <img 
                        src={a.imageUrl} 
                        alt={a.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🏆</span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{a.title}</h3>
                    {a.studentName && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-semibold text-black bg-primary px-3 py-1 rounded-full">
                          👤 {a.studentName}
                        </span>
                      </div>
                    )}
                    {a.description && <p className="text-white/80 leading-relaxed">{a.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Champions</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Tournaments</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-blue-200">State Titles</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-blue-200">National Wins</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Be the Next Champion</h2>
          <p className="text-black/70 text-lg mb-6">
            Join Skillka Chess Academy and write your own success story
          </p>
          <a 
            href="/register"
            className="inline-block px-8 py-4 bg-support hover:bg-accent text-white font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            Start Your Journey
          </a>
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
