import Link from 'next/link';

export default function Impact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation Header */}
      <header className="bg-white dark:bg-gray-950 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⛳</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Give-together Golf
            </h1>
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
              🌍 Impact
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Making Global Impact, One Tournament at a Time
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
            Give-together Golf Tournament is creating measurable, lasting impact across healthcare, education, and community development. Through strategic partnerships and dedicated commitment, we're transforming communities worldwide.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">85%</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Funds to Cause</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Direct allocation to impact programs
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">25+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Countries</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Global reach and partnerships
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">500+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">NGO Partners</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Collaborated organizations worldwide
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">1M+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lives Reached</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Direct and indirect beneficiaries
            </p>
          </div>
        </div>

        {/* Impact Areas */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Our Impact Areas
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🏥 Healthcare & Research
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Funding cutting-edge medical research, providing access to treatment, and supporting healthcare initiatives in underserved communities.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                ✓ 50+ research projects funded | ✓ 10K+ patients supported
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                📚 Education & Youth Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Establishing golf programs in schools, providing scholarships, and mentoring the next generation of leaders and changemakers.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                ✓ 500+ scholarships awarded | ✓ 100+ schools supported
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🌱 Environmental Stewardship
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Promoting sustainable golf practices, protecting natural habitats, and supporting environmental conservation worldwide.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                ✓ 10K+ acres protected | ✓ 50+ conservation projects
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🤲 Community Support & Relief
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Emergency relief, disaster assistance, and long-term community development programs in vulnerable regions.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                ✓ 20+ disaster relief efforts | ✓ 100K+ families supported
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Impact Stories That Inspire Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Medical Breakthrough in Sub-Saharan Africa
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our partnership funded a malaria research initiative that resulted in a new treatment now being used across 12 African countries, helping thousands of patients every month.
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300 font-semibold">
                "This program changed the course of treatment for our communities." — Dr. Amara, Tanzania
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Youth Golf Initiative in Urban Areas
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Give-together Golf built the first community golf program in an underserved neighborhood, creating pathways for 500+ youth to learn the game and earn scholarships to college.
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300 font-semibold">
                "Golf gave me hope and a future I never thought possible." — Marcus, Age 17
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Be Part of the Impact</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Your participation creates measurable change. Together, we're building a better world.
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Join the Movement
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2026 Give-together Golf Tournament. Creating Real Impact Worldwide.</p>
        </div>
      </footer>
    </div>
  );
}
