import { ReactNode } from "react";

export function PageHeader({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/40">
      <div className="absolute -top-24 right-0 -z-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-page relative py-14 md:py-20">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
