import { NextRequest, NextResponse } from "next/server";
import { otpStore } from "@/app/lib/otpStore"; // Shared in-memory store

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 🔍 FETCH the stored OTP for this email
    const record = otpStore.get(email);
    
    if (!record) {
      return NextResponse.json({ error: "No OTP found for this email" }, { status: 404 });
    }

    const isValid = record.otp === otp;

    if (isValid) {
      otpStore.delete(email); // remove used OTP
      return NextResponse.json({ verified: true, message: "OTP verified successfully" });
    } else {
      return NextResponse.json({ verified: false, error: "Invalid OTP" }, { status: 401 });
    }
    

  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: "OTP verification failed" }, { status: 500 });
  }
}
