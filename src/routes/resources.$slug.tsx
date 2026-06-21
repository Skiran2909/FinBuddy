import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Minimal placeholder page so the resources cards can be clickable.
// You can replace the body with real article content later.
const articleContent = {
  "how-much-term-insurance-do-i-really-need": {
    title: "How much term insurance do I really need?",
    category: "Term Insurance",
    read: 6,
    excerpt: "A clear framework using income, loans and inflation — not generic multipliers.",
    body: [
      "Start with your family’s ‘needs’—income replacement, outstanding loans, and lifestyle inflation.",
      "Then subtract safe assets already available to your family (savings, liquid funds, etc.).",
      "Use a structured worksheet so your final number is explainable—not guessed.",
    ],
  },
  "ulip-vs-term-mutual-fund-an-honest-comparison": {
    title: "ULIP vs Term + Mutual Fund: an honest comparison",
    category: "Life Insurance",
    read: 8,
    excerpt: "Why separating protection from investment usually wins.",
    body: [
      "Term insurance is pure protection with lower cost and clearer value.",
      "Mutual funds handle the ‘growth’ part, with transparent NAV and liquidity.",
      "Combining them typically gives better control and performance visibility.",
    ],
  },
  "the-hidden-cost-of-low-health-insurance-cover": {
    title: "The hidden cost of low health insurance cover",
    category: "Health Insurance",
    read: 5,
    excerpt: "Why ₹5 lakh family floater isn't enough in 2026.",
    body: [
      "Medical inflation and hospital billing push your out-of-pocket exposure higher.",
      "Check the network hospitals, room rent limits, sub-limits, and co-pay terms.",
      "Top-ups / super top-ups can make higher cover achievable without paying for full premium on the entire amount.",
    ],
  },
  "retirement-at-60-how-much-corpus-is-enough": {
    title: "Retirement at 60: how much corpus is enough?",
    category: "Retirement Planning",
    read: 7,
    excerpt: "Plug your numbers into the 25× rule — and see what real freedom costs.",
    body: [
      "A simple approach: estimate annual post-retirement expenses and multiply by 25.",
      "Adjust for inflation, healthcare inflation, and any one-time goals.",
      "Then stress-test—what if returns are lower or life events cost more?",
    ],
  },
  "emergency-fund-the-first-protection-product-youll-ever-buy": {
    title: "Emergency fund: the first protection product you'll ever buy",
    category: "Family Finance",
    read: 4,
    excerpt: "Six months of expenses. In a liquid account. Today.",
    body: [
      "Treat emergencies as predictable risks—your cash plan reduces panic and bad decisions.",
      "Aim for ~6 months of essential expenses.",
      "Keep it in instruments with capital protection and fast liquidity (liquid / sweep / high-quality debt).",
    ],
  },
  "nomination-vs-will-protect-what-youve-built": {
    title: "Nomination vs Will: protect what you've built",
    category: "Financial Protection",
    read: 6,
    excerpt: "Why nominees aren't always beneficiaries — and how to fix this in 30 minutes.",
    body: [
      "Nomination is about ‘custody’ for assets; it does not automatically transfer ownership like a will.",
      "A will helps clarify beneficiaries and reduces family disputes.",
      "Even a simple will can provide strong protection for your intended heirs.",
    ],
  },
  "critical-illness-rider-who-actually-needs-it": {
    title: "Critical illness rider: who actually needs it?",
    category: "Health Insurance",
    read: 5,
    excerpt: "When this rider is worth every rupee — and when it isn't.",
    body: [
      "Ask whether the rider’s covered conditions match your family’s risk profile.",
      "Compare rider cost vs how much savings you’d otherwise have to pay out-of-pocket.",
      "If you can comfortably self-fund emergencies, the need may be lower—otherwise it can be valuable.",
    ],
  },
  "building-a-child-education-corpus-from-day-one": {
    title: "Building a child education corpus from day one",
    category: "Family Finance",
    read: 7,
    excerpt: "How a ₹10,000 SIP at birth becomes ₹85 lakh by college.",
    body: [
      "Start early: your horizon gives equity SIPs room to compound.",
      "Shift gradually to lower-volatility assets as the goal date approaches.",
      "Use milestone tracking—don’t invest blindly without rebalancing the plan.",
    ],
  },
  "claim-settlement-ratio-how-to-read-it-correctly": {
    title: "Claim settlement ratio: how to read it correctly",
    category: "Life Insurance",
    read: 5,
    excerpt: "What 99% really means — and what it doesn't.",
    body: [
      "Look beyond the headline: understand the claim definition and time period.",
      "Ensure the insurer’s settlement practices match your policy type.",
      "Always read exclusions, waiting periods, and documentation requirements.",
    ],
  },
};

type Article = {
  title: string;
  category: string;
  read: number;
  excerpt: string;
  body: string[];
};

type ArticleContent = Record<string, Article>;

function slugToArticle(slug: string): Article | undefined {
  return (articleContent as ArticleContent)[slug];
}


export const Route = createFileRoute("/resources/$slug")({
  component: ResourceArticlePage,
});

function ResourceArticlePage() {
  const { slug } = Route.useParams();
  const article = slugToArticle(slug);

  if (!article) {
    return (
      <>
        <PageHeader
          eyebrow="Resources"
          title="Article not found"
          subtitle="This article may have been moved or the slug is incorrect."
        />
        <section className="container-page py-12">
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">No content available for this resource.</p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link to="/resources">
                  <ArrowLeft className="h-4 w-4" /> Back to resources
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        subtitle={`${article.read} min read · ${article.excerpt}`}
      />

      <section className="container-page py-10 md:py-14">
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6 md:p-10">
          {article.body.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "text-base leading-relaxed" : "mt-4 text-sm md:text-base leading-relaxed text-muted-foreground"}>
              {p}
            </p>
          ))}

          <div className="mt-8">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">Ask an advisor about this</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

