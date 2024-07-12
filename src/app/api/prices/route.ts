'use server'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/db'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const prices = await prisma.prices.findFirst()

        if (!prices) {
            throw new Error('No hay precios definidos')
        }

        if (!res.status || !res.json) {
            throw new Error('Response object is not valid')
        }

        res.status(200).json({
            pricePages: {
                basePrice: prices.pricePagesBasePrice,
                incrementPerPage: prices.pricePagesIncrementPerPage,
            },
            priceCatalogo: {
                basePrice: prices.priceCatalogoBasePrice,
                incrementPerPage: prices.priceCatalogoIncrementPerPage,
            },
            additionalFeatures: {
                migracionNoticiasBlog: prices.migracionNoticiasBlog,
                subirProductoCatalogoBasico: prices.subirProductoCatalogoBasico,
                subirProductoCatalogoVariable:
                    prices.subirProductoCatalogoVariable,
            },
            idiomaAdicional: {
                incrementoPorIdioma: prices.incrementoPorIdioma,
            },
        })
    } catch (error) {
        console.error('Error fetching prices:', error)
        res.status(500).json({ error: 'Error fetching prices' })
    }
}

// async function fetchPrices() {
//     const prices = await prisma.prices.findFirst()

//     if (!prices) {
//         throw new Error('No hay precios definidos')
//     }

//     return {
//         pricePages: {
//             basePrice: prices.pricePagesBasePrice,
//             incrementPerPage: prices.pricePagesIncrementPerPage,
//         },
//         priceCatalogo: {
//             basePrice: prices.priceCatalogoBasePrice,
//             incrementPerPage: prices.priceCatalogoIncrementPerPage,
//         },
//         additionalFeatures: {
//             migracionNoticiasBlog: prices.migracionNoticiasBlog,
//             subirProductoCatalogoBasico: prices.subirProductoCatalogoBasico,
//             subirProductoCatalogoVariable: prices.subirProductoCatalogoVariable,
//         },
//         idiomaAdicional: {
//             incrementoPorIdioma: prices.incrementoPorIdioma,
//         },
//     }
// }

// const priceConfig = fetchPrices()

// export default priceConfig
