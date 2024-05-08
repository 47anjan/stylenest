import { NextRequest, NextResponse } from "next/server";
import data from "@/data/product-images.json";

export async function GET(
  response: NextRequest,
  { params }: { params: { id: string } }
) {
  const images = data.filter((item) => item.product_id === params.id);

  return NextResponse.json({ images }, { status: 200 });
}
