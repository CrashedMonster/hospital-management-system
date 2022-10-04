import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { envConfiguration } from '../../src/common/configuration/env.configuration';

const databaseEnvs = envConfiguration().database;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: databaseEnvs.host,
  port: databaseEnvs.port,
  username: databaseEnvs.username,
  database: databaseEnvs.name,
  password: databaseEnvs.password,
  entities: [__dirname + '/../**/entities/*.entity.{js,ts}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
};

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: databaseEnvs.host,
  port: databaseEnvs.port,
  username: databaseEnvs.username,
  database: databaseEnvs.name,
  password: databaseEnvs.password,
  entities: [__dirname + '/../**/entities/*.entity.{js,ts}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
});
