export function TerminosDosPDF() {
    return (
        <div
            // style={{
            //     width: '297mm',
            //     height: '210mm',
            // }}
            className="relative bg-white page"
        >
            <div className="p-10">
                <h2 className="text-4xl font-light pb-4  text-[#294859]">
                    Términos y{' '}
                    <strong className="block font-bold">Condiciones</strong>
                </h2>
                <div className="w-[120px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500" />
                <ol
                    className="text-xs mt-5 text-[#294859] list-decimal pl-10"
                    start={10}
                >
                    <li className="mb-3">
                        Los servicios adicionales al proyecto, ya sean a nivel
                        de diseño y/o desarrollo, que no estén descritos en esta
                        propuesta, serán cotizados adicionalmente y podrían
                        modificar los tiempos estipulados en el cronograma de
                        actividades. (ver punto 16)
                    </li>
                    <li className="mb-3">
                        Los proyectos que ya cuenten con Hosting o que sea
                        adquirido por otra compañía solo serán subidos a este
                        una vez abonado el valor total del proyecto. Si el
                        Hosting es contratado con nosotros se puede subir en
                        cuanto el cliente lo desee.
                    </li>
                    <li className="mb-3">
                        . El cliente debe revisar en el documento de resumen de
                        la propuesta el detalle del servicio solicitado.
                        Cualquier información que no esté contemplada en la
                        presente propuesta económica o por correo electrónico no
                        se tomará en cuenta para el desarrollo del proyecto.
                        Será tomado como adicional.
                    </li>
                    <li className="mb-3">
                        Se cobrará un incremento del 10% sobre el precio pactado
                        después de 20 días hábiles de no recibir ninguna
                        retroalimentación ni comunicación por parte del cliente.
                        Este valor será cobrado de forma anticipada para retomar
                        el proyecto.
                    </li>
                    <li className="mb-3">
                        Los tiempos estimados para el desarrollo de un proyecto
                        web varían de acuerdo al plan contratado y a los
                        adicionales que posea; se estimarán los tiempos de la
                        siguiente manera:
                        <ul className="mt-4 list-disc pl-5">
                            <li>Landing Page - 10 días hábiles</li>
                            <li>Hasta 5 páginas - 15 días hábiles</li>
                            <li>Hasta 10 páginas - 20 días hábiles</li>
                            <li>Hasta 20 páginas - 30 días hábiles</li>
                            <li>Hasta 30 páginas - 35 días hábiles</li>
                            <li>Tienda en Línea - 20 días hábiles</li>
                        </ul>
                    </li>
                    <li className="mb-3">
                        Estos tiempos se podrán llevar a cabo si el cliente
                        realiza la retroalimentación oportuna en cada una de las
                        etapas del proyecto. De no ser así, los tiempos
                        indicados no servirán de guía.
                    </li>
                    <li className="mb-3">
                        El soporte y garantía no se aplicaran para los casos de
                        desconfiguración por mala praxis del sitio web por parte
                        del cliente
                    </li>
                    <li className="mb-3">Validez de la oferta: 30 días</li>
                </ol>
            </div>
        </div>
    )
}
