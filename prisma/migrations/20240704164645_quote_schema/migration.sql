/*
  Warnings:

  - You are about to drop the column `content` on the `Quote` table. All the data in the column will be lost.
  - Added the required column `apellido` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreProyecto` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroPaginas` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sitioWeb` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "content",
ADD COLUMN     "adicionales" TEXT[],
ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "cantidadCatalogo" TEXT,
ADD COLUMN     "cantidadIdioma" INTEGER,
ADD COLUMN     "descripcionCatalogo" TEXT,
ADD COLUMN     "descripcionDesarrolloEspecial" TEXT,
ADD COLUMN     "descripcionIdioma" TEXT,
ADD COLUMN     "nombre" TEXT NOT NULL,
ADD COLUMN     "nombreProyecto" TEXT NOT NULL,
ADD COLUMN     "numeroPaginas" INTEGER NOT NULL,
ADD COLUMN     "precioDesarrolloEspecial" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "precioFormulario" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "sitioWeb" TEXT NOT NULL,
ADD COLUMN     "totalPrice" INTEGER NOT NULL;
