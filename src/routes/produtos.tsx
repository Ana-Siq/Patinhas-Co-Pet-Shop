import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Patinhas&Co" },
      { name: "description", content: "Rações premium, brinquedos, acessórios e cosméticos pet." },
    ],
  }),
  component: Produtos,
});

const categories = [
  { title: "Rações Premium", desc: "Marcas selecionadas para cães e gatos.", price: "a partir de R$ 89", tag: "Alimentação" },
  { title: "Petiscos & Snacks", desc: "Recompensas naturais e saudáveis.", price: "a partir de R$ 19", tag: "Alimentação" },
  { title: "Brinquedos", desc: "Diversão segura para todos os portes.", price: "a partir de R$ 29", tag: "Lazer" },
  { title: "Camas & Casinhas", desc: "Conforto absoluto para o descanso.", price: "a partir de R$ 149", tag: "Conforto" },
  { title: "Coleiras & Guias", desc: "Estilo e segurança em cada passeio.", price: "a partir de R$ 49", tag: "Acessórios" },
  { title: "Higiene & Cosméticos", desc: "Shampoos, perfumes e dental care.", price: "a partir de R$ 35", tag: "Higiene" },
  { title: "Farmácia Pet", desc: "Antiparasitários e suplementos.", price: "a partir de R$ 45", tag: "Saúde" },
  { title: "Areia & Tapetes", desc: "Produtos para o dia a dia.", price: "a partir de R$ 25", tag: "Higiene" },
];

function Produtos() {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-16 pb-12 text-center max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Loja</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6">Produtos selecionados a dedo</h1>
        <p className="text-lg text-muted-foreground">Marcas confiáveis, qualidade premium e curadoria feita por especialistas.</p>
      </section>

      <section className="container mx-auto px-6 mb-12">
        <div className="rounded-[2.5rem] overflow-hidden shadow-glow relative">
          <img src={gallery1} alt="Loja" className="w-full h-[320px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex items-center">
            <div className="px-10 max-w-md text-background">
              <h2 className="font-display text-4xl mb-3">Visite nossa loja</h2>
              <p className="text-background/90 mb-6">Mais de 500 produtos prontos para levar pra casa.</p>
              <Button className="rounded-full gradient-warm border-0 h-12 px-6">Como chegar</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="group bg-card rounded-3xl p-6 shadow-card hover-lift flex flex-col">
              <div className="aspect-square rounded-2xl gradient-soft flex items-center justify-center mb-4 transition-smooth group-hover:scale-105">
                <ShoppingBag className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">{c.tag}</span>
              <h3 className="font-display text-lg mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{c.desc}</p>
              <p className="text-sm font-semibold">{c.price}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
