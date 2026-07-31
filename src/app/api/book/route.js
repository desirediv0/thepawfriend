import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { petName, petType, phone, email, query, breed, service, ownerName, address } = body;

    if (!petName || !phone || !email) {
      return NextResponse.json(
        { error: "Pet name, phone and email are required." },
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
      from: `"The Paws Friend Booking" <${from}>`,
      replyTo: email,
      to: to,
      subject: `[The Paws Friend] New Appointment Booking for ${petName} (${petType || 'Pet'})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ab2f00; border-bottom: 2px solid #ab2f00; padding-bottom: 8px;">New Appointment / Service Booking</h2>
          <p><strong>Pet Name:</strong> ${petName}</p>
          <p><strong>Pet Type:</strong> ${petType || "N/A"}</p>
          <p><strong>Owner / Contact Phone:</strong> ${phone}</p>
          <p><strong>Owner / Contact Email:</strong> ${email}</p>
          ${service ? `<p><strong>Service Requested:</strong> ${service}</p>` : ''}
          ${breed ? `<p><strong>Breed:</strong> ${breed}</p>` : ''}
          ${ownerName ? `<p><strong>Owner Name:</strong> ${ownerName}</p>` : ''}
          ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
          ${query ? `<p><strong>Additional Notes / Query:</strong></p>
          <div style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #ab2f00; margin-top: 5px;">
            ${query.replace(/\n/g, '<br/>')}
          </div>` : ''}
          <br/>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <div style="font-size: 12px; color: #666; line-height: 1.6;">
            <p style="margin: 0; font-weight: bold; color: #ab2f00;">The Paws Friend — Doorstep Pet Healthcare</p>
            <p style="margin: 2px 0;">Website: <a href="https://thepawsfriend.com" style="color: #ab2f00;">thepawsfriend.com</a> | Email: support@thepawsfriend.in</p>
            <p style="margin: 2px 0;">Phone: +91 9211338489 | Emergency: +91 9211338488</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Success! We'll contact you shortly to confirm your appointment.",
      booking: body,
    });
  } catch (error) {
    console.error("Booking API Mail Error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking. Please try again later." },
      { status: 500 }
    );
  }
}
