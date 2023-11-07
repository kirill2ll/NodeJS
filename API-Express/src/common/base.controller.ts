import { Router, Response } from "express";
import { IControllerRoute } from "./route.interface";
import { ILogger } from "../logger/logger.interface";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class BaseController {
  private readonly _router: Router;

  constructor(private logger: ILogger) {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  public send<T>(res: Response, code: number, message: T) {
    res.type("application/json");
    return res.status(code).send(message);
  }

  public ok<T>(res: Response, message: T) {
    return this.send(res, 200, message);
  }

  public created(res: Response) {
    return this.send(res, 201, "Created");
  }

  protected bindRoutes(routes: IControllerRoute[]) {
    routes.forEach((route) => {
      this.logger.log(`Binding route:${route.method} ${route.path}`);
      //not to lose the context of this, we need to bind the function to the class
      const handler = route.func.bind(this);
      this._router[route.method](route.path, handler);
    });
  }
}
