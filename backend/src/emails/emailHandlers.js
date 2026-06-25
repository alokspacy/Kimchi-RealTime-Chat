import { ENV } from "../lib/env.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  if (!ENV.BREVO_API_KEY) {
    console.warn("BREVO_API_KEY is not set. Skipping welcome email.");
    return;
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": ENV.BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: {
          name: ENV.EMAIL_FROM_NAME || "KimChi Chat",
          email: ENV.EMAIL_FROM
        },
        to: [
          {
            email: email,
            name: name
          }
        ],
        subject: "Welcome to KimChi Chat!",
        htmlContent: createWelcomeEmailTemplate(name, clientURL)
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Error sending welcome email via Brevo:", responseData);
      throw new Error(responseData.message || "Failed to send welcome email via Brevo");
    }

    console.log("Welcome Email sent successfully via Brevo", responseData);
  } catch (error) {
    console.error("Error in sendWelcomeEmail handler:", error);
    throw error;
  }
};
