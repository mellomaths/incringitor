import { Options } from 'sequelize';

export class DatabaseSettings {
  readonly uri: string;
  readonly options: Options;

  constructor() {
    this.uri = process.env.DATABASE_URI || 'sqlite::memory:';
    this.options = {
      define: {
        freezeTableName: true,
      },
    };
  }
}