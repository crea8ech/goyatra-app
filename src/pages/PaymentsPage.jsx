import { payments } from "../data/travelData";
import { formatCurrency } from "../utils/formatters";

export default function PaymentsPage() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-lg font-bold text-slate-950">Payments</h2>
        <p className="text-sm text-slate-500">Backend-ready list for future Supabase payment rows.</p>
      </div>
      <div className="divide-y divide-slate-100">
        {payments.map((payment) => (
          <div key={payment.id} className="flex flex-col gap-3 px-5 py-4 transition hover:bg-sky-50/50 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-slate-950">{payment.guest}</p>
              <p className="text-sm text-slate-500">{payment.id}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-black text-slate-950">{formatCurrency(payment.amount)}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                {payment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
