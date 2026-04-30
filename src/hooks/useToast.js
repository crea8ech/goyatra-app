import { useCallback, useState } from "react";

export function useToast() {
  const [message, setMessage] = useState("");

  const notify = useCallback((text) => {
    setMessage(text);
    window.clearTimeout(window.__goyatraToastTimer);
    window.__goyatraToastTimer = window.setTimeout(() => setMessage(""), 2600);
  }, []);

  return { message, notify };
}
