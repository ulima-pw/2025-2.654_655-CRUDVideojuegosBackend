import express, {Request, Response} from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import dataVideojuegos, { Videojuego } from "./data"

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(cors()) // Configurando CORS (abierto)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))


// Endpoint GET para obtener videojuegos
app.get("/videojuegos", (req : Request, resp : Response) => {
    resp.status(200).json(dataVideojuegos)
})

// Endpoint GET para eliminar un videojuego
// http://localhost:5002/videojuegos/eliminar?id=1
app.get("/videojuegos/eliminar", (req : Request, resp : Response) => {
    console.log("ENTRA")
    const id = req.query.id

    if (id == undefined) {
        resp.status(400).json({
            error : "Debe enviar un id como query parameter"
        })
        return
    }

    let posicion = -1;
    for (let i =0; i < dataVideojuegos.length; i++) {
        if (dataVideojuegos[i]!.id == parseInt(id.toString()) ) {
            posicion = i
            break
        }
    }
    if (posicion == -1) {
        resp.status(400).json({
            error : "Id enviado no existe"
        })
        return
    }
    dataVideojuegos.splice(posicion, 1)
    resp.status(200).json({
        error : ""
    })
})

// Endpoint GET para obtener data de un videojuego
// http://localhost:5002/videojuego/2
app.get("/videojuegos/:id", (req : Request, resp : Response) => {
    const id = req.params.id

    if (id == undefined) {
        resp.status(400).json({
            error : "No ha enviado id."
        })
        return
    }

    const videojuegosFiltrados = dataVideojuegos.filter((vj :Videojuego) => {
        return vj.id == parseInt(id)
    })
    if (videojuegosFiltrados.length == 0) {
        resp.status(400).json({
            error : "El id que ha enviado no existe."
        })
        return
    }
    resp.status(200).json(videojuegosFiltrados[0])
})

// Endpoint POST para registrar un videojuego
app.post("/videojuegos/crear", (req : Request, resp : Response) => {
    const data = req.body
    data.id = new Date().getTime()
    dataVideojuegos.push(data)
    resp.status(200).json(data)
})

// Endpoint POST para modificar un videojuego
app.post("/videojuegos/actualizar", (req : Request, resp : Response) => {
    const data = req.body

    for (let i = 0; i < dataVideojuegos.length; i++) {
        const vj = dataVideojuegos[i]!
        if (vj.id == data.id) {
            // Es el vj a modificar
            vj.nombre = data.nombre
            vj.categoria = data.categoria
            vj.plataformas = data.plataformas
            vj.fecha = data.fecha
            vj.estado = data.estado

            resp.status(200).json(vj)
            return
        }
    }

    resp.status(400).json({
        error: "El id que ha enviado no existe."
    })
    return
})



app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})