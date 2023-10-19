import chalk from "chalk";

export const printError = (error) => {
  console.log(chalk.bgRed("ERROR ") + error);
};

export const printSuccess = (msg) => {
  console.log(chalk.bgGreen("SUCCESS ") + msg);
};

export const printHelp = () => {
  console.log(
    `${chalk.bgCyan("HELP ")}
  No param      => display weather
  -s [CITY]     => save city to display 
  -h            => display help
  -t [TOKEN]    => enter and save weather token
  `
  );
};
