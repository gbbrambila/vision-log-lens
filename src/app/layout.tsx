import type { Metadata } from "next";
import "./globals.css";
import { NavBar, LogFilesList } from "@/app/ui";
import { listLogFiles } from "@/app/actions";

export const metadata: Metadata = {
  title: "Vision Log Lens",
  description:
    "Vision Log lens helps you to quickly access insightful information about .log files",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: logFiles } = await listLogFiles();

  return (
    <html lang="en">
      <body className="bg-slate-200">
        <NavBar />
        <main className="flex flex-row w-11/12 mx-auto">
          <LogFilesList logFiles={logFiles} />
          <div className="w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
