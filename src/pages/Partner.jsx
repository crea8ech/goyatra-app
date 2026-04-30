import { Building2, CheckCircle2, Send } from "lucide-react";
import Toast from "../components/Toast";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { useToast } from "../hooks/useToast";

export default function Partner() {
  const { message, notify } = useToast();

  return (
    <section className="container-pad section-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
          <Building2 className="h-6 w-6" />
        </span>
        <h1 className="mt-5 text-4xl font-black text-ink sm:text-5xl">Partner with GoYatra</h1>
        <p className="mt-4 leading-7 text-neutral-600">
          Add your hotels, local experiences, transport services, or complete packages to the platform.
        </p>
        <div className="mt-6 grid gap-3">
          {["Verified partner profile", "Package management dashboard", "Customer lead simulation"].map((item) => (
            <p key={item} className="flex items-center gap-2 font-semibold text-neutral-700">
              <CheckCircle2 className="h-5 w-5 text-primary-700" />
              {item}
            </p>
          ))}
        </div>
      </div>
      <Card className="p-6">
        <div className="grid gap-4">
          <Input label="Business Name" placeholder="Your travel company" />
          <Input label="Contact Email" type="email" placeholder="partner@example.com" />
          <Input label="City" placeholder="Jaipur" />
          <Input label="Service Type" placeholder="Hotel, guide, transport, package" />
          <Button icon={Send} onClick={() => notify("Partner request submitted")}>Submit Request</Button>
        </div>
      </Card>
      <Toast message={message} />
    </section>
  );
}
