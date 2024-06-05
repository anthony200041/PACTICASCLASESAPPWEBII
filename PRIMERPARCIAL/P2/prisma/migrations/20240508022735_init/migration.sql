-- CreateTable
CREATE TABLE "Idioma" (
    "Id" SERIAL NOT NULL,
    "Descripcion" TEXT NOT NULL,

    CONSTRAINT "Idioma_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Palabra" (
    "Id" SERIAL NOT NULL,
    "Palabra" TEXT NOT NULL,
    "Deletreo" TEXT NOT NULL,

    CONSTRAINT "Palabra_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Registro" (
    "Id" SERIAL NOT NULL,
    "IdiomaId" INTEGER NOT NULL,
    "PalabraId" INTEGER NOT NULL,
    "Deletreo" TEXT NOT NULL,
    "Silabas" TEXT,
    "Fonetica" TEXT,
    "Estado" BOOLEAN NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_IdiomaId_fkey" FOREIGN KEY ("IdiomaId") REFERENCES "Idioma"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_PalabraId_fkey" FOREIGN KEY ("PalabraId") REFERENCES "Palabra"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
