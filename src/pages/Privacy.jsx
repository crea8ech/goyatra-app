import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

const sections = [
  ["Mock data only", "This frontend currently uses static sample data and does not send personal information to a backend."],
  ["Future accounts", "When authentication is connected, user profile and booking information should be stored securely with clear consent."],
  ["Partner data", "Supplier details should be reviewed before publishing and editable through protected dashboard routes."],
  ["Contact", "Privacy questions can be routed to a support workflow when the backend is added."],
];

export default function Privacy() {
  return (
    <section className="container-pad section-pad">
      <Badge>Privacy</Badge>
      <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">Privacy policy</h1>
      <div className="mt-8 grid gap-4">
        {sections.map(([title, text]) => (
          <Card key={title} className="p-6">
            <h2 className="text-xl font-black">{title}</h2>
            <p className="mt-2 leading-7 text-neutral-600">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
