import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const host = process.env.NEXT_PUBLIC_SMTP_HOST;
    const user = process.env.NEXT_PUBLIC_SMTP_USER;
    const pass = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
    const from = process.env.NEXT_PUBLIC_FROM_EMAIL;
    const to = process.env.NEXT_PUBLIC_TO_EMAIL;

    const transporter = nodemailer.createTransport({
      host: host || "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: user,
        pass: pass,
      },
    });

    const mailOptions = {
      from: `"The Paws Friend Newsletter" <${from}>`,
      replyTo: email,
      to: to,
      subject: `[The Paws Friend] New Newsletter Subscription`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ab2f00; border-bottom: 2px solid #ab2f00; padding-bottom: 8px;">New Newsletter Subscriber</h2>
          <p>A user has subscribed to newsletter & pet care tips updates.</p>
          <p><strong>Subscriber Email:</strong> ${email}</p>
          <br/>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #777;">Sent automatically from The Paws Friend Web Application.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Thank you for subscribing! Keep an eye on your inbox.",
    });
  } catch (error) {
    console.error("Subscribe API Mail Error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
