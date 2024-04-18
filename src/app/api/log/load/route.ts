import { NextRequest, NextResponse } from "next/server";

import {
  LogFileContent,
  LogFileLoaded,
  loadLogFileContent,
  parseLogFileContent,
  destructLogFileName,
  countUniqueIps,
  getMostActiveIps,
  getMostedVisitedUrls,
} from "@/lib";

export async function GET(req: NextRequest) {
  const logFilePath = req.nextUrl.searchParams.get("path");

  if (!logFilePath) {
    return NextResponse.json(
      { error: "A file path queryString must be provided" },
      { status: 400 }
    );
  }

  try {
    // Load raw file content
    const rawFileContent = await loadLogFileContent(logFilePath);

    // Parse raw file content
    const logContent: LogFileContent[] = parseLogFileContent(rawFileContent);

    // Find the unique IPs
    const uniqueIps = countUniqueIps(logContent);

    // Get the top N or 3 visited URLs
    const mostVisitedUrls = getMostedVisitedUrls(logContent, 3);

    // Get the top N or 3 visited URLs
    const mostActiveIps = getMostActiveIps(logContent, 3);

    const { id, name } = destructLogFileName(logFilePath);

    const data: LogFileLoaded = {
      id,
      name,
      uniqueIps,
      mostVisitedUrls,
      mostActiveIps,
      logContent,
    };

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.log("error.code: ", error.code);
    const message =
      error.code === "ENOENT"
        ? "Log file not found"
        : "Error ocurred while loading the log file";
    console.error(`${message}: `, error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
