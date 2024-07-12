'use client'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import { PortadaPDF } from '@/components/pdfPages/portada'
import { TrayectoriaPDF } from '@/components/pdfPages/trayectoria'
import { PresenciaPDF } from '@/components/pdfPages/presencia'
import { QuienesSomosPDF } from '@/components/pdfPages/quienes-somos'
import { FasesDisenoPDF } from '@/components/pdfPages/fases-diseno'

export default function PrintComponent() {
    const printRef = useRef<HTMLDivElement>(null)

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
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
            <div ref={printRef}>
                <PortadaPDF />
                <div className="page-break"></div>
                <TrayectoriaPDF />
                <div className="page-break"></div>
                <PresenciaPDF />
                <div className="page-break"></div>
                <QuienesSomosPDF />
                <div className="page-break"></div>
                <FasesDisenoPDF />
            </div>

            <button onClick={handlePrint}>Imprimir</button>
        </>
    )
}
