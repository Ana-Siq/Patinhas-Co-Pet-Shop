import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, PawPrint, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 bg-foreground text-background">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-2xl gradient-warm flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-semibold">Patinhas&Co</span>
          </div>
          <p className="text-background/70 text-sm leading-relaxed">
            Cuidado, carinho e profissionalismo para quem é parte da família.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/sobre" className="hover:text-primary transition-smooth">Sobre nós</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition-smooth">Serviços</Link></li>
            <li><Link to="/produtos" className="hover:text-primary transition-smooth">Produtos</Link></li>
            <li><Link to="/planos" className="hover:text-primary transition-smooth">Planos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Rua das Flores, 123 — São Paulo</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> (11) 99999-0000</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> ola@patinhasco.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Siga-nos</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-smooth">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-background/50 mt-6">Seg–Sáb · 8h às 19h</p>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6 text-xs text-background/50 text-center">
          © {new Date().getFullYear()} Patinhas&Co · Feito com carinho 🐾
        </div>
      </div>
    </footer>
  );
}
