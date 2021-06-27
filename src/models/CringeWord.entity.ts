import { DataTypes, Model } from 'sequelize';
import { v4 as uuid } from 'uuid';
import { Database } from '../Database';

const sequelize = Database.load().getSequelize();

export class CringeWord extends Model {
  public id!: string;
  public word!: string;
}

CringeWord.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: uuid(),
    primaryKey: true,
  },
  word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { 
  sequelize: sequelize, 
  timestamps: true, 
  tableName: 'CringeWords',
});

