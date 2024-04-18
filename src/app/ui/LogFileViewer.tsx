import { LogFileLoaded } from "@/lib";

type Props = {
  logFileData: LogFileLoaded;
};

export function LogFileViewer({ logFileData }: Props) {
  const { id, name, uniqueIps, mostVisitedUrls, mostActiveIps, logContent } =
    logFileData;

  return (
    <div className="flex flex-col p-8 dark:text-white">
      <div className="flex flex-row">
        <h5 className="flex-1 text-xl font-bold leading-none text-gray-900 dark:text-white mb-5 pb-2">
          {name}
        </h5>

        <div className="text-xs dark:text-white">{id.substring(0, 8)}</div>
      </div>

      <div className="flex flex-col mb-5">
        <span className="font-bold border-b border-gray-200">
          The number of unique IP addresses:
        </span>
        <span className="mt-2">{uniqueIps}</span>
      </div>
      <div className="flex flex-col mb-5 pb-2">
        <span className="font-bold border-b border-gray-200">
          The top 3 most visited URLs:
        </span>
        <ul className="pl-2 mt-2">
          {mostVisitedUrls.map((url, i) => {
            return (
              <li key={i}>
                {"'->"} {url}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col mb-5 pb-2">
        <span className="font-bold border-b border-gray-200">
          The top 3 most active IP addresses:
        </span>
        <ul className="pl-2 mt-2">
          {mostActiveIps.map((url, i) => {
            return (
              <li key={i}>
                {"'->"} {url}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col mb-5 pb-2">
        <span className="font-bold border-b border-gray-200">Log Content:</span>
        <ul className="pl-2 mt-2">
          {logContent.map((content, i) => {
            return (
              <li key={i} className="text-xs mb-1">
                {"'->"}{" "}
                {`${content.ip} made a ${content.method}" request to access "${content.resource}" on ${content.time} and got a ${content.statusCode} response`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
