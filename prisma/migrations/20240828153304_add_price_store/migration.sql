/*
  Warnings:

  - Made the column `priceStoreCOP` on table `PricesCurrency` required. This step will fail if there are existing NULL values in that column.
  - Made the column `priceStoreEUR` on table `PricesCurrency` required. This step will fail if there are existing NULL values in that column.
  - Made the column `priceStoreMX` on table `PricesCurrency` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PricesCurrency" ALTER COLUMN "priceStoreCOP" SET NOT NULL,
ALTER COLUMN "priceStoreEUR" SET NOT NULL,
ALTER COLUMN "priceStoreMX" SET NOT NULL;
