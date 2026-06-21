import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Simanchal Sahu — Book a Free Consultation" },
      { name: "description", content: "Book a free 30-minute consultation by phone, WhatsApp, video or in-person. Independent family protection advisor." },
      { property: "og:title", content: "Contact Simanchal Sahu" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk about your family's protection." subtitle="A complimentary 30-minute conversation. No pressure. Just clarity." />
      <section className="container-page py-12 md:py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
        <div className="space-y-4">
          <InfoCard icon={Phone} title="Call us" lines={["+91 96196 00359", "+91 75064 32401"]} href="tel:+919619600359" />
          {/* <InfoCard icon={MessageCircle} title="WhatsApp" lines={["+91 75064 32401 — fastest response, usually within an hour."]} href="https://wa.me/917506432401" external /> */}
          <InfoCard icon={Mail} title="Email" lines={["sahusa03@gmail.com"]} href="mailto:sahusa03@gmail.com" />
          <InfoCard icon={MapPin} title="Office" lines={["Mumbai, 400060"]} />
          <InfoCard icon={Clock} title="Hours" lines={["Mon – Sat · 10:00 AM – 7:00 PM IST"]} />
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Mumbai+400060&output=embed"
              width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }}
            />
          </div>
        </div>
        <div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, lines, href, external }: { icon: any; title: string; lines: string[]; href?: string; external?: boolean }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-accent/50">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shrink-0">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold">{title}</p>
        {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
      </div>
    </div>
  );
  if (!href) return inner;
  return external
    ? <a href={href} target="_blank" rel="noreferrer">{inner}</a>
    : <a href={href}>{inner}</a>;
}
