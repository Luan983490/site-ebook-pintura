import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  X,
  Star,
  ShoppingCart,
  ShieldCheck,
  Lock,
  Zap,
  BookOpen,
  Camera,
  Download,
  FileText,
  Paintbrush,
  Wallet,
  Clock,
  Lightbulb,
  ListChecks,
  Plus,
  Minus,
  BadgeCheck,
  CreditCard,
  RefreshCcw,
  Smartphone,
} from "lucide-react";
import { useState, type CSSProperties, type ReactNode } from "react";

import bookMockup from "@/assets/lp/book-mockup.png";
import dorImg from "@/assets/lp/dor.jpg";
import interiorImg from "@/assets/lp/interior.jpg";
import ofertaImg from "@/assets/lp/oferta.jpg";
import ctaRoomImg from "@/assets/lp/cta-room.jpg";
import prev1 from "@/assets/lp/prev1.jpg";
import prev2 from "@/assets/lp/prev2.jpg";
import prev3 from "@/assets/lp/prev3.jpg";
import prev4 from "@/assets/lp/prev4.jpg";

const CHECKOUT_URL = "https://pay.hotmart.com/G107380888N";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pinte Sua Casa Como Um Profissional — Guia Completo por R$47,90" },
      {
        name: "description",
        content:
          "Guia prático passo a passo para pintar sua casa com acabamento profissional e economizar até R$3.000. 14 capítulos, fotos reais e acesso imediato.",
      },
      { property: "og:title", content: "Pinte Sua Casa Como Um Profissional" },
      {
        property: "og:description",
        content:
          "Do zero ao acabamento perfeito. Economize até R$3.000 pintando você mesmo — por apenas R$47,90.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

/* ---------- UI helpers ---------- */

function SectionTag({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-9 min-w-9 items-center justify-center rounded-md bg-primary px-2 text-sm font-extrabold text-primary-foreground">
        {n}
      </span>
      <span className="text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase">
        {children}
      </span>
    </div>
  );
}

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`border-b border-border px-4 py-14 md:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

function CtaButton({ children = "QUERO MEU ACESSO AGORA!" }: { children?: ReactNode }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => window.fbq?.("track", "InitiateCheckout")}
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-extrabold tracking-wide text-primary-foreground shadow-[0_0_35px_-5px_var(--color-primary)] transition-transform hover:scale-[1.03]"
    >
      <ShoppingCart className="h-5 w-5" />
      {children}
    </a>
  );
}

function Price() {
  return (
    <div>
      <p className="text-sm text-muted-foreground line-through">DE R$97,00</p>
      <p className="text-xs font-bold tracking-widest text-muted-foreground">POR APENAS</p>
      <p className="text-5xl font-extrabold text-primary md:text-6xl">
        R$47<span className="text-3xl">,90</span>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">PAGAMENTO ÚNICO • ACESSO IMEDIATO</p>
    </div>
  );
}

/* ---------- Page ---------- */

function SalesPage() {
  return (
    <div
      className="dark min-h-screen bg-background font-sans text-foreground"
      style={
        {
          "--primary": "oklch(0.546 0.215 262.9)",
          "--primary-foreground": "oklch(0.985 0 0)",
          "--ring": "oklch(0.546 0.215 262.9)",
        } as CSSProperties
      }
    >
      {/* 01 HERO */}
      <section className="border-b border-border px-4 pt-12 pb-14 md:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <SectionTag n="01">Transforme sua casa, sem gastar fortuna!</SectionTag>
            <h1 className="text-4xl leading-tight font-extrabold md:text-5xl">
              PINTE SUA CASA E <span className="text-primary">ECONOMIZE R$3.000+</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Guia prático passo a passo para um acabamento profissional.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                [BookOpen, "Do zero ao acabamento"],
                [Paintbrush, "Técnicas profissionais"],
                [Wallet, "Economize tempo e dinheiro"],
                [Zap, "Acesso imediato"],
              ].map(([Icon, label]) => (
                <li key={label as string} className="flex items-center gap-2">
                  {/* @ts-expect-error tuple icon */}
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  {label as string}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img
              src={bookMockup}
              alt="Ebook Pinte Sua Casa Como Um Profissional"
              className="w-64 drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] md:w-80"
              width={1024}
              height={1280}
            />
            <div className="w-full max-w-sm rounded-xl border border-primary/40 bg-card p-6 text-center">
              <p className="text-sm font-bold text-muted-foreground">
                DEIXE DE PAGAR CARO POR SERVIÇOS. FAÇA VOCÊ MESMO!
              </p>
              <div className="my-4">
                <Price />
              </div>
              <CtaButton />
              <p className="mt-3 text-xs text-muted-foreground">ACESSO 100% DIGITAL E IMEDIATO</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 A DOR */}
      <Section>
        <SectionTag n="02">A dor</SectionTag>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              PINTAR SUA CASA PODE SER <span className="text-primary">CARO E COMPLICADO</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Pintores cobram caro e o orçamento sempre pesa no bolso.",
                "Materiais errados, preparação inadequada e erros custam tempo e dinheiro.",
                "Medo de fazer sozinho e ter um resultado ruim ou manchas na parede.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={dorImg}
              alt="Parede com infiltração e tinta descascando"
              className="w-full rounded-xl border border-border object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
            <p className="mt-4 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Resultado:</strong> você adia a pintura ou paga
              caro por algo que poderia fazer sozinho, seguindo o método certo.
            </p>
          </div>
        </div>
      </Section>

      {/* 03 A SOLUÇÃO */}
      <Section>
        <SectionTag n="03">A solução</SectionTag>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              O GUIA DEFINITIVO PARA VOCÊ PINTAR SUA CASA{" "}
              <span className="text-primary">SEM ERROS</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Um passo a passo simples, direto e completo com técnicas profissionais que qualquer
              pessoa pode aplicar.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Do zero ao acabamento perfeito",
                "Com fotos, dicas e truques de quem entende",
                "Economize até R$3.000+ fazendo você mesmo",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={bookMockup}
              alt="Capa do guia"
              className="col-span-2 mx-auto w-52"
              loading="lazy"
              width={1024}
              height={1280}
            />
            {[
              [FileText, "27 páginas explicativas"],
              [Camera, "Passo a passo com fotos"],
              [Zap, "Acesso imediato"],
              [Download, "Formato PDF"],
            ].map(([Icon, label]) => (
              <div
                key={label as string}
                className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center text-sm"
              >
                {/* @ts-expect-error tuple icon */}
                <Icon className="h-6 w-6 text-primary" />
                {label as string}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04 SUMÁRIO */}
      <Section>
        <SectionTag n="04">Sumário completo</SectionTag>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <ol className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {[
              "Ferramentas e Materiais Necessários",
              "Preparação do Ambiente",
              "Preparação das Superfícies",
              "Correção de Imperfeições",
              "Escolha das Tintas",
              "Cálculo de Material",
              "Técnicas de Pintura",
              "Pintura de Tetos",
              "Pintura de Paredes",
              "Acabamentos e Detalhes",
              "Cuidados e Manutenção",
              "Solução de Problemas Comuns",
              "Dicas de Profissional",
              "Checklist Final",
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-7 text-right font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t}
              </li>
            ))}
          </ol>
          <div className="rounded-xl bg-primary p-6 text-center text-primary-foreground md:w-64">
            <p className="text-2xl leading-snug font-extrabold">
              14 CAPÍTULOS COM TUDO QUE VOCÊ PRECISA PARA UM RESULTADO PROFISSIONAL!
            </p>
          </div>
        </div>
      </Section>

      {/* 05 PREVIEW */}
      <Section>
        <SectionTag n="05">Preview do conteúdo</SectionTag>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [prev1, "Preparação das superfícies"],
            [prev2, "Escolha das tintas"],
            [prev3, "Técnicas de pintura"],
            [prev4, "Dicas de profissional"],
          ].map(([img, label]) => (
            <figure key={label as string}>
              <img
                src={img as string}
                alt={label as string}
                className="w-full rounded-lg border border-border shadow-lg"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                {label as string}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          E muito mais... com fotos, ilustrações e explicações simples!
        </p>
      </Section>

      {/* 06 PARA QUEM */}
      <Section>
        <SectionTag n="06">Para quem é este guia?</SectionTag>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-primary/40 bg-card p-6">
            <h3 className="mb-4 font-extrabold text-primary">IDEAL PARA VOCÊ QUE:</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Nunca pintou antes e quer fazer do jeito certo",
                "Quer economizar dinheiro fazendo você mesmo",
                "Tem tempo de final de semana para transformar a casa",
                "Quer um acabamento bonito e duradouro",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-extrabold text-muted-foreground">NÃO É IDEAL SE VOCÊ:</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Não tem disponibilidade para executar o trabalho",
                "Busca resultados imediatos sem empenho",
                "Quer apenas contratar e não aprender",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src={interiorImg}
          alt="Sala de estar com pintura clara e acabamento profissional"
          className="mt-8 w-full rounded-xl border border-border object-cover"
          loading="lazy"
          width={1280}
          height={720}
        />
      </Section>

      {/* 07 BENEFÍCIOS */}
      <Section>
        <SectionTag n="07">Benefícios que você vai ter</SectionTag>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            [Wallet, "ECONOMIZE ATÉ R$3.000+", "Fazendo você mesmo."],
            [BadgeCheck, "ACABAMENTO PROFISSIONAL", "Com técnicas simples."],
            [ListChecks, "PASSO A PASSO PRÁTICO", "Do início ao acabamento."],
            [Lightbulb, "DICAS DE QUEM ENTENDE", "Truques que só profissional sabe."],
            [Clock, "27 PÁGINAS OBJETIVAS", "Conteúdo direto, sem enrolação."],
          ].map(([Icon, title, desc]) => (
            <div
              key={title as string}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center"
            >
              {/* @ts-expect-error tuple icon */}
              <Icon className="h-8 w-8 text-primary" />
              <p className="text-xs font-extrabold tracking-wide">{title as string}</p>
              <p className="text-xs text-muted-foreground">{desc as string}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 08 PROVA SOCIAL */}
      <Section>
        <SectionTag n="08">Prova social</SectionTag>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "O guia é excelente! Consegui pintar minha sala inteira e economizei muito.",
              "Carlos A.",
            ],
            [
              "As explicações são muito claras e as fotos ajudam demais. Recomendo!",
              "Juliana P.",
            ],
            [
              "Vale cada centavo. Resultado profissional seguindo o passo a passo do guia.",
              "Roberto M.",
            ],
          ].map(([quote, name]) => (
            <blockquote key={name} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">“{quote}”</p>
              <footer className="mt-4 text-sm font-bold">— {name}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-extrabold text-primary">+1.250</p>
            <p className="text-xs text-muted-foreground">downloads</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-primary">+870</p>
            <p className="text-xs text-muted-foreground">clientes satisfeitos</p>
          </div>
          <div>
            <p className="flex items-center justify-center gap-1 text-2xl font-extrabold text-primary">
              <Star className="h-5 w-5 fill-primary" /> 4,9/5
            </p>
            <p className="text-xs text-muted-foreground">avaliação média</p>
          </div>
        </div>
      </Section>

      {/* 09 OFERTA */}
      <Section className="bg-card/50">
        <SectionTag n="09">Oferta e preço</SectionTag>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <Price />
            <div className="mt-6">
              <CtaButton />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-left text-sm">
              <div className="rounded-lg border border-border p-3">
                <p className="text-xs text-muted-foreground">INVESTIMENTO DE HOJE:</p>
                <p className="font-extrabold text-primary">MENOS DE R$1,60 POR DIA</p>
              </div>
              <div className="rounded-lg border border-border p-3">
                <p className="text-xs text-muted-foreground">ECONOMIA POTENCIAL:</p>
                <p className="font-extrabold text-primary">R$3.000+</p>
              </div>
            </div>
          </div>
          <img
            src={ofertaImg}
            alt="Lata de tinta azul, rolo e bandeja de pintura"
            className="w-full rounded-xl border border-border object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>
      </Section>

      {/* 10 GARANTIA */}
      <Section>
        <SectionTag n="10">Garantia</SectionTag>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-5 rounded-xl border border-primary/40 bg-card p-6">
            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border-4 border-primary text-primary">
              <span className="text-xl leading-none font-extrabold">7</span>
              <span className="text-[10px] font-bold">DIAS</span>
            </div>
            <div>
              <h3 className="font-extrabold">SATISFAÇÃO GARANTIDA</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso em até
                7 dias que devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 rounded-xl border border-border bg-card p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-primary text-primary">
              <Lock className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-extrabold">COMPRA SEGURA</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Seus dados e pagamento estão protegidos. Ambiente 100% seguro e criptografado.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 11 FAQ */}
      <Section>
        <SectionTag n="11">FAQ — Perguntas frequentes</SectionTag>
        <Faq />
      </Section>

      {/* 12 CTA FINAL */}
      <Section className="bg-card/50">
        <SectionTag n="12">CTA final</SectionTag>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={ctaRoomImg}
            alt="Pessoa pintando parede de azul com rolo"
            className="w-full rounded-xl border border-border object-cover"
            loading="lazy"
            width={1280}
            height={800}
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              CHEGOU A HORA DE TRANSFORMAR SUA CASA E{" "}
              <span className="text-primary">SEU BOLSO!</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pare de gastar caro e comece hoje mesmo. O passo a passo que você precisa está aqui.
            </p>
            <div className="mt-6">
              <Price />
            </div>
            <div className="mt-6">
              <CtaButton />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">ACESSO IMEDIATO • 100% SEGURO</p>
          </div>
        </div>
      </Section>

      {/* 13 RODAPÉ */}
      <footer className="px-4 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-primary" /> COMPRA 100% SEGURA
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-4 w-4 text-primary" /> ACESSO IMEDIATO
            </span>
            <span className="flex items-center gap-1">
              <CreditCard className="h-4 w-4 text-primary" /> PAGAMENTO ÚNICO
            </span>
            <span className="flex items-center gap-1">
              <RefreshCcw className="h-4 w-4 text-primary" /> SATISFAÇÃO GARANTIDA
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span>Termos de Uso</span>
            <span>Política de Privacidade</span>
            <span>Contato</span>
            <span>Suporte</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Luan Barcelos Brummelhaus. Todos os direitos reservados. Produto 100% digital.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- FAQ ---------- */

const FAQ_ITEMS: [string, string][] = [
  [
    "O guia funciona para qualquer tipo de parede?",
    "Sim! O guia ensina para paredes internas, externas, reboco, massa corrida, gesso e mais.",
  ],
  [
    "Preciso de ferramentas profissionais?",
    "Não. Mostramos as ferramentas essenciais e como usar cada uma da forma correta.",
  ],
  [
    "Como recebo o ebook?",
    "Assim que a compra for aprovada, você recebe o acesso imediato para baixar o PDF.",
  ],
  [
    "Posso pedir reembolso?",
    "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro.",
  ],
  [
    "Serve para pintar área externa também?",
    "Sim! O guia possui técnicas específicas para áreas externas e fachadas.",
  ],
  [
    "Posso acessar pelo celular?",
    "Sim! O PDF é otimizado para leitura no celular, tablet ou computador.",
  ],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {FAQ_ITEMS.map(([q, a], i) => (
        <div key={q} className="self-start rounded-xl border border-border bg-card">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center gap-3 p-4 text-left text-sm font-bold"
          >
            {open === i ? (
              <Minus className="h-4 w-4 shrink-0 text-primary" />
            ) : (
              <Plus className="h-4 w-4 shrink-0 text-primary" />
            )}
            {q}
          </button>
          {open === i && (
            <p className="px-4 pb-4 pl-11 text-sm text-muted-foreground">{a}</p>
          )}
        </div>
      ))}
      <div className="flex items-center justify-center gap-3 rounded-xl border border-primary/40 bg-card p-4 text-sm">
        <Smartphone className="h-8 w-8 text-primary" />
        <span>
          Leia no <strong>celular, tablet ou computador</strong> — o PDF vai com você para qualquer
          lugar.
        </span>
      </div>
    </div>
  );
}
