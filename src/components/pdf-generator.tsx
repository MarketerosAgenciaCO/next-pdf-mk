'use client'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import { PortadaPDF } from '@/components/pdfPages/portada'
import { TrayectoriaPDF } from '@/components/pdfPages/trayectoria'
import { PresenciaPDF } from '@/components/pdfPages/presencia'
import { QuienesSomosPDF } from '@/components/pdfPages/quienes-somos'
import { FasesDisenoPDF } from '@/components/pdfPages/fases-diseno'

export default function PdfGenerator() {
    const generatePDF = async () => {
        const pdf = new jsPDF('l', 'mm', [297, 210])

        const pages = [
            document.getElementById('page1'),
            document.getElementById('page2'),
            document.getElementById('page3'),
            document.getElementById('page4'),
            document.getElementById('page5'),
        ]
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i]
            if (page) {
                const canvas = await html2canvas(page, {
                    scale: 1.2,
                })
                const imageData = canvas.toDataURL('image/png')

                pdf.addImage(imageData, 'PNG', 0, 0, 297, 210)
                if (i !== pages.length - 1) {
                    pdf.addPage()
                }
            }
        }

        pdf.save('cotizaciones.pdf')
    }

    return (
        <>
            <button onClick={generatePDF}>Generar PDF</button>
            <div
                id="page1"
                style={{
                    width: '297mm',
                    height: '210mm',
                }}
            >
                <PortadaPDF />
            </div>
            <div
                id="page2"
                style={{
                    width: '297mm',
                    height: '210mm',
                }}
            >
                <TrayectoriaPDF />
            </div>
            <div
                id="page3"
                style={{
                    width: '297mm',
                    height: '210mm',
                }}
            >
                <PresenciaPDF />
            </div>
            <div
                id="page4"
                style={{
                    width: '297mm',
                    height: '210mm',
                }}
            >
                <QuienesSomosPDF />
            </div>
            <div
                id="page5"
                style={{
                    width: '297mm',
                    height: '210mm',
                }}
            >
                <FasesDisenoPDF />
            </div>
        </>
    )
}
