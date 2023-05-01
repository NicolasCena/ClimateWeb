const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/db");
const cors = require("./utils/cors");
const middleware = require("./utils/middleware");
const empleadosRoutes = require("./routes/empleados");

app.use(cors);
app.use(middleware);

app.use("/empleados", empleadosRoutes);

db.connect((err: any) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Connected to database!");
  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
  );
});