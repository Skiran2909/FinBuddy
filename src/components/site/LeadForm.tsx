import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { saveLead } from "@/lib/saveLead";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    if (!name || phone.length < 10) {
      toast.error("Please enter your name and a valid phone number.");
      return;
    }
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setDone(true);
    //   toast.success("Thank you! We will reach out within 24 hours.");
    // }, 700);

    try {
      // const response = await fetch(
      //   "/api/leads",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name,
      //       phone,
      //       email: fd.get("email"),
      //       type: fd.get("type"),
      //       message: fd.get("message"),
      //     }),
      //   }
      // );

      const response = await saveLead({
        data: {
          name,
          phone,
          email: String(fd.get("email") || ""),
          type: String(fd.get("type") || ""),
          message: String(fd.get("message") || ""),
        },
      });

      // if (!response.ok) {
      //   throw new Error();
      // }

      if (!response?.success) {
        throw new Error("Failed to save lead");
      }

      setDone(true);

      toast.success(
        "Thank you! We will reach out within 24 hours."
      );
    } catch (error) {
      console.error("Lead submission failed:", error);

      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-4 font-display text-xl font-semibold">You're all set</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've received your request. A complimentary 30-minute call will be scheduled shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? "" : "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card-soft"}`}>
      {!compact && (
        <div>
          <h3 className="font-display text-2xl font-semibold">Get Personalised Guidance</h3>
          <p className="mt-1 text-sm text-muted-foreground">Free 30-minute consultation. No obligation.</p>
        </div>
      )}
      <div className="grid gap-2">
        <Label htmlFor="lf-name">Full Name</Label>
        <Input id="lf-name" name="name" placeholder="Your name" required maxLength={80} />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="lf-phone">Phone Number</Label>
          <Input id="lf-phone" name="phone" type="tel" placeholder="+91 98xxxxxxxx" required maxLength={15} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lf-email">Email</Label>
          <Input id="lf-email" name="email" type="email" placeholder="xyz@gmail.com" maxLength={120} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="lf-type">Preferred Consultation</Label>
        <Select name="type" defaultValue="phone">
          <SelectTrigger id="lf-type"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="phone">Phone Call</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
            <SelectItem value="video">Video Meeting</SelectItem>
            <SelectItem value="inperson">In-person (Mumbai)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {!compact && (
        <div className="grid gap-2">
          <Label htmlFor="lf-msg">What would you like to discuss? (optional)</Label>
          <Textarea id="lf-msg" name="message" rows={3} maxLength={500} placeholder="e.g. Reviewing my term plan, planning for child's education..." />
        </div>
      )}
      <Button type="submit" variant="gold" size="lg" disabled={loading}>
        {loading ? "Sending..." : "Get Free Consultation"}
      </Button>
      <p className="text-[11px] text-muted-foreground">By submitting, you agree to be contacted about your enquiry. Your data is kept private.</p>
    </form>
  );
}
