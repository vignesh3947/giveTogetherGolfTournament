import Navbar from '@/components/Navbar';

export default function Sponsor() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation Header */}
      <Navbar active="sponsors" />

      <main className="max-w-7xl mx-auto px-6 py-20">

        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold">
              🤝 Sponsorship
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Become a Sponsor
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
            Partner with the Give-Together Golf Tournament and help us create
            meaningful impact in our community. Sponsors play a vital role in
            supporting our mission while gaining valuable exposure and
            connecting with community leaders and golf enthusiasts.
          </p>

          {/* Form Button */}
          <a
            href="YOUR_FORM_LINK"
            target="_blank"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Apply to Become a Sponsor
          </a>
        </div>

        {/* Why Sponsor Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Why Sponsor Our Event?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Brand Exposure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Showcase your brand to hundreds of golfers, community leaders,
                and event attendees.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Community Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Help support charitable initiatives and programs that strengthen
                our community.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Networking Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with local businesses, community members, and leaders
                during the tournament.
              </p>
            </div>

          </div>
        </section>

        {/* Sponsorship Gallery */}
        <section className="mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Past Sponsors & Event Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="/sponsor1.jpg"
              alt="Sponsor event"
              className="rounded-xl shadow-lg object-cover w-full h-64"
            />

            <img
              src="/sponsor2.jpg"
              alt="Golf tournament sponsors"
              className="rounded-xl shadow-lg object-cover w-full h-64"
            />

            <img
              src="/sponsor3.jpg"
              alt="Sponsor branding"
              className="rounded-xl shadow-lg object-cover w-full h-64"
            />

          </div>

        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 rounded-2xl p-12 text-center text-white shadow-xl">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Sponsor the Event?
          </h2>

          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Fill out the sponsorship form to join us in making this tournament
            an unforgettable experience while supporting our community.
          </p>

          <a
            href="YOUR_FORM_LINK"
            target="_blank"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Become a Sponsor
          </a>

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>
            &copy; 2026 Give-Together Golf Tournament. Supporting Communities
            Together.
          </p>
        </div>
      </footer>
    </div>
  );
}
