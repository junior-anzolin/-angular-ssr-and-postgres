import { Express } from 'express';

export class Routes {
  private _app!: Express;
  private _pathRoute?: string;

  constructor(app: Express, pathRoute?: string) {
    this._app = app;
    this._pathRoute = pathRoute;
  }

  get pathRoute() {
    return this._pathRoute;
  }

  get app() {
    return this._app;
  }

  get primaryRoute() {
    if (this.pathRoute) return `/api/${this.pathRoute}`;

    return '/api';
  }

  static routes() {}
}
