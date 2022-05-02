import { DataTypes, Model } from "sequelize";
import { randomBytes } from "crypto";
import { Database } from "../Database";

const sequelize = Database.load().getSequelize();

export class CringeWord extends Model {
  public id!: string;
  public word!: string;

  static new(sentence: string): CringeWord {
    const cringe = CringeWord.build({ word: sentence });
    cringe.id = randomBytes(16).toString("hex");
    return cringe;
  }
}

CringeWord.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    tableName: "CringeWords",
  }
);
