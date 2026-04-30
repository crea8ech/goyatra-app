import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { formatCurrency } from "../utils/formatters";

const steps = ["Basic info", "Itinerary", "Inclusions", "Pricing"];

const initialTrip = {
  title: "Udaipur Weekend Escape",
  location: "Udaipur, Rajasthan",
  duration: "3D / 2N",
  category: "Weekend",
  description: "A relaxed lake city plan with stays, transfers, guided local sightseeing, and flexible add-ons.",
  itinerary: "Day 1: Arrival and lake walk\nDay 2: City Palace, cafes, and sunset point\nDay 3: Breakfast and departure",
  inclusions: "Hotel stay\nBreakfast\nLocal transfers\nTrip coordinator",
  exclusions: "Flights\nLunch and dinner\nPersonal expenses",
  price: 7499,
  seats: 18,
  imageUrl:
    "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=900&q=80",
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function TextInput(props) {
  return (
    <input
      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      {...props}
    />
  );
}

function TextArea(props) {
  return (
    <textarea
      rows={5}
      className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      {...props}
    />
  );
}

export default function AddTripPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [trip, setTrip] = useState(initialTrip);

  const itineraryItems = useMemo(
    () => trip.itinerary.split("\n").filter(Boolean),
    [trip.itinerary]
  );
  const inclusionItems = useMemo(
    () => trip.inclusions.split("\n").filter(Boolean),
    [trip.inclusions]
  );

  function updateTrip(field, value) {
    setTrip((current) => ({ ...current, [field]: value }));
  }

  function saveTrip() {
    setSaving(true);
    window.setTimeout(() => setSaving(false), 700);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex gap-2 overflow-x-auto border-b border-slate-100 pb-4">
          {steps.map((step, index) => (
            <button
              key={step}
              onClick={() => setActiveStep(index)}
              className={`shrink-0 rounded-lg px-4 py-2 text-sm font-bold transition ${
                activeStep === index
                  ? "bg-sky-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {index + 1}. {step}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeStep === 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 md:grid-cols-2">
              <Field label="Trip title">
                <TextInput value={trip.title} onChange={(event) => updateTrip("title", event.target.value)} />
              </Field>
              <Field label="Location">
                <TextInput value={trip.location} onChange={(event) => updateTrip("location", event.target.value)} />
              </Field>
              <Field label="Duration">
                <TextInput value={trip.duration} onChange={(event) => updateTrip("duration", event.target.value)} />
              </Field>
              <Field label="Category">
                <TextInput value={trip.category} onChange={(event) => updateTrip("category", event.target.value)} />
              </Field>
              <div className="md:col-span-2">
                <Field label="Short description">
                  <TextArea value={trip.description} onChange={(event) => updateTrip("description", event.target.value)} />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Image upload">
                  <div className="rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-5 transition hover:border-sky-300 hover:bg-sky-50/50">
                    <input
                      type="file"
                      accept="image/*"
                      className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-sky-700 file:px-4 file:py-2.5 file:text-sm file:font-bold file:text-white hover:file:bg-sky-800"
                    />
                    <p className="mt-3 text-xs text-slate-500">
                      Upload is UI-ready now. Supabase storage can connect here later.
                    </p>
                  </div>
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Preview image URL">
                  <TextInput value={trip.imageUrl} onChange={(event) => updateTrip("imageUrl", event.target.value)} />
                </Field>
              </div>
            </motion.div>
          )}

          {activeStep === 1 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Field label="Itinerary">
                <TextArea value={trip.itinerary} onChange={(event) => updateTrip("itinerary", event.target.value)} />
              </Field>
            </motion.div>
          )}

          {activeStep === 2 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 md:grid-cols-2">
              <Field label="Inclusions">
                <TextArea value={trip.inclusions} onChange={(event) => updateTrip("inclusions", event.target.value)} />
              </Field>
              <Field label="Exclusions">
                <TextArea value={trip.exclusions} onChange={(event) => updateTrip("exclusions", event.target.value)} />
              </Field>
            </motion.div>
          )}

          {activeStep === 3 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 md:grid-cols-2">
              <Field label="Price per person">
                <TextInput type="number" value={trip.price} onChange={(event) => updateTrip("price", Number(event.target.value))} />
              </Field>
              <Field label="Available seats">
                <TextInput type="number" value={trip.seats} onChange={(event) => updateTrip("seats", Number(event.target.value))} />
              </Field>
            </motion.div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-slate-100 pt-5">
          <Button variant="secondary" disabled={activeStep === 0} onClick={() => setActiveStep((step) => Math.max(0, step - 1))}>
            Back
          </Button>
          <div className="flex gap-3">
            {activeStep < steps.length - 1 ? (
              <Button onClick={() => setActiveStep((step) => Math.min(steps.length - 1, step + 1))}>
                Continue
              </Button>
            ) : (
              <Button onClick={saveTrip} disabled={saving}>
                {saving ? "Saving..." : "Save package"}
              </Button>
            )}
          </div>
        </div>
      </section>

      <aside className="xl:sticky xl:top-28 xl:self-start">
        <motion.article
          key={trip.title + trip.imageUrl}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
        >
          <img src={trip.imageUrl} alt={trip.title} className="h-56 w-full object-cover" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-sky-700">{trip.category}</p>
                <h2 className="mt-1 text-xl font-black tracking-normal text-slate-950">{trip.title}</h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                Draft
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-500">{trip.location} · {trip.duration}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">{trip.description}</p>
            <div className="mt-5 rounded-lg bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-950">Itinerary</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {itineraryItems.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {inclusionItems.slice(0, 4).map((item) => (
                <span key={item} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Starts at</p>
                <p className="text-2xl font-black text-slate-950">{formatCurrency(trip.price)}</p>
              </div>
              <p className="text-sm font-bold text-slate-600">{trip.seats} seats</p>
            </div>
          </div>
        </motion.article>
      </aside>
    </div>
  );
}
