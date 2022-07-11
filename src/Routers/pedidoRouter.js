import { Router } from "express";
import { gerarPedidos } from "../controllers/pedidosController.js";
import validateUser from "../middlewares/validacaoToken.js";


const router = Router()

router.get('/produtos',validateUser, gerarPedidos);

export default router;