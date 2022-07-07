import { login, cadastro } from "../controllers/userController.js";
import { Router } from "express";

const router = Router()

router.post('/login', login);
router.post('/cadastro', cadastro);

export default router;