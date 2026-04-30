import TripItem from "./TripItem";

export default function GroupTripsSection() {

  const trips = [
    {
      title: "Kasol Music Festival 🎸",
      location: "Kasol, Himachal Pradesh",
      seats: "12 Seats Left",
      join: "Join 40+ Students",
      date: "24 May – 27 May",
      price: "4,499",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      title: "Goa Beach Party 🌴",
      location: "North Goa, Goa",
      seats: "12 Seats Left",
      join: "Join 60+ Students",
      date: "30 May – 02 Jun",
      price: "3,499",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      title: "Manali Backpackers 🏔",
      location: "Manali, Himachal Pradesh",
      seats: "15 Seats Left",
      join: "Join 30+ Students",
      date: "06 Jun – 09 Jun",
      price: "4,999",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
    }
  ];

  return (
    <div className="w-full bg-white relative">

      {/* DOT BACKGROUND (CRITICAL FOR MATCH) */}
      <div className="absolute right-0 top-0 w-[40%] h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:12px_12px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-10 relative z-10">

        <div className="grid grid-cols-[65%_35%] gap-12">

          {/* LEFT */}
          <div>

            {/* LABEL */}
            <p className="text-yellow-500 text-[15px] text-xs font-semibold mb-3 tracking-wide">
              TRAVEL IS BETTER TOGETHER
            </p>

            {/* HEADING */}
            <h2 className="text-[40px] font-bold text-[#0B132B] leading-tight">
              Groups.{" "}
              <span className="text-yellow-400">Good Vibes.</span>{" "}
              Great Prices.
            </h2>

            {/* SUBTEXT */}
            <p className="text-gray-500 mt-3">
              Join a batch or create your own trip with amazing people!
            </p>

            {/* CARD */}
            <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold text-[#0B132B]">
                    Join a Batch
                  </h3>
                  <p className="text-xs text-gray-500">
                    Upcoming Group Trips
                  </p>
                </div>

                <button className="text-sm border px-4 py-1 rounded-full text-gray-600">
                  View All Trips →
                </button>
              </div>

              {/* LIST */}
              <div className="space-y-4">
                {trips.map((trip, i) => (
                  <TripItem key={i} trip={trip} />
                ))}
              </div>
            </div>

            {/* BOTTOM FEATURES */}
            <div className="flex justify-between mt-10 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <span>👥</span>
                <div>
                  <p className="font-medium">100+ Group Trips</p>
                  <p className="text-xs text-gray-400">Every Month</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span>🛡</span>
                <div>
                  <p className="font-medium">Safe & Verified</p>
                  <p className="text-xs text-gray-400">Travel Community</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span>⭐</span>
                <div>
                  <p className="font-medium">4.8/5 Rating</p>
                  <p className="text-xs text-gray-400">From 10K+ Students</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span>❤️</span>
                <div>
                  <p className="font-medium">Make Friends</p>
                  <p className="text-xs text-gray-400">For Life</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-white mt-[146px] rounded-2xl shadow-sm border border-gray-200 p-6">

              {/* HEADER */}
              <h3 className="font-semibold text-lg text-[#0B132B]">
                💬 Talk to an Expert
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Real People. Real Help. Real Fast.
              </p>

              {/* IMAGE */}
              <div className="mt-5 relative rounded-xl overflow-hidden">

                {/* Replace this image manually */}
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                  className="w-full h-[260px] object-cover"
                />

                <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  Verified
                </span>

                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-semibold">Umesh Sharma</p>
                  <p className="text-xs">GoYatra Trip Expert</p>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-5 bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600 text-sm">
                  “Confused about the budget?”
                </p>
                <p className="text-yellow-500 font-semibold">
                  Chat with Umesh now!
                </p>
              </div>

              {/* CTA */}
              <button className="w-full mt-5 bg-gradient-to-r from-yellow-400 to-yellow-500 py-3 rounded-full font-semibold">
                Start WhatsApp Chat →
              </button>

              {/* FOOT */}
              <div className="flex justify-between text-xs text-gray-500 mt-6">
                <span>✔ Verified Expert</span>
                <span>⚡ Instant Response</span>
                <span>🔒 100% Safe</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}