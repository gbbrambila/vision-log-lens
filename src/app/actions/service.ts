import { LogFileListType, LogFileLoaded } from "@/lib";

//TODO: move to an env var to get it ready to production
const API_BASE_URL = `http://localhost:3000`;

export async function listLogFiles(): Promise<{ data: LogFileListType[] }> {
  const res = await fetch(`${API_BASE_URL}/api/log/list`, {
    cache: "no-store",
  });
  return res.json();
}

export async function loadLogFile(
  logFilePath: string
): Promise<{ data: LogFileLoaded; status: number; error: string }> {
  const res = await fetch(`${API_BASE_URL}/api/log/load/?path=${logFilePath}`, {
    cache: "no-store",
  });

  const data = await res.json();

  return { ...data, status: res.status };
}
