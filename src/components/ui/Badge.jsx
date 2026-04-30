import { cn } from "../../utils/cn";

export default function Badge({ children, className }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700", className)}>
      {children}
    </span>
  );
}
