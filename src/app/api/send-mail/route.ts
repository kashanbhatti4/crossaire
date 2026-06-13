import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
    // format date as YYYY-MM-DD HH:mm:ss
    const pad = (n: number) => n.toString().padStart(2, '0');
    const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    
    const logEntry = `[${dateStr}] Source: ${source} | Name: ${fullname} | Email: ${email} | Phone: ${phone} | Service: ${serviceType} | Message: ${message || ""}\n`;
    
    fs.appendFileSync(logPath, logEntry, "utf8");

    // Log internally for debugging purposes
    console.log(`[Form Submission] Logged to ${logPath}: ${fullname} (${email})`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { success: false, errors: ["An error occurred while processing your request."] },
      { status: 500 }
    );
  }
}
