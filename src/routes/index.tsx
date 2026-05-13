import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles, Shield, Clock, Star, Scissors, Stethoscope, Home as HomeIcon, Smile } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import grooming from "@/assets/service-grooming.jpg";
import vet from "@/assets/service-vet.jpg";
import daycare from "@/assets/service-daycare.jpg";
import hotel from "@/assets/service-hotel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patinhas&Co — Pet Shop com carinho de família" },
      { name: "description", content: "Banho, tosa, veterinário, hotel e creche para cães e gatos. Agende agora." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Scissors, title: "Banho & Tosa", desc: "Higiene completa com produtos hipoalergênicos.", img: grooming },
  { icon: Stethoscope, title: "Veterinário", desc: "Consultas, vacinas e exames com especialistas.", img: vet },
  { icon: HomeIcon, title: "Hotel Pet", desc: "Estadia confortável, monitorada 24h.", img: hotel },
  { icon: Smile, title: "Creche", desc: "Socialização, brincadeiras e muito carinho.", img: daycare },
];

const features = [
  { icon: Heart, title: "Cuidado afetivo", desc: "Tratamos cada pet como parte da nossa família." },
  { icon: Shield, title: "Time certificado", desc: "Profissionais com formação e experiência." },
  { icon: Sparkles, title: "Ambiente premium", desc: "Espaço limpo, seguro e pensado para o bem-estar." },
  { icon: Clock, title: "Atendimento ágil", desc: "Agendamento online e horários flexíveis." },
];

const testimonials = [
  { name: "Mariana S.", pet: "Tutora da Luna", text: "A Luna ama o banho aqui! Sai sempre cheirosa e felicíssima. Equipe maravilhosa.", rating: 5 },
  { name: "Rafael P.", pet: "Tutor do Thor", text: "Confio 100% no veterinário. Atendimento humano e técnico ao mesmo tempo.", rating: 5 },
  { name: "Camila O.", pet: "Tutora da Mel", text: "O hotel salvou minhas férias. Recebi fotos todos os dias, foi um amor.", rating: 5 },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              Mais de 10 mil pets felizes
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              Cuidar do seu pet é <span className="text-primary italic">cuidar</span> de quem você ama.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Do banho ao veterinário, tudo o que seu cão ou gato precisa em um espaço aconchegante,
              com profissionais que tratam cada patinha com carinho.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full gradient-warm border-0 shadow-soft hover:shadow-glow transition-smooth h-14 px-8 text-base">
                <Link to="/contato">Agendar serviço <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-foreground/20 hover:bg-secondary">
                <Link to="/servicos">Ver serviços</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[gallery2, gallery3, gallery1].map((src, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-primary">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-muted-foreground mt-1">4.9 / 5 · 1.200+ avaliações</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-8 gradient-warm rounded-[3rem] opacity-20 blur-3xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow">
              <img src={heroPets} alt="Cão e gato felizes" width={1536} height={1024} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">+10 mil pets</p>
                <p className="text-xs text-muted-foreground">cuidados com amor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-2xl p-6 shadow-card hover-lift">
                <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={gallery1} alt="Loja" className="rounded-3xl shadow-card w-full h-full object-cover aspect-[3/4]" loading="lazy" />
            <div className="grid grid-rows-2 gap-4">
              <img src={gallery3} alt="Gato" className="rounded-3xl shadow-card w-full h-full object-cover" loading="lazy" />
              <img src={gallery2} alt="Filhote" className="rounded-3xl shadow-card w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Sobre nós</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6">Um lar para os seus melhores amigos</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Há mais de 12 anos, o Patinhas&Co é um espaço pensado para receber pets como hóspedes especiais.
              Combinamos técnica veterinária, ambiente acolhedor e produtos premium em um só endereço.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nosso time é apaixonado pelo que faz — e isso aparece em cada banho, cada consulta e cada brincadeira.
            </p>
            <Button asChild className="rounded-full gradient-warm border-0 shadow-soft hover:shadow-glow transition-smooth h-12 px-6">
              <Link to="/sobre">Conheça a história</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Serviços</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Tudo que seu pet precisa, em um só lugar</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card rounded-3xl overflow-hidden shadow-card hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full h-12 px-6 border-foreground/20">
              <Link to="/servicos">Ver todos os serviços <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Depoimentos</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Tutores que confiam em nós</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-3xl p-8 shadow-card hover-lift">
                <div className="flex text-primary mb-4">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-warm p-12 md:p-16 text-center shadow-glow">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Vamos cuidar do seu pet hoje?</h2>
            <p className="text-primary-foreground/90 text-lg max-w-xl mx-auto mb-8">
              Agende um horário em segundos e deixe o resto com a gente.
            </p>
            <Button asChild size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 h-14 px-8 text-base shadow-soft">
              <Link to="/contato">Agendar agora <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
