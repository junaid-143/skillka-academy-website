export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-support to-support text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="text-7xl mb-6 animate-float">♔</div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">About Skillka Chess Academy</h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nurturing chess excellence in Malappuram since 2014. From beginners to FIDE champions,
            we transform passion into mastery.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card-hover bg-white rounded-2xl p-8 border-4 border-support shadow-lg">
              <div className="w-16 h-16 bg-support rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-support mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Skillka Chess Academy, we empower students to excel in chess through expert coaching,
                modern teaching methods, and a supportive community. We focus on holistic development—
                building strategic thinking, mental resilience, and sportsmanship alongside chess mastery.
              </p>
            </div>

            {/* Vision */}
            <div className="card-hover bg-white rounded-2xl p-8 border-4 border-accent shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h2 className="text-3xl font-bold text-accent mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become Kerala's top chess academy by producing FIDE-rated players and champions who
                represent India on international platforms. We envision a future where every student
                discovers their potential and achieves excellence both on and off the chessboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12">
            Why Choose Skillka?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '👨‍🏫', title: 'Expert Coaches', desc: 'FIDE-rated trainers with proven track records' },
              { icon: '🏅', title: '10+ Years', desc: 'A decade of excellence in chess education' },
              { icon: '⭐', title: '500+ Students', desc: 'Trained hundreds of successful players' },
              { icon: '🏆', title: '50+ Champions', desc: 'State and national level winners' },
              { icon: '💻', title: 'Hybrid Learning', desc: 'Both online and offline classes available' },
              { icon: '🎓', title: 'Flexible Batches', desc: 'Morning, afternoon, and weekend options' }
            ].map((item, i) => (
              <div 
                key={i}
                className="card-hover bg-gradient-to-br from-accent to-support rounded-xl p-6 text-white"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gradient-to-br from-secondary to-support">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-support">
            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-support mb-6">Visit Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Skillka Chess Academy</p>
                      <p className="text-gray-600">Near Town Hall, Malappuram District</p>
                      <p className="text-gray-600">Kerala, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800 font-semibold">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <a href="mailto:info@skillkachess.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                      info@skillkachess.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="font-semibold text-gray-900">Monday - Sunday</p>
                      <p className="text-gray-600">6:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-support to-support p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🏢</div>
                  <p className="text-2xl font-bold mb-2">Malappuram District</p>
                  <p className="text-blue-200">Kerala's Premier Chess Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
    </div>
  );
}
