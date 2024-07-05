import Image from 'next/image'

import Trayectoria from '../../../public/pdf/trayectoria.jpg'

export function TrayectoriaPDF() {
    return (
        <div
            style={{
                width: '297mm',
                height: '210mm',
            }}
            className="relative bg-slate-900"
        >
            <Image src={Trayectoria} className="w-full" alt="Trayectoria" />
        </div>
    )
}
