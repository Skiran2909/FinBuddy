import { createFileRoute, Link } from "@tanstack/react-router";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, ArrowRight, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Articles — Simanchal Sahu Advisory" },
      { name: "description", content: "Educational articles on life, term, health insurance, retirement and family financial planning." },
      { property: "og:title", content: "Family Finance Resources" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const categories = ["All", "Life Insurance", "Term Insurance", "Health Insurance", "Retirement Planning", "Family Finance", "Financial Protection"] as const;

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const articles = [
  { title: "How much term insurance do I really need?", category: "Term Insurance", read: 6, excerpt: "A clear framework using income, loans and inflation — not generic multipliers." },
  { title: "ULIP vs Term + Mutual Fund: an honest comparison", category: "Life Insurance", read: 8, excerpt: "Why separating protection from investment usually wins." },
  { title: "The hidden cost of low health insurance cover", category: "Health Insurance", read: 5, excerpt: "Why ₹5 lakh family floater isn't enough in 2026." },
  { title: "Retirement at 60: how much corpus is enough?", category: "Retirement Planning", read: 7, excerpt: "Plug your numbers into the 25× rule — and see what real freedom costs." },
  { title: "Emergency fund: the first protection product you'll ever buy", category: "Family Finance", read: 4, excerpt: "Six months of expenses. In a liquid account. Today." },
  { title: "Nomination vs Will: protect what you've built", category: "Financial Protection", read: 6, excerpt: "Why nominees aren't always beneficiaries — and how to fix this in 30 minutes." },
  { title: "Critical illness rider: who actually needs it?", category: "Health Insurance", read: 5, excerpt: "When this rider is worth every rupee — and when it isn't." },
  { title: "Building a child education corpus from day one", category: "Family Finance", read: 7, excerpt: "How a ₹10,000 SIP at birth becomes ₹85 lakh by college." },
  { title: "Claim settlement ratio: how to read it correctly", category: "Life Insurance", read: 5, excerpt: "What 99% really means — and what it doesn't." },
].map((a) => ({
  ...a,
  slug: slugify(a.title),
}));


function ResourcesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => articles.filter((a) => (cat === "All" || a.category === cat) && a.title.toLowerCase().includes(q.toLowerCase())),
    [q, cat],
  );

  return (
    <>
      <PageHeader eyebrow="Resources" title="Learn before you decide." subtitle="Plain-English guides on every aspect of family financial protection." />
      <section className="container-page py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${cat === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:bg-muted"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <Link
              key={a.title}
              to="/resources/$slug"
              params={{ slug: a.slug }}
              className="group"
            >
              <article className="flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-accent/50 hover:shadow-card-soft transition">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 font-semibold text-primary">{a.category}</span>
                  <span className="text-muted-foreground">{a.read} min read</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{a.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent-foreground">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border p-12 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-3 text-muted-foreground">No articles match that search yet.</p>
            </div>
          )}
        </div>

        <AskAdvisor />
      </section>
    </>
  );
}

function AskAdvisor() {
  const [done, setDone] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
    toast.success("Thank you! Your question has been sent to Simanchal.");
  }
  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr] rounded-3xl border border-border bg-muted/50 p-8 md:p-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Ask an Advisor</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-balance">Have a specific question?</h2>
        <p className="mt-3 text-muted-foreground">Submit it below. Selected questions are answered publicly to help other families too.</p>
      </div>
      {done ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center self-center">
          <p className="font-display text-xl font-semibold">Question received ✓</p>
          <p className="mt-2 text-sm text-muted-foreground">We aim to respond within 2 business days.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2"><Label htmlFor="aa-name">Name</Label><Input id="aa-name" required maxLength={80} /></div>
            <div className="grid gap-2"><Label htmlFor="aa-email">Email</Label><Input id="aa-email" type="email" required maxLength={120} /></div>
          </div>
          <div className="grid gap-2"><Label htmlFor="aa-q">Your question</Label><Textarea id="aa-q" rows={4} required maxLength={600} placeholder="e.g. Should I switch from endowment to term?" /></div>
          <Button type="submit" variant="gold" size="lg"><Send className="h-4 w-4" />Send</Button>
        </form>
      )}
    </div>
  );
}
