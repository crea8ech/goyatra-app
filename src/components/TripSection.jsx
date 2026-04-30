import TripCard from "./TripCard";
import { SlidersHorizontal } from "lucide-react";

const trips = [
  {
    title: "Kasol & Kheerganga",
    location: "Himachal Pradesh",
    desc: "Escape to the mountains and enjoy rivers, treks & peaceful vibes.",
    days: "3 Nights / 4 Days",
    price: "4,999",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Tosh Valley Trek",
    location: "Himachal Pradesh",
    desc: "A perfect offbeat trek for thrill seekers and nature lovers.",
    days: "4 Nights / 5 Days",
    price: "5,499",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
  },
  {
    title: "Andaman Escape",
    location: "Andaman & Nicobar",
    desc: "Crystal clear waters, sandy beaches and unforgettable sunsets.",
    days: "5 Nights / 6 Days",
    price: "14,999",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

export default function TripSection() {
  return (
    <div className="px-12 py-16 bg-white">

      {/* FILTER BAR */}
      <div className="flex items-center gap-4 overflow-x-auto pb-6">

        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md">
          <SlidersHorizontal />
        </div>

        {[
          "All Trips 24",
          "Student Specials 8",
          "Weekend Trips 6",
          "Adventure 10",
          "Beach Escapes 5",
          "Family Trips 7",
        ].map((item, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap shadow-sm ${
              i === 1
                ? "border border-yellow-400 bg-yellow-50 text-yellow-600"
                : "bg-white text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {trips.map((trip, i) => (
          <TripCard
            key={i}
            trip={trip}
            highlight={true}
          />
        ))}

      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 rounded-full bg-white shadow-md text-gray-700">
          View All Trips →
        </button>
      </div>

    </div>
  );
}