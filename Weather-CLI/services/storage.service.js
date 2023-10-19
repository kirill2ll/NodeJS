import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const localFilePath = join(homedir(), "weather-data.json");

const isExist = async (filePath) => {
  try {
    await promises.stat(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

export const getValueByKey = async (key) => {
  if (await isExist(localFilePath)) {
    const file = await promises.readFile(localFilePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

export const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(localFilePath)) {
    const file = await promises.readFile(localFilePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(localFilePath, JSON.stringify(data));
};
