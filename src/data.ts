export interface Videojuego {
    id : number
    nombre : string
    categoria : string
    plataformas : string[]
    fecha : string
    estado : string
}

const data : Videojuego[] = [
    {
        id: 1,
        nombre: "Ecos de la Ciudad",
        categoria: "Aventura",
        plataformas: ["PC", "PS5"],
        fecha: "2024-03-15",
        estado: "Nuevo"
    },
    {
        id: 2,
        nombre: "Furia Galáctica",
        categoria: "Shooter",
        plataformas: ["PC", "Xbox Series X", "Switch"],
        fecha: "2023-11-02",
        estado: "Usado"
    },
    {
        id: 3,
        nombre: "Leyenda del Bosque",
        categoria: "Rol",
        plataformas: ["PC"],
        fecha: "2025-01-20",
        estado: "Nuevo"
    },
    {
        id: 4,
        nombre: "Rally Extremo",
        categoria: "Carreras",
        plataformas: ["PS5", "Xbox Series X"],
        fecha: "2022-09-10",
        estado: "Digital"
    },
    {
        id: 5,
        nombre: "Puzzle: Conexiones",
        categoria: "Puzzle",
        plataformas: ["Mobile", "PC"],
        fecha: "2024-07-01",
        estado: "Nuevo"
    },
    {
        id: 6,
        nombre: "Cazadores Nocturnos",
        categoria: "Horror",
        plataformas: ["PC", "PS5"],
        fecha: "2021-10-31",
        estado: "Usado"
    }
]

export default data