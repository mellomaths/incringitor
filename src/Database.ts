import { Sequelize, Options } from 'sequelize/types';

export class Database {
  private static instance: Database;
  private sequelize: Sequelize;
  private options: Options;
  private databaseUri: string;

  private constructor() {
    this.databaseUri = process.env.DATABASE_URI || 'sqlite::memory:';
    this.options = {
      define: {
        freezeTableName: true,
      },
    };
    this.sequelize = new Sequelize(this.databaseUri, this.options);
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }

    return this.instance;
  }

  public getSequelize(): Sequelize {
    return this.sequelize;
  }
}
