import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Toast({ message }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="fixed bottom-5 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-semibold text-white shadow-soft"
        >
          <CheckCircle2 className="h-4 w-4 text-primary" />
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
