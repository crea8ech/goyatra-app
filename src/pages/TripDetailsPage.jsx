import { useParams } from "react-router-dom";
import { trips } from "../data/trips";

export default function TripDetailsPage() {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === parseInt(id));

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{trip.title}</h1>
      <img src={trip.image} className="w-full h-80 object-cover mt-4" />

      <p className="mt-4">{trip.location}</p>
      <p>{trip.days}</p>
      <p className="text-xl font-bold">₹{trip.price}</p>

      <form className="mt-6 flex flex-col gap-3">
        <input placeholder="Name" className="border p-2" />
        <input placeholder="Phone" className="border p-2" />
        <input placeholder="Email" className="border p-2" />

        <button className="bg-yellow-400 p-2">
          Book Now
        </button>
      </form>
    </div>
  );
}