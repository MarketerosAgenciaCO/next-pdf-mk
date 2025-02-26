import Image from 'next/image'

import Valor from '../../../public/pdf/valor.png'
import FondoValor from '../../../public/pdf/fondoValor.png'
import PuntosValor from '../../../public/pdf/puntosvalor.png'
import ValorPropuestaIMG from '../../../public/pdf/valor-propuesta.jpg'
import { FooterPDF } from "./footer-logo"

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
            className="relative flex flex-col gap-5 bg-white page"
        >
            <div className="relative bg-[url('/pdf/valor-propuesta.png')] bg-cover bg-center bg-no-repeat flex flex-col h-[92%] justify-between p-20 z-10">
                <div>
                    <h2 className="text-4xl font-light pb-4  text-white">
                        Valor{' '}
                        <strong className="block font-bold">Propuesta</strong>
                    </h2>
                    <div className="w-[120px] h-1 bg-[#294859] rounded-lg bg-gradient-to-r from-amber-400 to-orange-500" />
                    <span className="bg-white inline-block bg-opacity-20 mt-5 px-6 py-3 rounded-full font-light text-3xl text-white">
                        <span className="text-lg">{moneda}</span>
                        {price.toLocaleString('es-ES')}
                        <span className="text-lg">+ IVA</span>
                    </span>
                </div>
                <div className="w-[50%] pb-10">
                    <h3 className="text-2xl text-semibold text-white">
                        Formas de Pago
                    </h3>
                    <ul className="flex gap-1 text-[10px] mt-5 text-white">
                        <li className="w-1/4">
                            <strong className="block text-lg text-white text-opacity-80">
                                40%
                            </strong>
                            Al comienzo de <br />
                            los trabajos.
                        </li>
                        <li className="w-1/3">
                            <strong className="block text-lg text-white text-opacity-80">
                                30%
                            </strong>
                            A la aprobación del boceto<br />
                            de la home page.
                        </li>
                        <li className="w-1/3">
                            <strong className="block text-lg text-white text-opacity-80">
                                30%
                            </strong>
                            a la entrega final del proyecto, previo a la
                            migración del sitio.
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </div>
        
        
        
    )
}
