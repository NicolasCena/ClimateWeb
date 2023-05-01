import express from "express";
const router = express.Router();
import empleadosController from "../controllers/empleados";

router.get("/", empleadosController.getEmpleados);
router.post("/", empleadosController.createEmpleado);
router.put("/:id", empleadosController.updateEmpleado);
router.delete("/:id", empleadosController.deleteEmpleado);

export default router;