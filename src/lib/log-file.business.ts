import { LogFileContent } from "@/lib";
import { keyMapperCounter, sortMapperAndLimitUpTo } from "@/lib";

const countUniqueIps = (content: LogFileContent[]): number => {
  return content.reduce((acc: string[], line: LogFileContent) => {
    const isIpInAcc = acc.find((ip: string) => ip === line.ip);
    if (!isIpInAcc) {
      acc.push(line.ip);
    }
    return acc;
  }, []).length;
};

const getMostedVisitedUrls = (content: LogFileContent[], limitUpTo: number) => {
  const resourceMapper = keyMapperCounter(content, "resource");
  return sortMapperAndLimitUpTo(resourceMapper, limitUpTo);
};

const getMostActiveIps = (content: LogFileContent[], limitUpTo: number) => {
  const ipMapper = keyMapperCounter(content, "ip");
  return sortMapperAndLimitUpTo(ipMapper, limitUpTo);
};

export { countUniqueIps, getMostedVisitedUrls, getMostActiveIps };
