import { motion } from "framer-motion";

export default function StatCard({ label, value, detail, icon }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <h3 className="mt-2 text-3xl font-bold tracking-normal text-slate-950">{value}</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-lg font-bold text-sky-700">
          {icon}
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500">{detail}</p>
    </motion.article>
  );
}
