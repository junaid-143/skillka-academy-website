import Link from 'next/link';
import Button from '../components/ui/Button';

export default function About() {
  const whyChooseUs = [
    { icon: '👨‍🏫', title: 'Expert Coaches', desc: 'FIDE-rated trainers with proven track records', gradient: 'from-primary to-secondary' },
    { icon: '🏅', title: '10+ Years', desc: 'A decade of excellence in chess education', gradient: 'from-accent to-support' },
    { icon: '⭐', title: '500+ Students', desc: 'Trained hundreds of successful players', gradient: 'from-support to-accent' },
    { icon: '🏆', title: '20+ Champions', desc: 'District and state level winners', gradient: 'from-secondary to-primary' },
    { icon: '💻', title: 'Hybrid Learning', desc: 'Both online and offline classes available', gradient: 'from-primary to-accent' },
    { icon: '🎓', title: 'Flexible Batches', desc: 'Morning, afternoon, and weekend options', gradient: 'from-accent to-secondary' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating chess pieces background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float">♔</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>📚</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-white/5 animate-float" style={{ animationDelay: '2s' }}>♕</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
          <div className="absolute top-1/2 right-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>🎓</div>
          <div className="absolute top-60 left-1/3 text-5xl text-primary/15 animate-float" style={{ animationDelay: '2.5s' }}>🏆</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">ℹ️</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Our Story</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            About Skillka
            <span className="block text-white">
              Chess Academy
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            Nurturing chess excellence in Malappuram since 2014. From beginners to FIDE champions, we transform passion into mastery.
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-9xl text-primary">♔</div>
          <div className="absolute bottom-20 left-20 text-9xl text-accent">♕</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 sm:p-12 hover:border-accent hover:shadow-2xl transition-all duration-300">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-black text-black mb-4">Our Mission</h2>
                <p className="text-black/70 text-lg leading-relaxed">
                  At Skillka Chess Academy, we empower students to excel in chess through expert coaching, modern teaching methods, and a supportive community. We focus on holistic development—building strategic thinking, mental resilience, and sportsmanship alongside chess mastery.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 sm:p-12 hover:border-accent hover:shadow-2xl transition-all duration-300">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-support/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-support rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🏆</span>
                </div>
                <h2 className="text-3xl font-black text-black mb-4">Our Vision</h2>
                <p className="text-black/70 text-lg leading-relaxed">
                  To become Kerala's top chess academy by producing FIDE-rated players and champions who represent India on international platforms. We envision a future where every student discovers their potential and achieves excellence both on and off the chessboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="relative py-24 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-support/20 mb-6">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Our Strengths</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Why Choose
              <span className="text-white"> Skillka?</span>
            </h2>
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-black text-black mb-3">{item.title}</h3>
                  <p className="text-black/70 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCATION SECTION ============ */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-accent via-support to-primary rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content */}
              <div className="relative p-8 sm:p-12 text-white">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 text-9xl">🏢</div>
                </div>

                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl font-black mb-8">Visit Us</h2>
                  
                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/30 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Location</p>
                        <p className="font-bold text-lg mb-1">Skillka Chess Academy</p>
                        <p className="text-white/80">Backside of Kottakkal Bus Stand</p>
                        <p className="text-white/80">Malappuram District, Kerala</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/30 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Phone</p>
                        <a href="tel:+916238793828" className="text-white hover:text-primary transition font-semibold block">+91 6238793828</a>
                        <a href="tel:+919847368798" className="text-white hover:text-primary transition font-semibold block">+91 9847368798</a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/30 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Email</p>
                        <a href="mailto:info@skillkachess.com" className="text-white hover:text-primary transition font-semibold">info@skillkachess.com</a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/30 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🕐</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Hours</p>
                        <p className="font-bold text-lg mb-1">Monday - Sunday</p>
                        <p className="text-white/80">6:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Section */}
              <div className="bg-gradient-to-br from-primary to-secondary p-8 sm:p-12 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Background animation */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 text-9xl animate-float">♔</div>
                  <div className="absolute bottom-0 left-0 text-9xl animate-float" style={{ animationDelay: '1s' }}>♕</div>
                </div>

                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-6 animate-bounce">🏢</div>
                  <h3 className="text-3xl font-black text-black mb-3">Malappuram</h3>
                  <p className="text-black/70 font-bold text-lg">Kerala's Premier Chess Hub</p>
                </div>
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
            Join Our
            <span className="block">Chess Family</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Start your chess journey with Skillka Academy and discover the champion within you
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
            <p>✓ 10+ Years Experience | ✓ 500+ Students | ✓ Expert Coaching</p>
          </div>
        </div>
      </section>
    </div>
  );
}
