import { Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-foreground/10">
              <ShieldCheck className="h-5 w-5 text-accent" />
            </span>
            <span className="font-display text-lg font-bold">Simanchal Sahu</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            Independent financial protection advisor helping Indian families secure their future
            with clarity and care.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-accent">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li><Link to="/services/$slug" params={{ slug: "life-insurance" }} className="hover:text-accent">Life Insurance</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "term-insurance" }} className="hover:text-accent">Term Insurance</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "health-insurance" }} className="hover:text-accent">Health Insurance</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "retirement-planning" }} className="hover:text-accent">Retirement Planning</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "child-education" }} className="hover:text-accent">Child Education</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-accent">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li><Link to="/calculators" className="hover:text-accent">Calculators</Link></li>
            <li><Link to="/resources" className="hover:text-accent">Resources</Link></li>
            <li><Link to="/faqs" className="hover:text-accent">FAQs</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /> +91 96196 00359 / +91 75064 32401</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" /> sahusa03@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /> Mumbai, 400060</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/55">
          {/* <p>© {new Date().getFullYear()} Simanchal Sahu Advisory. All rights reserved.</p> */}
          <p>Insurance is the subject matter of solicitation. Educational information only.</p>
        </div>
      </div>
    </footer>
  );
}
