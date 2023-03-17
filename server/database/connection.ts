import { DataSource } from 'typeorm';
import { Categories } from './entities/categories.entity';
import { User } from './entities/user.entity';

export const connection = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
