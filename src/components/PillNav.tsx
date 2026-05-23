import { Link, useRouterState } from "@tanstack/react-router";
import { Home, FolderOpen, Briefcase, Wrench, PenSquare } from "lucide-react";

const items = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/projects", icon: FolderOpen, label: "Projects" },
  { to: "/tools", icon: Briefcase, label: "Tools" },
  { to: "/services", icon: Wrench, label: "Services" },
  { to: "/blog", icon: PenSquare, label: "Blog" },
] as const;

export function PillNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pill-nav flex items-center gap-1">
      {items.map(({ to, icon: Icon, label }) => {
        const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
        return (
          <Link
            key={to}
            to={to}
            aria-label={label}
            data-active={active}
            className="pill-nav-item"
          >
            <Icon className="w-5 h-5" />
          </Link>
        );
      })}
    </nav>
  );
}
