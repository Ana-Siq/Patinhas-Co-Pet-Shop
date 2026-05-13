import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { FormEvent } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Patinhas&Co" },
      { name: "description", content: "Agende seu atendimento, fale conosco ou visite nossa loja." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Mensagem enviada!", { description: "Em breve entraremos em contato." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <Toaster />
      <section className="container mx-auto px-6 pt-16 pb-12 text-center max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contato</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6">Vamos conversar?</h1>
        <p className="text-lg text-muted-foreground">Agende um horário, tire dúvidas ou venha nos visitar. Será um prazer.</p>
      </section>

      <section className="container mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
          <h2 className="font-display text-2xl mb-6">Envie uma mensagem</h2>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Seu nome</Label>
                <Input id="name" required className="rounded-xl mt-1.5" placeholder="Como podemos te chamar?" />
              </div>
              <div>
                <Label htmlFor="pet">Nome do pet</Label>
                <Input id="pet" className="rounded-xl mt-1.5" placeholder="Ex: Luna" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" required className="rounded-xl mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" className="rounded-xl mt-1.5" placeholder="(11) 99999-0000" />
              </div>
            </div>
            <div>
              <Label htmlFor="msg">Mensagem</Label>
              <Textarea id="msg" required rows={5} className="rounded-xl mt-1.5" placeholder="Conte-nos como podemos ajudar..." />
            </div>
            <Button type="submit" className="w-full rounded-full gradient-warm border-0 h-12 shadow-soft hover:shadow-glow transition-smooth">
              Enviar mensagem
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          {[
            { icon: MapPin, title: "Endereço", lines: ["Rua das Flores, 123", "Vila Madalena · São Paulo, SP"] },
            { icon: Phone, title: "Telefone & WhatsApp", lines: ["(11) 99999-0000"] },
            { icon: Mail, title: "E-mail", lines: ["ola@patinhasco.com"] },
            { icon: Clock, title: "Horário", lines: ["Seg a Sex · 8h às 19h", "Sábado · 9h às 17h"] },
          ].map((c) => (
            <div key={c.title} className="bg-card rounded-3xl p-6 shadow-card flex gap-4 hover-lift">
              <div className="w-12 h-12 rounded-2xl gradient-warm flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg mb-1">{c.title}</h3>
                {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
              </div>
            </div>
          ))}

          <div className="bg-card rounded-3xl p-6 shadow-card">
            <h3 className="font-display text-lg mb-4">Siga-nos</h3>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:gradient-warm hover:text-primary-foreground transition-smooth">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
