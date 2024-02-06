import { Sequelize } from "sequelize";

const sequelize = new Sequelize("DB", "USERNAME", "PASSWORD", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
