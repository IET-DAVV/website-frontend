// /app/api/send-otp/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { otpStore } from "@/app/lib/otpStore";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP
    otpStore.set(email, { otp, createdAt: Date.now() });

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.OTP_EMAIL_USER,
        pass: process.env.OTP_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.OTP_EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });

    return NextResponse.json({ success: true, message: "OTP sent" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ success: false, message: "Failed to send OTP" }, { status: 500 });
  }
}
