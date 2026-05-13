import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Scissors, Stethoscope, Home as HomeIcon, Smile, Sparkles, GraduationCap, ArrowRight } from "lucide-react";
import grooming from "@/assets/service-grooming.jpg";
import vet from "@/assets/service-vet.jpg";
import daycare from "@/assets/service-daycare.jpg";
import hotel from "@/assets/service-hotel.jpg";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Patinhas&Co" },
      { name: "description", content: "Banho, tosa, veterinário, hotel, creche e mais." },
    ],
  }),
  component: Servicos,
});

const services = [
  { icon: Scissors, title: "Banho & Tosa", img: grooming, desc: "Banhos com produtos hipoalergênicos, tosa higiênica e tosa na tesoura. Inclui hidratação, perfume e laço.", bullets: ["Produtos premium", "Secagem profissional", "Corte personalizado"] },
  { icon: Stethoscope, title: "Veterinário", img: vet, desc: "Consultas, vacinas, exames laboratoriais e clínica geral com veterinários experientes.", bullets: ["Vacinação completa", "Consultas e retornos", "Atendimento humanizado"] },
  { icon: HomeIcon, title: "Hotel Pet", img: hotel, desc: "Suítes confortáveis, monitoramento 24h, área de lazer e fotos diárias para os tutores.", bullets: ["Suítes climatizadas", "Câmeras 24h", "Passeios diários"] },
  { icon: Smile, title: "Creche", img: daycare, desc: "Socialização, atividades lúdicas e descanso supervisionado por equipe especializada.", bullets: ["Brincadeiras dirigidas", "Grupos por porte", "Relatórios diários"] },
  { icon: Sparkles, title: "Spa & Estética", img: grooming, desc: "Tratamentos especiais: ozonioterapia, hidratação profunda, ofurô e aromaterapia.", bullets: ["Ofurô relaxante", "Hidratação profunda", "Aromaterapia"] },
  { icon: GraduationCap, title: "Adestramento", img: daycare, desc: "Treinamento positivo para filhotes e adultos, com foco em comportamento e obediência.", bullets: ["Reforço positivo", "Aulas individuais", "Suporte ao tutor"] },
];

function Servicos() {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-16 pb-12 text-center max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Serviços</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6">Cuidado completo, feito com amor</h1>
        <p className="text-lg text-muted-foreground">Escolha o serviço ideal para o momento do seu pet.</p>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-3xl overflow-hidden shadow-card hover-lift flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-110" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <ul className="space-y-1 mb-6 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{b}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="rounded-full mt-auto border-foreground/20">
                  <Link to="/contato">Agendar <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
