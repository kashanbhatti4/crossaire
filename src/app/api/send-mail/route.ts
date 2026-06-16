import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { source, fullname, email, phone, "service-type": serviceType, message } = body;

    const errors: string[] = [];
    if (!fullname || fullname.trim() === "") {
      errors.push("Full Name is required.");
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("A valid Email Address is required.");
    }
    if (!phone || phone.trim() === "") {
      errors.push("Phone Number is required.");
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Save submission to log file as secondary storage (similar to PHP behavior)
    const submissionsDir = path.join(process.cwd(), "submissions");
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true });
    }
    
    const logPath = path.join(submissionsDir, "log.txt");
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    
    const logEntry = `[${dateStr}] Source: ${source} | Name: ${fullname} | Email: ${email} | Phone: ${phone} | Service: ${serviceType} | Message: ${message || ""}\n`;
    
    fs.appendFileSync(logPath, logEntry, "utf8");
    console.log(`[Form Submission] Logged to ${logPath}: ${fullname} (${email})`);

    // Send styled HTML email via Resend if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      try {
        const toEmail = process.env.NOTIFICATION_EMAIL || "info@crossaire.com";
        const fromEmail = process.env.SENDER_EMAIL || "Crossaire Forms <onboarding@resend.dev>";
        
        await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          subject: `New Lead: ${fullname} - ${serviceType}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e9eef3; border-radius: 12px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(12, 26, 43, 0.05);">
              <h2 style="color: #1C6CCF; border-bottom: 2px solid #e9eef3; padding-bottom: 12px; margin-top: 0; font-size: 20px;">New Form Submission</h2>
              <p style="color: #475465; font-size: 14px; margin-bottom: 20px;">A new lead has been submitted from the Crossaire website:</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9; width: 140px; color: #0C1A2B; font-size: 14px;">Source:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475465; font-size: 14px;">${source || "Direct Form"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9; color: #0C1A2B; font-size: 14px;">Full Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475465; font-size: 14px;">${fullname}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9; color: #0C1A2B; font-size: 14px;">Email Address:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="mailto:${email}" style="color: #1C6CCF; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9; color: #0C1A2B; font-size: 14px;">Phone Number:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="tel:${phone}" style="color: #1C6CCF; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9; color: #0C1A2B; font-size: 14px;">Service Category:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475465; font-size: 14px;">${serviceType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; vertical-align: top; color: #0C1A2B; font-size: 14px;">Details & Scope:</td>
                  <td style="padding: 12px 0; color: #475465; line-height: 1.5; white-space: pre-wrap; font-size: 14px;">${message || "No details provided"}</td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e9eef3; font-size: 11px; color: #94a3b8; text-align: center;">
                Sent automatically via Resend from the Crossaire Website.
              </div>
            </div>
          `,
        });
        console.log(`[Form Submission] Resend email sent successfully for ${fullname}`);
      } catch (emailErr) {
        console.error("[Form Submission] Resend failed to send email:", emailErr);
      }
    } else {
      console.warn("[Form Submission] Resend API Key is not configured. Email notification skipped (lead was logged to local file).");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { success: false, errors: ["An error occurred while processing your request."] },
      { status: 500 }
    );
  }
}
