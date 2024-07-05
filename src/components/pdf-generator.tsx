'use client'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import { PortadaPDF } from '@/components/pdfPages/portada'
import { TrayectoriaPDF } from '@/components/pdfPages/trayectoria'

export default function PdfGenerator() {
    const generatePDF = async () => {
        const pdf = new jsPDF('l', 'mm', [297, 210])

        const pages = [
            document.getElementById('page1'),
            document.getElementById('page2'),
        ]
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i]
            if (page) {
                const canvas = await html2canvas(page, {
                    scale: 1,
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
        </>
    )
}
