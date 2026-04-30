import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import { stories } from "../data/trips";

export default function Stories() {
  return (
    <section className="container-pad section-pad">
      <Badge>Stories</Badge>
      <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">Traveller notes</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {stories.map((story) => (
          <Card key={story.name} className="overflow-hidden">
            <img src={story.image} alt={story.name} className="h-64 w-full object-cover" />
            <div className="p-5">
              <p className="leading-7 text-neutral-600">"{story.quote}"</p>
              <h2 className="mt-5 font-black">{story.name}</h2>
              <p className="text-sm text-neutral-500">{story.place}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
