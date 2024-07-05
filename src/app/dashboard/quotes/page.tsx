import QuoteForm from '@/app/dashboard/quotes/quote-form'
export default function Quotes() {
    return (
        <>
            <div className="space-y-8 col-span-2 relative ">
                <h1 className="text-3xl font-bold tracking-tight mb-5">
                    Crear cotización
                </h1>

                <QuoteForm />
            </div>
        </>
    )
}
