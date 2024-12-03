import express from "express";
import routerComentarios from "./routes/routesComentarios.js";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())
app.use("/",routerComentarios)

app.listen(4000,()=>{
    console.log("servidor corriendo en el puerto 4000")
})