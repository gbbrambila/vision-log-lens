import { NextResponse } from "next/server";
import { listLogFiles } from "@/lib";

export async function GET() {
  try {
    const files = await listLogFiles();

    const response = {
      data: files,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    const message = "Error while listing the log files";
    console.error(`${message}: `, error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
