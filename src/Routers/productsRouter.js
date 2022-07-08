import { Router } from "express";
import { gerarProdutos } from "../controllers/productsController.js";

const router = Router()

router.get('/produtos', gerarProdutos);


export default router;