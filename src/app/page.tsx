import { SignIn } from '@/components/sign-in'
import Link from 'next/link'
import Image from 'next/image'
import MarketerosLogo from '../../public/marketeros-logo.svg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Generador de Cotizaciónes | Marketeros Agencia',
    description: 'Genera cotizaciones y exportalas en pdf',
}

export default function Home() {
    return (
        <>
            <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Image
                            src={MarketerosLogo}
                            alt="Marketeros Logo"
                            width={200}
                            height={26}
                            className="mr-2 "
                        />
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                Esta aplicación optimiza tu tiempo y te permite
                                crear cotizaciones PDF impresionantes y rápidas
                                para tus clientes.
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Inicia sesión
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Haz clic en el botón para iniciar sesión con
                                Zoho
                            </p>
                        </div>
                        <SignIn />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            Al hacer clic en continuar, aceptas nuestra{' '}
                            <Link
                                href="https://www.marketerosagencia.com/documentos/politica-tratamiento-datos-marketeros.pdf"
                                className="underline underline-offset-4 hover:text-primary"
                                target="_blank"
                            >
                                Política de privacidad
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
