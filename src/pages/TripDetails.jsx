import { ArrowLeft, CalendarDays, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../components/Toast";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";
import { trips } from "../data/trips";
import { useToast } from "../hooks/useToast";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = trips.find((item) => item.id === id) || trips[0];
  const [open, setOpen] = useState(false);
  const { message, notify } = useToast();

  return (
    <>
      <section className="container-pad section-pad">
        <Button variant="ghost" icon={ArrowLeft} onClick={() => navigate(-1)}>Back</Button>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-lg shadow-soft">
            <img src={trip.image} alt={trip.title} className="h-[30rem] w-full object-cover" />
          </div>
          <div>
            <Badge>{trip.category}</Badge>
            <h1 className="mt-4 text-4xl font-black text-ink sm:text-5xl">{trip.title}</h1>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-neutral-600">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-primary-700" />{trip.location}</span>
              <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4 text-primary-700" />{trip.days} days</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-primary text-primary" />{trip.rating}</span>
            </div>
            <p className="mt-5 leading-7 text-neutral-600">{trip.description}</p>
            <div className="mt-6 rounded-lg bg-white p-5 shadow-card">
              <p className="text-sm font-semibold text-neutral-500">Starting from</p>
              <p className="text-3xl font-black text-ink">Rs {trip.price.toLocaleString("en-IN")}</p>
              <Button className="mt-5 w-full" size="lg" onClick={() => setOpen(true)}>Book this trip</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-6">
            <h2 className="text-2xl font-black">Included tags</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {trip.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-black">Itinerary preview</h2>
            <div className="mt-5 grid gap-3">
              {trip.itinerary.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-lg bg-neutral-50 p-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black">{index + 1}</span>
                  <p className="font-semibold text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <Modal open={open} title="Booking request" onClose={() => setOpen(false)}>
        <p className="text-neutral-600">Your request for {trip.title} will be stored once backend is connected.</p>
        <Button
          className="mt-6"
          onClick={() => {
            notify("Booking request simulated");
            setOpen(false);
          }}
        >
          Send Request
        </Button>
      </Modal>
      <Toast message={message} />
    </>
  );
}
