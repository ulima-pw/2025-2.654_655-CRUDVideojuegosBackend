-- CreateTable
CREATE TABLE "Videojuego" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Videojuego_pkey" PRIMARY KEY ("id")
);
