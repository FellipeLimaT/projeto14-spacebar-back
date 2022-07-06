import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(json());
app.use(cors());

const port = process.env.PORT;
app.listen(port, () => console.log(chalk.white.bold.bgGreenBright("Server run in PORT " + port)));