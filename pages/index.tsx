import Link from 'next/link';
import Button from '../components/ui/Button';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Featured Programs (3 main ones for top fold)
  const featuredPrograms = [
    {
      title: 'Beginner Mastery',
      level: 'For Absolute Beginners',
      description: 'Master chess fundamentals from piece movement to basic tactics.',
      icon: '🎓',
      features: ['Basic rules', 'Opening principles', 'Elementary tactics'],
      color: 'from-support to-secondary'
    },
    {
      title: 'Intermediate Strategy',
      level: 'For Intermediate Players',
      description: 'Develop tactical awareness and positional understanding.',
      icon: '🎯',
      features: ['Positional concepts', 'Advanced tactics', 'Pawn structures'],
      color: 'from-accent to-primary'
    },
    {
      title: 'Advanced Mastery',
      level: 'For Advanced Players',
      description: 'Master complex strategies and compete at tournament level.',
      icon: '🏆',
      features: ['Deep strategy', 'Opening theory', 'Tournament preparation'],
      color: 'from-support to-accent'
    }
  ];

  // Trust & Authority Stats
  const stats = [
    { label: 'Students Trained', value: '500+', icon: '👨‍🎓' },
    { label: 'District Champions', value: '50+', icon: '🏆' },
    { label: 'Years Experience', value: '10+', icon: '⭐' },
    { label: 'Expert Coaches', value: '4', icon: '♔' }
  ];

  // Why Choose Us Features
  const features = [
    { title: 'Expert Coaching', desc: 'FIDE-rated coaches with proven championship records', icon: '🎯' },
    { title: 'Structured Training', desc: 'Curriculum-based approach with clear progression', icon: '📚' },
    { title: 'Tournament Focus', desc: 'Competitive training for real tournament success', icon: '🏆' },
    { title: 'Flexible Modes', desc: 'Online & offline options to fit your schedule', icon: '⏰' },
    { title: 'Personal Attention', desc: 'Small batches and individual coaching available', icon: '👨‍🏫' },
    { title: 'Community Support', desc: 'Join a thriving chess community and club', icon: '🤝' }
  ];

  // Testimonials
  const testimonials = [
    {
      text: 'My rating improved from 800 to 1400 in just 8 months. The structured curriculum and expert guidance made all the difference.',
      author: 'Arjun Nair',
      role: 'Student, District Champion',
      rating: 5
    },
    {
      text: 'Excellent coaches! They focus not just on winning, but on building solid chess understanding. My daughter loves it.',
      author: 'Priya Sharma',
      role: 'Parent',
      rating: 5
    },
    {
      text: 'The tournament preparation program is outstanding. Won 3 district tournaments after training here.',
      author: 'Vikram Patel',
      role: 'Tournament Winner',
      rating: 5
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary border-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating chess pieces background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0s' }}>♔</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>♕</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-white/5 animate-float" style={{ animationDelay: '2s' }}>♘</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>♗</div>
          <div className="absolute top-1/2 right-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>♜</div>
          <div className="absolute top-60 left-1/3 text-5xl text-primary/15 animate-float" style={{ animationDelay: '2.5s' }}>♙</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Master the
                <span className="block text-white">
                  Game of Kings
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed">
                Transform from beginner to champion with expert coaching, proven strategies, and tournament-winning skills.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-semibold text-sm">♔ FIDE-Rated Coaches</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-semibold text-sm">🎯 Structured Programs</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-semibold text-sm">⚡ Online & Offline</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/register" className="group">
                  <Button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transform w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      Book Free Demo
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="ghost" className="border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg backdrop-blur-sm w-full sm:w-auto">
                    View Courses
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white flex items-center justify-center text-sm font-bold">A</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-support border-2 border-white flex items-center justify-center text-sm font-bold text-white">V</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-support to-primary border-2 border-white flex items-center justify-center text-sm font-bold text-white">P</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent border-2 border-white flex items-center justify-center text-sm font-bold">R</div>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">500+ Happy Students</p>
                  <div className="flex items-center gap-1">
                    <span className="text-primary text-sm">★★★★★</span>
                    <span className="text-white/70 text-sm">4.9 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Achievement Cards */}
            <div className="hidden lg:flex justify-center items-center relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent rounded-full blur-3xl" />
              
              {/* Main achievement card container */}
              <div className="relative w-full max-w-lg space-y-6">
                {/* Rotating glow ring */}
                <div className="absolute -inset-8 rounded-full border-4 border-primary/20 animate-spin-slow" />
                
                {/* Top Achievement Card */}
                <div className="relative ml-12 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🏆</div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70 font-semibold uppercase tracking-wider">Tournament Winners</p>
                      <p className="text-4xl font-black text-white">50+</p>
                      <p className="text-xs text-white/60 mt-1">District & State Champions</p>
                    </div>
                  </div>
                </div>

                {/* Middle Achievement Card */}
                <div className="relative -mr-12 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">📈</div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70 font-semibold uppercase tracking-wider">Average Growth</p>
                      <p className="text-4xl font-black text-white">+600</p>
                      <p className="text-xs text-white/60 mt-1">Rating Points in 1 Year</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Achievement Card */}
                <div className="relative ml-12 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">👨‍🎓</div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70 font-semibold uppercase tracking-wider">Trained & Trusted</p>
                      <p className="text-4xl font-black text-white">500+</p>
                      <p className="text-xs text-white/60 mt-1">Satisfied Students & Parents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============ TRUST / STATS SECTION ============ */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-support rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="group text-center transform hover:scale-110 transition-all duration-300"
                style={{ 
                  animation: 'slideIn 0.6s ease-out forwards',
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Icon */}
                <div className="text-5xl mb-3 group-hover:animate-bounce">
                  {stat.icon}
                </div>
                {/* Number */}
                <div className="text-4xl sm:text-6xl font-black text-support mb-2 group-hover:text-black transition-colors">
                  {stat.value}
                </div>
                {/* Label */}
                <p className="text-sm sm:text-base text-black/80 font-bold uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS SECTION ============ */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-9xl text-accent">♔</div>
          <div className="absolute bottom-20 left-20 text-9xl text-support">♕</div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
              <span className="text-2xl">🎓</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Our Programs</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6">
              Choose Your
              <span className="text-white"> Path to Mastery</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Whether you're just starting or aiming for championship titles, we have the perfect program for your journey
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {featuredPrograms.map((program, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ 
                  animation: 'slideIn 0.6s ease-out forwards',
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0
                }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-100 group-hover:opacity-100 transition-opacity`} />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/50 transition-all" />
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with animated ring */}
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping group-hover:animate-none" />
                    <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span className="text-5xl drop-shadow-lg">{program.icon}</span>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="inline-flex px-4 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 mb-4 self-start">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      {program.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:scale-105 transition-transform">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-white/90 mb-6 font-medium leading-relaxed flex-grow">
                    {program.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-white/85 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href="/programs" className="w-full mt-auto">
                    <button className="w-full bg-white hover:bg-white/90 text-primary font-bold py-4 px-6 rounded-full transition-all duration-300 text-base group-hover:shadow-xl flex items-center justify-center gap-2">
                      Learn More
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </Link>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-3xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-3xl" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link href="/programs">
              <Button className="bg-gradient-to-r from-support to-accent hover:from-accent hover:to-support text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-lg">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US SECTION ============ */}
      <section className="relative py-24 bg-gradient-to-br from-support via-accent to-support overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 backdrop-blur-sm mb-6">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Why Skillka</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
              Excellence in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"> Every Move</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-medium">
              What makes us India's most trusted chess academy? It's our commitment to results, personalized attention, and proven methodology.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2"
                style={{ 
                  animation: 'slideIn 0.6s ease-out forwards',
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Gradient corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative text-6xl mb-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-white/80 leading-relaxed font-medium">
                  {feature.desc}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/0 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                  <span className="text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl text-support">♘</div>
          <div className="absolute bottom-10 right-10 text-9xl text-accent">♗</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-primary">♔</div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
              <span className="text-2xl">💬</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Testimonials</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-black mb-6">
              Stories of
              <span className="text-white"> Success</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto font-medium">
              Hear from students and parents who've experienced the Skillka difference
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-8 bg-gradient-to-br from-support/5 to-accent/5 border-2 border-support/20 hover:border-support hover:shadow-2xl hover:shadow-support/20 transition-all duration-500 transform hover:-translate-y-2"
                style={{ 
                  animation: 'slideIn 0.6s ease-out forwards',
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0
                }}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-6xl text-primary/20 group-hover:text-primary/40 transition-colors">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-2xl text-primary group-hover:animate-bounce" style={{ animationDelay: `${j * 0.1}s` }}>★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base text-black/90 mb-6 leading-relaxed font-medium">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-support/20">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-support to-accent flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-black text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-black/60 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full" />
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <div className="text-left">
                  <p className="text-2xl font-black text-support">4.9/5</p>
                  <p className="text-xs text-black/60 font-semibold">Average Rating</p>
                </div>
              </div>
              <div className="w-px h-12 bg-black/20" />
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                <div className="text-left">
                  <p className="text-2xl font-black text-support">95%</p>
                  <p className="text-xs text-black/60 font-semibold">Success Rate</p>
                </div>
              </div>
              <div className="w-px h-12 bg-black/20" />
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <div className="text-left">
                  <p className="text-2xl font-black text-support">50+</p>
                  <p className="text-xs text-black/60 font-semibold">Champions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION ============ */}
      <section className="relative py-32 bg-gradient-to-br from-support via-accent to-primary overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Floating chess pieces */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 left-20 text-8xl text-white animate-float">♔</div>
          <div className="absolute top-40 right-32 text-7xl text-primary animate-float" style={{ animationDelay: '0.5s' }}>♕</div>
          <div className="absolute bottom-32 left-1/3 text-6xl text-secondary animate-float" style={{ animationDelay: '1s' }}>♘</div>
          <div className="absolute bottom-20 right-20 text-8xl text-white animate-float" style={{ animationDelay: '1.5s' }}>♙</div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8 animate-bounce">
            <span className="text-3xl">🚀</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Start Your Journey Today</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Ready to Transform
            <span className="block text-white">
              Your Chess Game?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Join hundreds of students who've improved their skills and won tournaments. Experience world-class coaching with a
            <span className="text-primary font-bold"> FREE Demo Class</span>
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30">
              <span className="text-white font-bold flex items-center gap-2">
                <span className="text-xl">✅</span>
                No Credit Card Required
              </span>
            </div>
            <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30">
              <span className="text-white font-bold flex items-center gap-2">
                <span className="text-xl">⚡</span>
                Instant Confirmation
              </span>
            </div>
            <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30">
              <span className="text-white font-bold flex items-center gap-2">
                <span className="text-xl">🎯</span>
                Expert FIDE Coaches
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            <Link href="/register" className="group w-full sm:w-auto">
              <Button className="w-full bg-primary hover:bg-secondary text-white font-black text-lg sm:text-xl py-4 sm:py-6 px-8 sm:px-12 rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">🎓</span>
                <span>Book Free Demo Class</span>
                <span className="group-hover:translate-x-2 transition-transform text-xl sm:text-2xl hidden sm:inline">→</span>
              </Button>
            </Link>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full border-3 border-white text-white hover:bg-white hover:text-support font-bold text-lg sm:text-xl py-4 sm:py-6 px-8 sm:px-12 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-lg sm:text-xl">💬</span>
                <span>Talk to an Expert</span>
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap gap-8 justify-center items-center opacity-90">
            <div className="text-center">
              <p className="text-4xl font-black text-white mb-1">500+</p>
              <p className="text-sm text-white/80 font-semibold">Happy Students</p>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <p className="text-4xl font-black text-white mb-1">50+</p>
              <p className="text-sm text-white/80 font-semibold">Champions Trained</p>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <p className="text-4xl font-black text-white mb-1">4.9★</p>
              <p className="text-sm text-white/80 font-semibold">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <p className="text-4xl font-black text-white mb-1">10+</p>
              <p className="text-sm text-white/80 font-semibold">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
