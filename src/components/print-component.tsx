import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import Html2Pdf from 'js-html2pdf'
import { PortadaPDF } from '@/components/pdfPages/portada'
import { TrayectoriaPDF } from '@/components/pdfPages/trayectoria'
import { PresenciaPDF } from '@/components/pdfPages/presencia'
import { QuienesSomosPDF } from '@/components/pdfPages/quienes-somos'
import { FasesDisenoPDF } from '@/components/pdfPages/fases-diseno'
import { DisenoWebPDF } from './pdfPages/disenoWeb'

interface PrintComponentProps {
    adicionales: string[]
}

export default function PrintComponent({ adicionales }: PrintComponentProps) {
    const printRef = useRef<HTMLDivElement>(null)

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        print: async (printIframe) => {
            const document = printIframe.contentDocument

            if (document) {
                const html = document.querySelector('.print-container')
                const options = {
                    margin: 0,
                    filename: 'cotizaciones.pdf',
                    jsPDF: {
                        unit: 'mm',
                        format: 'a4',
                        orientation: 'landscape',
                    },
                }
                const exporter = new Html2Pdf(html, options)
                await exporter.getPdf(options)
            }
        },
    })

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
                }
            `}</style>
            <div ref={printRef} className="print-container">
                <PortadaPDF />
                <div className="page-break"></div>
                <TrayectoriaPDF />
                <div className="page-break"></div>
                <PresenciaPDF />
                <div className="page-break"></div>
                <QuienesSomosPDF />
                <div className="page-break"></div>
                <FasesDisenoPDF />
                <div className="page-break"></div>
                <DisenoWebPDF adicionales={adicionales} />
            </div>

            <button onClick={handlePrint}>Imprimir</button>
        </>
    )
}
