import { LogFileContent } from "@/lib";
import UAParser from "ua-parser-js";

const parseLogFileContent = (fileContent: string[]) => {
  return fileContent.map((line) => parseLogFileLine(line));
};

const parseLogFileLine = (line: string): LogFileContent => {
  let [
    ip,
    userIdentifier,
    userId,
    ts,
    tz,
    method,
    resource,
    protocol,
    statusCode,
    size,
    referer,
    ...rawUserAgent
  ] = line.split(" ");

  const time = `${ts.substring(1)} ${tz.substring(0, tz.length - 1)}`;

  let parsedUserAgent: UAParser.IResult = UAParser(rawUserAgent.join(""));

  const data = {
    ip,
    userIdentifier,
    userId,
    time,
    method,
    resource,
    protocol,
    statusCode: +statusCode,
    size: +size,
    referer,
    userAgent: parsedUserAgent,
    raw: line,
  };

  return data;
};

export { parseLogFileContent, parseLogFileLine };
