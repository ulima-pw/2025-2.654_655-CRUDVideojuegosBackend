import express, {Request, Response} from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import dataVideojuegos, { Videojuego } from "./data"
import { PrismaClient } from "./generated/prisma"

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(cors()) // Configurando CORS (abierto)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

// Endpoint GET para obtener categorias
app.get("/categorias", async (req : Request, resp : Response) => {
    const prisma = new PrismaClient()

    const categorias = await prisma.categoria.findMany()

    resp.status(200).json(categorias)
})

// Endpoint GET para obtener plataformas
app.get("/plataformas", async (req : Request, resp : Response) => {
    const prisma = new PrismaClient()

    const plataformas = await prisma.plataforma.findMany()

    resp.status(200).json(plataformas)
})

// Endpoint GET para obtener videojuegos
app.get("/videojuegos", async (req : Request, resp : Response) => {
    const prisma = new PrismaClient()

    const videojuegos = await prisma.videojuego.findMany({
        omit : {
            categoria_id : true
        },
        include : {
            categoria : true,
            plataformas : true
        }
    })

    const videojuegosConCategoria = videojuegos.map( (vj) => {
        const plataformasComoString = vj.plataformas.map( (p) => {
            return p.nombre
        } )
        return {
            ...vj,
            categoria : vj.categoria?.nombre,
            plataformas : plataformasComoString
        }
    } )

    resp.status(200).json(videojuegosConCategoria)
})

// Endpoint GET para eliminar un videojuego
// http://localhost:5002/videojuegos/eliminar?id=1
app.get("/videojuegos/eliminar", async (req : Request, resp : Response) => {
    const id = req.query.id

    if (id == undefined) {
        resp.status(400).json({
            error : "Debe enviar un id como query parameter"
        })
        return
    }

    const prisma = new PrismaClient()

    try {
        await prisma.videojuego.delete({
            where : {
                id : id.toString()
            }
        })
        resp.status(200).json({
            error : ""
        })
    }catch (e) {
        resp.status(400).json({
            error : e
        })
        return
    }
})

// Endpoint GET para obtener data de un videojuego
// http://localhost:5002/videojuego/2
app.get("/videojuegos/:id", async (req : Request, resp : Response) => {
    const id = req.params.id

    if (id == undefined) {
        resp.status(400).json({
            error : "No ha enviado id."
        })
        return
    }

    const prisma = new PrismaClient() 
    try {
        const vj = await prisma.videojuego.findUniqueOrThrow({
            where : {
                id : id.toString()
            },
            omit : {
                categoria_id : true
            },
            include : {
                categoria : true,
                plataformas : true
            }
        })
        resp.status(200).json(vj)
    }catch(e) {
        resp.status(400).json({
            error : e
        })
    }
})

// Endpoint POST para registrar un videojuego
app.post("/videojuegos/crear", async (req : Request, resp : Response) => {
    const data = req.body
    const prisma = new PrismaClient()

    try{
        const vj = await prisma.videojuego.create({
            data : {
                nombre : data.nombre,
                categoria_id : data.categoria_id,
                estado : data.estado,
                plataformas : {
                    connect : data.plataformas
                }
            }
        })
        resp.status(200).json(vj)
    }catch(e) {
        resp.status(400).json({
            error : e
        })
        return
    }
})

// Endpoint POST para modificar un videojuego
app.post("/videojuegos/actualizar", async (req : Request, resp : Response) => {
    const data = req.body

    const prisma = new PrismaClient()
    
    try {
        await prisma.videojuego.update({
            where : {
                id : data.id
            },
            data : {
                nombre : data.nombre,
                categoria_id : data.categoria_id,
                estado : data.estado,
                plataformas : {
                    set : data.plataformas
                }
            }
        })
        resp.status(200).json({
            error : ""
        })
        return
    }catch(e) {
        resp.status(400).json({
            error : e
        })
        return
    }
})



app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})