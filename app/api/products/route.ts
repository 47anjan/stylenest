import { NextRequest, NextResponse } from "next/server";
import data from "@/data/latest-arrivals.json";
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ products: data }, { status: 200 });
}
