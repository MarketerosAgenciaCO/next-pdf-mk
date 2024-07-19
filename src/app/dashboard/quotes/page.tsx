import QuoteForm from '@/app/dashboard/quotes/quote-form'
import prisma from '@/lib/db'
import PrintComponent from '@/components/print-component'

export default async function Quotes() {
    const prices = await prisma.prices.findFirst()

    if (!prices) {
        throw new Error('No hay precios definidos')
    }

    return (
        <>
            <div className="space-y-8 col-span-3 relative max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tight mb-5">
                    Crear cotización
                </h1>
                <QuoteForm prices={prices} />
            </div>
        </>
    )
}
