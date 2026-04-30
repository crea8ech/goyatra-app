export default function TripItem({ trip }) {
  return (
    <div className="flex items-center gap-5 p-4 rounded-xl border border-gray-200 bg-white">

      {/* IMAGE */}
      <div className="relative w-[160px] h-[100px] rounded-xl overflow-hidden">
        <img
          src={trip.image}
          className="w-full h-full object-cover"
        />

        {/* LIVE BADGE */}
        <span className="absolute top-2 left-2 bg-yellow-400 text-[10px] px-3 py-[3px] rounded-full font-semibold flex items-center gap-1">
          ● Live
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1">

        {/* TITLE */}
        <h3 className="font-semibold text-[15px] text-[#0B132B]">
          {trip.title}
        </h3>

        {/* LOCATION */}
        <p className="text-xs text-gray-500 mt-1">
          {trip.location}
        </p>

        {/* INFO */}
        <div className="flex gap-5 text-xs mt-2">
          <span className="text-yellow-500 font-medium">
            {trip.seats}
          </span>
          <span className="text-blue-500">
            {trip.join}
          </span>
        </div>

        {/* DATE */}
        <p className="text-xs text-gray-500 mt-2">
          {trip.date}
        </p>
      </div>

      {/* PRICE */}
      <div className="text-right">
        <div className="bg-gray-50 px-4 py-2 rounded-full">
          <p className="text-sm font-semibold text-[#0B132B]">
            ₹{trip.price}
          </p>
          <p className="text-[10px] text-gray-400">/ person</p>
        </div>
      </div>

    </div>
  );
}