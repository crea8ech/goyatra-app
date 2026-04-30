import {
  ArrowRight,
  ShieldCheck,
  Users,
  Tag,
  Lock,
  Mountain,
  Globe,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-white">
      {/* CTA BANNER */}
      <div className="max-w-7xl mx-auto px-10">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-[#f7f9ff] to-[#eef2ff] p-10 flex items-center justify-between">
          {/* LEFT */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-[#0B132B]">
              Ready for your next adventure?
            </h2>

            <p className="text-gray-500 mt-3">
              Thousands of travelers. Countless stories. Your adventure starts
              now.
            </p>
          </div>

          {/* BUTTON */}
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md">
            Explore All Packages <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-12">
        {/* COLUMN 1 */}
        <div>
          <h3 className="text-2xl font-bold text-[#0B132B]">
            <span className="text-blue-500">Go</span>
            <span className="text-yellow-500">Yatra</span>
            <span className="text-orange-500">.</span>
          </h3>

          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Empowering the next generation of travelers with budget-friendly,
            verified adventures.
          </p>

          <div className="flex gap-4 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              className="w-6 h-6 cursor-pointer"
              alt="instagram"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
              className="w-6 h-6 cursor-pointer"
              alt="facebook"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              className="w-6 h-6 cursor-pointer"
              alt="github"
            />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-semibold text-[#0B132B]">Quick Links</h4>
          <div className="w-6 h-[2px] bg-yellow-400 mt-2 mb-4"></div>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between items-center">
              About Us <ArrowRight size={14} />
            </div>

            <div className="flex justify-between items-center">
              Success Stories <ArrowRight size={14} />
            </div>

            <div className="flex justify-between items-center">
              Become a Partner Agent <ArrowRight size={14} />
            </div>

            <div className="flex justify-between items-center">
              Privacy Policy <ArrowRight size={14} />
            </div>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="font-semibold text-[#0B132B]">Destinations</h4>
          <div className="w-6 h-[2px] bg-yellow-400 mt-2 mb-4"></div>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Mountain size={16} /> Himalayas
              </span>
              <ArrowRight size={14} />
            </div>

            <div className="flex justify-between items-center">
              Coastal Escapes <ArrowRight size={14} />
            </div>

            <div className="flex justify-between items-center">
              Adventure Treks <ArrowRight size={14} />
            </div>

            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Globe size={16} /> International Budget Trips
              </span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4 className="font-semibold text-[#0B132B]">Support</h4>
          <div className="w-6 h-[2px] bg-yellow-400 mt-2 mb-4"></div>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <HelpCircle size={16} /> Help Center
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} /> WhatsApp Support
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} /> Email Us
            </div>
          </div>

          {/* APP */}
          <div className="mt-6 border rounded-xl p-4">
            <p className="text-sm font-medium">GoYatra App</p>

            {/* Replace app store images manually */}
            <div className="flex gap-3 mt-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="h-8"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TRUST ROW */}
      <div className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-10 flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-500" />
            Verified Trips
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} className="text-blue-500" />
            10,000+ Happy Travelers
          </div>

          <div className="flex items-center gap-2">
            <Tag size={18} className="text-blue-500" />
            Best Price Guarantee
          </div>

          <div className="flex items-center gap-2">
            <Lock size={18} className="text-blue-500" />
            Secure Payments
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-400 pb-6">
        © 2026 <span className="text-yellow-500 font-medium">GoYatra</span>.
        Designed & Developed by Ashish & Umesh.
      </div>
    </div>
  );
}
