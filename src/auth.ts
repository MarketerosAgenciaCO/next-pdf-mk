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
            console.log(profile)

            if (user.email?.endsWith('@marketerosagencia.com')) {
                const existingUser = await prisma.user.findUnique({
                    where: {
                        email: user.email,
                    },
                })

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name || profile?.name,
                        },
                    })
                }

                return true
            } else {
                return false
            }
        },
        async session({ session, token, user }) {
            const dbUser = await prisma.user.findUnique({
                where: {
                    email: session.user.email,
                },
            })
            session.user.id = dbUser!.id
            return session
        },
    },
})
