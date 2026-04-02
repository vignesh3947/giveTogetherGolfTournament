import Navbar from '@/components/Navbar';

export const dynamic = "force-dynamic";

export default function ExploreTournament() {
  const earlyBirdCutoffUtc = Date.UTC(2026, 5, 30, 4, 0, 0);
  const isEarlyBird = Date.now() < earlyBirdCutoffUtc;
  const teamPrice = isEarlyBird ? 900 : 1000;
  const teamLabel = isEarlyBird ? "Team of Four (Early Bird)" : "Team of Four";
  const teamNote = isEarlyBird
    ? "If booked before June 29, 2026."
    : "Early bird pricing ended June 29, 2026.";
  const registrationFormUrl = "https://forms.office.com/";

  return (
    <div
      className="min-h-screen bg-[var(--background)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Newimage.jpg')" }}
    >
      {/* Navigation Header */}
      <Navbar active="explore" />

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <section className="mb-16">
          <div className="rounded-2xl bg-[#efe3c8] px-8 py-12 md:px-16 md:py-14 text-center shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#2f3b46]">
              In partnership with Canadian Blood Services
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#1f2a35]">
              Give Together Golf Tournament
            </h1>
            <p className="mt-6 text-lg md:text-xl italic text-[#3f4a54] leading-relaxed max-w-4xl mx-auto">
              Every Shot Counts. Every Drop Matters
            </p>
          </div>
        </section>

        {/* Registration */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Registration
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Secure your spot today. Tee times fill fast.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Cost per Player: $250
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {teamLabel}: ${teamPrice}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {teamNote}
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Ready to play with purpose?
              </p>
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tournament Includables
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              This includes:
            </p>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400 leading-snug">
              <li>18 holes</li>
              <li>Tournament staging</li>
              <li>On-course benefits</li>
              <li>Scoring (following the round)</li>
              <li>Golf cart</li>
              <li>Lunch</li>
              <li>Shower & locker use</li>
              <li>Tournament swag</li>
              <li>Award ceremony</li>
            </ul>
          </div>
        </section>

        {/* Overview */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Event Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Give Together Golf brings the community together for a day on the course that fuels life-saving blood, plasma, and platelet donations across Canada.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Every registration strengthens donor awareness, community engagement, and lasting healthcare impact across our region.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Expect a full tournament experience with community partners, on-course moments, and shared purpose that keeps donors engaged long after the final putt.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About the Tournament
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              A student-led, purpose-driven tournament where sport meets community responsibility.
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 font-semibold">
              <div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">Location:</span>{" "}
                Cardinal Golf Club
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">Address:</span>{" "}
                2740 Davis Dr W, King, ON L7B 0G7
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">Date:</span>{" "}
                August 7, 2026
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">Check-in:</span>{" "}
                8:00 AM
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">Shotgun Start:</span>{" "}
                9:00 AM
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              For More Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Mark Buchner
            </p>
            <a
              href="mailto:Mark@givetogether.ca"
              className="text-gray-600 dark:text-gray-400"
            >
              Mark@givetogether.ca
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2026 Give Together Golf Tournament. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
