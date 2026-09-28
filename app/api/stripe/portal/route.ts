import { NextResponse } from "next/server";
import { Subscription } from "@/models/subscriptions";
import { verifyToken } from "@/lib/verifyToken";
import dbConnect from "@/lib/db";
import { getStripe } from "@/lib/stripe";

export async function POST() {
  try {
    const stripe =getStripe();
    const payload = await verifyToken();

    if (!payload?.userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await dbConnect();
    const {userId} = payload;

    const user = await Subscription.findOne({user_id:userId}).select(
      "provider_customer_id"
    );

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    if (!user.stripeCustomerId) {
      return NextResponse.json(
        {
          message:
            "No Stripe customer is associated with this account.",
        },
        { status: 400 }
      );
    }

    const returnUrl = `${process.env.NEXT_PUBLIC_APP_URL}/products/payment`;

    const portalSession =
      await stripe.billingPortal.sessions.create({
        customer: user.stripeCustomerId,
        return_url: returnUrl,
      });

    return NextResponse.json({
      url: portalSession.url,
    });
  } catch (error) {
    console.error("Stripe Customer Portal error:", error);

    return NextResponse.json(
      {
        message: "Unable to create Stripe Customer Portal session.",
      },
      { status: 500 }
    );
  }
}