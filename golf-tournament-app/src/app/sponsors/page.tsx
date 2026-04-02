import Navbar from '@/components/Navbar';

export default function Sponsors() {
  return (
    <div
      className="min-h-screen bg-[var(--background)] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Newimage.jpg')",
        backgroundPosition: "center 72%",
      }}
    >
      {/* Navigation Header */}
      <Navbar active="sponsors" />

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <section className="mb-16">
          <div className="rounded-2xl bg-[#efe3c8] px-8 py-12 md:px-16 md:py-14 text-center shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#2f3b46]">
              Sponsorship Opportunities
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#1f2a35]">
              Become a Sponsor
            </h1>
            <p className="mt-6 text-lg md:text-xl italic text-[#3f4a54] leading-relaxed max-w-4xl mx-auto">
              Partner with the Give-Together Golf Tournament and help us create meaningful impact in our community. Sponsors play a vital role in supporting our mission while gaining valuable exposure and connecting with community leaders and golf enthusiasts.
            </p>
          </div>
        </section>

        {/* Sponsorship Packages */}
        <section className="mb-16">
          <div className="inline-flex items-center rounded-xl bg-white dark:bg-gray-800 px-5 py-3 shadow-lg mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Sponsorship Packages
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Premium Sponsor
              </h3>
              <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                $800–$1,500
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li>Top-level sponsorship providing maximum brand exposure</li>
                <li>Large logo on all event signage and materials</li>
                <li>Recognition during opening and closing ceremonies</li>
                <li>Banner placement at registration area</li>
                <li>Social media recognition</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Hole Sponsor
              </h3>
              <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                $300–$800
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li>Sponsor a tee box with branded signage</li>
                <li>Option to set up a table or tent at the hole</li>
                <li>Direct interaction with golfers during play</li>
                <li>Mention on event social media</li>
                <li>Recognition on event materials</li>
                <li>Engagement with participants</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                On-Course Activity Sponsor
              </h3>
              <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                $300–$600
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li>Support contests like Longest Drive, Closest to the Pin, or Hole-in-One</li>
                <li>Branding at contest holes</li>
                <li>Opportunity to present or sponsor a prize</li>
                <li>Recognition during awards announcements</li>
                <li>Mention on social media</li>
                <li>Interaction with participants</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Team Photo & Social Media Sponsor
              </h3>
              <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                $200–$300
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li>Logo featured on the official team photo backdrop</li>
                <li>Recognition on social media posts featuring photos</li>
                <li>Visibility during event activities</li>
                <li>Mention in awards or announcements</li>
                <li>Engagement with participants</li>
                <li>Brand exposure throughout the event</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Auction & Raffle Prize Sponsor
              </h3>
              <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                Donation-Based
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li>Contribute gift cards, merchandise, or experiences</li>
                <li>Recognition alongside donated items</li>
                <li>Announcement during prize draws</li>
                <li>Mention on social media</li>
                <li>Brand visibility at the event</li>
                <li>Engagement with participants</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Community Engagement Sponsor
              </h3>
              <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                $200–$300
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li>Support Kids Art Gallery and Lemonade Stand activities</li>
                <li>Signage at the community activity area</li>
                <li>Recognition on social media</li>
                <li>Mention during event announcements</li>
                <li>Engagement with families and participants</li>
                <li>Brand exposure throughout the event</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Start the Sponsorship Conversation
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
              Tell us the partnership you have in mind, and we will tailor the right package for you.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
              Email: Mark@givetogether.ca
            </p>
            <a
              href="mailto:Mark@givetogether.ca"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
            >
              Email Our Team
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
