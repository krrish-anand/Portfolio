import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "krrishanand3832@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f0f0f; color: #e5e5e5; border-radius: 12px;">
          <h2 style="color: #ffffff; margin-bottom: 4px;">New Message from Your Portfolio</h2>
          <p style="color: #888; font-size: 13px; margin-top: 0;">Someone reached out via the contact form.</p>
          <hr style="border: none; border-top: 1px solid #333; margin: 20px 0;" />

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #e5e5e5; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Subject</td>
              <td style="padding: 8px 0; color: #e5e5e5;">${subject}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #333; margin: 20px 0;" />

          <p style="color: #888; font-size: 13px; margin-bottom: 8px;">Message</p>
          <div style="background: #1a1a1a; border-radius: 8px; padding: 16px; color: #e5e5e5; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>

          <hr style="border: none; border-top: 1px solid #333; margin: 20px 0;" />
          <p style="color: #555; font-size: 12px; text-align: center;">Sent via krrishanand.com · Reply directly to this email to respond to ${name}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
