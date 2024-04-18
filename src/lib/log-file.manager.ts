import fs from "fs";
import { LogFileListType } from "@/lib";
import path from "path";
import { writeFile } from "fs/promises";
import { destructLogFileName, generateLogFileName } from "./log.file.helper";

const LOGS_FOLDER = path.join(process.cwd(), "public/logs");

const listLogFiles = async (): Promise<LogFileListType[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(LOGS_FOLDER, (err, data) => {
      if (err) {
        reject(err);
      }

      const parsedList = data
        .filter((file) => file.endsWith(".log"))
        .map((file) => {
          const { id, name } = destructLogFileName(file);
          return { id, name, path: file };
        });

      resolve(parsedList);
    });
  });
};

const saveLogFile = async (file: File): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());

  const filename = generateLogFileName(file.name);

  const locationToSaveFiles = `${LOGS_FOLDER}/${filename}`;

  await writeFile(locationToSaveFiles, buffer);

  return filename;
};

const loadLogFileContent = (fileName: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${LOGS_FOLDER}/${fileName}`,
      { encoding: "utf-8" },
      (err, fileContent) => {
        if (err) {
          reject(err);
          return;
        }

        const data = fileContent.split("\n").filter((line) => line);
        resolve(data);
      }
    );
  });
};

export { listLogFiles, saveLogFile, loadLogFileContent };
