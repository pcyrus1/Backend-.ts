import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Db", "USERNAME", "PASSWORD", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
