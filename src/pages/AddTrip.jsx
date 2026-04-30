import { Save } from "lucide-react";
import Toast from "../components/Toast";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { useToast } from "../hooks/useToast";

export default function AddTrip() {
  const { message, notify } = useToast();

  return (
    <section className="container-pad section-pad">
      <h1 className="text-4xl font-black text-ink sm:text-5xl">Add a trip</h1>
      <p className="mt-3 max-w-2xl text-neutral-600">Create a mock package that can later be connected to an admin backend.</p>
      <Card className="mt-8 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Trip Title" placeholder="Udaipur Lake Weekend" />
          <Input label="Location" placeholder="Udaipur, Rajasthan" />
          <Input label="Duration" type="number" placeholder="3" />
          <Input label="Starting Price" type="number" placeholder="12999" />
          <Input label="Category" placeholder="Culture" />
          <Input label="Image URL" placeholder="https://..." />
        </div>
        <Button className="mt-6" icon={Save} onClick={() => notify("Trip draft saved")}>Save Trip</Button>
      </Card>
      <Toast message={message} />
    </section>
  );
}
