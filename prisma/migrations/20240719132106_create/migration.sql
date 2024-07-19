-- AlterTable
ALTER TABLE "Quote" ALTER COLUMN "sitioWeb" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Prices" (
    "id" TEXT NOT NULL,
    "pricePagesBasePrice" INTEGER NOT NULL,
    "pricePagesIncrementPerPage" INTEGER NOT NULL,
    "priceCatalogoBasePrice" INTEGER NOT NULL,
    "priceCatalogoIncrementPerPage" INTEGER NOT NULL,
    "migracionNoticiasBlog" INTEGER NOT NULL,
    "subirProductoCatalogoBasico" INTEGER NOT NULL,
    "subirProductoCatalogoVariable" INTEGER NOT NULL,
    "incrementoPorIdioma" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZohoToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ZohoToken_pkey" PRIMARY KEY ("id")
);
