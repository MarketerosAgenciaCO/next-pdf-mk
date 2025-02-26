import Image from 'next/image'
import logoMK from '../../../public/pdf/logo-mk-v2.png'
export function FooterPDF() {

    return (
        <div className="absolute bottom-0 left-0 right-0 flex gap-5 items-center justify-between px-10 py-3">
        <div className="text-[#294859] text-opacity-30 text-sm">
            <a href="https://www.marketerosagencia.com/" target="_blank">
                www.marketerosagencia.com
            </a>
        </div>
        <div>
            <Image src={logoMK} alt="Logo" className="w-[80%]" />
        </div>
    </div>
    )
}