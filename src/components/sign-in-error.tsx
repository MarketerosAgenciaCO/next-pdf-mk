'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function SignInError() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (router.isReady) {
            if (router.query.error === 'InvalidEmailDomain') {
                setError('Por favor, ingresa con un correo de Marketeros')
            }
        }
    }, [router.query, router.isReady])

    return error && <p>{error}</p>
}
