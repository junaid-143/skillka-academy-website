import { FormEvent, useState } from 'react';
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

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-support to-support text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4 animate-float">♔</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Register Now</h1>
          <p className="text-xl text-white/80">Start your chess journey with Skillka Academy</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card-hover bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Student Info */}
              <div className="border-b-2 border-blue-100 pb-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  Student Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Student Name *</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      className="w-full border-2 border-blue-200 rounded-lg p-3 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Age *</label>
                    <input 
                      type="number"
                      name="age"
                      required
                      min="4"
                      className="w-full border-2 border-blue-200 rounded-lg p-3 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                      placeholder="Age in years"
                    />
                  </div>
                </div>
              </div>

              {/* Chess Experience */}
              <div className="border-b-2 border-blue-100 pb-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                  Chess Experience
                </h2>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Current Level *</label>
                  <input 
                    type="text"
                    name="chessLevel"
                    required
                    className="w-full border-2 border-blue-200 rounded-lg p-3 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    placeholder="e.g. Beginner, Intermediate, Advanced"
                  />
                </div>
              </div>

              {/* Batch Selection */}
              <div className="border-b-2 border-blue-100 pb-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                  Batch Selection
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Preferred Batch *</label>
                    <select 
                      name="batch" 
                      required
                      className="w-full border-2 border-blue-200 rounded-lg p-3 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    >
                      <option value="">Select a batch</option>
                      <option value="Offline Sunday">📅 Offline Sunday</option>
                      <option value="Evening Batch">🌤️ Evening Batch</option>
                      <option value="Online">💻 Online</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Available Time *</label>
                    <input 
                      type="text"
                      name="availableTime"
                      required
                      className="w-full border-2 border-blue-200 rounded-lg p-3 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                      placeholder="e.g. Sunday Morning, Weekday Evenings"
                    />
                  </div>
                </div>
              </div>

              {/* Club Membership */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-accent rounded-xl p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="club"
                    className="w-5 h-5 mt-1 accent-blue-600"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg mb-1">⭐ Skillka Chess Club Member?</p>
                    <p className="text-gray-700 text-sm">
                      Access to exclusive tournaments, special workshops, and advanced training sessions.
                    </p>
                    <p className="text-accent font-bold mt-2">₹500/month</p>
                  </div>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-lg hover:scale-[1.02] transition"
              >
                Complete Registration 🎉
              </button>

              {status && (
                <div className={`p-4 rounded-xl font-medium text-center ${
                  status.includes('successful') 
                    ? 'bg-green-50 border-2 border-green-500 text-green-700' 
                    : 'bg-red-50 border-2 border-red-500 text-red-700'
                }`}>
                  {status.includes('successful') ? '✅' : '❌'} {status}
                </div>
              )}
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4 shadow border-2 border-blue-100 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold text-gray-900">Quick Process</p>
              <p className="text-xs text-gray-600 mt-1">Get started in minutes</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow border-2 border-blue-100 text-center">
              <div className="text-3xl mb-2">🎓</div>
              <p className="font-semibold text-gray-900">Expert Coaching</p>
              <p className="text-xs text-gray-600 mt-1">FIDE-rated trainers</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow border-2 border-blue-100 text-center">
              <div className="text-3xl mb-2">💯</div>
              <p className="font-semibold text-gray-900">Proven Results</p>
              <p className="text-xs text-gray-600 mt-1">50+ champions trained</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
