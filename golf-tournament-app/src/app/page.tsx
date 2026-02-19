'use client';

import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation Header */}
      <header className="bg-white dark:bg-gray-950 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⛳</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Give-together Golf
            </h1>
          </div>
          <div className="flex gap-6">
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-green-600 dark:hover:text-green-400 transition">
              Tournament
            </button>
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-green-600 dark:hover:text-green-400 transition">
              About Us
            </button>
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-green-600 dark:hover:text-green-400 transition">
              Contact Us
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
              Sponsors
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-center">
          <div className="space-y-6 text-center max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Give-together Golf Tournament
            </h1>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="font-semibold text-lg">In Partnership with Canadian Blood Services</p>
              <div className="flex flex-row items-center gap-6 justify-center text-md">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Cardinal Golf Club</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>August 7, 2026</span>
                </div>
              </div>
            </div>
            
            <CountdownTimer />
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button className="px-8 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-gray-800 transition w-full sm:w-auto">
                Explore Tournaments
              </button>
            </div>
          </div>
        </div>

        {/* Why This Tournament Matters Section */}
        <section className="mt-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Why This Tournament Matters
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed italic">
              This tournament exists to convert awareness into action - turning community engagement into real blood and plasma donations that directly save lives. In partnership with Canadian Blood Services, we are building a platform where sport, sponsorship, and social responsibility create measurable healthcare impact.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto italic">
              Give-together Golf is built on three fundamental pillars. Click to learn more about each one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Save Lives */}
            <a href="" className="group">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 border border-red-100 dark:border-red-900/30 cursor-pointer h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <span className="text-3xl">🏥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Save Lives
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Every dollar raised funds life-saving medical research and treatment programs. Together, we're making a real difference in healthcare worldwide.
                </p>
                <div className="flex items-center text-red-600 dark:text-red-400 font-semibold group-hover:translate-x-2 transition">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            </a>

            {/* Community */}
            <a href="" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 border border-blue-100 dark:border-blue-900/30 cursor-pointer h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Community
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Build connections with like-minded individuals from around the world. Our community is united by passion, purpose, and the power to create change together.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            </a>

            {/* Impact */}
            <a href="" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 border border-purple-100 dark:border-purple-900/30 cursor-pointer h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  See measurable, lasting change across education, environment, and community development. Our impact reaches millions worldwide through strategic initiatives.
                </p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Canada Blood Services Section */}
        <section className="mt-24">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-xl">
                  <span className="text-4xl">🩸</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Canada Blood Services
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Canada Blood Services is a national, not-for-profit organization that operates under a federal license. We're proud to partner with them to support blood donation initiatives and save lives through our tournament fundraising efforts. Every dollar raised helps ensure a safe and reliable blood supply for Canadians in need.
                </p>
                <a
                  href="https://www.blood.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Visit Canada Blood Services
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Give-together Golf Tournament. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
