import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";
import { Request, Response, NextFunction } from "express";

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { path: "/login", func: this.login, method: "post" },
      { path: "/register", func: this.register, method: "post" },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "login");
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "register");
  }
}
