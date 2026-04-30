import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function Card({ children, className, interactive = false }) {
  return (
    <motion.div
      whileHover={interactive ? { y: -6 } : undefined}
      className={cn("rounded-lg border border-neutral-100 bg-white shadow-card", className)}
    >
      {children}
    </motion.div>
  );
}
