import QuoteForm from '@/app/dashboard/quotes/quote-form'
import PdfGenerator from '@/components/pdf-generator'

export default function Quotes() {
    return (
        <>
            <div className="space-y-8 col-span-3 relative max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tight mb-5">
                    Crear cotización
                </h1>
                <QuoteForm />
            </div>
            <div className="col-span-3">
                <PdfGenerator />
            </div>
        </>
    )
}
