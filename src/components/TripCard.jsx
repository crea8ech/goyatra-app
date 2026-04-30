import { Heart, MapPin, Calendar, Users } from "lucide-react";

export default function TripCard({ trip, highlight }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={trip.image}
          className="w-full h-56 object-cover"
        />

        {/* Trending Badge */}
        <span className="absolute top-4 left-4 bg-yellow-400 text-xs px-3 py-1 rounded-full font-medium">
          🔥 Trending
        </span>

        {/* Wishlist */}
        <Heart className="absolute top-4 right-4 text-white" />
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h2 className="text-xl font-semibold text-gray-800">
          {trip.title}
        </h2>

        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <MapPin size={14} className="text-blue-500" />
          {trip.location}
        </div>

        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          {trip.desc}
        </p>

        {/* BOTTOM */}
        <div className="flex justify-between items-end mt-5">

          {/* LEFT */}
          <div className="text-sm text-gray-500 space-y-1">
            <div className="flex items-center gap-1">
              <Calendar size={14} /> {trip.days}
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} /> Group Trip
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-2">

            <div className="text-right">
              <p className="text-xs text-gray-400">Starting from</p>
              <p className="text-yellow-500 font-bold text-lg">
                ₹{trip.price}
              </p>
            </div>

            {/* ONLY MIDDLE CARD */}
            {highlight && (
              <button className="bg-yellow-400 px-5 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm">
                Quick Book →
              </button>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}