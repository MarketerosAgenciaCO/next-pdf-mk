import Image from 'next/image'

import Fases from '../../../public/pdf/fases.jpg'

export function FasesDisenoPDF() {
    return (
        <div
            style={{
                width: '297mm',
                height: '210mm',
            }}
            className="relative bg-slate-900"
        >
            <Image src={Fases} className="w-full" alt="Fases del diseño web" />
        </div>
    )
}
