import Link from 'next/link';
import Button from '../components/ui/Button';

export default function Blog() {
  const upcomingContent = [
    { icon: '♟️', title: 'Opening Strategies', desc: 'Master the first moves and control the board', gradient: 'from-primary to-secondary' },
    { icon: '🎯', title: 'Tactics & Puzzles', desc: 'Daily puzzles to sharpen your tactical skills', gradient: 'from-accent to-support' },
    { icon: '🏆', title: 'Student Success Stories', desc: 'Inspiring journeys of our champion students', gradient: 'from-support to-accent' },
    { icon: '📅', title: 'Tournament Updates', desc: 'Latest results and upcoming chess events', gradient: 'from-secondary to-primary' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating chess pieces background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float">📰</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>📚</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-white/5 animate-float" style={{ animationDelay: '2s' }}>♕</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
          <div className="absolute top-1/2 right-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>💡</div>
          <div className="absolute top-60 left-1/3 text-5xl text-primary/15 animate-float" style={{ animationDelay: '2.5s' }}>🎓</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">📰</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Blog & Updates</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Chess Insights &
            <span className="block text-white">
              Academy Updates
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            Stay updated with chess strategies, tactics tips, student success stories, and exclusive academy news
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
              <div className="absolute top-0 right-0 text-9xl">📚</div>
              <div className="absolute bottom-0 left-0 text-9xl">💡</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-block px-4 py-2 bg-primary/30 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">📖 Coming Soon</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-4">Quality Chess Content</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    We're preparing comprehensive guides, tactical puzzles, success stories, and exclusive insights from our coaches to help you master chess and achieve your goals.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Expert Content ✓</span>
                    </div>
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Regular Updates ✓</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30" />
                    <div className="relative text-7xl sm:text-8xl animate-bounce">📚</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTENT PREVIEW SECTION ============ */}
      <section className="relative py-24 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-support/20 mb-6">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">What's Coming</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Upcoming
              <span className="text-white"> Content Topics</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto font-medium">
              Get ready for in-depth guides, tactical training, inspiring stories, and academy updates
            </p>
          </div>

          {/* Content Preview Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingContent.map((content, i) => (
              <div
                key={content.title}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:border-accent hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${content.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300">{content.icon}</div>
                  <h3 className="text-xl font-black text-black mb-3">{content.title}</h3>
                  <p className="text-black/70 font-medium text-sm leading-relaxed">{content.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER SECTION ============ */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-9xl text-primary">📰</div>
          <div className="absolute bottom-20 left-20 text-9xl text-accent">💡</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
              <span className="text-2xl">📧</span>
              <span className="text-sm font-bold text-black uppercase tracking-wider">Stay Connected</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Don't Miss Any
              <span className="text-white"> Updates</span>
            </h2>

            <p className="text-lg text-black/70 max-w-2xl mx-auto font-medium">
              Follow us on social media and contact us to stay informed about new blog posts, tactical puzzles, success stories, and exclusive academy announcements
            </p>
          </div>

          {/* Newsletter Card */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-3xl p-8 sm:p-12 text-center hover:border-primary/50 transition-all">
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-br from-support to-accent rounded-full flex items-center justify-center text-2xl text-white hover:scale-110 transition-transform shadow-lg"
              >
                📱
              </a>
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-2xl text-white hover:scale-110 transition-transform shadow-lg"
              >
                f
              </a>
              <a 
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl text-white hover:scale-110 transition-transform shadow-lg"
              >
                ▶
              </a>
            </div>
            <p className="mt-8 text-black/70 font-medium">Follow us for daily chess tips and academy updates</p>
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
          <div className="absolute top-40 right-20 text-7xl animate-float" style={{ animationDelay: '1s' }}>📚</div>
          <div className="absolute bottom-32 left-1/4 text-9xl animate-float" style={{ animationDelay: '2s' }}>👑</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Improve
            <span className="block">Your Chess Game?</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Join our academy for expert coaching, training programs, and all the resources you need to become a better chess player
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
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-white/80 text-sm font-medium">
            <p>✓ Expert Content | ✓ Regular Updates | ✓ Academy News</p>
          </div>
        </div>
      </section>
    </div>
  );
}
