import { Resend } from "resend";

// Initialize Resend
const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function sendContactEmail(
  senderName: string,
  senderEmail: string,
  message: string
): Promise<boolean> {
  // If no Resend API key, log the message (for development)
  if (!resend) {
    console.log("📧 Contact Message (Resend not configured):");
    console.log(`From: ${senderName} <${senderEmail}>`);
    console.log(`Message: ${message}`);
    return true;
  }

  try {
    const response = await resend.emails.send({
      from: "mumathedeveloper@gmail.com",
      to: "mumathedeveloper@gmail.com",
      replyTo: senderEmail,
      subject: `New Contact Message from ${senderName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">New Contact Message</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0 0 15px 0;">
              <strong style="color: #374151;">From:</strong><br>
              ${senderName} &lt;${senderEmail}&gt;
            </p>
            
            <p style="margin: 0 0 15px 0;">
              <strong style="color: #374151;">Message:</strong><br>
              <span style="color: #4b5563; white-space: pre-wrap;">${escapeHtml(message)}</span>
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
From: ${senderName} <${senderEmail}>

Message:
${message}

---
This message was sent from your portfolio contact form.
      `,
    });

    if (response.error) {
      console.error("Error sending email with Resend:", response.error);
      return false;
    }

    console.log("✅ Email sent successfully via Resend:", response.data?.id);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
