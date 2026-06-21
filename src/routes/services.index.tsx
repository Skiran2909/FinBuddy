import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { services, ServiceCard } from "@/components/site/services";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Simanchal Sahu Advisory" },
      { name: "description", content: "Life, term, health insurance, retirement, child education and family financial planning — guidance built around your family." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Complete family financial protection services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Complete financial protection for every life stage."
        subtitle="Each service is delivered with the same approach — listen first, recommend only what truly fits."
      />
      <section className="container-page py-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
        <div className="mt-14 rounded-3xl bg-hero p-10 md:p-14 text-primary-foreground text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">Not sure where to start?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">A short conversation usually clarifies the priority. Book a complimentary review.</p>
          <Button asChild variant="gold" size="lg" className="mt-6"><Link to="/contact">Book Free Consultation</Link></Button>
        </div>
      </section>
    </>
  );
}
