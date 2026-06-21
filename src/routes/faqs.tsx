import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Simanchal Sahu Advisory" },
      { name: "description", content: "30+ answers to the most common questions on life, term, health insurance, retirement and family financial planning." },
      { property: "og:title", content: "Insurance & Financial Planning FAQs" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FaqsPage,
});

const faqs = [
  { cat: "Life Insurance", q: "How much life insurance do I need?", a: "Aim for 15–20× your annual income, plus outstanding loans, minus existing investments. Our calculator personalises this." },
  { cat: "Life Insurance", q: "What's the difference between term insurance and traditional life insurance?", a: "Term insurance is pure protection at low cost. Whereas Life insurance plans bundle savings with cover, typically delivering 4–5% returns over a lifetime." },
  { cat: "Life Insurance", q: "Until what age should I have life cover?", a: "Until your financial dependents are independent or your assets exceed liabilities — usually age 60–65." },
  { cat: "Life Insurance", q: "Can I have multiple life insurance policies?", a: "Yes, as long as the total cover is justified by your income and disclosed to each insurer." },
  { cat: "Life Insurance", q: "Are premiums tax-deductible?", a: "Yes, under Section 80C up to ₹1.5 lakh per year. Payouts are tax-free under Section 10(10D) subject to conditions." },

  { cat: "Term Insurance", q: "Is online term insurance reliable?", a: "Yes. Online plans are cheaper, regulated identically, and settled by the same insurer." },
  { cat: "Term Insurance", q: "Should I choose 'return of premium'?", a: "Usually not. The extra premium invested separately typically grows to much more than the refund." },
  { cat: "Term Insurance", q: "What riders should I add?", a: "Critical illness, accidental disability, and waiver-of-premium are the most universally useful." },
  { cat: "Term Insurance", q: "What if I miss a premium?", a: "Insurers offer a 30-day grace period and revival window up to 5 years. Don't let the policy lapse." },
  { cat: "Term Insurance", q: "Does smoking affect my premium?", a: "Yes, significantly. Always disclose — non-disclosure can void claims." },

  { cat: "Health Insurance", q: "How much health cover should a family have?", a: "₹15–25 lakh family floater in metros; pair with a super top-up for higher overall protection at lower cost." },
  { cat: "Health Insurance", q: "Is corporate health insurance enough?", a: "Rarely. It ends when you leave the job and rarely covers parents adequately. Always have personal cover." },
  { cat: "Health Insurance", q: "What is a pre-existing disease waiting period?", a: "A period (typically 2–4 years) before conditions you had at policy purchase are covered. Buy young to reduce it." },
  { cat: "Health Insurance", q: "What is room rent capping?", a: "A limit on the per-day room expense the insurer covers. Choose policies with no cap or generous limits." },
  { cat: "Health Insurance", q: "Does health insurance cover OPD?", a: "Most policies don't, but specialised plans and add-ons do. Useful for chronic conditions." },

  { cat: "Retirement", q: "When should I start retirement planning?", a: "Ideally in your 20s. Each decade of delay roughly doubles the monthly investment needed." },
  { cat: "Retirement", q: "How much corpus is enough?", a: "Roughly 25× your annual post-retirement expenses (4% safe-withdrawal rule)." },
  { cat: "Retirement", q: "Is NPS a good retirement product?", a: "Yes, particularly for the additional ₹50,000 tax deduction. Combine with EPF and mutual funds." },
  { cat: "Retirement", q: "Should I rely on rental income?", a: "Real estate is illiquid and yields 2–3% in India. Keep it as one component, not the whole plan." },
  { cat: "Retirement", q: "Are annuities worth it?", a: "A small portion of the corpus in an annuity provides a guaranteed floor income — useful, not all of it." },

  { cat: "Child Education", q: "How early should I start saving for my child's education?", a: "At birth. A 15–18 year horizon lets equity SIPs compound powerfully." },
  { cat: "Child Education", q: "What instruments are best for education goals?", a: "Equity mutual funds early on, shifting to debt 2–3 years before the goal." },
  // { cat: "Child Education", q: "Should I buy a 'child plan' from an insurer?", a: "Usually not. A term plan with waiver-of-premium plus mutual fund SIPs is more efficient." },
  { cat: "Child Education", q: "How do I plan for foreign education?", a: "Add a currency-depreciation buffer (~3% per year) and consider USD-denominated investments later." },

  { cat: "Family Finance", q: "How big should my emergency fund be?", a: "6 months of essential expenses, in a liquid mutual fund or sweep-in savings account." },
  { cat: "Family Finance", q: "Should my spouse know all financial details?", a: "Absolutely. Share a simple document with policies, accounts, nominees, and advisor contact." },
  { cat: "Family Finance", q: "Do I need a will if I have nominations?", a: "Yes. Nominees are custodians; legal heirs determine ownership. A simple will avoids disputes." },
  { cat: "Family Finance", q: "How often should I review my finances?", a: "Once a year and after any major life event — marriage, child, job change, home purchase." },
  { cat: "Family Finance", q: "What's the right insurance-to-investment split?", a: "Insurance protects, investments grow. Don't mix — keep them in separate products and reviews." },

  // { cat: "Working Together", q: "How do you get paid?", a: "Transparent fee + insurer-paid commissions on plans you choose. Disclosed upfront, always." },
  { cat: "Working Together", q: "Will you help with claims?", a: "Yes. Lifetime claim support is part of working with us — no extra charge." },
  { cat: "Working Together", q: "How is the first consultation structured?", a: "30 minutes, on phone, WhatsApp or video. We discuss goals and current cover. No pressure to buy." },
];

function FaqsPage() {
  const [q, setQ] = useState("");
  const grouped = useMemo(() => {
    const f = faqs.filter((x) => x.q.toLowerCase().includes(q.toLowerCase()) || x.a.toLowerCase().includes(q.toLowerCase()));
    return f.reduce<Record<string, typeof faqs>>((acc, x) => {
      (acc[x.cat] ??= []).push(x); return acc;
    }, {});
  }, [q]);

  return (
    <>
      <PageHeader eyebrow="FAQs" title="Clear answers to the questions families ask." subtitle="Searchable, categorised, and updated regularly." />
      <section className="container-page py-12 md:py-16">
        <div className="relative max-w-xl mx-auto mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search FAQs..." className="pl-9 h-12" />
        </div>
        <div className="max-w-3xl mx-auto space-y-10">
          {Object.entries(grouped).map(([cat, list]) => (
            <div key={cat}>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">{cat}</h2>
              <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-4">
                {list.map((f) => (
                  <AccordionItem key={f.q} value={f.q} className="last:border-0">
                    <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          {Object.keys(grouped).length === 0 && (
            <p className="text-center text-muted-foreground">No FAQs match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
