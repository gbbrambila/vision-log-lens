import Link from "next/link";
import { LogFileListType } from "@/lib";

type Props = {
  logFiles: LogFileListType[];
};

export function LogFilesList({ logFiles }: Props) {
  const isThereAnyLogFileUploaded = logFiles.length;

  return (
    <div className="flex w-3/6">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Log Files
          </h5>
          <Link
            href="/"
            className={`text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ${
              !isThereAnyLogFileUploaded ? "hidden" : ""
            }`}
          >
            Upload a new .log file
          </Link>
        </div>
        {!isThereAnyLogFileUploaded ? (
          <div className="h-full flex flex-col items-center justify-center p-10">
            <h5 className="text-md leading-none text-gray-900 dark:text-white mb-5 pb-2">
              Upload a log file to start {`->`}
            </h5>
          </div>
        ) : (
          ""
        )}

        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {logFiles.reverse().map(({ id, name, path }) => {
              return (
                <li
                  key={id}
                  className="flex items-center hover:bg-sky-700 pr-3"
                >
                  <Link
                    className="py-3 px-3 flex-1  text-sm font-medium text-gray-900 truncate dark:text-white h-full"
                    href={path}
                  >
                    {name}
                  </Link>
                  <div className="text-xs dark:text-white">
                    {id.substring(0, 8)}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
