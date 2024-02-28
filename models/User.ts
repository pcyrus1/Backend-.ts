import { DataTypes, Model } from "sequelize";
import sequelize from "../config/config";

interface UserAttributes {
  id?: number;
  firstName: string;
  lastName: string;
  age?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public readonly id!: number;
  public firstName!: string;
  public lastName!: string;
  public student_id?: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    freezeTableName: true,
    timestamps: true,
  }
);

export default User;
