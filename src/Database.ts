import { Sequelize } from 'sequelize';
import { buildDatabaseSettings, DatabaseSettings } from './config/DatabaseSettings';

export class Database {
  private static instance: Database;
  private sequelize: Sequelize;

  private constructor(settings: DatabaseSettings) {
    console.log('Database: Initializing Database connection....');
    this.sequelize = new Sequelize(settings.uri, settings.options);
  }

  public static load(): Database {
    console.log('Database.load: Loading a Database instance....');
    if (!this.instance) {
      console.log('Database.load: Creating a new Database instance....');
      this.instance = new Database(buildDatabaseSettings());
    }

    return this.instance;
  }

  public getSequelize(): Sequelize {
    return this.sequelize;
  }
}
