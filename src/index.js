import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import userRouter from './Routers/userRouter.js'
import productsRouter from './Routers/productsRouter.js'
import pedidosRouter from './Routers/pedidoRouter.js'

const app = express();
dotenv.config();

app.use(json());
app.use(cors());

app.use(userRouter);
app.use(productsRouter);
app.use(pedidosRouter);

app.listen(5000)

const port = process.env.PORT;
app.listen(port, () => console.log(chalk.white.bold.bgGreenBright("Server run in PORT " + port)));