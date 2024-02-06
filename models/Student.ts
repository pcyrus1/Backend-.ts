import { DataTypes, Model } from "sequelize";
import sequelize from "../config/config";

interface StudentAttributes {
  id?: number;
  first_name: string;
  last_name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Student extends Model<StudentAttributes> implements StudentAttributes {
  public id?: number;
  public first_name!: string;
  public last_name!: string;
  public createdAt?: Date;
  public updatedAt?: Date;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Student",
    tableName: "student",
    freezeTableName: true,
    timestamps: true,
  }
);

export default Student;
