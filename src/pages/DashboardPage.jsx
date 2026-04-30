import DashboardTable from "../components/DashboardTable";
import StatCard from "../components/ui/StatCard";
import { leads, packages, payments } from "../data/travelData";
import { formatCurrency } from "../utils/formatters";

export default function DashboardPage() {
  const revenue = payments.reduce((total, payment) => total + payment.amount, 0);
  const activePackages = packages.filter((item) => item.status === "Active").length;
  const bookings = leads.filter((lead) => lead.status === "Booked").length;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Leads" value={leads.length} detail="12% higher this week" icon="L" />
        <StatCard label="Revenue" value={formatCurrency(revenue)} detail="Confirmed and advance payments" icon="₹" />
        <StatCard label="Active packages" value={activePackages} detail="Public packages ready for leads" icon="P" />
        <StatCard label="Bookings" value={bookings} detail="Completed booking conversations" icon="B" />
      </div>
      <DashboardTable leads={leads} />
    </div>
  );
}
