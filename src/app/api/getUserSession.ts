'use server'

import { auth } from '@/auth'
import prisma from '@/lib/db'

export async function getUserSession() {
    try {
        const session = await auth()

        if (!session) {
            throw new Error('No hay una sesión activa')
        }

        const userEmail = session?.user?.email

        if (!userEmail) {
            throw new Error('El email no corresponde')
        }

        const user = await prisma.user.findUnique({
            where: { email: userEmail },
        })

        if (!user) {
            throw new Error('No existe el usuario')
        }

        return user.id
    } catch (error: any) {
        console.error('Error al obtener la sesión del usuario:', error)
        throw new Error(error.message || 'Error desconocido')
    }
}
