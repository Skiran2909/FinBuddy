import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, ShieldCheck, PiggyBank, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Free Financial Calculators — Simanchal Sahu Advisory" },
      { name: "description", content: "Calculate life insurance cover, retirement corpus and child education needs in seconds." },
      { property: "og:title", content: "Free Financial Calculators" },
      { property: "og:url", content: "/calculators" },
    ],
    links: [{ rel: "canonical", href: "/calculators" }],
  }),
  component: CalculatorsPage,
});

const fmt = (n: number) => `₹ ${Math.round(n).toLocaleString("en-IN")}`;

function CalculatorsPage() {
  return (
    <>
      <PageHeader eyebrow="Calculators" title="Plan with numbers, not guesswork." subtitle="Three quick tools to size up the protection your family actually needs." />
      <section className="container-page py-12 md:py-16">
        <Tabs defaultValue="life" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto">
            <TabsTrigger value="life"><ShieldCheck className="h-4 w-4 mr-1.5" />Life Cover</TabsTrigger>
            <TabsTrigger value="retire"><PiggyBank className="h-4 w-4 mr-1.5" />Retirement</TabsTrigger>
            <TabsTrigger value="edu"><GraduationCap className="h-4 w-4 mr-1.5" />Education</TabsTrigger>
          </TabsList>
          <TabsContent value="life" className="mt-8"><LifeCalc /></TabsContent>
          <TabsContent value="retire" className="mt-8"><RetireCalc /></TabsContent>
          <TabsContent value="edu" className="mt-8"><EduCalc /></TabsContent>
        </Tabs>
      </section>
    </>
  );
}

function CalcShell({ title, desc, children, result }: { title: string; desc: string; children: React.ReactNode; result: React.ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] max-w-5xl mx-auto">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card-soft">
        <div className="flex items-center gap-2 text-accent"><Calculator className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-wider">Inputs</span></div>
        <h3 className="mt-1 font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        <div className="mt-6 grid gap-4">{children}</div>
      </div>
      <div className="rounded-2xl bg-hero p-8 text-primary-foreground shadow-elegant flex flex-col justify-center">{result}</div>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <Input type="number" {...props} />
    </div>
  );
}

function LifeCalc() {
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [savings, setSavings] = useState("");
  const [loans, setLoans] = useState("");
  const [deps, setDeps] = useState("");

  const [result, setResult] = useState<number | null>(null);

  const calculateCover = () => {
    const ageNum = Number(age) || 0;
    const incomeNum = Number(income) || 0;
    const savingsNum = Number(savings) || 0;
    const loansNum = Number(loans) || 0;
    const depsNum = Number(deps) || 0;

    const years = Math.max(15, Math.min(25, 60 - ageNum));
    const incomeNeed = incomeNum * years * 0.8;
    const depsFactor = 1 + (depsNum - 1) * 0.08;
    const required = Math.max(0, incomeNeed * depsFactor + loansNum - savingsNum);

    setResult(Math.max(0, required));
  };

  const hasInputs = age && income && savings && loans && deps;
  

  return (
    <CalcShell
      title="Life Insurance Coverage"
      desc="Human-life-value approach with income replacement, dependents and liabilities."
      result={
        <div>
          <p className="text-xs uppercase tracking-wider text-primary-foreground/70">
          { result !== null ? "Recommended Cover" : ""}</p>
          {/* <p className="mt-2 font-display text-4xl md:text-5xl font-bold text-accent">{fmt(required)}</p> */}
          <p className="mt-2 font-display text-4xl md:text-5xl font-bold text-accent">
            {/* {hasInputs ? fmt(required) : "Fill in the details"} */}
            {result !== null ? fmt(result) : "Fill in the details"}  
          </p>
          {/* <p className="mt-3 text-sm text-primary-foreground/80">≈ {Math.round(required / income)}× your annual income for {years} years of replacement.</p> */}
          {/* {hasInputs && (
            <p className="mt-3 text-sm text-primary-foreground/80">
              ≈ {Math.round(required / incomeNum)}× your annual income for {years} years of replacement.
            </p>
          )} */}
          {result !== null && (
            <p className="mt-3 text-sm text-primary-foreground/80">
              Your recommended life insurance cover has been calculated.
            </p>
          )}
          <Button asChild variant="gold" className="mt-6 w-fit"><a href="/contact">Get a personalised plan</a></Button>
        </div>
      }
    >
      <Field label="Your current age" placeholder="Enter age here" value={age} onChange={(e) => setAge(e.target.value)} />
      <Field label="Annual income (₹)" placeholder="Enter Annual Income here" value={income} onChange={(e) => setIncome(e.target.value)} />
      <Field label="Existing savings & investments (₹)" placeholder="Enter Savings here" value={savings} onChange={(e) => setSavings(e.target.value)} />
      <Field label="Outstanding loans (₹)" placeholder="Enter Outstanding Loans Amount here" value={loans} onChange={(e) => setLoans(e.target.value)} />
      <Field label="Number of dependents" placeholder="Enter Number of Dependents here" value={deps} onChange={(e) => setDeps(e.target.value)} />
      
      <Button type="button" variant="default" className="mt-2" onClick={calculateCover}>  Calculate </Button>
    </CalcShell>
  );
}

