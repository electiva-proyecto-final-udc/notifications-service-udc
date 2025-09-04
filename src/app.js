const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/tecnicos", require("./routes/tecnicoRoutes"));
app.use("/api/equipos", require("./routes/equipoRoutes"));
app.use("/api/reparaciones", require("./routes/reparacionRoutes"));

app.get("/", (req, res) => {
  res.send("Microservicio de Notificaciones funcionando 🚀");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
