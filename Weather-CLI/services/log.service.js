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

export const printWeather = (res, icon) => {
  console.log(
    `${chalk.bgYellow("WEATHER ")}
  Weather in the city ${res.name}
  ${icon}  ${res.weather[0].description}
  Temperature: ${res.main.temp}°C (feels like ${res.main.feels_like}°C)
  Humidity: ${res.main.humidity}%
  Wind: ${res.wind.speed}m/s
  `
  );
};
