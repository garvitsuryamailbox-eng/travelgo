import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // If sandbox demo or mock secret
    if (!keySecret || keySecret.includes("mock")) {
      return NextResponse.json({
        success: true,
        message: "Payment successfully verified (Sandbox Demo Mode)",
        paymentId: razorpay_payment_id || `pay_${Date.now()}`,
        orderId: razorpay_order_id,
        status: "captured",
      });
    }

    // Official Razorpay HMAC SHA256 Signature Verification
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      return NextResponse.json({
        success: true,
        message: "Payment signature verified successfully",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        status: "captured",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid payment signature verification failed" },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Razorpay verification error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Payment verification failed" },
      { status: 500 }
    );
  }
}
