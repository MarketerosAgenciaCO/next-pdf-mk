import Image from 'next/image'

import Presencia from '../../../public/pdf/presencia-geografica.jpg'

export function PresenciaPDF() {
    return (
        <div
            // style={{
            //     width: '297mm',
            //     height: '210mm',
            // }}
            className="relative bg-white page"
        >
            <Image src={Presencia} className="w-full" alt="Prensencia" />
        </div>
    )
}
