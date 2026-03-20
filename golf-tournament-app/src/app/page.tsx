'use client';

import CountdownTimer from '@/components/CountdownTimer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation Header */}
      <Navbar active="home" />

      {/* Hero Section */}
      <main className="w-full pb-20">
        <section
          className="relative w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/GolfImage.jpg')" }}
        >
          <div className="min-h-[60vh] flex items-center justify-center py-20">
            <div className="w-full px-6 flex justify-center">
              <div className="space-y-6 text-center max-w-3xl">
                <h1 className="hero-title text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                  Give-together Golf Tournament
                </h1>
                <div className="hero-copy space-y-3">
                  <p className="text-xl md:text-2xl font-semibold tracking-tight">
                    In Partnership with Canadian Blood Services
                  </p>
                  <div className="flex flex-row items-center gap-6 justify-center text-lg md:text-xl font-semibold tracking-tight">
                    <div className="flex items-center gap-2">
                      <img
                        src="/golfLogo.jpg"
                        alt="Cardinal Golf Club logo"
                        className="h-8 w-8 rounded-full bg-white/90 p-1 shadow"
                      />
                      <a
                        href="https://cardinalgolfcomplex.com/golf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Cardinal Golf Club
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>August 7, 2026</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:absolute md:bottom-6 md:right-6 w-full md:w-auto flex justify-center md:justify-end px-6 pb-6 md:p-0">
            <div className="flex flex-col items-center md:items-end gap-3 w-full max-w-xs">
              <button className="hero-title px-6 py-2.5 border-2 border-white/70 text-white rounded-lg font-semibold hover:bg-white/10 transition w-full">
                Explore Tournament
              </button>
              <CountdownTimer size="compact" className="w-full" />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          {/* Why This Tournament Matters Section */}
          <section className="mt-12 space-y-12">
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
            <a href="https://secure3.convio.net/cadbs/site/Donation2?mfc_pref=T&2901.donation=form1&df_id=2901" className="group">
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
                  Donate now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </a>

            {/* Community */}
            <a href="https://play.google.com/store/apps/details?id=ca.blood.giveblood&hl=en-US&pli=1" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 border border-blue-100 dark:border-blue-900/30 cursor-pointer h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Community Partners
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Partners for Life is a program by Canadian Blood Services that allows individuals and organizations to commit to giving blood regularly. Their &apos;Give Blood&apos; app makes it easy to track donations, schedule appointments, and help save lives in the community.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            </a>

            {/* Impact */}
            <a href="https://www.blood.ca/en/mystory" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 border border-purple-100 dark:border-purple-900/30 cursor-pointer h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Every blood donation helps save lives across all ages, from newborns and children to adults and seniors. Learn how your contribution makes a real difference through the inspiring stories of those whose lives have been saved.
                </p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition">
                  Learn More <span className="ml-2">&rarr;</span>
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Golf Tournament</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.givetogether.ca/" className="hover:text-white transition">About</a></li>
                <li><a href="/sponsors" className="hover:text-white transition">Become A Sponsor</a></li>
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
