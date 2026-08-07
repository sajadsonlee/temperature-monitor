import { Sequelize } from 'sequelize';
import { env } from './env.js';

export const sequelize = new Sequelize(
  env.db.name,
  env.db.user,
  env.db.password,
  {
    host: env.db.host,
    port: env.db.port,
    dialect: 'mysql',
    timezone: '+00:00',
    logging: false,
    pool: { max: 5, min: 0, acquire: 10000, idle: 10000 },
    define: { underscored: true, timestamps: true }
  }
);