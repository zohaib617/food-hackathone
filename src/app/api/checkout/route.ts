import { NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure environment variables exist
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment variables.");
}

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error("Missing NEXT_PUBLIC_SITE_URL in environment variables.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
 timeout: 30000, // 30s timeout
  maxNetworkRetries: 3,
});

export async function POST(req: Request) {
  try {
    console.log("Received checkout request...");

    // Read request body safely
    const rawBody = await req.text();
    if (!rawBody) {
      return NextResponse.json({ error: "Request body is empty" }, { status: 400 });
    }
    const body = JSON.parse(rawBody);
    
    const { cart, userInfo } = body;
    if (!cart || !userInfo) {
      return NextResponse.json({ error: "Missing cart or userInfo" }, { status: 400 });
    }

    console.log("Cart:", cart);
    console.log("User Info:", userInfo);

    // Create line items
    const line_items = cart.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    console.log("Creating Stripe session...");

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
      customer_email: userInfo.email,
      metadata: {
        userName: `${userInfo.firstName} ${userInfo.lastName}`,
        phone: userInfo.phone,
        address: `${userInfo.address1}, ${userInfo.city}, ${userInfo.zipCode}, ${userInfo.country}`,
      },
    });

    console.log("Stripe session created successfully:", session.id);

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
