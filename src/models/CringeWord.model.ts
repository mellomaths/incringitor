import { DataTypes, Model, Sequelize } from 'sequelize/types';
import { Database } from "../Database";
import { v4 as uuid } from 'uuid'
import { Application } from '../Application';

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
  sequelize: Application.getInstance().database.getSequelize(), 
  timestamps: true, 
  tableName: 'CringeWords',
});

