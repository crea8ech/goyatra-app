import { classNames } from "../utils/formatters";

const statusStyles = {
  New: "bg-blue-50 text-blue-700",
  "Follow-up": "bg-amber-50 text-amber-700",
  Booked: "bg-emerald-50 text-emerald-700",
  "Payment pending": "bg-rose-50 text-rose-700",
};

export default function DashboardTable({ leads }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-2 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-950">Latest Leads</h2>
          <p className="text-sm text-slate-500">Recent traveler enquiries from the website.</p>
        </div>
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">
          Export
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3 font-bold">User name</th>
              <th className="px-5 py-3 font-bold">Phone</th>
              <th className="px-5 py-3 font-bold">Trip</th>
              <th className="px-5 py-3 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="transition hover:bg-sky-50/50">
                <td className="px-5 py-4 font-semibold text-slate-900">{lead.name}</td>
                <td className="px-5 py-4 text-slate-600">{lead.phone}</td>
                <td className="px-5 py-4 text-slate-600">{lead.trip}</td>
                <td className="px-5 py-4">
                  <span
                    className={classNames(
                      "inline-flex rounded-full px-3 py-1 text-xs font-bold",
                      statusStyles[lead.status] || "bg-slate-100 text-slate-700"
                    )}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
