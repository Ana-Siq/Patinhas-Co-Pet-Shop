import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — Patinhas&Co" },
      { name: "description", content: "Planos mensais, trimestrais, anuais e serviços avulsos." },
    ],
  }),
  component: Planos,
});

type Cycle = "mensal" | "trimestral" | "anual" | "avulso";

const plans = [
  {
    name: "Essencial",
    desc: "Para o cuidado básico e regular.",
    features: ["2 banhos / mês", "1 tosa higiênica / mês", "Hidratação básica", "Desconto 5% em produtos"],
    prices: { mensal: 149, trimestral: 399, anual: 1490, avulso: 89 },
  },
  {
    name: "Conforto",
    desc: "O preferido dos tutores.",
    features: ["4 banhos / mês", "2 tosas / mês", "Hidratação premium", "1 consulta veterinária", "Desconto 10% em produtos"],
    prices: { mensal: 279, trimestral: 749, anual: 2790, avulso: 159 },
    highlight: true,
  },
  {
    name: "Premium",
    desc: "Tudo incluso, sem preocupações.",
    features: ["Banhos ilimitados", "Tosas ilimitadas", "Spa completo", "Consultas veterinárias ilimitadas", "Hotel — 5 diárias/ano", "Desconto 15% em produtos"],
    prices: { mensal: 499, trimestral: 1349, anual: 4990, avulso: 249 },
  },
];

const cycleLabels: Record<Cycle, string> = {
  mensal: "Mensal",
  trimestral: "Trimestral",
  anual: "Anual",
  avulso: "Avulso",
};

function Planos() {
  const [cycle, setCycle] = useState<Cycle>("mensal");

  return (
    <Layout>
      <section className="container mx-auto px-6 pt-16 pb-12 text-center max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Planos</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6">O cuidado certo, no ritmo do seu pet</h1>
        <p className="text-lg text-muted-foreground">Escolha entre planos recorrentes com desconto ou serviços avulsos.</p>
      </section>

      <section className="container mx-auto px-6 mb-10">
        <div className="inline-flex p-1.5 bg-secondary rounded-full mx-auto block w-fit">
          {(Object.keys(cycleLabels) as Cycle[]).map((c) => (
            <button
              key={c}
              onClick={() => setCycle(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                cycle === c ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cycleLabels[c]}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 shadow-card hover-lift flex flex-col ${
                p.highlight ? "gradient-warm text-primary-foreground" : "bg-card"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background rounded-full text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Mais escolhido
                </div>
              )}
              <h3 className="font-display text-3xl mb-2">{p.name}</h3>
              <p className={`text-sm mb-6 ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mb-6">
                <span className="font-display text-5xl font-semibold">R$ {p.prices[cycle]}</span>
                <span className={`ml-2 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {cycle === "avulso" ? "/ serviço" : `/ ${cycle}`}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${p.highlight ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`rounded-full h-12 ${
                  p.highlight
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "gradient-warm border-0 text-primary-foreground"
                }`}
              >
                <Link to="/contato">Quero esse plano</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
          * Planos podem ser cancelados a qualquer momento. Serviços avulsos não exigem assinatura.
        </p>
      </section>
    </Layout>
  );
}
