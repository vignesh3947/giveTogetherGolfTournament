import Link from 'next/link';

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
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
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              👥 Community
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Building Stronger Communities Together
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
            Golf has always been about camaraderie, connection, and shared passion. Give-together Golf Tournament brings together people from all walks of life, united by a common purpose—to build stronger communities and support one another.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">5K+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Active Members</div>
            <p className="text-gray-600 dark:text-gray-400">
              Golfers, volunteers, and supporters from diverse backgrounds
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">50+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Local Chapters</div>
            <p className="text-gray-600 dark:text-gray-400">
              Communities organized nationwide with local initiatives
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">100%</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Engagement</div>
            <p className="text-gray-600 dark:text-gray-400">
              Connected members supporting shared community values
            </p>
          </div>
        </div>

        {/* Community Pillars */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            What Makes Our Community Special
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🤝 Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We work together across clubs, organizations, and regions. Our strength comes from unity and shared commitment to making a difference.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🎯 Shared Purpose
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every member is driven by the same mission: to use golf as a platform for positive change and community support.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🌟 Inclusive & Welcoming
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Regardless of skill level, background, or location, everyone is welcome. We celebrate diversity and foster belonging.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                📱 Year-Round Engagement
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Beyond tournaments, we organize local events, workshops, and gatherings to keep our community connected and growing.
              </p>
            </div>
          </div>
        </section>

        {/* Member Spotlight */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Our Community Members
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Smith', role: 'Tournament Organizer', bio: 'Leading local initiatives in Dallas' },
              { name: 'Sarah Johnson', role: 'Volunteer Coordinator', bio: 'Building connections nationwide' },
              { name: 'Mike Chen', role: 'Community Ambassador', bio: 'Growing the movement in Asia-Pacific' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with like-minded golfers and community leaders. Together, we're stronger.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Become a Member
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2026 Give-together Golf Tournament. Building Stronger Communities.</p>
        </div>
      </footer>
    </div>
  );
}
