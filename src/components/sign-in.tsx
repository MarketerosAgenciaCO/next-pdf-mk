import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
// import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import ZohoLogo from '../../public/zoho-logo-white.svg'

export function SignIn() {
    return (
        <form
            action={async () => {
                'use server'
                await signIn('zoho', { redirectTo: '/dashboard' })
            }}
        >
            <Button type="submit" className="w-full">
                <Image
                    src={ZohoLogo}
                    alt="Zoho Logo"
                    width={44}
                    height={24}
                    className="mr-2 w-[44px] h-[24px]"
                />{' '}
                Iniciar sesión con Zoho
            </Button>
            {/* <SignInError /> */}
        </form>
    )
}