function RetireCalc() {
  const [age, setAge] = useState("");
  const [retAge, setRetAge] = useState("");
  const [savings, setSavings] = useState("");
  const [monthly, setMonthly] = useState("");
  const r = 0.10 / 12;

  const [result, setResult] = useState<number | null>(null);

  const calculateCover = () => {
    const ageNum = Number(age) || 0;
    const retAgeNum = Number(retAge) || 0;
    const savingsNum = Number(savings) || 0;
    const monthlyNum = Number(monthly) || 0;
    
    const n = Math.max(0, (retAgeNum  - ageNum) * 12);
    const futureSav = savingsNum * Math.pow(1 + 0.10, retAgeNum - ageNum);
    const futureSip = monthlyNum * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const corpus = futureSav + futureSip;

    setResult(Math.max(0, corpus));
  };

  return (
    <CalcShell
      title="Retirement Corpus"
      desc="Assumes 10% annualised growth on equity-tilted investments."
      result={
        <div>
          <p className="text-xs uppercase tracking-wider text-primary-foreground/70">
          {result !== null ? "Estimated Retirement fund at {retAge}" : ""}</p>
          <p className="mt-2 font-display text-4xl md:text-5xl font-bold text-accent">
            {/* {fmt(corpus)} */}
            {result !== null ? fmt(result) : "Fill in the details"} </p>
          {/* <p className="mt-3 text-sm text-primary-foreground/80">Monthly post-retirement income (4% rule): ~{fmt(corpus * 0.04 / 12)}</p> */}
          {result !== null && (<p className="mt-3 text-sm text-primary-foreground/80">Monthly post-retirement income (4% rule): ~{fmt(result * 0.04 / 12)}
            </p> )}
          <Button asChild variant="gold" className="mt-6 w-fit"><a href="/contact">Plan my retirement</a></Button>
        </div>
      }
    >
      <Field label="Current age" placeholder="Enter age here" value={age} onChange={(e) => setAge(e.target.value)} />
      <Field label="Retirement age" placeholder="Enter Retirement Age here" value={retAge} onChange={(e) => setRetAge(e.target.value)} />
      <Field label="Current retirement savings (₹)" placeholder="Enter Savings here" value={savings} onChange={(e) => setSavings(e.target.value)} />
      <Field label="Monthly investment (₹)" placeholder="Enter Monthly investment here" value={monthly} onChange={(e) => setMonthly(e.target.value)} />
      <Button type="button" variant="default"  className="mt-2" onClick={calculateCover}>  Calculate </Button>
    </CalcShell>
  );
}

function EduCalc() {
  const [childAge, setChildAge] = useState("");
  const [eduAge, setEduAge] = useState("");
  const [costToday, setCostToday] = useState("");

  const childAgeNum = Number(childAge) || 0;
  const eduAgeeNum = Number(eduAge) || 0;
  const costTodayNum = Number(costToday) || 0;
  const years = Math.max(0, eduAgeeNum - childAgeNum);

  const [result, setResult] = useState<number | null>(null);
  const calculateCover = () => {
    const future = costTodayNum * Math.pow(1.10, years);
    setResult(Math.max(0, future));
  };
  

  return (
    <CalcShell
      title="Child Education Goal"
      desc="Education inflation assumed at 10% per year."
      result={
        <div>
          <p className="text-xs uppercase tracking-wider text-primary-foreground/70"> 
          {result !== null ? "Future Cost in {years} years" : ""}</p>
          <p className="mt-2 font-display text-4xl md:text-5xl font-bold text-accent">
            {/* {fmt(future)} */}
            {result !== null ? fmt(result) : "Fill in the details"}</p>
          {/* <p className="mt-3 text-sm text-primary-foreground/80">A SIP of ~{fmt(future / (years * 12) * 0.55)} for {years} years can typically build this corpus.</p> */}
          {result !== null && (<p className="mt-3 text-sm text-primary-foreground/80">A SIP of ~{fmt(result / (years * 12) * 0.55)} for {years} years can typically build this corpus.
            </p> )}
          <Button asChild variant="gold" className="mt-6 w-fit"><a href="/contact">Build my child's plan</a></Button>
        </div>
      }
    >
      <Field label="Child's current age" placeholder="Enter Child's Age here" value={childAge} onChange={(e) => setChildAge(e.target.value)} />
      <Field label="Target education age" placeholder="Enter Child's Education completion Age here" value={eduAge} onChange={(e) => setEduAge(e.target.value )} />
      <Field label="Estimated cost today (₹)" placeholder="Enter Estimated cost of Education Today here" value={costToday} onChange={(e) => setCostToday(e.target.value )} />
      <Button type="button" variant="default"  className="mt-2" onClick={calculateCover}>  Calculate </Button>
    </CalcShell>
  );
}
