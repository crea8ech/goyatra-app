import { MapPin, Calendar, Search } from "lucide-react";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background */}
      <img src={hero} alt="hero" className="w-full h-full object-cover" />

      {/* Base Light Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* TOP FADE (for navbar clarity) */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/90 via-white/50 to-transparent z-10"></div>

      {/* BOTTOM FADE (for search + features) */}
      <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-white/95 via-white/60 to-transparent z-10"></div>

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full px-12 pt-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-1">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="h-[50px] md:h-[70px] object-contain"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <span>Explore ▼</span>
          <span>Group Trips</span>
          <span>Budget Deals</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-full border border-gray-400 text-gray-700">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-full bg-yellow-400 font-medium">
            Start Planning →
          </button>
        </div>
      </div>

      <div className="absolute left-14 top-1/3 transform -translate-y-1/4 z-30 max-w-2xl">
        <h1
          className="text-[70px] leading-[1.05] font-bold text-[#0B132B]"
          style={{
            textShadow: `
        0px 0px 20px rgba(255,255,255,0.9),
        0px 0px 40px rgba(255,255,255,0.6)
      `,
          }}
        >
          Travel <br />
          Without Limits<span className="text-yellow-400">.</span>
        </h1>

        <p
          className="mt-5 px-2 text-lg text-white-900 max-w-lg"
          style={{
            textShadow: `
        0px 0px 12px rgba(255,255,255,0.9),
        0px 0px 25px rgba(255,255,255,0.6)
      `,
          }}
        >
          Curated budget adventures for the next <br /> generation of explorers.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[85%] max-w-6xl z-30">
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex items-center justify-between gap-6">
          {/* Destination */}
          <div className="flex items-center gap-3 flex-1">
            <MapPin className="text-yellow-400" />
            <div>
              <p className="text-xs text-gray-500">DESTINATION</p>
              <p className="text-gray-800 font-medium">Where are you going?</p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200"></div>

          {/* Date */}
          <div className="flex items-center gap-3 flex-1">
            <Calendar className="text-yellow-400" />
            <div>
              <p className="text-xs text-gray-500">DATE</p>
              <p className="text-gray-800 font-medium">Add Dates</p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200"></div>

          {/* Budget */}
          <div className="flex flex-col flex-1">
            <p className="text-xs text-gray-500 mb-1">BUDGET (PER PERSON)</p>
            <p className="text-gray-800 font-medium mb-2">₹1,000 - ₹20,000+</p>
            <input type="range" className="w-full accent-yellow-400" />
          </div>

          {/* Button */}
          <button className="bg-yellow-400 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
            Explore Now <Search size={16} />
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[85%] max-w-6xl z-30">
        <div className=" px-14 mt-1 flex justify-between items-center text-sm text-gray-700">
          {/* FIRST */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
              <span className="text-yellow-400 text-lg">✔</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">
                Trusted by 50K+ Travelers
              </p>
              <p className="text-gray-500 text-xs">
                Real reviews. Real experiences.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-10 w-px bg-gray-500"></div>

          {/* SECOND */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
              <span className="text-yellow-400 text-lg">🏷️</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Best Price Guarantee</p>
              <p className="text-gray-500 text-xs">We match the best deals.</p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-10 w-px bg-gray-500"></div>

          {/* THIRD */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
              <span className="text-yellow-400 text-lg">🎧</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">24/7 Travel Support</p>
              <p className="text-gray-500 text-xs">
                We're here wherever you go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
