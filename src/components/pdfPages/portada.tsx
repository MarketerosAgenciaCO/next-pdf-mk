import Image from 'next/image'

import FlagCO from '../../../public/pdf/flag-colombia.png'
import FlagES from '../../../public/pdf/flag-esp.png'
import FlagMX from '../../../public/pdf/flag-mx.png'
import FlagUS from '../../../public/pdf/flag-usa.png'
import LogoMk from '../../../public/pdf/logo-mk.png'
import Portada from '../../../public/pdf/portada.jpg'
import Cohete from '../../../public/pdf/cohete.png'

export function PortadaPDF() {
    return (
        <div
            style={{
                backgroundImage: `url(${Portada.src})`,
                width: '297mm',
                height: '210mm',
            }}
            className="relative bg-slate-900"
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={LogoMk} className="w-full" alt="Logo Mk" />
                <div className="flex justify-center items-center py-2 gap-2 relative mt-3">
                    <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-r from-transparent via-white opacity-25"></div>
                    <Image
                        src={FlagCO}
                        className="w-[20px]"
                        alt="Bandera Colombia"
                    />
                    <Image
                        src={FlagMX}
                        className="w-[20px]"
                        alt="Bandera México"
                    />
                    <Image
                        src={FlagUS}
                        className="w-[20px]"
                        alt="Bandera USA"
                    />
                    <Image
                        src={FlagES}
                        className="w-[20px]"
                        alt="Bandera España"
                    />
                </div>
            </div>

            <div className="absolute left-0 bottom-0 p-6 text-left w-full text-white flex justify-between items-end">
                <div className="text-left text-white w-1/2">
                    <h2 className="text-3xl font-light mb-2">
                        Atraemos tráfico cualificado <br />
                        <strong className="font-black">
                            a través de contenido de valor
                        </strong>
                    </h2>
                    <p className="text-sm">
                        Los convertimos en suscriptores y / o clientes
                        potenciales, los cerramos como clientes y los
                        conservamos a lo largo del tiempo.
                    </p>
                </div>
                <div className="w-1/2 text-right text-3xl text-white font-light">
                    <p>
                        <span className="flex items-end justify-end">
                            Vamos por
                            <Image
                                src={Cohete}
                                alt="Vamos por una década más de éxito"
                                className="ml-2"
                            />
                        </span>
                        <strong className="font-black">una década más</strong>
                        <br /> de éxito
                    </p>
                </div>
            </div>
        </div>
    )
}
