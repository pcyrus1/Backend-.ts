import { DataTypes, Model } from "sequelize";
import sequelize from "../config/config";

interface CourseAttributes {
  id?: number;
  course_name: string;
  course_code: string;
  student_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Course extends Model<CourseAttributes> implements CourseAttributes {
  public readonly id!: number;
  public course_name!: string;
  public course_code!: string;
  public student_id?: number;
}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course_code: {
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
    modelName: "Course",
    tableName: "course",
    freezeTableName: true,
    timestamps: true,
  }
);

export default Course;
