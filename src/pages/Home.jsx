import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, IndianRupee, Search, ShieldCheck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TripCard from "../components/TripCard";
import Toast from "../components/Toast";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import { trips } from "../data/trips";
import { useToast } from "../hooks/useToast";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const { message, notify } = useToast();
  const [selectedTrip, setSelectedTrip] = useState(null);

  const bookTrip = (trip) => {
    setSelectedTrip(trip);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
            alt="Mountain valley"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/76" />
        </div>
        <div className="container-pad grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Badge>India's smarter travel desk</Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Plan trips that feel easy from day one.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
              Discover curated getaways, compare transparent prices, and book routes built around real traveller comfort.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" icon={Search} onClick={() => navigate("/explore")}>
                Explore Trips
              </Button>
              <Button size="lg" variant="outline" icon={ArrowRight} onClick={() => navigate("/stories")}>
                Read Stories
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55 }}
            className="rounded-lg bg-white p-5 shadow-soft"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Destination" placeholder="Goa, Manali, Kerala" />
              <Input label="Travel Date" type="date" />
              <Input label="Budget" placeholder="Rs 10,000 - Rs 25,000" />
              <Input label="Travellers" type="number" min="1" placeholder="2" />
            </div>
            <Button className="mt-5 w-full" size="lg" icon={Search} onClick={() => navigate("/explore")}>
              Search Packages
            </Button>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                [Users, "50K+ travellers"],
                [IndianRupee, "Clear pricing"],
                [ShieldCheck, "Verified partners"],
              ].map(([Icon, text]) => (
                <div key={text} className="flex items-center gap-2 rounded-lg bg-neutral-50 p-3 text-sm font-semibold text-neutral-700">
                  <Icon className="h-4 w-4 text-primary-700" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge>Popular now</Badge>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Handpicked escapes</h2>
            </div>
            <Button variant="outline" onClick={() => navigate("/explore")}>View all</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.slice(0, 3).map((trip) => (
              <TripCard key={trip.id} trip={trip} onQuickBook={bookTrip} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad grid gap-6 md:grid-cols-3">
          {[
            ["Curated routes", "Each package balances sightseeing, rest, food, and transfers so the journey feels practical."],
            ["Local operators", "Mock partner profiles are ready for a backend later, with clean frontend boundaries now."],
            ["Responsive booking", "Every action routes, opens a modal, or confirms feedback so the prototype behaves like a real app."],
          ].map(([title, text]) => (
            <Card key={title} className="p-6">
              <CalendarCheck className="mb-4 h-8 w-8 text-primary-700" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <Modal open={Boolean(selectedTrip)} title="Confirm trip interest" onClose={() => setSelectedTrip(null)}>
        <p className="text-neutral-600">
          We saved your interest for {selectedTrip?.title}. A full backend can connect this action later.
        </p>
        <div className="mt-6 flex gap-3">
          <Button
            onClick={() => {
              notify("Booking interest saved");
              setSelectedTrip(null);
            }}
          >
            Confirm
          </Button>
          <Button variant="outline" onClick={() => setSelectedTrip(null)}>Cancel</Button>
        </div>
      </Modal>
      <Toast message={message} />
    </>
  );
}
