import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import advisorHero from "@/assets/advisor-hero.jpg";
import { Award, BookOpen, Compass, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Simanchal Sahu — Family Protection Advisor" },
      { name: "description", content: "15+ years guiding Indian families on insurance, retirement and financial protection — independent, transparent, family-first." },
      { property: "og:title", content: "About Simanchal Sahu" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const expertise = [
  "Life & Term Insurance Strategy",
  "Health Insurance & Top-ups",
  "Retirement & Pension Planning",
  "Child Education Goal Planning",
  "Estate & Nomination Guidance",
  "Claim Assistance & Reviews",
];

const values = [
  { icon: HeartHandshake, t: "Family-first", d: "Every recommendation passes one filter: is this what I'd suggest to my own family?" },
  { icon: Compass, t: "Independent", d: "No exclusive ties. Access to plans from 25+ leading insurers." },
  { icon: BookOpen, t: "Educator, not salesperson", d: "You learn the reasoning behind every decision." },
  { icon: Award, t: "Accountable", d: "Lifetime claim and review support — long after the policy is signed." },
];

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="A trusted family protection advisor, not a salesperson." subtitle="Hi, I'm Simanchal. For 15+ years I've helped families make calm, informed decisions about money and protection." />
      <section className="container-page py-14 md:py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-primary shadow-elegant">
            <img src={advisorHero} alt="Simanchal Sahu" width={896} height={1152} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold">My story</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              I started this practice after seeing people struggle with a delayed insurance claims. 
              The product was right; the guidance wasn't. I promised myself families
              should never face that confusion alone — and built a practice around clear, patient,
              long-term advice.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">My mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To help every Indian family understand exactly how protected they are — and to close any
              gap before life tests it. Not a sales target. A standard.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Experience & qualifications</h2>
            <ul className="mt-3 grid gap-2 text-foreground/85">
              <li>• 15+ years as an IRDAI-licensed advisor</li>
              <li>• Certified Financial Planner (CFP) coursework</li>
              <li>• 1,200+ families advised across India</li>
              <li>• 340+ claim cases assisted to settlement</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Areas of expertise</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {expertise.map((e) => (
                <span key={e} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container-page">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance max-w-2xl">What guides every conversation.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.t} className="rounded-2xl border border-border bg-card p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-6 w-6 text-accent" /></div>
                  <h3 className="mt-4 font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="gold" size="lg"><Link to="/contact">Have a 30-minute conversation</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
