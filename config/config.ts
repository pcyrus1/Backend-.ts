import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Testing", "software-monster", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
