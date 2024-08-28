import Image from 'next/image'
import Precios from '../../../public/pdf/precios.svg'

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

export function DisenoWebPDF({
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
        <div className="relative bg-white page">
            <div className="grid grid-cols-2 h-full">
                <div className="col-span-1 bg-slate-300 m-5 rounded-3xl px-8 py-8 bg-gradient-to-r from-sky-600 to-sky-500">
                    <h2 className="font-light text-4xl text-white">
                        Especificaciones{' '}
                        <strong className="block font-black">Técnicas</strong>
                    </h2>
                    <div className="w-[80px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 mt-4"></div>
                    {tipoProyecto.includes('disenoWeb') && (
                        <div className="bg-white bg-opacity-30 inline-block mt-4 px-6 py-3 rounded-full text-white font-medium">
                            {numeroPaginas > 1
                                ? `${numeroPaginas} Páginas de navegación`
                                : `${numeroPaginas} Página de navegación`}
                        </div>
                    )}

                    <ul className="mt-4 text-white ml-8 text-sm list-disc">
                        <li className="mb-2">Desarrollo desde cero</li>
                        <li className="mb-2">CMS: Wordpress</li>
                        <li className="mb-2">Responsive Design</li>
                        <li className="mb-2">
                            HTML 5, CSS3, PHP, JavaScript, MySQL
                        </li>
                        <li className="mb-2">
                            Exploradores compatibles: Chrome, Safari, Opera,
                            Edge, Firefox
                        </li>
                        <li className="mb-2">
                            Optimizaremos la web para buscadores
                        </li>
                        {tipoProyecto.includes('tienda') && (
                            <li className="mb-2">
                                Integración de un método de pago
                            </li>
                        )}
                    </ul>
                    <div className="mt-4">
                        <h3 className="text-white text-3xl font-light mb-4">
                            Adicionales
                        </h3>
                        <div className="text-white text-sm max-w-sm">
                            <ul className="list-disc ml-8">
                                {tipoProyecto.includes('tienda') && (
                                    <li className="mt-2">
                                        El plan incluye la carga de 10 productos
                                        y 2 categorías. El cliente podrá agregar
                                        los productos que desee luego de recibir
                                        la respectiva capacitación. Si el
                                        cliente desea que Marketeros haga la
                                        carga de los demás productos, esto tiene
                                        un valor adicional de acuerdo a la
                                        complejidad del producto.
                                    </li>
                                )}
                                {mostrarCatalogo && (
                                    <li className="mt-2">
                                        Módulo catálogo: {cantidadCatalogo} |{' '}
                                        {descripcionCatalogo}
                                    </li>
                                )}

                                {adicionales.includes(
                                    'subir-producto-catalogo-basico'
                                ) && (
                                    <li className="mt-2">
                                        Subir producto (Módulo catálogo básico)
                                    </li>
                                )}

                                {adicionales.includes(
                                    'subir-producto-catalogo-variable'
                                ) && (
                                    <li className="mt-2">
                                        Subir producto (Módulo catálogo
                                        variable)
                                    </li>
                                )}
                                {adicionales.includes('hosting-gratis-2g') && (
                                    <li className="mt-2">
                                        Hosting gratis 2G (1 Año)
                                    </li>
                                )}
                                {adicionales.includes(
                                    'migracion-noticias-blog'
                                ) && (
                                    <li className="mt-2">
                                        Migración noticias (Blog)
                                    </li>
                                )}
                                {adicionales.includes(
                                    'formulario-especial'
                                ) && (
                                    <li className="mt-2">
                                        Formulario especial
                                    </li>
                                )}
                                {adicionales.includes('idioma-adicional') && (
                                    <li className="mt-2">
                                        Idioma adicional: {cantidadIdioma} |{' '}
                                        {descripcionIdioma}
                                    </li>
                                )}
                                {adicionales.includes(
                                    'desarrollo-especial-a-la-medida'
                                ) && (
                                    <li className="mt-2">
                                        Desarrollo especial:{' '}
                                        {desarrolloEspecial}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 bg-white m-5 rounded-3xl px-8 py-14">
                    <h3 className="text-[#294859] text-4xl font-light mb-4">
                        Soporte
                    </h3>
                    <ul className="mt-4  text-[#294859] ml-8 text-sm list-disc">
                        <li className="mb-2">
                            Soporte del sitio web hasta tres meses después del
                            envío del acta de entrega.
                        </li>
                        <li className="mb-2">
                            Una hora de formación para la administración del
                            sitio web, vía Zoho Meeting (esta será grabada y
                            posteriormente se enviará por correo electrónico).
                        </li>
                    </ul>
                    <h3 className="text-[#294859] text-4xl font-light mb-4 mt-6">
                        Funcionalidades
                    </h3>
                    <ul className="mt-4  text-[#294859] ml-8 text-sm list-disc">
                        <li className="mb-2">
                            Web 100% autoadministrable (textos e imágenes, no
                            aplica en la estructura de la web)
                        </li>
                        <li className="mb-2">
                            Banner Rotativo hasta en tres imágenes
                        </li>
                        <li className="mb-2">
                            Galería de fotos / Imágenes / Vinculación de videos
                        </li>
                        <li className="mb-2">
                            Datagrid: En el datagrid de la web figurará una base
                            de datos con los usuarios que se registren en los
                            formularios que configuraremos
                        </li>
                        <li className="mb-2">
                            Formulario de Contacto (Básico)
                        </li>
                        <li className="mb-2">Links a las redes sociales</li>
                    </ul>
                    <Image
                        src={Precios}
                        alt="especificaciones técnicas"
                        className="absolute left-0 bottom-10 right-0 m-auto"
                    />
                </div>
            </div>
        </div>
    )
}
