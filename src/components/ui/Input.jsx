import { cn } from "../../utils/cn";

export default function Input({ label, className, ...props }) {
  return (
    <label className="block">
      {label ? <span className="mb-2 block text-sm font-semibold text-neutral-700">{label}</span> : null}
      <input
        className={cn(
          "focus-ring h-11 w-full rounded-lg border border-neutral-200 bg-white px-3 text-sm text-ink placeholder:text-neutral-400",
          className,
        )}
        {...props}
      />
    </label>
  );
}
