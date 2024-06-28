import { signOut } from '@/auth'
import { LogOut } from 'lucide-react'

export function SignOut() {
    return (
        <form
            action={async () => {
                'use server'
                await signOut()
            }}
        >
            <button type="submit" className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" /> <span>Cerrar sesión</span>
            </button>
        </form>
    )
}
