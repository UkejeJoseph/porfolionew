import { useEffect, useState } from "react";
import { Link, useLocation } from "@/lib/portfolio-router";
import { Menu, X, ArrowUpRight } from "lucide-react";

const items = [
  { name: "Work", href: "/projects" },
  { name: "Engineering Lab", href: "/lab" },
  { name: "Open Source", href: "/open-source" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Résumé", href: "/resume" },
];

export default function TopNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const themed =
    location.startsWith("/blog") ||
    location === "/lab" ||
    location === "/open-source";
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 25);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <nav
      aria-label="Main navigation"
      className={`portfolio-nav fixed top-0 left-0 right-0 z-50 transition-colors ${themed ? "engineering-nav" : scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/40" : "bg-background/90"}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center gap-6">
        <Link
          href="/"
          className="mr-auto shrink-0 tracking-[.12em] text-xs uppercase font-medium"
        >
          <span className="portfolio-nav-mark" aria-hidden="true">
            ju.
          </span>{" "}
          Joseph Ukeje<span className="sr-only"> — Home</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                location === item.href ||
                (item.href === "/blog" && location.startsWith("/blog/"))
                  ? "page"
                  : undefined
              }
              className={`text-xs hover:underline underline-offset-8 ${location === item.href ? "underline" : "opacity-75"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="portfolio-nav-contact hidden lg:inline-flex items-center gap-2 text-xs ml-4"
        >
          Let’s talk <ArrowUpRight size={15} />
        </Link>
        <button
          type="button"
          className="lg:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div
          id="mobile-navigation"
          data-mobile-panel
          className="lg:hidden bg-background border-b border-border px-6 py-5 grid gap-4"
        >
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-sm py-1"
              aria-current={location === item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="text-sm py-1">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
