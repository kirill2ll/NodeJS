#!/usr/bin/env node
//used for CLI command weather

import { getArgs } from "./helpers/args.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
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

const initCLI = () => {
  //getting arguments from the cli
  const args = getArgs(process.argv);

  //display help
  if (args.h) {
    printHelp();
  }
  //save city
  if (args.s) {
  }
  //save token
  if (args.t) {
    saveToken(args.t);
  }
  //display weather
};

initCLI();
