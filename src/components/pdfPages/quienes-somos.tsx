import Image from 'next/image'

import QuienesSomos from '../../../public/pdf/quienes-somos.png'

export function QuienesSomosPDF() {
    return (
        <div
        // style={{
        //     width: '297mm',
        //     height: '210mm',
        // }}
        className="relative bg-white page"
    >
        <Image src={QuienesSomos} className="w-full" alt="Quienes Somos" />
    </div>
    )
}
