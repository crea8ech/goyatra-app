import { Plus, TicketCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { bookings } from "../data/trips";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <section className="container-pad section-pad">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge>Dashboard</Badge>
          <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">Your travel desk</h1>
        </div>
        <Button icon={Plus} onClick={() => navigate("/add-trip")}>Add Trip</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["3 active plans", "2 partner leads", "Rs 51,497 value"].map((stat) => (
          <Card key={stat} className="p-5">
            <TicketCheck className="mb-3 h-7 w-7 text-primary-700" />
            <p className="text-2xl font-black">{stat}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-8 overflow-hidden">
        <div className="grid gap-0">
          {bookings.map((booking) => (
            <div key={booking.id} className="grid gap-3 border-b border-neutral-100 p-5 last:border-b-0 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
              <p className="font-black">{booking.trip}</p>
              <p className="text-sm text-neutral-600">{booking.date}</p>
              <Badge className="w-fit">{booking.status}</Badge>
              <p className="font-black">{booking.amount}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
