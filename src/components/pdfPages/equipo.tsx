import { FooterPDF } from "./footer-logo"
import Image from 'next/image'

import Equipo from '../../../public/pdf/equipo.png'

export function EquipoPDF() {
    return (
        <div
            // style={{
            //     width: '297mm',
            //     height: '210mm',
            // }}
            className="relative bg-white page"
        >
            <Image src={Equipo} className="w-full" alt="Equipo" />
            
        </div>
    )
}
