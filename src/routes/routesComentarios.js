import {Router} from "express";
import { obtenerDatosComentarios } from "../controllers/cortesController.js";

const router = Router();

router.get("/api/comentarios/barber",obtenerDatosComentarios);

export default router