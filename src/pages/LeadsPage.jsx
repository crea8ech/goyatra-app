import DashboardTable from "../components/DashboardTable";
import { leads } from "../data/travelData";

export default function LeadsPage() {
  return <DashboardTable leads={leads} />;
}
