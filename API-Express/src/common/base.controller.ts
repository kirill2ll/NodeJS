import { Router } from "express";
import { LoggerService } from "../logger/logger.service";
import { IControllerRoute } from "./route.interface";

export abstract class BaseController {
  private readonly _router: Router;

  constructor(private logger: LoggerService) {
    this._router = Router();
  }

  get router() {
    return this._router;
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
