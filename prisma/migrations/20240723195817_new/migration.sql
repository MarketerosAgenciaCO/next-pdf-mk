-- CreateTable
CREATE TABLE "PricesCurrency" (
    "id" TEXT NOT NULL,
    "pricePagesBasePriceCOP" INTEGER NOT NULL,
    "pricePagesBasePriceMX" INTEGER NOT NULL,
    "pricePagesBasePriceEUR" INTEGER NOT NULL,
    "pricePagesIncrementPerPageCOP" INTEGER NOT NULL,
    "pricePagesIncrementPerPageMX" INTEGER NOT NULL,
    "pricePagesIncrementPerPageEUR" INTEGER NOT NULL,
    "priceCatalogoBasePriceCOP" INTEGER NOT NULL,
    "priceCatalogoBasePriceMX" INTEGER NOT NULL,
    "priceCatalogoBasePriceEUR" INTEGER NOT NULL,
    "priceCatalogoIncrementPerPageCOP" INTEGER NOT NULL,
    "priceCatalogoIncrementPerPageMX" INTEGER NOT NULL,
    "priceCatalogoIncrementPerPageEUR" INTEGER NOT NULL,
    "migracionNoticiasBlogCOP" INTEGER NOT NULL,
    "migracionNoticiasBlogMX" INTEGER NOT NULL,
    "migracionNoticiasBlogEUR" INTEGER NOT NULL,
    "subirProductoCatalogoBasicoCOP" INTEGER NOT NULL,
    "subirProductoCatalogoBasicoMX" INTEGER NOT NULL,
    "subirProductoCatalogoBasicoEUR" INTEGER NOT NULL,
    "subirProductoCatalogoVariableCOP" INTEGER NOT NULL,
    "subirProductoCatalogoVariableMX" INTEGER NOT NULL,
    "subirProductoCatalogoVariableEUR" INTEGER NOT NULL,
    "incrementoPorIdioma" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PricesCurrency_pkey" PRIMARY KEY ("id")
);
