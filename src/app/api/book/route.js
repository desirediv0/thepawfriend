import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { petName, petType, phone, email, query, breed, service, ownerName, address, specialRequests } = body;

    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required." },
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

    const notesContent = specialRequests || query || "";

    const mailOptions = {
      from: `"The Paws Friend Booking" <${from}>`,
      replyTo: email || from,
      to: to,
      subject: `[New Appointment] ${service || 'Booking'} for ${petName || 'Pet'} (${petType || 'Pet'}) - ${ownerName || phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; color: #333;">
          <div style="background-color: #ab2f00; padding: 20px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; font-size: 22px;">🐾 The Paws Friend</h2>
            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">New Appointment Booking Received</p>
          </div>
          
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 10px 14px; font-weight: bold; width: 38%; border-bottom: 1px solid #eee;">Selected Pet Type:</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #eee; color: #ab2f00; font-weight: bold;">${petType || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee;">Chosen Service:</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #eee; font-weight: bold;">${service || "N/A"}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee;">Pet Name:</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${petName || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee;">Owner Name:</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${ownerName || "N/A"}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee;">Mobile Number:</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #eee; font-weight: bold; color: #ab2f00;">+91 ${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee;">Email Address:</td>
                <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${email || "N/A"}</td>
              </tr>
            </table>

            ${notesContent ? `
              <div style="margin-top: 20px;">
                <p style="margin: 0 0 6px; font-weight: bold; font-size: 14px;">Special Requests / Concerns:</p>
                <div style="background-color: #fff8f5; border-left: 4px solid #ab2f00; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #444;">
                  ${notesContent.replace(/\n/g, '<br/>')}
                </div>
              </div>
            ` : ''}
          </div>

          <div style="background-color: #fafafa; padding: 16px 24px; border-top: 1px solid #eeeeee; font-size: 12px; color: #666; text-align: center; line-height: 1.6;">
            <p style="margin: 0; font-weight: bold; color: #ab2f00;">The Paws Friend — Doorstep Pet Healthcare</p>
            <p style="margin: 2px 0;">Website: <a href="https://thepawsfriend.com" style="color: #ab2f00;">thepawsfriend.com</a> | Email: support@thepawsfriend.in</p>
            <p style="margin: 2px 0;">Phone: +91 9211338489 | Emergency 24/7: +91 9211338488</p>
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
