import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Monitor, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ebook Como Pintar Sua Casa | Guia Prático" },
      {
        name: "description",
        content:
          "Aprenda a pintar sua casa como um profissional com o ebook completo: técnicas, materiais e passo a passo.",
      },
      { property: "og:title", content: "Ebook Como Pintar Sua Casa" },
      {
        property: "og:description",
        content:
          "Guia prático e completo para pintar sua casa com acabamento profissional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative h-[100dvh] overflow-hidden bg-background">
      <img
        src={heroImage}
        alt="Homem pintando uma parede com rolo de tinta"
        width={1600}
        height={768}
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />

      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-5xl flex-col justify-center gap-[3.5dvh] px-6">
          <span className="inline-flex w-fit rounded-full border border-white/70 px-4 py-1 font-display text-xs font-semibold tracking-[0.35em] text-primary-foreground">
            EBOOK
          </span>
          <h1 className="font-display text-[clamp(2rem,7dvh,4.5rem)] font-extrabold uppercase italic leading-[0.9] tracking-tight text-primary-foreground">
            <span className="text-brand">Como Pintar</span>
            <br />
            <span className="text-[0.6em]">a sua </span>Casa
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-lg font-bold text-primary-foreground sm:text-xl">
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-brand" /> Guia Prático
            </span>
            <span className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-brand" /> Digital
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-brand" /> Acesso Imediato
            </span>
          </div>

          <h2 className="max-w-2xl font-display text-[clamp(1.1rem,3dvh,1.75rem)] font-extrabold uppercase leading-tight">
            <span className="text-brand">Pinte sua casa como um profissional:</span>{" "}
            <span className="text-white">
              Técnicas, materiais e o passo a passo completo
            </span>
          </h2>
          <p className="max-w-2xl text-[clamp(0.9rem,2.2dvh,1.15rem)] leading-relaxed text-white/80">
            Um ebook prático que te mostra, do início ao fim, como transformar a
            sua casa com as próprias mãos — e economize mais de R$3.000 que você
            gastaria contratando um pintor.
          </p>

          <a
            href="https://pay.hotmart.com/G107380888N"
            onClick={() => window.fbq?.("track", "InitiateCheckout")}
            className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-10 py-[1.8dvh] font-display text-[clamp(1.1rem,2.8dvh,1.5rem)] font-bold uppercase tracking-wide text-primary-foreground shadow-[0_0_40px_-8px_var(--brand)] transition-transform hover:scale-[1.02]"
          >
            Comprar agora
          </a>
        </div>
      </div>
    </main>
  );
}
