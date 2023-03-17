import { User } from 'server/database/entities/user.entity';
import { connection } from '../database/connection';
import { Express } from 'express';
import { Routes } from 'server/utils/routes';

const userRepository = connection.getRepository(User);

export class UserRoutes extends Routes {
  routes() {
    this.app.get(`${this.primaryRoute}/get`, async (req, res) => {
      const user = await userRepository.find();

      res.json(user);
    });
  }
}
