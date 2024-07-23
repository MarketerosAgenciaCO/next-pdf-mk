import Image from 'next/image'

import Valor from '../../../public/pdf/valor.png'
import FondoValor from '../../../public/pdf/fondoValor.png'
import PuntosValor from '../../../public/pdf/puntosvalor.png'

interface ValuePropositionProps {
    price: number
    moneda: string
}

export function ValorPropuesta({ price, moneda }: ValuePropositionProps) {
    return (
        <div
            // style={{
            //     width: '297mm',
            //     height: '210mm',
            // }}
            className="relative grid grid-cols-2 gap-5 bg-white items-center justify-center p-20 page"
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    <h2 className="text-4xl font-light pb-4  text-[#294859]">
                        Valor{' '}
                        <strong className="block font-bold">Propuesta</strong>
                    </h2>
                    <div className="w-[120px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500" />
                    <span className="bg-blue-300 inline-block bg-opacity-20 mt-5 px-6 py-3 rounded-full font-light text-3xl text-[#294859]">
                        <span className="text-lg">{moneda}</span>
                        {price.toLocaleString('es-ES')}
                        <span className="text-lg">+ IVA</span>
                    </span>
                </div>
                <div>
                    <h3 className="text-3xl text-light text-[#294859]">
                        Formas de <strong>Pago</strong>
                    </h3>
                    <ul className="flex gap-5 text-sm mt-5 text-[#294859]">
                        <li className="w-1/3">
                            <strong className="block text-lg text-sky-600">
                                35%
                            </strong>
                            al comienzo de los trabajos
                        </li>
                        <li className="w-1/3">
                            <strong className="block text-lg text-sky-600">
                                35%
                            </strong>
                            a la aprobación del boceto
                        </li>
                        <li className="w-1/3">
                            <strong className="block text-lg text-sky-600">
                                30%
                            </strong>
                            a la entrega final del proyecto, previo a la
                            migración del sitio.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col h-full justify-end">
                <Image src={Valor} alt="Presencia" />
            </div>
            <Image
                src={FondoValor}
                alt="FondoValor"
                className="absolute left-0 bottom-0"
            />
            <Image
                src={PuntosValor}
                alt="Puntos"
                className="absolute right-0 top-20"
            />
        </div>
    )
}
