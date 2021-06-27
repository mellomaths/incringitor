import { Sequelize } from 'sequelize';
import { DatabaseSettings } from './config/DatabaseSettings';

export class Database {
  private static instance: Database;
  private sequelize: Sequelize;

  private constructor(settings: DatabaseSettings) {
    console.log('Database: Initializing Database connection....');
    this.sequelize = new Sequelize(settings.uri, settings.options);
  }

  public static load(settings: DatabaseSettings): Database {
    if (!this.instance) {
      this.instance = new Database(settings);
    }

    return this.instance;
  }

  public getSequelize(): Sequelize {
    return this.sequelize;
  }
}
