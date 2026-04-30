import { Search, CheckCircle, Backpack } from "lucide-react";
import waImage from "../assets/wa-testimonials.png";
import whatsapp from "../assets/whatsapp.png";

export default function StepsSection() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            {/* HEADING */}
            <h2 className="text-4xl font-bold mb-5 text-[#0B132B] leading-tight">
              Your Journey in{" "}
              <span className="relative inline-block">
                3 Simple Steps
                <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-300 -z-10"></span>
              </span>
            </h2>

            {/* STEPS */}
            <div className="mt-12 relative space-y-12">
              {/* LINE */}
              <div className="absolute left-4 top-2 bottom-2 border-l border-dashed border-gray-300"></div>

              {/* STEP 1 */}
              <div className="flex gap-6 relative">
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full z-10">
                  1
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-100 rounded-xl">
                      <Search size={18} />
                    </div>
                    <h3 className="font-semibold text-lg">Pick Your Vibe</h3>
                  </div>

                  <p className="text-gray-500 mt-2 text-sm max-w-md">
                    Choose your perfect destination and experience.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flex gap-6 relative">
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full z-10">
                  2
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-100 rounded-xl w-12 h-12 overflow-hidden">
                      <img
                        src={whatsapp}
                        alt="whatsapp"
                        className="w-full h-full object-cover rounded-xl scale-150"
                      />
                    </div>
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      Quick WhatsApp Connect
                      <span className="text-blue-500 text-sm">✔</span>
                    </h3>
                  </div>

                  <p className="text-gray-500 mt-2 text-sm max-w-md">
                    Instantly connect with our verified travel experts.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="flex gap-6 relative">
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full z-10">
                  3
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-100 rounded-xl">
                      <Backpack size={18} />
                    </div>
                    <h3 className="font-semibold text-lg">Pack Your Bags</h3>
                  </div>

                  <p className="text-gray-500 mt-2 text-sm max-w-md">
                    Get ready and enjoy your unforgettable journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* TITLE */}
            <h3 className="text-xl mt-[120px] text-center font-semibold text-[#0B132B]">
              WhatsApp Testimonials
            </h3>

            <p className="text-gray-500 text-center text-sm mt-1">
              Real people. Real trips. Real stories.
            </p>

            {/* IMAGE (YOUR ASSET) */}
            <div className="mt-5 flex justify-center">
              <img
                src={waImage}
                alt="WhatsApp Testimonials"
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* TRUST BADGES */}
            <div className="flex justify-between text-sm text-gray-600 mt-8">
              <span>✔ Verified Agents</span>
              <span>✔ Secure Chats</span>
              <span>✔ 10,000+ Happy Travelers</span>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-3 rounded-full font-semibold shadow-md">
                Join the Community →
              </button>

              <p className="text-gray-400 text-sm mt-3">
                No spam. Only real travel updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
