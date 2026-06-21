import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { name: "Rohit & Priya Sharma", role: "Parents · Bengaluru", text: "Simanchal helped us understand exactly how much cover our family needed. No pressure, just clear advice. We finally sleep peacefully." },
  { name: "Anjali Verma", role: "IT Professional · Pune", text: "I had bought random policies over the years. Simanchal reviewed everything and built one clean plan. Saved me money and confusion." },
  { name: "Vikram Iyer", role: "Business Owner · Mumbai", text: "His approach is what every advisor should follow — listen first, recommend later. My family's protection is finally on solid ground." },
  { name: "Meera Nair", role: "Doctor · Kochi", text: "Detailed, patient, and refreshingly honest. He even helped my parents with a hospital claim. A true family advisor." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <div className="relative rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card-soft">
      <div className="flex gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <p className="mt-6 text-xl md:text-2xl font-display font-medium leading-snug text-foreground text-balance">
        “{t.text}”
      </p>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold">
            {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <p className="font-semibold text-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
