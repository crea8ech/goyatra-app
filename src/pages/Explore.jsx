import { Filter } from "lucide-react";
import { useMemo, useState } from "react";
import TripCard from "../components/TripCard";
import Toast from "../components/Toast";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import { trips } from "../data/trips";
import { useToast } from "../hooks/useToast";

const categories = ["All", "Culture", "Beach", "Adventure", "Nature", "Road Trip"];

export default function Explore() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedTrip, setSelectedTrip] = useState(null);
  const { message, notify } = useToast();

  const filteredTrips = useMemo(
    () =>
      trips.filter((trip) => {
        const matchesQuery = `${trip.title} ${trip.location}`.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === "All" || trip.category === category;
        return matchesQuery && matchesCategory;
      }),
    [category, query],
  );

  return (
    <>
      <section className="container-pad section-pad">
        <div className="mb-8">
          <Badge>Explore</Badge>
          <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">Find your next trip</h1>
          <p className="mt-3 max-w-2xl text-neutral-600">Search mock packages by destination or browse by travel mood.</p>
        </div>

        <div className="mb-8 rounded-lg bg-white p-4 shadow-card">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search destinations" />
            <Button icon={Filter} onClick={() => notify("Filters applied")}>Apply Filters</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item ? "bg-primary text-ink" : "bg-neutral-100 text-neutral-600 hover:bg-primary-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} onQuickBook={setSelectedTrip} />
          ))}
        </div>
      </section>

      <Modal open={Boolean(selectedTrip)} title="Quick book" onClose={() => setSelectedTrip(null)}>
        <p className="text-neutral-600">Start booking for {selectedTrip?.title}. This frontend simulates the action for now.</p>
        <Button
          className="mt-6"
          onClick={() => {
            notify("Trip added to dashboard");
            setSelectedTrip(null);
          }}
        >
          Add to Dashboard
        </Button>
      </Modal>
      <Toast message={message} />
    </>
  );
}
