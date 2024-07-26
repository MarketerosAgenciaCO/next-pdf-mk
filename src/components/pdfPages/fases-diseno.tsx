import Image from 'next/image'

import Fases from '../../../public/pdf/fases.jpg'

export function FasesDisenoPDF() {
    return (
        <div
            // style={{
            //     width: '297mm',
            //     height: '210mm',
            // }}
            className="relative bg-white page"
        >
            <Image
                src={Fases}
                className="w-[1122px] h-[793px]"
                alt="Fases del diseño web"
                width={1122}
                height={793}
            />
        </div>
    )
}
