'use server'
import prisma from '@/lib/db'
import { z } from 'zod'
import { priceSchema } from '@/schemas/formSchema'

export async function updatePrice(data: z.infer<typeof priceSchema>) {
    try {
        const updatePrice = await prisma.pricesCurrency.update({
            where: {
                id: data.priceId,
            },
            data: {
                pricePagesBasePriceCOP: data.pricePagesBasePriceCOP,
                pricePagesBasePriceMX: data.pricePagesBasePriceMXN,
                pricePagesBasePriceEUR: data.pricePagesBasePriceEUR,
                pricePagesIncrementPerPageCOP:
                    data.pricePagesIncrementPerPageCOP,
                pricePagesIncrementPerPageMX:
                    data.pricePagesIncrementPerPageMXN,
                pricePagesIncrementPerPageEUR:
                    data.pricePagesIncrementPerPageEUR,
                priceCatalogoBasePriceCOP: data.priceCatalogoBasePriceCOP,
                priceCatalogoBasePriceMX: data.priceCatalogoBasePriceMXN,
                priceCatalogoBasePriceEUR: data.priceCatalogoBasePriceEUR,
                priceCatalogoIncrementPerPageCOP:
                    data.priceCatalogoIncrementPerPageCOP,
                priceCatalogoIncrementPerPageMX:
                    data.priceCatalogoIncrementPerPageMXN,
                priceCatalogoIncrementPerPageEUR:
                    data.priceCatalogoIncrementPerPageEUR,
                migracionNoticiasBlogCOP: data.migracionNoticiasBlogCOP,
                migracionNoticiasBlogMX: data.migracionNoticiasBlogMXN,
                migracionNoticiasBlogEUR: data.migracionNoticiasBlogEUR,
                subirProductoCatalogoBasicoCOP:
                    data.subirProductoCatalogoBasicoCOP,
                subirProductoCatalogoBasicoMX:
                    data.subirProductoCatalogoBasicoMXN,
                subirProductoCatalogoBasicoEUR:
                    data.subirProductoCatalogoBasicoEUR,
                subirProductoCatalogoVariableCOP:
                    data.subirProductoCatalogoVariableCOP,
                subirProductoCatalogoVariableMX:
                    data.subirProductoCatalogoVariableMXN,
                subirProductoCatalogoVariableEUR:
                    data.subirProductoCatalogoVariableEUR,
                incrementoPorIdioma: data.incrementoPorIdioma,
                priceStoreCOP: data.priceStoreCOP,
                priceStoreMX: data.priceStoreMXN,
                priceStoreEUR: data.priceStoreEUR,
            },
        })

        return {
            success: true,
            data: updatePrice,
        }
    } catch (error) {
        return {
            success: false,
            error: 'Error al actualizar los precios',
        }
    }
}
