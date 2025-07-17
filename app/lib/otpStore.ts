type OtpRecord = {
  otp: string;
  createdAt: number;
};

export const otpStore = new Map<string, OtpRecord>();
