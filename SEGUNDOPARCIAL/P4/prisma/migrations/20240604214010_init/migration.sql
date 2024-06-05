-- CreateTable
CREATE TABLE "Idioma" (
    "Id" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Idioma_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Palabra" (
    "Id" TEXT NOT NULL,
    "Palabra" TEXT NOT NULL,
    "Deletreo" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Palabra_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Registro" (
    "Id" TEXT NOT NULL,
    "IdIdioma" TEXT NOT NULL,
    "IdPalabra" TEXT NOT NULL,
    "Deletreo" TEXT NOT NULL,
    "Silabas" TEXT,
    "Fonetica" TEXT,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_IdIdioma_fkey" FOREIGN KEY ("IdIdioma") REFERENCES "Idioma"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_IdPalabra_fkey" FOREIGN KEY ("IdPalabra") REFERENCES "Palabra"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
