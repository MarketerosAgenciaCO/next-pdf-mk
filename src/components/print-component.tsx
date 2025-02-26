import { PortadaPDF } from '@/components/pdfPages/portada'
import { TrayectoriaPDF } from '@/components/pdfPages/trayectoria'
import { PresenciaPDF } from '@/components/pdfPages/presencia'
import { QuienesSomosPDF } from '@/components/pdfPages/quienes-somos'
import { FasesDisenoPDF } from '@/components/pdfPages/fases-diseno'
import { DisenoWebPDF } from '@/components/pdfPages/disenoWeb'
import { TiendaPDF } from '@/components/pdfPages/tienda'
import { ValorPropuesta } from '@/components/pdfPages/valorPropuesta'
import { EquipoPDF } from '@/components/pdfPages/equipo'
import { TerminosPDF } from './pdfPages/terminos'
import { TiendaDosPDF } from '@/components/pdfPages/tiendaDos'

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
    moneda: string
    tipoProyecto: string[]
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
    moneda,
    tipoProyecto,
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

                {(tipoProyecto.includes('disenoWeb') && (
                    <>
                        <FasesDisenoPDF />
                        <DisenoWebPDF
                            adicionales={adicionales}
                            numeroPaginas={numeroPaginas}
                            descripcionCatalogo={descripcionCatalogo}
                            cantidadCatalogo={cantidadCatalogo}
                            cantidadIdioma={cantidadIdioma}
                            descripcionIdioma={descripcionIdioma}
                            desarrolloEspecial={desarrolloEspecial}
                            tipoProyecto={tipoProyecto}
                        />
                    </>
                ))}
                {tipoProyecto.includes('tienda') && (
                    <>
                    <FasesDisenoPDF />
                    <TiendaPDF
                        adicionales={adicionales}
                        numeroPaginas={numeroPaginas}
                        descripcionCatalogo={descripcionCatalogo}
                        cantidadCatalogo={cantidadCatalogo}
                        cantidadIdioma={cantidadIdioma}
                        descripcionIdioma={descripcionIdioma}
                        desarrolloEspecial={desarrolloEspecial}
                        tipoProyecto={tipoProyecto}
                    />
                    <TiendaDosPDF
                        adicionales={adicionales}
                        numeroPaginas={numeroPaginas}
                        descripcionCatalogo={descripcionCatalogo}
                        cantidadCatalogo={cantidadCatalogo}
                        cantidadIdioma={cantidadIdioma}
                        descripcionIdioma={descripcionIdioma}
                        desarrolloEspecial={desarrolloEspecial}
                        tipoProyecto={tipoProyecto}
                    />

                </>
                )}
                <EquipoPDF />
                <ValorPropuesta price={price} moneda={moneda} />
                <TerminosPDF />
            </div>

            {/* <button onClick={handlePrint}>Imprimir</button> */}
        </>
    )
}
