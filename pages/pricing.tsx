export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Sunday Advanced',
      icon: '🏆',
      timing: '10:30 AM – 1:00 PM',
      price: '1000',
      gradient: 'from-accent via-support to-accent',
      features: [
        '2.5-hour sessions',
        'Advanced training',
        'Tournament prep',
        'Strategy development'
      ]
    },
    {
      name: 'Sunday Beginner',
      icon: '☀️',
      timing: 'Weekend batch',
      price: '800',
      gradient: 'from-support via-accent to-support',
      features: [
        'Flexible timing',
        'Beginner-friendly',
        'Small batches',
        'Basic fundamentals'
      ]
    }, 
    {
      name: 'Evening Batch',
      icon: '🌤️',
      timing: 'Mon–Fri, 4:30 PM – 6:00 PM',
      price: '1300',
      gradient: 'from-accent to-support',
      features: [
        '2 classes per week',
        'After-school timing',
        'Consistent practice',
        'Homework support'
      ]
    },
    {
      name: 'Online Group Class',
      icon: '👥',
      timing: '2 classes per week',
      price: '2500',
      badge: 'NEW',
      badgeColor: 'bg-secondary',
      gradient: 'from-support to-accent',
      features: [
        'Max 4 students per batch',
        '2 classes weekly',
        'Small group learning',
        'Interactive sessions'
      ]
    },
    {
      name: 'Online Individual',
      icon: '💻',
      timing: '1-on-1 coaching',
      price: '500',
      priceUnit: '/class',
      gradient: 'from-primary via-accent to-support',
      features: [
        '1 hour session',
        'Personalized training',
        'Learn from home',
        'Flexible schedule'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating chess pieces */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float">♔</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>💰</div>
          <div className="absolute bottom-20 left-1/4 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '2s' }}>♕</div>
          <div className="absolute bottom-32 right-1/3 text-5xl text-white/10 animate-float" style={{ animationDelay: '1.5s' }}>♘</div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">💎</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Affordable Excellence</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Choose Your
            <span className="block text-white">
              Program & Pricing
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            Quality chess education that fits your schedule and budget. Start your journey to mastery today!
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-9xl text-primary">♔</div>
          <div className="absolute bottom-20 left-20 text-9xl text-accent">♕</div>
        </div>

        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
              <span className="text-2xl">💳</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Our Plans</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Flexible Pricing for
              <span className="text-white"> Every Student</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto font-medium">
              From weekend warriors to serious competitors, we have a plan that's perfect for your chess journey
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ 
                  animation: 'slideIn 0.6s ease-out forwards',
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 -right-3 ${plan.badgeColor} text-black text-xs font-black px-5 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform`}>
                    {plan.badge}
                  </div>
                )}
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with animated ring */}
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:animate-none" />
                    <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <span className="text-5xl">{plan.icon}</span>
                    </div>
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:scale-105 transition-transform">
                    {plan.name}
                  </h3>

                  {/* Timing */}
                  <p className="text-white/90 text-sm font-semibold mb-6">
                    {plan.timing}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">₹{plan.price}</span>
                      <span className="text-xl text-white/80 font-bold">{plan.priceUnit || '/month'}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/95 font-medium">
                        <span className="text-white text-lg mt-0.5">✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a 
                    href="/register" 
                    className="w-full bg-white hover:bg-white/90 text-black font-black py-4 px-6 rounded-full transition-all duration-300 text-center group-hover:shadow-2xl group-hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>Enroll Now</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: '🎯', title: 'No Hidden Fees', desc: 'Transparent pricing with no surprises' },
              { icon: '🔄', title: 'Flexible Switching', desc: 'Change plans anytime based on your needs' },
              { icon: '💯', title: 'Quality Guaranteed', desc: 'Expert FIDE-rated coaching for all levels' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-support/5 to-accent/5 border border-support/20 hover:border-support hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black text-black mb-2">{item.title}</h3>
                <p className="text-black/70 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-support via-accent to-primary overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Floating chess pieces */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 left-20 text-8xl text-white animate-float">💰</div>
          <div className="absolute bottom-20 right-20 text-8xl text-primary animate-float" style={{ animationDelay: '1s' }}>♔</div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8 animate-bounce">
            <span className="text-3xl">🚀</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Limited Slots Available</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Begin Your
            <span className="block text-white">
              Chess Journey?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Join hundreds of students mastering chess with expert guidance. Book your spot today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-secondary to-primary text-black font-black rounded-full hover:shadow-2xl hover:shadow-primary/70 transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-lg"
            >
              <span className="text-2xl">🎓</span>
              <span>Register Now</span>
              <span className="text-2xl animate-bounce-slow">→</span>
            </a>
            
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-support font-black rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 text-lg"
            >
              <span className="text-xl">💬</span>
              <span>Have Questions?</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-8 justify-center items-center">
            <div className="text-center">
              <p className="text-4xl font-black text-white mb-1">500+</p>
              <p className="text-sm text-white/80 font-semibold">Happy Students</p>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <p className="text-4xl font-black text-white mb-1">4.9★</p>
              <p className="text-sm text-white/80 font-semibold">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <p className="text-4xl font-black text-white mb-1">50+</p>
              <p className="text-sm text-white/80 font-semibold">Champions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
