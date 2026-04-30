import { Menu, Plane, User, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { cn } from "../utils/cn";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/explore" },
  { label: "Stories", path: "/stories" },
  { label: "Partner", path: "/partner" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    cn(
      "rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-primary-50 hover:text-primary-700",
      isActive ? "bg-primary-100 text-primary-700" : "text-neutral-700",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/88 backdrop-blur-xl">
      <nav className="container-pad flex h-16 items-center justify-between gap-4">
        <button onClick={() => navigate("/")} className="focus-ring flex items-center gap-2 rounded-lg" aria-label="GoYatra home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-ink shadow-card">
            <Plane className="h-5 w-5" />
          </span>
          <span className="text-xl font-black tracking-tight">GoYatra</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" icon={User} onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
        </div>

        <Button
          className="md:hidden"
          variant="ghost"
          icon={open ? X : Menu}
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        />
      </nav>

      {open ? (
        <div className="border-t border-neutral-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button variant="outline" icon={User} onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
