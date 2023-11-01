import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error.class";
import { LoggerService } from "../logger/logger.service";
import { Request, Response, NextFunction } from "express";
import { IUserController } from "./users.controller.interface";

export class UserController extends BaseController implements IUserController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { path: "/login", func: this.login, method: "post" },
      { path: "/register", func: this.register, method: "post" },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, "Not implemented yet", "login"));
    // this.ok(res, "login");
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "register");
  }
}
