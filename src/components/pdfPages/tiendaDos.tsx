import Image from 'next/image'
import Precios from '../../../public/pdf/tienda-dos.png'
import { FooterPDF } from "./footer-logo"


interface DisenoWebProps {
    adicionales: string[]
    numeroPaginas: number
    descripcionCatalogo: string | undefined
    cantidadCatalogo: string | undefined
    cantidadIdioma: number | undefined
    descripcionIdioma: string | undefined
    desarrolloEspecial: string | undefined
    tipoProyecto: string[]
}

export function TiendaDosPDF({
    adicionales,
    numeroPaginas,
    descripcionCatalogo,
    cantidadCatalogo,
    cantidadIdioma,
    descripcionIdioma,
    desarrolloEspecial,
    tipoProyecto,
}: DisenoWebProps) {
    const mostrarCatalogo = adicionales.includes('catalogo')

    return (
        <div className="relative page">           
            <div className="flex flex-col">
            <div className="relative col-span-1 bg-[#F5F5F5] m-5 rounded-[60px] px-12 py-12 pr-[125px]  h-[35%] w-[65%]">
            <h3 className="text-[#294859] text-2xl font-bold mb-4">
                        Soporte
                    </h3>
                    <div className="w-[80px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    <ul className="mt-4 text-[#294859] text-xs space-y-5 custom-list-azul">
                        <li>Página Home</li>
                        <li>Una hora de formación para la administración del sitio web, vía Zoho Meeting 
                        (esta será grabada y posteriormente se enviará por correo electrónico).</li>
                    </ul>
                    <h3 className="text-[#294859] text-2xl font-bold mb-4 mt-10">
                    Funcionalidades
                    </h3>
                    <div className="w-[80px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    <ul className="mt-4 text-[#294859] text-xs space-y-5 custom-list-azul">
                        <li>Web 100% autoadministrable (textos e imágenes, no aplica en la estructura de la web)</li>
                        <li>Banner Rotativo hasta en tres imágenes</li>
                        <li>Galería de fotos / Imágenes / Vinculación de videos</li>
                        <li>Datagrid: En el datagrid de la web figurará una base de datos con los usuarios que se registren en los formularios que configuraremos</li>
                        <li>Formulario de Contacto (Básico)</li>
                        <li>Links a las redes sociales</li>
                    </ul>
                    
                </div>
                
                    
            </div>
            <Image
                        src={Precios}
                        alt="especificaciones técnicas"
                        className="absolute bottom-[55px] right-0 w-[45%]"
                    />
            <FooterPDF />
        </div>
    )
}
