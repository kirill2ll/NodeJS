#!/usr/bin/env node
//used for CLI command weather

import { getArgs } from "./helpers/args.js";

const initCLI = () => {
  //getting arguments from the cli
  const args = getArgs(process.argv);
  console.log(args);
  //display help
  if (args.h) {
  }
  //save city
  if (args.s) {
  }
  //save token
  if (args.t) {
  }
  //display weather
};

initCLI();
