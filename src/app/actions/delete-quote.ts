'use server'

import prisma from '@/lib/db'

export async function deleteQuote(id: string) {
    try {
        await prisma.quote.delete({
            where: {
                id: id,
            },
        })

        return true
    } catch (error) {
        return {
            success: false,
            error: 'Error al eliminar la cotización',
        }
    }
}
