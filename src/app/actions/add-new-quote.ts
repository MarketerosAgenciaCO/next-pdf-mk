'use server'

import prisma from '@/lib/db'
import { formSchema } from '@/schemas/formSchema'
import { z } from 'zod'
import { getUserSession } from '@/app/api/getUserSession'

export async function createQuote(data: z.infer<typeof formSchema>) {
    const userId: string = await getUserSession()

    try {
        const newQuote = await prisma.quote.create({
            data: {
                nombre: data.nombre,
                apellido: data.apellido,
                nombreProyecto: data.nombreProyecto,
                sitioWeb: data.sitioWeb!,
                numeroPaginas: data.numeroPaginas,
                adicionales: data.adicionales,
                cantidadCatalogo: data.cantidadCatalogo,
                descripcionCatalogo: data.descripcionCatalogo,
                precioFormulario: data.precioFormulario,
                cantidadIdioma: data.cantidadIdioma,
                descripcionIdioma: data.descripcionIdioma,
                precioDesarrolloEspecial: data.precioDesarrolloEspecial,
                descripcionDesarrolloEspecial:
                    data.descripcionDesarrolloEspecial,
                totalPrice: data.totalPrice,
                userId: userId,
                pdfLink: data.pdfLink,
                moneda: data.moneda,
            },
        })

        return {
            success: true,
            data: newQuote,
        }
    } catch (error) {
        return {
            success: false,
            error: 'Error al crear la cotización',
        }
    }
}
