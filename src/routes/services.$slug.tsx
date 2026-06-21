import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { services } from "@/components/site/services";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/site/LeadForm";

type Detail = {
  problem: string;
  why: string[];
  mistakes: string[];
  guidance: string[];
};

const details: Record<string, Detail> = {
  "life-insurance": {
    problem: "Most Indian families are dangerously under-insured. The cover bought decades ago rarely keeps pace with today's income, loans, or aspirations.",
    why: ["Replaces lost income for 15–20 years", "Pays off loans so home stays with family", "Funds children's education milestones", "Preserves spouse's retirement plan"],
    mistakes: ["Treating life insurance as an investment", "Buying based on tax-saving alone", "Mixing protection with savings (endowment/ULIP)", "Underestimating future inflation"],
    guidance: ["Calculate cover with the human-life-value method", "Prefer term for protection, separate vehicles for investing", "Review every 3 years or after major life events", "Disclose health and lifestyle truthfully to protect future claims"],
  },
  "term-insurance": {
    problem: "Term insurance is the most efficient form of protection — yet families often buy the wrong amount, wrong tenure, or wrong rider mix.",
    why: ["Highest cover at the lowest premium", "Locks in low rates when you're young and healthy", "Critical for any earner with dependents or loans", "Pure protection — no investment confusion"],
    mistakes: ["Buying ₹50 lakh when ₹2 crore is needed", "Choosing tenure that ends before retirement", "Skipping critical-illness and accidental disability riders", "Hiding pre-existing conditions"],
    guidance: ["Cover = 15–20× income + outstanding loans", "Tenure until age 60–65", "Compare claim-settlement ratios, not just price", "Add waiver-of-premium for long-term peace of mind"],
  },
  "health-insurance": {
    problem: "Hospital costs in India are rising at 14% a year. A single ICU stay can wipe out a decade of savings if cover is inadequate.",
    why: ["Protects emergency savings and investments", "Covers cashless treatment in top hospitals", "Pre and post-hospitalisation expenses included", "Tax benefit under Section 80D"],
    mistakes: ["Relying only on corporate group cover", "Choosing low cover to save premium", "Ignoring room-rent and co-pay limits", "Buying without comparing claim experience"],
    guidance: ["Family floater of ₹15–25 lakh in metros", "Add a ₹50 lakh+ super top-up for affordability", "Choose insurers with strong cashless networks", "Buy young — pre-existing waiting periods reduce over time"],
  },
  "retirement-planning": {
    problem: "Indians are living longer but pensions have shrunk. Without planning, retirement can become a 25-year financial stress.",
    why: ["Inflation halves your money every ~12 years", "Healthcare costs spike post-60", "Children may have their own families to support", "Lifestyle aspirations don't retire"],
    mistakes: ["Starting only in your 40s", "Counting on real estate or children", "Ignoring inflation in projections", "Investing too conservatively early on"],
    guidance: ["Start by age 30 — compounding does the heavy lifting", "Target a corpus = 25× annual post-retirement expenses", "Use a mix of EPF, NPS, equity mutual funds, and annuities", "Review every 3 years and rebalance"],
  },
  "child-education": {
    problem: "Quality education already costs ₹25–80 lakh today. By the time your child enrolls, costs could easily double.",
    why: ["Education inflation runs 10–12% annually", "Loans burden young adults at career start", "Foreign education adds currency risk", "Goal-based investing reduces last-minute stress"],
    mistakes: ["Saving in low-yield instruments", "Starting only when child reaches 10", "Not factoring inflation into the goal", "Mixing education savings with general investments"],
    guidance: ["Define the goal in future rupees, not today's", "Start a dedicated SIP at child's birth", "Shift to debt 2–3 years before the goal", "Pair with a term plan with waiver-of-premium"],
  },
  "family-financial-planning": {
    problem: "Most families have scattered policies and investments with no unified plan — leading to gaps, overlap, and missed goals.",
    why: ["A single integrated plan saves money and stress", "Goals get prioritised — education, home, retirement", "Risk and tax efficiency improve together", "Spouse and children stay informed"],
    mistakes: ["No emergency fund", "Buying products instead of building a plan", "Spouse unaware of financial details", "No nomination or estate planning"],
    guidance: ["Build 6 months' expenses as emergency reserve", "Document all policies and investments in one place", "Set clear nominations and a simple will", "Schedule annual family financial reviews"],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s || !details[params.slug]) throw notFound();
    return { service: s, detail: details[params.slug] };
  },
  head: ({ params, loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title ?? "Service"} — Simanchal Sahu Advisory` },
      { name: "description", content: loaderData?.service.short ?? "Family financial protection service." },
      { property: "og:title", content: loaderData?.service.title },
      { property: "og:description", content: loaderData?.service.short },
      { property: "og:url", content: `/services/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/services/${params.slug}` }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <Button asChild className="mt-6"><Link to="/services">Back to services</Link></Button>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service, detail } = Route.useLoaderData();
  const Icon = service.icon;
  return (
    <>
      <PageHeader eyebrow="Service" title={service.title} subtitle={service.short}>
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Icon className="h-6 w-6 text-accent" />
          </span>
          <Button asChild variant="gold"><Link to="/contact">Get personalised advice <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </PageHeader>

      <section className="container-page py-14 md:py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold">The problem most families face</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{detail.problem}</p>
          </div>
          <Section title="Why it matters" icon={<CheckCircle2 className="h-5 w-5 text-accent" />} items={detail.why} tone="positive" />
          <Section title="Common mistakes to avoid" icon={<AlertTriangle className="h-5 w-5 text-accent" />} items={detail.mistakes} tone="warn" />
          <Section title="Advisor guidance" icon={<Lightbulb className="h-5 w-5 text-accent" />} items={detail.guidance} tone="positive" />
        </div>
        <aside className="lg:sticky lg:top-24 self-start">
          <LeadForm />
        </aside>
      </section>
    </>
  );
}

function Section({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[]; tone: "positive" | "warn" }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card-soft">
      <div className="flex items-center gap-2">{icon}<h3 className="font-display text-xl font-semibold">{title}</h3></div>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{it}
          </li>
        ))}
      </ul>
    </div>
  );
}
