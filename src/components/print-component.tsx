'use client'
import { useEffect, useRef } from 'react'

import { PortadaPDF } from '@/components/pdfPages/portada'
import { TrayectoriaPDF } from '@/components/pdfPages/trayectoria'
import { PresenciaPDF } from '@/components/pdfPages/presencia'
import { QuienesSomosPDF } from '@/components/pdfPages/quienes-somos'
import { FasesDisenoPDF } from '@/components/pdfPages/fases-diseno'
import { DisenoWebPDF } from './pdfPages/disenoWeb'

interface PrintComponentProps {
    adicionales: string[]
    printRef: React.RefObject<HTMLDivElement>
}

export default function PrintComponent({
    adicionales,
    printRef,
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
                }
            `}</style>
            <div ref={printRef} id="print-container">
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

            {/* <button onClick={handlePrint}>Imprimir</button> */}
        </>
    )
}
