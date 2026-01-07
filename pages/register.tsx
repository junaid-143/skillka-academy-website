import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Register() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      chessLevel: form.get('chessLevel'),
      age: Number(form.get('age')),
      availableTime: form.get('availableTime'),
      batch: form.get('batch'),
      isClubMember: form.get('club') ? true : false
    };
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setStatus('Registration successful! We will contact you soon.');
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong');
    }
  }

  const benefits = [
    { icon: '⚡', title: 'Quick Process', desc: 'Get started in minutes', gradient: 'from-primary to-secondary' },
    { icon: '🎓', title: 'Expert Coaching', desc: 'FIDE-rated trainers', gradient: 'from-accent to-support' },
    { icon: '💯', title: 'Proven Results', desc: '20+ champions trained', gradient: 'from-support to-accent' }
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
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>📝</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-white/5 animate-float" style={{ animationDelay: '2s' }}>♕</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
          <div className="absolute top-1/2 right-10 text-8xl text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>🎯</div>
          <div className="absolute top-60 left-1/3 text-5xl text-primary/15 animate-float" style={{ animationDelay: '2.5s' }}>🏆</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">📝</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Start Your Journey</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Join Skillka
            <span className="block text-white">
              Chess Academy
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            Register now and transform your chess skills with expert coaching, proven strategies, and tournament success
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
              <div className="absolute top-0 right-0 text-9xl">🎓</div>
              <div className="absolute bottom-0 left-0 text-9xl">⭐</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-block px-4 py-2 bg-primary/30 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">✨ Enroll Today</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-4">What You'll Get</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Expert guidance from FIDE-rated coaches, structured curriculum, tournament preparation, and a supportive community of chess enthusiasts ready to help you succeed.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Small Batches ✓</span>
                    </div>
                    <div className="px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full">
                      <span className="text-white font-bold">Flexible Timing ✓</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30" />
                    <div className="relative text-7xl sm:text-8xl animate-bounce">🎓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REGISTRATION FORM SECTION ============ */}
      <section className="relative py-24 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-support/20 mb-6">
              <span className="text-2xl">📋</span>
              <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Registration Form</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Complete Your
              <span className="text-white"> Registration</span>
            </h2>
          </div>

          {/* Form */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-2xl transition-all">
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Student Information */}
              <div className="pb-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <h3 className="text-2xl font-black text-black">Student Information</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">Student Name *</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition font-medium"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">Age *</label>
                    <input 
                      type="number"
                      name="age"
                      required
                      min="4"
                      className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition font-medium"
                      placeholder="Age in years"
                    />
                  </div>
                </div>
              </div>

              {/* Chess Experience */}
              <div className="pb-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-support rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                  <h3 className="text-2xl font-black text-black">Chess Experience</h3>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-black mb-3">Current Level *</label>
                  <input 
                    type="text"
                    name="chessLevel"
                    required
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition font-medium"
                    placeholder="e.g. Beginner, Intermediate, Advanced"
                  />
                </div>
              </div>

              {/* Batch Selection */}
              <div className="pb-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-support to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                  <h3 className="text-2xl font-black text-black">Batch Selection</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">Preferred Batch *</label>
                    <select 
                      name="batch" 
                      required
                      className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition font-medium bg-white"
                    >
                      <option value="">Select a batch</option>
                      <option value="Offline Sunday">📅 Offline Sunday</option>
                      <option value="Evening Batch">🌤️ Evening Batch</option>
                      <option value="Online">💻 Online</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">Available Time *</label>
                    <input 
                      type="text"
                      name="availableTime"
                      required
                      className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition font-medium"
                      placeholder="e.g. Sunday Morning, Weekday Evenings"
                    />
                  </div>
                </div>
              </div>

              {/* Club Membership */}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-support to-accent hover:from-accent hover:to-support text-white text-lg font-black rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                Complete Registration 🎉
              </button>

              {/* Status Message */}
              {status && (
                <div className={`p-6 rounded-2xl font-bold text-center text-lg border-2 ${
                  status.includes('successful') 
                    ? 'bg-green-50 border-green-400 text-green-700' 
                    : 'bg-red-50 border-red-400 text-red-700'
                }`}>
                  {status.includes('successful') ? '✅' : '❌'} {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS SECTION ============ */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-9xl text-primary">♔</div>
          <div className="absolute bottom-20 left-20 text-9xl text-accent">♕</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-bold text-black uppercase tracking-wider">Why Join Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Benefits of Joining
              <span className="text-white"> Skillka Academy</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:border-accent hover:shadow-xl transition-all duration-300"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-2xl font-black text-black mb-3">{benefit.title}</h3>
                  <p className="text-black/70 font-medium">{benefit.desc}</p>
                </div>
              </div>
            ))}
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
            Questions?
            <span className="block">We're Here to Help</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Still unsure? Contact us today to learn more about our programs, batches, and how we can help you reach your chess goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group">
              <Button className="bg-secondary hover:bg-primary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-secondary/50 hover:shadow-primary/70 hover:scale-105 transform w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Get in Touch
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>
            </Link>
            <Link href="/programs">
              <Button className="border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg backdrop-blur-sm w-full sm:w-auto">
                Explore Courses
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-white/80 text-sm font-medium">
            <p>✓ Easy Registration | ✓ Flexible Schedules | ✓ Dedicated Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
