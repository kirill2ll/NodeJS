import { Logger, ISettingsParam } from "tslog";
import { ILogger } from "./logger.interface";

const loggerSettings: ISettingsParam<unknown> = {
  displayInstanceName: false,
  displayLoggerName: false,
  displayFilePath: "hidden",
  displayFunctionName: false,
} as any;

export class LoggerService implements ILogger {
  logger: Logger<unknown>;

  constructor() {
    this.logger = new Logger(loggerSettings);
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }

  error(...args: unknown[]) {
    this.logger.error(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}
