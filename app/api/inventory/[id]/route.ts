import { NextRequest, NextResponse } from "next/server";
import data from "@/data/inventory.json";

export async function GET(
  response: NextRequest,
  { params }: { params: { id: string } }
) {
  const inventory = data.find((item) => item.product_id === params.id);

  return NextResponse.json({ inventory }, { status: 200 });
}
