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

    // Save submission to a log file as best-effort secondary storage.
    // Serverless hosts (e.g. Vercel) have a read-only filesystem, so this must
    // never block the request — email is the primary delivery path below.
    try {
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
    } catch (logErr) {
      console.warn("[Form Submission] Skipped local file logging (read-only filesystem?):", logErr);
    }

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
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9eef3; text-align: center;">
                <div style="margin-bottom: 12px;">
                  <a href="https://www.facebook.com/people/CrossAire/61566989969821/#" target="_blank" style="color: #1c6ccf; text-decoration: none; margin: 0 10px; font-size: 13px; font-weight: bold;">Facebook</a>
                  <a href="https://x.com/realcrossaire" target="_blank" style="color: #1c6ccf; text-decoration: none; margin: 0 10px; font-size: 13px; font-weight: bold;">X (Twitter)</a>
                  <a href="https://www.youtube.com/@realCrossAire" target="_blank" style="color: #1c6ccf; text-decoration: none; margin: 0 10px; font-size: 13px; font-weight: bold;">YouTube</a>
                  <a href="https://www.tiktok.com/@realcrossaire" target="_blank" style="color: #1c6ccf; text-decoration: none; margin: 0 10px; font-size: 13px; font-weight: bold;">TikTok</a>
                </div>
                <div style="font-size: 11px; color: #94a3b8;">
                  Sent automatically via Resend from the Crossaire Website.
                </div>
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
