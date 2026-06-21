import axios from "axios";

export async function sendLeadNotification(data: {
  name: string;
  phone: string;
  email?: string;
  type?: string;
  message?: string;
}) {
  await axios.post(
    `https://graph.facebook.com/v23.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      messaging_product: "whatsapp",
      to: process.env.WHATSAPP_NOTIFY_TO,
      type: "text",
      text: {
        body: `
New Lead Received

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || "-"}

Consultation: ${data.type || "-"}

Message:
${data.message || "-"}
`,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );
}