import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getDatabaseConfig(): TypeOrmModuleOptions | undefined {
  const host = process.env.DB_HOST;
  const username = process.env.DB_USERNAME;
  const database = process.env.DB_DATABASE;

  if (!host && !username && !database) {
    return undefined;
  }

  if (!host || !username || !database) {
    throw new Error('DB_HOST, DB_USERNAME, and DB_DATABASE must all be configured.');
  }

  const port = Number(process.env.DB_PORT ?? 3306);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('DB_PORT must be an integer between 1 and 65535.');
  }

  return {
    type: 'mysql',
    host,
    port,
    username,
    password: process.env.DB_PASSWORD ?? '',
    database,
  };
}
