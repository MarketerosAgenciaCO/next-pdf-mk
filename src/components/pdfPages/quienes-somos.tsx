import Image from 'next/image'

import QuienesSomosCirculo from '../../../public/pdf/quienes-somos-circulo.jpg'

export function QuienesSomosPDF() {
    return (
        <div
            // style={{
            //     width: '297mm',
            //     height: '210mm',
            // }}
            className="relative grid grid-cols-2 gap-5 bg-white items-center justify-center p-10 page"
        >
            <div>
                <h2 className="text-4xl font-bold pb-4  text-[#294859]">
                    Quienes Somos
                </h2>
                <div className="w-[80px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500" />
                <p className="mt-4 text-[#294859]">
                    Marketeros Agencia es una agencia digital certiﬁcada en
                    Inbound Marketing.
                </p>
                <p className="mt-4 text-[#294859]">
                    Nuestro objetivo principal es capacitar y desarrollar un
                    equipo competente con el objetivo de participar en el
                    crecimiento de nuestros clientes a través de la creación,
                    desarrollo y ejecución de estrategias enfocadas en generar
                    contenido de calidad bajo la filosofía de Inbound Marketing.
                </p>
            </div>
            <Image
                src={QuienesSomosCirculo}
                className="w-[511px] h-[507px]"
                alt="Quienes Somos"
                width={511}
                height={507}
            />
        </div>
    )
}
