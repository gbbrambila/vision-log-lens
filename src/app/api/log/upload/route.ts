import { saveLogFile } from "@/lib";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const fileToUpload = formData.get("file");

  if (!fileToUpload) {
    return NextResponse.json(
      { error: "A file in formdata must be provided" },
      { status: 400 }
    );
  }

  try {
    const fileName = await saveLogFile(fileToUpload as File);

    return NextResponse.json(
      { message: "File uploaded successfully", filePath: fileName },
      { status: 201 }
    );
  } catch (error) {
    const message = "Error ocurred while uploading the file";
    console.error(`${message}: `, error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
