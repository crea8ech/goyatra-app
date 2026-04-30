import { motion } from "framer-motion";
import { packages } from "../data/travelData";
import { formatCurrency } from "../utils/formatters";

export default function PackagesPage() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {packages.map((item) => (
        <motion.article
          key={item.id}
          whileHover={{ y: -4 }}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-sky-200 hover:shadow-md"
        >
          <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{item.location}</p>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">
                {item.status}
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-sm font-semibold text-slate-500">{item.duration}</span>
              <span className="text-xl font-black text-slate-950">{formatCurrency(item.price)}</span>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
