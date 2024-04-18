import UAParser from "ua-parser-js";

export type LogFileListType = {
  id: string;
  name: string;
  path: string;
};

export type LogFileContent = {
  ip: string;
  userIdentifier: string;
  userId: string;
  time: string;
  method: string;
  resource: string;
  protocol: string;
  statusCode: number;
  size: number;
  referer: string;
  userAgent: UAParser.IResult;
  raw: string;
};

export type LogFileLoaded = {
  id: string;
  name: string;
  uniqueIps: number;
  mostVisitedUrls: string[];
  mostActiveIps: string[];
  logContent: LogFileContent[];
};
