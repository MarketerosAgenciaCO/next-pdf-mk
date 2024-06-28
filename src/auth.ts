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
                return true
            } else {
                return false
            }
        },
    },
})
