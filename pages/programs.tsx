export default function Programs() {
  const programs = [
    { 
      title: 'Absolute Beginner', 
      icon: '♙',
      desc: 'Perfect introduction to chess',
        features: ['Basic rules & moves', 'Simple tactics', 'Fun learning approach', 'Age 5+'],
        color: 'from-support to-accent'
    },
    { 
      title: 'Beginner', 
      icon: '♘',
      desc: 'Build your foundation',
        features: ['Opening principles', 'Tactical patterns', 'Endgame basics', 'Tournament prep'],
        color: 'from-support to-primary'
    },
    { 
      title: 'Intermediate', 
      icon: '♗',
      desc: 'Advance your skills',
        features: ['Opening theory', 'Strategic concepts', 'Complex tactics', 'Position analysis'],
        color: 'from-support to-secondary'
    },
    { 
      title: 'Advanced', 
      icon: '♕',
      desc: 'Master-level training',
        features: ['Deep analysis', 'Competition strategy', 'Rating improvement', 'GM techniques'],
        color: 'from-support to-support'
    }
  ];

  const batches = [
    { name: 'Saturday Beginner', time: '10:30 AM – 12:30 PM', price: '₹800', period: '/month', icon: '📅' },
    { name: 'Sunday Advanced', time: '10:30 AM – 1:00 PM', price: '₹1000', period: '/month', icon: '🏆' },
    { name: 'Sunday Beginner', time: 'Morning batch', price: '₹800', period: '/month', icon: '☀️' },
    { name: 'Evening (2x/week)', time: 'Mon–Fri 4:30-6 PM', price: '₹1300', period: '/month', icon: '🌙' },
    { name: 'Evening (1x/week)', time: 'Mon–Fri 4:30-6 PM', price: '₹700', period: '/month', icon: '⭐' },
    { name: 'Online Individual', time: '1 hour session', price: '₹500', period: '/class', icon: '💻' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-support to-support text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">♔</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Programs & Pricing</h1>
          <p className="text-xl text-white/80">Choose your path to chess mastery</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-support mb-12">Our Programs</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <div key={i} className="card-hover">
                <div className="bg-gradient-to-br from-accent to-support rounded-2xl p-6 text-white shadow-xl h-full">
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-white/80 mb-4">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <span className="text-white">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-support mb-4">Batch Schedule & Fees</h2>
          <p className="text-center text-gray-600 mb-12">Flexible timing to fit your schedule</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {batches.map((b, i) => (
              <div key={i} className="card-hover">
                <div className="bg-gradient-to-br from-accent to-support rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-lg text-white mb-1">{b.name}</h3>
                  <p className="text-sm text-white/80 mb-4">{b.time}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-white">{b.price}</span>
                    <span className="text-white/70 mb-1">{b.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Membership */}
      <section className="py-16 bg-gradient-to-r from-accent to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-6xl mb-4">♔</div>
            <h2 className="text-3xl font-bold text-blue-700 mb-3">Club Membership</h2>
                        <h2 className="text-3xl font-bold text-support mb-3">Club Membership</h2>
            <p className="text-gray-600 mb-6">Evening practice sessions with coaching</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-5xl font-bold text-accent">₹499</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="text-gray-700 mb-6">6–9 PM • One coaching class per week</p>
            <a href="/register" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition btn-glow">
              Join Club
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
