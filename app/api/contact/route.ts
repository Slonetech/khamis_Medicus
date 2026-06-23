import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Use the Resend sandbox domain until khamismedicuscare.co.ke is verified in Resend.
// Once verified, update FROM_EMAIL in .env.local and change the from address below.
const FROM_EMAIL =
  process.env.FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, date, message } = body as {
      name?: string;
      phone?: string;
      service?: string;
      date?: string;
      message?: string;
    };

    // Basic validation
    if (!name || !phone) {
      return Response.json(
        { success: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: `Kham Medicus Website <${FROM_EMAIL}>`,
      to: "khamedicus@gmail.com",
      replyTo: undefined,
      subject: `New Appointment Enquiry${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #333;">
          <div style="background: #0D2D4E; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Appointment Enquiry</h1>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">Submitted via khamismedicuscare.co.ke</p>
          </div>
          <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0D2D4E; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; color: #374151;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0D2D4E; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; color: #374151;"><a href="tel:${phone}" style="color: #0E7490;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0D2D4E; vertical-align: top;">Service</td>
                <td style="padding: 8px 0; color: #374151;">${service || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0D2D4E; vertical-align: top;">Preferred Date</td>
                <td style="padding: 8px 0; color: #374151;">${date || "Not specified"}</td>
              </tr>
              ${
                message
                  ? `<tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #0D2D4E; vertical-align: top;">Message</td>
                  <td style="padding: 8px 0; color: #374151;">${message}</td>
                </tr>`
                  : ""
              }
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Reply to this email or call <strong>${phone}</strong> to confirm the appointment.
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err: unknown) {
    console.error("[/api/contact] Error:", err);
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    return Response.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
