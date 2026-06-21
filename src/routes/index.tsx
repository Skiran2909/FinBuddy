import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HeartHandshake, Clock, Award, CheckCircle2, Briefcase, HeartPulse, Calculator } from "lucide-react";
import advisorHero from "@/assets/advisor-hero.jpg";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { services, ServiceCard } from "@/components/site/services";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadForm } from "@/components/site/LeadForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simanchal Sahu — Protect Your Family's Future" },
      { name: "description", content: "Expert guidance on life, term, health insurance, retirement and family financial security. Book a free consultation today." },
      { property: "og:title", content: "Simanchal Sahu — Family Financial Protection Advisor" },
      { property: "og:description", content: "Expert guidance on life, term, health insurance, retirement and family financial security." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const metrics = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Families Protected", value: 1200, suffix: "+" },
  { label: "Claims Assisted", value: 340, suffix: "+" },
  { label: "Consultations Completed", value: 500, suffix: "+" },
];

const pillars = [
  { icon: Briefcase, title: "Income Protection", body: "Ensure your family's lifestyle continues — even if your income stops unexpectedly." },
  { icon: ShieldCheck, title: "Family Security", body: "Adequate cover means your loved ones never have to compromise on their future." },
  { icon: HeartPulse, title: "Medical Emergencies", body: "Healthcare costs are rising 14% a year. The right plan keeps savings intact." },
  { icon: Award, title: "Retirement Planning", body: "Start early and let compounding fund the lifestyle you've earned." },
];

const steps = [
  { n: "01", title: "Understand Your Goals", body: "We start with a conversation — your family, dreams, and current situation." },
  { n: "02", title: "Analyse Your Risks", body: "A detailed needs analysis identifies real protection gaps in your finances." },
  { n: "03", title: "Recommend Solutions", body: "Hand-picked plans from top insurers — explained in plain language." },
  { n: "04", title: "Support You Long-Term", body: "Annual reviews, claim assistance, and guidance as life evolves." },
];

const faqs = [
  { q: "How much life insurance do I need?", a: "A common rule is 15–20× your annual income, plus outstanding loans, minus existing assets. Use our calculator for a precise number." },
  { q: "Is term insurance better than traditional plans?", a: "For pure protection, yes — term gives the highest cover at the lowest cost. Investments are usually better kept separate." },
  { q: "How much health insurance should a family have?", a: "In metros, ₹15–25 lakh family floater is a sensible baseline. Top-ups make higher cover affordable." },
  { q: "When should retirement planning start?", a: "Ideally in your 20s. The earlier you start, the smaller the monthly investment needed to reach the same corpus." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/60 via-background to-background" />
        <div className="absolute -top-20 -right-20 -z-10 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl" />
        <div className="container-page grid gap-12 py-14 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--whatsapp)]" />
              IRDAI-licensed · 15+ years advising families
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Protect Your Family <span className="text-accent">Before Life</span> Surprises You.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Expert, unbiased guidance on Life Insurance, Term Insurance, Health Insurance,
              Retirement Planning, and Family Financial Security — built around your goals.
              {/* , not anyone's sales targets. */}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gold">
                <Link to="/contact">Get Free Consultation <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/917506432401" target="_blank" rel="noreferrer">Talk on WhatsApp</a>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 max-w-md text-sm">
              {["No-pressure conversations", "Plans from 25+ insurers", "Lifetime claim support", "Transparent advice"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-primary shadow-elegant">
              <img
                src={advisorHero}
                alt="Simanchal Sahu, family financial protection advisor"
                width={896}
                height={1152}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <p className="font-display text-lg font-semibold text-primary-foreground">Simanchal Sahu</p>
                <p className="text-xs text-primary-foreground/70">Family Protection Advisor</p>
              </div>
            </div>
            <div className="absolute -left-4 bottom-10 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-4 shadow-card-soft">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15">
                <HeartHandshake className="h-5 w-5 text-accent" />
              </div>
              {/* <div>
                <p className="text-sm font-semibold">1,200+ families</p>
                <p className="text-xs text-muted-foreground">trust our guidance</p>
              </div> */}
            </div>
            <div className="absolute -right-4 top-10 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-4 shadow-card-soft">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold">30-min call</p>
                <p className="text-xs text-muted-foreground">complimentary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="container-page py-12 md:py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card-soft">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                <Counter end={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Why it matters</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
            Financial protection isn't a product. It's peace of mind.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every family deserves a plan that holds steady through life's unexpected turns.
            Here's where most Indian families have hidden gaps.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 hover:shadow-card-soft transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">What we do</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
                Complete protection, tailored for Indian families.
              </h2>
            </div>
            <Button asChild variant="outline"><Link to="/services">View all services <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      {/* ASSESSMENT CTA */}
      <section className="container-page py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-8 md:p-14 text-primary-foreground shadow-elegant">
          <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Insurance need assessment</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
                Find out how much protection your family needs.
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-lg">
                Free, anonymous calculators built on actuarial principles. Get a personalised
                coverage number in under 60 seconds.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="gold"><Link to="/calculators"><Calculator className="h-4 w-4" /> Calculate Now</Link></Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/contact">Book Consultation</Link></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Life Cover", v: "₹1.2 Cr" },
                { label: "Health Cover", v: "₹20 L" },
                { label: "Retirement Corpus", v: "₹3.5 Cr" },
                { label: "Child Education", v: "₹85 L" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/60">{c.label}</p>
                  <p className="mt-2 font-display text-2xl font-bold text-accent">{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">How we work</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">A simple, 4-step process built on trust.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-5xl font-bold text-accent/30">{s.n}</p>
              <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-10 -right-3 h-px w-6 bg-border" />}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Trusted by families</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
              Real stories from people we've protected.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Built on referrals, not advertising. That's the truest measure of an advisor.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FAQ PREVIEW + LEAD FORM */}
      <section className="container-page py-16 md:py-24 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">FAQs</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">Questions families ask us most.</h2>
          <Accordion type="single" collapsible className="mt-6">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button asChild variant="ghost" className="mt-4"><Link to="/faqs">See all FAQs <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="lg:pl-4">
          <LeadForm />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center shadow-card-soft">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">Let's secure your family's future.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A 30-minute conversation could change how protected your family really is.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="gold"><Link to="/contact">Schedule Free Consultation</Link></Button>
            <Button asChild size="lg" variant="outline"><a href="https://wa.me/917506432401" target="_blank" rel="noreferrer">WhatsApp Advisor</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
