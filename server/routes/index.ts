import { Express } from 'express';
import { UserRoutes } from './user.routes';

export const loadRoutes = (app: Express) => {
  const userRoutes = new UserRoutes(app, 'user');

  userRoutes.routes();
};
