import { Link } from "@tanstack/react-router";
import { ShieldCheck, HeartPulse, Umbrella, PiggyBank, GraduationCap, Users, ArrowRight, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { slug: "life-insurance", title: "Life Insurance", short: "Protect your family's financial future with the right life cover.", icon: ShieldCheck },
  { slug: "term-insurance", title: "Term Insurance", short: "Affordable, high-coverage protection designed for breadwinners.", icon: Umbrella },
  { slug: "health-insurance", title: "Health Insurance", short: "Shield your savings from rising medical and hospital expenses.", icon: HeartPulse },
  { slug: "retirement-planning", title: "Retirement Planning", short: "Build a corpus that funds the lifestyle you want after work.", icon: PiggyBank },
  { slug: "child-education", title: "Child Education Planning", short: "Plan early for school, college, and higher education costs.", icon: GraduationCap },
  { slug: "family-financial-planning", title: "Family Financial Planning", short: "A personalised protection strategy for every life stage.", icon: Users },
];

export function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: s.slug }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card-soft hover:border-accent/50"
    >
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent-foreground">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
