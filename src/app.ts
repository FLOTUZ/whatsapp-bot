import express from "express";
import dotenv from "dotenv";
import router from "routes/routes";

// load environment variables
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", router);

app.use("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
