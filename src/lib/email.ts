import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("Missing required environment variable: RESEND_API_KEY");
}

const resend = new Resend(apiKey);

export async function sendLeadEmail(data: {
  name: string;
  phone: string;
  email?: string;
  type?: string;
  message?: string;
}) {
  await resend.emails.send({
    from: "Leads <onboarding@resend.dev>",
    // to: "sahukiran2909@gmail.com"!,
    to: process.env.RESEND_TO_EMAIL!,
    subject: `New Lead: ${data.name}`,
    text: `
New Lead Received

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || "-"}

Consultation: ${data.type || "-"}

Message:
${data.message || "-"}
`,
  });
}