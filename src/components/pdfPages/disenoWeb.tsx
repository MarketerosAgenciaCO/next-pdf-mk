import Image from 'next/image'
import Precios from '../../../public/pdf/precios.svg'

interface DisenoWebProps {
    adicionales: string[]
}

export function DisenoWebPDF({ adicionales }: DisenoWebProps) {
    return (
        <div className="relative bg-white page">
            <div className="grid grid-cols-2 h-full">
                <div className="col-span-1 bg-slate-300 m-5 rounded-3xl px-8 py-14 bg-gradient-to-r from-sky-600 to-sky-500">
                    <h2 className="font-light text-4xl text-white">
                        Especificaciones{' '}
                        <strong className="block font-black">Técnicas</strong>
                    </h2>
                    <div className="w-[80px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 mt-4"></div>
                    <div className="bg-white bg-opacity-30 inline-block mt-4 px-6 py-3 rounded-full text-white font-medium">
                        16 Páginas de navegación
                    </div>
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
                        <li>Optimizaremos la web para buscadores</li>
                    </ul>
                    <div className="mt-9">
                        <h3 className="text-white text-4xl font-light mb-4">
                            Adicionales
                        </h3>
                        <div className="text-white text-sm max-w-sm">
                            {adicionales && adicionales.length > 0 ? (
                                <ul>
                                    {adicionales.map((adicional) => (
                                        <li key={adicional}>{adicional}</li>
                                    ))}
                                </ul>
                            ) : (
                                <span>No hay adicionales</span>
                            )}
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
