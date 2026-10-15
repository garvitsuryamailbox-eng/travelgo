import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const { amount, currency = "INR", receipt = `rcpt_${Date.now()}` } = await req.json();

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // If real keys are provided, initialize real Razorpay instance
    if (keyId && keySecret && !keyId.includes("mock")) {
      const razorpay = new Razorpay({
        key_id: keyId,
        key_secret: keySecret,
      });

      const options = {
        amount: Math.round(Number(amount) * 100), // Razorpay expects amount in paise (1 INR = 100 paise)
        currency: currency.toUpperCase(),
        receipt: receipt,
      };

      const order = await razorpay.orders.create(options);
      return NextResponse.json({
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: keyId,
        isSandboxDemo: false,
      });
    }

    // High fidelity test mode fallback when live credentials are not set
    const mockOrderId = `order_${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
    return NextResponse.json({
      success: true,
      orderId: mockOrderId,
      amount: Math.round(Number(amount) * 100),
      currency: currency.toUpperCase(),
      keyId: keyId || "rzp_test_mock_travelgo",
      isSandboxDemo: true,
    });
  } catch (error: any) {
    console.error("Razorpay order creation error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create Razorpay order" },
      { status: 500 }
    );
  }
}
