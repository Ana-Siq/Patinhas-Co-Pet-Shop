import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/produtos", label: "Produtos" },
  { to: "/planos", label: "Planos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/60">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl gradient-warm flex items-center justify-center shadow-soft transition-smooth group-hover:rotate-12">
            <PawPrint className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl font-semibold tracking-tight">Patinhas<span className="text-primary">&Co</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-smooth"
              activeProps={{ className: "px-4 py-2 rounded-full text-sm font-medium text-primary bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full gradient-warm border-0 shadow-soft hover:shadow-glow transition-smooth">
            <Link to="/contato">Agendar agora</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background animate-fade-up">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-secondary">
                {l.label}
              </Link>
            ))}
            <Button asChild className="rounded-full gradient-warm border-0 mt-2">
              <Link to="/contato" onClick={() => setOpen(false)}>Agendar agora</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
