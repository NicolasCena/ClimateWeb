import { Request, Response } from "express";
import empleadosModel from "../models/clima";

const getClima = async (req: Request, res: Response) => {
  try {
    const empleados = await empleadosModel.getClima();
    res.send(empleados);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error getting empleados");
  }
};


// Exportar las funciones para que puedan ser utilizadas por otros archivos del proyecto
export default {
  getClima
};
