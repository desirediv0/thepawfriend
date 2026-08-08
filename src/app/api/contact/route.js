import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || process.env.NEXT_PUBLIC_SMTP_HOST || "smtp-relay.brevo.com";
    const port = Number(process.env.SMTP_PORT || process.env.NEXT_PUBLIC_SMTP_PORT || 587);
    const user = process.env.SMTP_USER || process.env.NEXT_PUBLIC_SMTP_USER || "950758002@smtp-brevo.com";
    const pass = process.env.SMTP_PASSWORD || process.env.NEXT_PUBLIC_SMTP_PASSWORD || "0f1bzAk4n2ZRBymX";
    const fromEmail = process.env.FROM_EMAIL || process.env.NEXT_PUBLIC_FROM_EMAIL || "connect@pawsfriend.in";
    const toEmail = process.env.TO_EMAIL || process.env.NEXT_PUBLIC_TO_EMAIL || "connect@pawsfriend.in";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"The Paws Friend Contact" <${fromEmail}>`,
      replyTo: `"${name}" <${email}>`,
      to: toEmail,
      subject: `[The Paws Friend] New Contact Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #ab2f00; border-bottom: 2px solid #ab2f00; padding-bottom: 8px; margin-top: 0;">New Contact / Inquiry Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message / Requirement:</strong></p>
          <div style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #ab2f00; margin-top: 5px; border-radius: 4px;">
            ${String(message).replace(/\n/g, '<br/>')}
          </div>
          <br/>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <div style="font-size: 12px; color: #666; line-height: 1.6;">
            <p style="margin: 0; font-weight: bold; color: #ab2f00;">The Paws Friend — Doorstep Pet Healthcare</p>
            <p style="margin: 2px 0;">Website: <a href="https://thepawsfriend.com" style="color: #ab2f00;">thepawsfriend.com</a> | Email: support@thepawsfriend.com</p>
            <p style="margin: 2px 0;">Phone: +91 9211338489 | Emergency: +91 9211338488</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Thank you! Your query has been submitted. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Contact API Mail Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
