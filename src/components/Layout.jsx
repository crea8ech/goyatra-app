import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Button from "./ui/Button";
import LoadingState from "./ui/LoadingState";
import { classNames } from "../utils/formatters";

const adminLinks = [
  { href: "/dashboard", label: "Dashboard", icon: "D" },
  { href: "/dashboard/packages", label: "My Packages", icon: "P" },
  { href: "/dashboard/leads", label: "Leads", icon: "L" },
  { href: "/dashboard/payments", label: "Payments", icon: "₹" },
];

function navigateTo(href) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function NavLink({ href, children, className = "", activeClass = "" }) {
  const isActive =
    window.location.pathname === href ||
    (href !== "/" && window.location.pathname.startsWith(href));

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        navigateTo(href);
      }}
      className={classNames(className, isActive && activeClass)}
    >
      {children}
    </a>
  );
}

export function SiteShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export function AdminShell({ children, title, subtitle }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 280);
    return () => window.clearTimeout(timer);
  }, [title]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-slate-200 bg-white px-5 py-6 lg:block">
        <NavLink href="/" className="text-2xl font-black tracking-normal text-sky-800">
          GoYatra
        </NavLink>
        <p className="mt-2 text-sm text-slate-500">Partner control center</p>
        <div className="mt-8 space-y-2">
          {adminLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              activeClass="bg-sky-50 text-sky-800"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs shadow-sm">
                {link.icon}
              </span>
              {link.label}
            </NavLink>
          ))}
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">Admin</p>
              <h1 className="mt-1 text-2xl font-black tracking-normal text-slate-950 sm:text-3xl">
                {title}
              </h1>
              <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button as="a" href="/add-trip" onClick={(event) => {
                event.preventDefault();
                navigateTo("/add-trip");
              }}>
                Add Trip
              </Button>
              <Button as="a" href="/" variant="secondary" onClick={(event) => {
                event.preventDefault();
                navigateTo("/");
              }}>
                View Site
              </Button>
            </div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {adminLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                activeClass="bg-sky-50 text-sky-800"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8">
          {loading ? <LoadingState label="Preparing dashboard" /> : children}
        </main>
      </div>
    </div>
  );
}
