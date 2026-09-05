import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-primary py-14 text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 text-center sm:flex-row sm:text-left">
        <ShieldCheck className="h-14 w-14 shrink-0 text-brand" strokeWidth={1.5} />
        <div>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            7 dias de garantia incondicional
          </h2>
          <p className="mt-2 max-w-2xl text-primary-foreground/75">
            Se em uma semana você achar que o ebook não é para você, é só
            pedir o reembolso. Devolvemos 100% do valor, sem burocracia e
            sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
