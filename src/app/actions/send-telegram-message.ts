'use server';

import type { z } from "zod";
import type { volunteerFormSchema } from "@/components/volunteer-form";

export async function sendVolunteerDetailsToTelegram(
    values: z.infer<typeof volunteerFormSchema>
) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error("Telegram environment variables are not set.");
        return { success: false, message: "Server configuration error." };
    }

    const messageLines = [
        "🔔 *New Volunteer Registration!*",
        `*Name:* ${values.name}`,
        `*Email:* ${values.email}`,
    ];

    if (values.phone) {
        messageLines.push(`*Phone:* ${values.phone}`);
    }

    if (values.message) {
        messageLines.push(`*Message:* ${values.message}`);
    }

    const message = messageLines.join("\n");

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        const result = await response.json();

        if (!result.ok) {
            console.error("Telegram API Error:", result.description);
            return { success: false, message: "Failed to send message." };
        }

        return { success: true, message: "Message sent successfully!" };

    } catch (error) {
        console.error("Failed to send Telegram message:", error);
        return { success: false, message: "An unexpected error occurred." };
    }
}
