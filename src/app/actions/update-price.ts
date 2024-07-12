'use server'
import prisma from '@/lib/db'
import { z } from 'zod'
import { priceSchema } from '@/schemas/formSchema'

export async function updatePrice(data: z.infer<typeof priceSchema>) {
    try {
        const updatePrice = await prisma.prices.update({
            where: {
                id: data.priceId,
            },
            data: {
                pricePagesBasePrice: data.pricePagesBasePrice,
                pricePagesIncrementPerPage: data.pricePagesIncrementPerPage,
                priceCatalogoBasePrice: data.priceCatalogoBasePrice,
                priceCatalogoIncrementPerPage:
                    data.priceCatalogoIncrementPerPage,
                migracionNoticiasBlog: data.migracionNoticiasBlog,
                subirProductoCatalogoBasico: data.subirProductoCatalogoBasico,
                subirProductoCatalogoVariable:
                    data.subirProductoCatalogoVariable,
                incrementoPorIdioma: data.incrementoPorIdioma,
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
