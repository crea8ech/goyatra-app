import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon: Icon,
  type = "button",
  ...props
}) {
  const variants = {
    primary: "bg-primary text-ink shadow-card hover:bg-primary-600",
    secondary: "border border-slate-200 bg-white text-slate-700 shadow-card hover:border-primary hover:bg-primary-50",
    dark: "bg-ink text-white shadow-card hover:bg-neutral-800",
    outline: "border border-neutral-200 bg-white text-ink hover:border-primary hover:bg-primary-50",
    ghost: "bg-transparent text-ink hover:bg-neutral-100",
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </motion.button>
  );
}
