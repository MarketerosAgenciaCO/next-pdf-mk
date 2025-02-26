import Image from 'next/image'
import Precios from '../../../public/pdf/especifica-img-1.png'
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

export function TiendaPDF({
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
        <div className="relative bg-[#F5F5F5] page">           
            <div className="grid grid-cols-2 h-full">
            <div className="relative col-span-1 bg-[url('/pdf/fondo-especificaciones.png')] bg-cover bg-center bg-no-repeat m-5 rounded-[60px] px-12 py-12 z-10">

                    
                    <h2 className="bg-white bg-opacity-30 inline-block mt-4 px-4 py-2 rounded-full text-white font-bold text-2xl">
                        Páginas de Navegación + Tienda
                    </h2>
                                  

                    <ul className="mt-4 text-white text-sm space-y-5 custom-list-big">
                        <li className="font-bold">Página Home</li>
                        <li className="font-bold">Páginas de Navegación <strong className='text-base font-extralight text-opacity-30'>(Máximo 3)</strong>
                            <ul className="ml-0 mt-3 text-xs space-y-3 custom-list-gris-sub font-light">
                                <li>La agencia sugiere como páginas de navegación: Nosotros, Blog y Contacto</li>
                                <li>El cliente podrá reemplazar estas páginas de acuerdo a su necesidad</li>
                            </ul>
                        </li>
                        <li className="font-bold">Páginas de enlaces de interés <strong className='text-base font-extralight text-opacity-30'>(Máximo 3)</strong>
                        <ul className="ml-0 mt-3 text-xs space-y-3 custom-list-gris-sub font-light">
                                <li> Estas páginas constan de un título y una caja de texto, ej. Políticas de envío, 
Políticas de reembolso, Política de privacidad, Términos de servicio, 
Preguntas frecuentes (FAQS), etc.</li>
                                <li>El cliente podrá escoger tres páginas de acuerdo a su necesidad</li>
                            </ul>
                        </li>
                        <li className="font-bold">
                        Tienda en Línea
                        <ul className="ml-0 mt-3 text-xs space-y-3 custom-list-gris-sub font-light">
                                <li>Página de Productos + Filtro de Navegación</li>
                                <li>Páginas de cada producto (imágenes y descripción)</li>
                                <li>Página de Carrito de Compras</li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
                <div className="col-span-1 bg-[#F5F5F5] m-5 rounded-3xl px-8 py-14">
                    <h3 className="text-[#294859] text-1xl font-light">
                        Tienda en Línea
                    </h3>
                    <h2 className="text-[#294859] text-3xl font-bold mb-4">Especificaciones Técnicas</h2>
                    <div className="w-[80px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    <ul className="mt-4  text-[#294859] ml-5 text-xs space-y-4 custom-list-azul">
                        <li>
                        Plataforma: WordPress + WooCommerce
                        </li>
                        <li>
                        Responsive Design
                        </li>
                        <li>
                        Carga de 10 productos: El cliente podrá agregar los productos que desee luego 
                        de recibir la respectiva capacitación. Si el cliente desea que Marketeros haga la 
                        carga de los demás productos, esto tiene un valor adicional de acuerdo a la 
                        complejidad del producto
                        </li>
                        <li>
                        Carrito de Compras y Pasarelas de Pago.
                        </li>
                        <li>
                        Correos Transaccionales Automáticos: Confirmaciones de compra, 
                        notificaciones, etc.
                        </li>
                        <li>
                        Integración de Botón de WhatsApp 
                        </li>
                    </ul>
                    <Image
                        src={Precios}
                        alt="especificaciones técnicas"
                        className="absolute left-100 bottom-0 right-0 m-auto w-[30%]"
                    />
                </div>
            </div>
            <div className='absolute top-0 left-0 bg-white w-[35%] h-full'></div>
           
        </div>
    )
}
