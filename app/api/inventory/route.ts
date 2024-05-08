import { NextRequest, NextResponse } from "next/server";
import data from "@/data/inventory.json";
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ inventory: data }, { status: 200 });
}
