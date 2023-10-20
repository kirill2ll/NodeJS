#!/usr/bin/env node
//used for CLI command weather

import { getArgs } from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.service.js";
import {
  printHelp,
  printError,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("The token was not provided");
    return;
  }
  try {
    await saveKeyValue("token", token);
    printSuccess("Token is saved");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("The city was not provided");
    return;
  }
  try {
    await saveKeyValue("city", city);
    printSuccess("City is saved");
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  try {
    const weather = await getWeather();
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e.response?.status == 404) {
      printError("The city is wrong");
    } else if (e.response?.status == 401) {
      printError("The token is wrong");
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  //getting arguments from the cli
  const args = getArgs(process.argv);

  //display help
  if (args.h) {
    return printHelp();
  }
  //save city
  if (args.s) {
    return saveCity(args.s);
  }
  //save token
  if (args.t) {
    return saveToken(args.t);
  }
  //display weather
  return getForecast();
};

initCLI();
