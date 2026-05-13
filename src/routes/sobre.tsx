import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Heart, Award, Users, Leaf } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import hero from "@/assets/hero-pets.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós — Patinhas&Co" },
      { name: "description", content: "Conheça a história, valores e o time do Patinhas&Co." },
    ],
  }),
  component: Sobre,
});

const values = [
  { icon: Heart, title: "Empatia primeiro", desc: "Cada pet é único e merece atenção individual." },
  { icon: Award, title: "Excelência técnica", desc: "Profissionais formados e em constante atualização." },
  { icon: Users, title: "Família estendida", desc: "Tutores são parceiros nessa jornada de cuidado." },
  { icon: Leaf, title: "Bem-estar real", desc: "Produtos seguros e práticas sustentáveis." },
];

function Sobre() {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-16 pb-12 text-center max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nossa história</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6">Mais que um pet shop, um lar.</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Nascemos em 2013 do sonho de criar um espaço onde tutores se sentissem tão acolhidos quanto seus pets.
          Hoje somos referência em cuidado integral para cães e gatos.
        </p>
      </section>

      <section className="container mx-auto px-6">
        <div className="rounded-[2.5rem] overflow-hidden shadow-glow">
          <img src={hero} alt="Pets felizes" className="w-full h-[400px] md:h-[500px] object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl mb-6">Nossa missão</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Oferecer experiências completas de cuidado pet, unindo técnica, afeto e ambiente premium.
            Acreditamos que o bem-estar animal começa pelo respeito e termina no detalhe.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Trabalhamos com produtos selecionados, profissionais certificados e protocolos de higiene rigorosos
            para que cada visita seja segura, confortável e inesquecível.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={gallery2} alt="" className="rounded-3xl aspect-[3/4] object-cover shadow-card" loading="lazy" />
          <img src={gallery3} alt="" className="rounded-3xl aspect-[3/4] object-cover shadow-card mt-8" loading="lazy" />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-12">Nossos valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-6 shadow-card hover-lift">
                <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h2 className="font-display text-4xl text-center mb-12">Nosso espaço</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[gallery1, gallery3, gallery2].map((src, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-card hover-lift">
              <img src={src} alt="" className="w-full h-72 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
