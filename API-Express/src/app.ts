import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";

export class App {
  app: Express;
  server!: Server;
  port: number;
  logger: LoggerService;
  userController: UserController;

  constructor(logger: LoggerService, userController: UserController) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
  }

  useRoutes() {
    this.app.use("/users", this.userController.router);
  }

  useExceptionFilters() {}

  async init() {
    this.useRoutes();
    this.useExceptionFilters();
    this.server = this.app.listen(this.port);
    this.logger.log("Server is running on http://localhost:" + this.port);
  }
}
