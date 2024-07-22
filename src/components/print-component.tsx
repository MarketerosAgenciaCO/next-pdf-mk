import { PortadaPDF } from '@/components/pdfPages/portada'
import { TrayectoriaPDF } from '@/components/pdfPages/trayectoria'
import { PresenciaPDF } from '@/components/pdfPages/presencia'
import { QuienesSomosPDF } from '@/components/pdfPages/quienes-somos'
import { FasesDisenoPDF } from '@/components/pdfPages/fases-diseno'
import { DisenoWebPDF } from '@/components/pdfPages/disenoWeb'
import { ValorPropuesta } from '@/components/pdfPages/valorPropuesta'

interface PrintComponentProps {
    adicionales: string[]
    printRef: React.RefObject<HTMLDivElement>
    numeroPaginas: number
    descripcionCatalogo: string | undefined
    cantidadCatalogo: string | undefined
    cantidadIdioma: number | undefined
    descripcionIdioma: string | undefined
    desarrolloEspecial: string | undefined
    price: number
}

export default function PrintComponent({
    adicionales,
    printRef,
    numeroPaginas,
    descripcionCatalogo,
    cantidadCatalogo,
    cantidadIdioma,
    descripcionIdioma,
    desarrolloEspecial,
    price,
}: PrintComponentProps) {
    return (
        <>
            <style jsx global>{`
                @page {
                    size: A4 landscape;
                    margin: 0;
                }

                @media print {
                    body {
                        -webkit-print-color-adjust: exact !important;
                    }

                    div {
                        font-size: 16px;
                    }
                }
            `}</style>
            <div ref={printRef} id="print-container">
                <PortadaPDF />
                <TrayectoriaPDF />
                <PresenciaPDF />
                <QuienesSomosPDF />
                <FasesDisenoPDF />
                <DisenoWebPDF
                    adicionales={adicionales}
                    numeroPaginas={numeroPaginas}
                    descripcionCatalogo={descripcionCatalogo}
                    cantidadCatalogo={cantidadCatalogo}
                    cantidadIdioma={cantidadIdioma}
                    descripcionIdioma={descripcionIdioma}
                    desarrolloEspecial={desarrolloEspecial}
                />
                <ValorPropuesta price={price} />
            </div>

            {/* <button onClick={handlePrint}>Imprimir</button> */}
        </>
    )
}
