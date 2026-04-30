import {
  Tag,
  ShieldCheck,
  Calendar,
  MapPin,
  Phone,
  Lock,
  Users,
  Star,
  Headphones,
} from "lucide-react";

export default function AssuranceSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-12">
        {/* MAIN GRID */}
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          {/* LEFT */}
          <div className="max-w-[640px]">
            {/* BADGE */}
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
              GOYATRA ASSURANCE
            </div>

            {/* HEADING */}
            <h2 className="mt-6 text-[56px] leading-[1.1] font-extrabold text-[#0B132B]">
              Travel with 100% <br />
              Peace of Mind
            </h2>

            {/* UNDERLINE (FIXED - NO YELLOW) */}
            <div className="w-44 h-[6px] bg-gray-200 rounded-full mt-4"></div>

            {/* SUBTEXT */}
            <p className="mt-6 text-[16px] text-gray-600">
              <span className="text-blue-600 font-semibold">
                Three Pillars of Trust
              </span>{" "}
              that make every journey worry-free.
            </p>

            {/* CARDS */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                {
                  no: "01",
                  icon: <Tag className="text-blue-600 w-7 h-7" />,
                  title: "Best Price Guarantee",
                  desc: "Found it cheaper? We will match it.",
                },
                {
                  no: "02",
                  icon: <ShieldCheck className="text-blue-600 w-7 h-7" />,
                  title: "Verified Agents & Stays",
                  desc: "Every partner is personally vetted by the GoYatra team.",
                },
                {
                  no: "03",
                  icon: <Calendar className="text-blue-600 w-7 h-7" />,
                  title: "Easy Rescheduling",
                  desc: "Change your dates up to 7 days before the trip at no extra cost.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center h-[250px] relative"
                >
                  {/* NUMBER */}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
                    {item.no}
                  </div>

                  {/* ICON */}
                  <div className="w-20 h-20 mx-auto flex items-center justify-center bg-blue-50 rounded-full mb-5">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h4 className="font-semibold text-[#0B132B] text-[15px]">
                    {item.title}
                  </h4>

                  {/* LINE */}
                  <div className="w-10 h-[2px] bg-blue-500 mx-auto my-2"></div>

                  {/* DESC */}
                  <p className="text-xs text-gray-500 leading-relaxed px-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="mt-10">
            <div className="bg-white rounded-2xl shadow-md p-6 py-20 text-center border border-gray-100 min-h-[510px] flex flex-col justify-between">
              {/* TOP CONTENT */}
              <div className="text-center flex flex-col items-center">
                {/* ICON */}
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-blue-600 w-8 h-8" />
                </div>

                {/* TITLE */}
                <h3 className="text-[20px] font-semibold text-[#0B132B]">
                  Get a Custom Itinerary
                </h3>

                <p className="text-gray-500 text-sm mt-2 max-w-[320px]">
                  Tell us your vibe, budget & dates. We'll plan the perfect trip
                  for you!
                </p>

                {/* INPUT */}
                <div className="mt-5 flex items-center gap-3 border border-gray-200 rounded-full px-5 py-3 w-full max-w-[420px]">
                  <Phone className="text-green-500" />
                  <input
                    type="text"
                    placeholder="Enter your WhatsApp Number"
                    className="outline-none w-full text-sm bg-transparent"
                  />
                </div>
              </div>

              {/* BOTTOM CONTENT */}
              <div>
                {/* CTA (YELLOW FIXED) */}
                <button className="w-[420px] mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 py-3 rounded-full font-semibold text-[#0B132B] shadow-sm">
                  Get Free Plan →
                </button>

                {/* AVATARS */}
                {/* Replace avatar images manually later */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      className="w-8 h-8 rounded-full border"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      className="w-8 h-8 rounded-full border"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      className="w-8 h-8 rounded-full border"
                    />
                  </div>

                  <p className="text-sm text-gray-600">
                    10,000+ travelers planned with us this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-6 flex items-center justify-between">
          {/* LEFT */}
          <div>
            <p className="font-semibold text-[#0B132B]">Excellent</p>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-green-500 text-lg">★★★★★</span>
              <span className="font-semibold text-[#0B132B]">4.8/5</span>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              Based on 2,500+ reviews
            </p>
          </div>

          {/* FEATURES */}
          <div className="flex gap-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Lock size={18} className="text-blue-500" />
              <span>100% Secure Payments</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} className="text-blue-500" />
              <span>10,000+ Happy Travelers</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={18} className="text-blue-500" />
              <span>Rated 4.8/5</span>
            </div>

            <div className="flex items-center gap-2">
              <Headphones size={18} className="text-blue-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
