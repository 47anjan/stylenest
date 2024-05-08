import { NextRequest, NextResponse } from "next/server";
import latestArrivalsProducts from "@/data/latest-arrivals.json";
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(
    { products: latestArrivalsProducts },
    { status: 200 }
  );
}
