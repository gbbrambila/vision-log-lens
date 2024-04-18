import { uuid } from "uuidv4";
import { LogFileContent } from "@/lib";

const keyMapperCounter = (
  content: LogFileContent[],
  keyName: keyof Omit<LogFileContent, "userAgent">
): {
  [key: string]: number;
} => {
  return content.reduce(
    (acc: { [key: string]: number }, line: LogFileContent) => {
      const key = line[keyName];
      if (acc.hasOwnProperty(key)) {
        const currentValue = acc[key];
        acc = { ...acc, [`${key}`]: currentValue + 1 };
      } else {
        acc = {
          ...acc,
          [`${key}`]: 1,
        };
      }
      return acc;
    },
    {}
  );
};

const sortMapperAndLimitUpTo = (
  mapper: { [key: string]: number },
  limitUpTo: number
): string[] => {
  return Object.keys(mapper)
    .sort((a: string, b: string) => {
      const first = mapper[a];
      const second = mapper[b];
      if (first < second) {
        return -1;
      } else if (first > second) {
        return 1;
      }
      return 0;
    })
    .reverse()
    .splice(0, limitUpTo);
};

const generateLogFileName = (currentName: string): string => {
  return `${uuid()}_${currentName.replaceAll("_", "-").replaceAll(" ", "-")}`;
};

const destructLogFileName = (
  currentName: string
): { id: string; name: string } => {
  const [id, name] = currentName.split("_");
  return { id, name };
};

export {
  keyMapperCounter,
  sortMapperAndLimitUpTo,
  generateLogFileName,
  destructLogFileName,
};
