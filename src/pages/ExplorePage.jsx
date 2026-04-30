import { useMemo, useState } from "react";
import { trips } from "../data/trips";
import { formatCurrency } from "../utils/formatters";

const themes = ["Adventure", "Beach", "Culture", "Nature", "Road Trip"];

function navigateTo(href) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ExplorePage() {
  const [budget, setBudget] = useState(36000);
  const [duration, setDuration] = useState("all");
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recommended");

  const filteredTrips = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const results = trips.filter((trip) => {
      const text = `${trip.title} ${trip.location} ${trip.category} ${trip.tags.join(" ")}`.toLowerCase();
      const durationMatch =
        duration === "all" ||
        (duration === "short" && trip.days <= 3) ||
        (duration === "medium" && trip.days >= 4 && trip.days <= 5) ||
        (duration === "long" && trip.days >= 6);

      return (
        trip.price <= budget &&
        durationMatch &&
        (selectedThemes.length === 0 || selectedThemes.includes(trip.category)) &&
        text.includes(normalizedQuery)
      );
    });

    return [...results].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "duration") return a.days - b.days;
      return b.rating - a.rating;
    });
  }, [budget, duration, query, selectedThemes, sort]);

  const toggleTheme = (theme) => {
    setSelectedThemes((current) =>
      current.includes(theme) ? current.filter((item) => item !== theme) : [...current, theme]
    );
  };

  const trendingTrips = [...trips].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-sky-700">Explore trips</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-black tracking-normal text-slate-950 md:text-5xl">
              Search curated trips by budget, duration, and theme.
            </h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            Local filters update instantly against mock GoYatra packages, with dedicated detail pages for every trip.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_280px]">
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-slate-950">Filters</h2>
              <button
                type="button"
                onClick={() => {
                  setBudget(36000);
                  setDuration("all");
                  setSelectedThemes([]);
                }}
                className="text-sm font-bold text-sky-700"
              >
                Reset
              </button>
            </div>

            <div className="mt-6">
              <label htmlFor="budget" className="text-sm font-bold text-slate-700">
                Budget up to {formatCurrency(budget)}
              </label>
              <input
                id="budget"
                type="range"
                min="8000"
                max="36000"
                step="500"
                value={budget}
                onChange={(event) => setBudget(Number(event.target.value))}
                className="mt-4 w-full accent-sky-700"
              />
              <div className="mt-2 flex justify-between text-xs font-semibold text-slate-400">
                <span>Rs 8k</span>
                <span>Rs 36k</span>
              </div>
            </div>

            <div className="mt-7">
              <p className="text-sm font-bold text-slate-700">Duration</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  ["all", "All"],
                  ["short", "1-3 days"],
                  ["medium", "4-5 days"],
                  ["long", "6+ days"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setDuration(value)}
                    className={`rounded-lg border px-3 py-2 text-sm font-bold transition ${
                      duration === value
                        ? "border-sky-700 bg-sky-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-sky-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="text-sm font-bold text-slate-700">Theme</p>
              <div className="mt-3 space-y-3">
                {themes.map((theme) => (
                  <label
                    key={theme}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 hover:border-sky-300"
                  >
                    <input
                      type="checkbox"
                      checked={selectedThemes.includes(theme)}
                      onChange={() => toggleTheme(theme)}
                      className="h-4 w-4 accent-sky-700"
                    />
                    {theme}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="mb-5 grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-[1fr_190px]">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search destination, theme, or tag"
                className="h-12 rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-sky-600"
              />
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-12 rounded-lg border border-slate-200 px-4 text-sm font-bold outline-none focus:border-sky-600"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price low to high</option>
                <option value="price-high">Price high to low</option>
                <option value="duration">Shortest duration</option>
              </select>
            </div>

            <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-500">
              <span>{filteredTrips.length} trips found</span>
              <span>Filters are live</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredTrips.map((trip) => (
                <article
                  key={trip.id}
                  className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
                >
                  <button type="button" onClick={() => navigateTo(`/trip/${trip.id}`)} className="block w-full text-left">
                    <div className="relative h-52 overflow-hidden">
                      <img src={trip.image} alt={trip.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black text-sky-800 shadow">
                        {trip.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-black text-slate-950">{trip.title}</h3>
                          <p className="mt-1 text-sm text-slate-500">{trip.location}</p>
                        </div>
                        <span className="rounded-lg bg-amber-50 px-2.5 py-1 text-sm font-black text-amber-700">
                          {trip.rating}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {trip.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Starting at</p>
                          <p className="text-xl font-black text-slate-950">{formatCurrency(trip.price)}</p>
                        </div>
                        <p className="font-bold text-slate-500">{trip.days} days</p>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>

            {filteredTrips.length === 0 && (
              <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
                <h3 className="text-xl font-black text-slate-950">No trips found</h3>
                <p className="mt-2 text-slate-500">Try a higher budget or remove a theme filter.</p>
              </div>
            )}
          </section>

          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-lg font-black text-slate-950">Trending trips</h2>
            <div className="mt-4 space-y-3">
              {trendingTrips.map((trip, index) => (
                <button
                  key={trip.id}
                  type="button"
                  onClick={() => navigateTo(`/trip/${trip.id}`)}
                  className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-slate-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sm font-black text-sky-800">
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-black text-slate-950">{trip.title}</span>
                    <span className="block text-sm font-semibold text-slate-500">
                      {formatCurrency(trip.price)} - {trip.days} days
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
