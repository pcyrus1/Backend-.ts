import express from "express";
import sequelize from "./config/config";
import userRouter from "./routes/user";

import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// Create express app
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Check database connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to db successfully"))
  .catch((error: { message: string }) => console.log(error.message));

app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
);

// Routes
app.use("/api/v1/user", userRouter);
