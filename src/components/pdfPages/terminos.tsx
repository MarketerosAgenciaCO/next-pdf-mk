import { FooterPDF } from "./footer-logo"
export function TerminosPDF() {
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
                    Términos <strong className="font-bold">y Condiciones</strong>
                </h2>
                <div className="w-[120px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500" />                
                    <ol className="columns-2 gap-x-10 text-[10px] text-[#294859] list-decimal pl-5 space-y-3 pt-10">
                        <li className="mb-3">
                        Para dar inicio a cualquier proyecto, el cliente deberá diligenciar un formato de brief y proporcionar el 
logo de la empresa en formato editable. Si el logo no esta en condiciones optimas, la vectorización 
tendrá un cobro adicional. Sin este requisito no se iniciará el proyecto.
                        </li>
                        <li className="mb-3">
                        Cada proyecto web estará dirigido por un Director de Proyectos, que será el interlocutor del cliente.
                        </li>
                        <li className="mb-3">
                        La etapa de diseño de la Home Page y una de las páginas internas contarán con una fase de 
                        presentación de una propuesta inicial según lo estipulado en Reunión con el director del proyecto. Si la 
                        propuesta inicial no es del agrado del cliente se presentará una segunda propuesta, previa reunión con 
                        el diseñador de MARKETEROS, para determinar los requerimientos específicos. Una vez se haya 
                        seleccionado una propuesta inicial se podrá realizar hasta dos fases de ajustes que incluyen 
                        modificaciones en el texto, imágenes o colores, tomando como base la propuesta seleccionada. Estos 
                        ajustes deberán enviarse como máximo dos días hábiles después de la entrega de la propuesta. 
                        Cualquier cambio en la diagramación de la propuesta presentada será considerado un boceto adicional, 
                        no incluido en el plan base, el cual generara un costo extra. Una vez recibida la aprobación del boceto se 
                        entenderá como aprobación definitiva para el desarrollo del proyecto, y no se aceptarán modificaciones 
                        sobre el mismo
                        </li>
                        <li className="mb-3">
                        Una vez aprobado el boceto final por parte del cliente, los contenidos del sitio, texto e imágenes, 
                        deberán ser entregados en su totalidad debidamente organizados, por carpetas y totalmente 
                        digitalizados (no se realizan correcciones ortográficas o de redacción), los cuales deberán ser subidos a 
                        una plataforma asignada. Cada página interna se compone de hasta un máximo de cuatrocientas 
                        palabras y/o cinco imágenes, cualquier información adicional será facturada. Si no se reciben textos e 
                        imágenes por parte del cliente, en un plazo no mayor a treinta días después de la aprobación del boceto, 
                        se cargará información provisional que podrá ser modificada por el cliente cuando se realice la entrega 
                        y la capacitación. Una vez enviados los textos y/o imágenes y se hayan subido a la web en desarrollo, no 
                        se aceptarán cambios y serán considerados como costo adicional.
                        </li>
                        <li className="mb-3">
                        El coste del anticipo asignado para el proyecto es destinado para el desarrollo del mismo, por lo tanto 
                        no se aceptan solicitudes de devolución.
                        </li>
                        <li className="mb-3">
                        Las sugerencias, ajustes o reclamos, en relación al proyecto, deberán sustentarse y enviarse única y 
                        exclusivamente por correo electrónico al Director del Proyecto.
                        </li>
                        <li className="mb-3">
                        Las etapas que impliquen aprobación y/o ajustes por parte del cliente serán contempladas como tiempo 
                        muerto para el proyecto
                        </li>
                        <li className="mb-3">
                        En el momento en que se realiza el envío del link provisional sobre la finalización del sitio, el cliente 
                        contará con dos fases de ajustes en donde puede reportar errores. El cliente tendrá un plazo máximo de 
                        ocho días hábiles para enviar la totalidad de los ajustes. Transcurrido este plazo, se entenderá que el 
                        proyecto ha sido finalizado y se procederá a la entrega del mismo.
                        </li>
                        <li className="mb-3">
                        La capacitación se realizará via Zoho Meeting / Zoom y será grabada en vivo, se enviará vía wetransfer y 
                        el cliente tendrá hasta 5 días para descargarla. Solamente se enviará el video una segunda vez si es 
                        necesario, en caso de requerirse por tercera vez tendrá un costo adicional. Este video estará disponible 
                        durante el periodo de soporte.
                        </li>
                        <li className="mb-3">
                        Los servicios adicionales al proyecto, ya sean a nivel de diseño y/o desarrollo, que no estén descritos en 
                        esta propuesta, serán cotizados adicionalmente y podrían modificar los tiempos estipulados en el 
                        cronograma de actividades. (ver punto 16)
                        </li>
                        <li className="mb-3">
                        Los proyectos que ya cuenten con Hosting o que sea adquirido por otra compañía solo serán subidos a 
                        este una vez abonado el valor total del proyecto. Si el Hosting es contratado con nosotros se puede 
                        subir en cuanto el cliente lo desee.
                        </li>
                        <li className="mb-3">
                        El cliente debe revisar en el documento de resumen de la propuesta el detalle del servicio solicitado. 
                        Cualquier información que no esté contemplada en la presente propuesta económica o por correo 
                        electrónico no se tomará en cuenta para el desarrollo del proyecto. Será tomado como adicional.
                        </li>
                        <li className="mb-3">
                        Se cobrará un incremento del 10% sobre el precio pactado después de 20 días hábiles de no recibir 
                        ninguna retroalimentación ni comunicación por parte del cliente. Este valor será cobrado de forma 
                        anticipada para retomar el proyecto. 
                        </li>
                        <li className="mb-3">
                        Los tiempos estimados para el desarrollo de un proyecto web varían de acuerdo al plan contratado y a 
                        los adicionales que posea; se estimarán los tiempos de la siguiente manera: Landing Page (10 días 
                        hábiles), hasta 5 páginas (15 días hábiles), hasta 10 páginas (20 días hábiles), hasta 20 páginas (30 días 
                        hábiles), hasta 30 páginas (35 días hábiles) y tienda en línea (20 días hábiles).
                        </li>
                        <li className="mb-3">
                        Estos tiempos se podrán llevar a cabo si el cliente realiza la retroalimentación oportuna en cada una de 
                        las etapas del proyecto. De no ser así, los tiempos indicados no servirán de guía
                        </li>
                        <li className="mb-3">
                        El soporte y garantía no se aplicaran para los casos de desconfiguración por mala praxis del sitio web 
                        por parte del cliente 
                        </li>
                        <li className="mb-3">
                        Validez de la oferta: 30 días  
                        </li>
                        
                    </ol>
            </div>
            <FooterPDF />
        </div>
    )
}
