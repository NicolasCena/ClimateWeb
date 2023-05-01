import db from "../config/db";

// Función para obtener todos los empleados
const getClima  = () => {
  db.query("SELECT * FROM empleados", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(null, result);
    }
  });
};

// Exportar las funciones para que puedan ser utilizadas por otros archivos del proyecto
export default {
  getClima 
};
