import Navbar from '@/components/Navbar';

export default function SaveLives() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation Header */}
      <Navbar active="home" />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-semibold">
              ðŸ¥ Save Lives
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Every Shot Saves Lives
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
            Our golf tournament is more than just a gameâ€”it's a mission to make a real difference in people's lives. Through every registration, every donation, and every round played, we're funding critical medical research and providing access to life-saving treatments for those in need.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-3">$500K+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Raised</div>
            <p className="text-gray-600 dark:text-gray-400">
              Funds directed to medical research and treatment programs
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-3">10K+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lives Impacted</div>
            <p className="text-gray-600 dark:text-gray-400">
              Individuals receiving medical support and treatment
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-3">50+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Research Projects</div>
            <p className="text-gray-600 dark:text-gray-400">
              Supported innovative medical breakthroughs
            </p>
          </div>
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            How Your Participation Saves Lives
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Registration Fees
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                100% of registration fees go directly to life-saving medical initiatives. Every golfer who joins is directly contributing to breakthrough research.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Sponsorships & Donations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Corporate partners and individual donors support our mission. Together, we're funding cutting-edge treatments and patient support programs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Community Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                By participating, you're raising awareness and creating momentum for medical innovation. Your presence matters and inspires others to make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-700 dark:to-pink-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Be Part of Something Bigger</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join Give-together Golf Tournament and help us save lives. Every swing counts.
          </p>
          <button className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Register Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2026 Give-together Golf Tournament. Every Shot Saves Lives.</p>
        </div>
      </footer>
    </div>
  );
}

