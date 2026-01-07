import { FormEvent, useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email') || undefined,
      phone: form.get('phone'),
      message: form.get('message')
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setStatus('Message sent! We will get back to you.');
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong');
    }
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      content: 'Backside of Kottakkal Bus Stand,\nupstairs at Best India Digital Hub,\nMalappuram, Kerala',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '6238793828\n9847368798\n7994493828',
      gradient: 'from-accent to-support',
      multipleLinks: [
        { number: '6238793828', link: 'tel:+916238793828' },
        { number: '9847368798', link: 'tel:+919847368798' },
        { number: '7994493828', link: 'tel:+917994493828' }
      ]
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'info@skillkachess.com',
      link: 'mailto:info@skillkachess.com',
      gradient: 'from-support to-primary'
    },
    {
      icon: '🕐',
      title: 'Hours',
      content: 'Monday - Sunday\n6:00 AM - 8:00 PM',
      gradient: 'from-secondary to-accent'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-support via-accent to-primary">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-support/10 animate-pulse-slow" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-8xl text-white/10 animate-float">📞</div>
          <div className="absolute top-40 right-20 text-7xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>💬</div>
          <div className="absolute bottom-20 left-1/4 text-6xl text-secondary/30 animate-float" style={{ animationDelay: '2s' }}>📧</div>
          <div className="absolute bottom-32 right-1/3 text-5xl text-white/10 animate-float" style={{ animationDelay: '1.5s' }}>♔</div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-bounce-slow">
            <span className="text-3xl">👋</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">We're Here to Help</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Get in
            <span className="block text-white">
              Touch
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-9xl text-primary">📞</div>
          <div className="absolute bottom-20 left-20 text-9xl text-accent">📧</div>
        </div>

        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="group" style={{ animation: 'slideIn 0.6s ease-out forwards' }}>
              <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-support/20 hover:border-support shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-support" />
                
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary animate-pulse-slow">
                      <span className="text-3xl">✉️</span>
                    </div>
                    <h2 className="text-3xl font-black text-white">
                      Send us a Message
                    </h2>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="group/input">
                      <label className="block text-sm font-black mb-3 text-gray-800 uppercase tracking-wider">
                        Name *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        required
                        className="w-full border-2 border-primary/30 rounded-xl p-4 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300 font-medium"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="group/input">
                      <label className="block text-sm font-black mb-3 text-gray-800 uppercase tracking-wider">
                        Email
                      </label>
                      <input 
                        type="email"
                        name="email"
                        className="w-full border-2 border-accent/30 rounded-xl p-4 focus:border-accent focus:ring-4 focus:ring-accent/20 outline-none transition-all duration-300 font-medium"
                        placeholder="your@email.com (optional)"
                      />
                    </div>

                    <div className="group/input">
                      <label className="block text-sm font-black mb-3 text-gray-800 uppercase tracking-wider">
                        Phone *
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        required
                        className="w-full border-2 border-primary/30 rounded-xl p-4 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300 font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="group/input">
                      <label className="block text-sm font-black mb-3 text-gray-800 uppercase tracking-wider">
                        Message *
                      </label>
                      <textarea 
                        name="message"
                        required
                        className="w-full border-2 border-primary/30 rounded-xl p-4 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300 min-h-[140px] font-medium"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-gradient-to-r from-support via-accent to-support hover:from-accent hover:via-support hover:to-accent text-white font-black rounded-full shadow-2xl hover:shadow-support/50 hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-3"
                    >
                      <span>Send Message</span>
                      <span className="text-2xl">→</span>
                    </button>

                    {status && (
                      <div className={`p-5 rounded-2xl font-bold text-center animate-slideIn ${
                        status.includes('sent') 
                          ? 'bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 text-green-700' 
                          : 'bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-500 text-red-700'
                      }`}>
                        <span className="text-3xl mr-2">{status.includes('sent') ? '✅' : '❌'}</span>
                        {status}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8" style={{ animation: 'slideIn 0.6s ease-out forwards', animationDelay: '0.2s' }}>
              {/* Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                    style={{ 
                      animation: 'slideIn 0.6s ease-out forwards',
                      animationDelay: `${0.3 + i * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    
                    <div className="relative p-6 bg-white border-2 border-black/5 group-hover:border-support/30 rounded-2xl transition-all">
                      <div className="flex items-start gap-5">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-3xl">{info.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-black text-black mb-2 text-lg uppercase tracking-wider">{info.title}</p>
                          {(info as any).multipleLinks ? (
                            <div className="space-y-2">
                              {(info as any).multipleLinks.map((phone: any, idx: number) => (
                                <a 
                                  key={idx}
                                  href={phone.link} 
                                  className="block text-primary font-bold text-xl hover:text-secondary transition-all"
                                >
                                  {phone.number}
                                </a>
                              ))}
                            </div>
                          ) : info.link ? (
                            <a 
                              href={info.link} 
                              className="text-primary font-bold text-xl hover:text-secondary transition-all"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-black/80 font-semibold whitespace-pre-line leading-relaxed">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-support via-accent to-primary p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8">
                  <h3 className="text-2xl font-black text-white mb-6">
                    🚀 Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <a 
                      href="/register" 
                      className="group/link block bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 rounded-xl p-5 transition-all duration-300 border-2 border-primary/30 hover:border-primary hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-4xl group-hover/link:scale-125 transition-transform">📝</div>
                        <div className="flex-1">
                          <p className="font-black text-black text-lg">Register Now</p>
                          <p className="text-sm text-black/70 font-semibold">Start your chess journey</p>
                        </div>
                        <span className="text-2xl text-primary group-hover/link:translate-x-2 transition-transform">→</span>
                      </div>
                    </a>
                    <a 
                      href="/programs" 
                      className="group/link block bg-gradient-to-r from-accent/10 to-support/10 hover:from-accent/20 hover:to-support/20 rounded-xl p-5 transition-all duration-300 border-2 border-accent/30 hover:border-accent hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-4xl group-hover/link:scale-125 transition-transform">🏫</div>
                        <div className="flex-1">
                          <p className="font-black text-black text-lg">View Programs</p>
                          <p className="text-sm text-black/70 font-semibold">Explore our courses</p>
                        </div>
                        <span className="text-2xl text-accent group-hover/link:translate-x-2 transition-transform">→</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
