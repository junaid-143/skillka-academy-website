export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-support to-support text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog & Updates</h1>
          <p className="text-xl text-white/80">Chess tips, strategies, and academy news</p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-support text-center">
            <div className="text-7xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Coming Soon!</h2>
            <p className="text-gray-600 text-lg mb-6">
              We're working on bringing you quality chess content, including:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <span className="text-2xl">♟️</span>
                <div>
                  <p className="font-semibold text-gray-900">Opening Strategies</p>
                  <p className="text-sm text-gray-600">Master the first moves</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-semibold text-gray-900">Tactics & Puzzles</p>
                  <p className="text-sm text-gray-600">Sharpen your skills</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold text-gray-900">Student Success Stories</p>
                  <p className="text-sm text-gray-600">Inspiring achievements</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-semibold text-gray-900">Tournament Updates</p>
                  <p className="text-sm text-gray-600">Latest events & results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Stay Connected</h2>
          <p className="text-gray-600 text-lg mb-6">
            Follow us on social media for daily chess tips and updates
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg hover:scale-105 transition"
            >
              Contact Us
            </a>
            <a 
              href="/register"
              className="px-8 py-3 bg-accent hover:bg-accent-dark text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
