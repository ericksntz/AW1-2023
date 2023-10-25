import express from "express";
import cors from "cors";
import rotasUsuario from "./rotas/rotasUsuario.js";

const app = express();

app.use (express.json());
app.use (cors());

app.use("/user", rotasUsuario)

app.listen(8081)