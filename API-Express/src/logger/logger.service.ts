import { Logger, ISettingsParam } from 'tslog';
import { ILogger } from './logger.interface';
import { injectable } from 'inversify';
import 'reflect-metadata';

const loggerSettings: ISettingsParam<unknown> = {
	displayInstanceName: false,
	displayLoggerName: false,
	displayFilePath: 'hidden',
	displayFunctionName: false,
} as any;

@injectable()
export class LoggerService implements ILogger {
	logger: Logger<unknown>;

	constructor() {
		this.logger = new Logger(loggerSettings);
	}

	log(...args: unknown[]): void {
		this.logger.info(...args);
	}

	error(...args: unknown[]): void {
		this.logger.error(...args);
	}

	warn(...args: unknown[]): void {
		this.logger.warn(...args);
	}
}
