import { LogFileContent } from "@/lib";
import UAParser from "ua-parser-js";

const parseLogFileContent = (fileContent: string[]) => {
  return fileContent.reduce((acc: LogFileContent[], current) => {
    const parsedLine = parseLogFileLine(current);

    if (parsedLine) {
      acc = [...acc, parsedLine];
    }
    return acc;
  }, []);
};

const parseLogFileLine = (line: string): LogFileContent | null => {
  if (!line) {
    return null;
  }

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

  if (!ts || !tz) {
    return null;
  }

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
