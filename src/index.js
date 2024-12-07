import express from "express";
import routerComentarios from "./routes/routesComentarios.js";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())
app.use("/",routerComentarios)

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`)
})