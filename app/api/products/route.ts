import { NextRequest, NextResponse } from "next/server";
import data from "@/data/products.json";
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ products: data }, { status: 200 });
}
