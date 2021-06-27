import { Options } from 'sequelize';
import * as dotenv from "dotenv";
dotenv.config();

export function buildDatabaseSettings(): DatabaseSettings {
  const env = process.env.NODE_ENV;
  if (env === 'development') {
    console.log('DatabaseSettings: Loading Database settings for Development environment....');
    return new DevelopmentDatabaseSettings();
  }

  console.log('DatabaseSettings: Loading Database settings for Production environment....');
  return new ProductionDatabaseSettings();
}

export interface DatabaseSettings {
  readonly uri: string;
  readonly options: Options;
}

class DevelopmentDatabaseSettings implements DatabaseSettings {
  readonly uri: string;
  readonly options: Options;
  
  constructor() {
    this.uri = 'sqlite::memory:';
    this.options = {
      define: {
        freezeTableName: true,
      },
    };
  }
}

class ProductionDatabaseSettings implements DatabaseSettings {
  readonly uri: string;
  readonly options: Options;

  constructor() {
    this.uri = process.env.DATABASE_URI;
    this.options = {
      define: {
        freezeTableName: true,
      },
    };
  }
}