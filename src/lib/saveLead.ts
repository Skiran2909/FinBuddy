import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { db } from "./db";
import { sendLeadNotification } from "./whatsapp";
import { sendLeadEmail } from "./email";

const leadSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().optional(),
  type: z.string().optional(),
  message: z.string().optional(),
});

export const saveLead = createServerFn({ method: "POST" })
  .validator(leadSchema)
  .handler(async ({ data }) => {
    const { name, phone, email, type, message } = data;

    // await db.query(
    //   `
    //   INSERT INTO leads
    //   (
    //     name,
    //     phone,
    //     email,
    //     consultation_type,
    //     message
    //   )
    //   VALUES (?, ?, ?, ?, ?)
    //   `,
    //   [name, phone, email, type, message]
    // );

    await db.collection("leads").insertOne({
        name,
        phone,
        email,
        type,
        message,
        createdAt: new Date(),
        });

    // await sendLeadNotification({
    //   name,
    //   phone,
    //   email,
    //   type,
    //   message,
    // });

    try {
        await sendLeadEmail({
        name,
        phone,
        email,
        type,
        message,
        });
    }
    catch (error) {
        console.error("Email notification failed.", error)
    }

    return {
      success: true,
    };
  });