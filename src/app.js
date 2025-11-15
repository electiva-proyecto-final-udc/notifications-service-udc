const express = require("express");
const verifyToken = require("./middleware/auth.middleware");
const connectDB = require("./config/mongo");

const app = express();
const port = 3000;
connectDB();

app.use(express.json());
app.use(verifyToken);

app.use("/notification-service/notifications", require("./routes/notificationsRoutes"))
app.use("/notification-service/technicians", require("./routes/tecnicoRoutes"));
app.use("/notification-service/equipments", require("./routes/equipoRoutes"));
app.use("/notification-service/reparations", require("./routes/reparacionRoutes"));

app.get("/", (req, res) => {
  res.send("Microservicio de Notificaciones funcionando 🚀");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
