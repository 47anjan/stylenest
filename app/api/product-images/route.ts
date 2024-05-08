import { NextRequest, NextResponse } from "next/server";
import data from "@/data/product-images.json";
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ images: data }, { status: 200 });
}
