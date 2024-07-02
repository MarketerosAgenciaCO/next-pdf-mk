import NextAuth from 'next-auth'
import Zoho from 'next-auth/providers/zoho'
import prisma from '@/lib/db'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Zoho],

    pages: {
        signIn: '/',
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user)

            if (user.email?.endsWith('@marketerosagencia.com')) {
                try {
                    await prisma.user.upsert({
                        where: { email: user.email! },
                        update: {
                            name: user.name!,
                            updateAt: new Date(),
                        },
                        create: {
                            email: user.email,
                            name: user.name!,
                            createAt: new Date(),
                        },
                    })
                    return true
                } catch (error) {
                    console.error('Error al crear el usuario:', error)
                    return false
                }
            } else {
                return false
            }
        },
    },
})
