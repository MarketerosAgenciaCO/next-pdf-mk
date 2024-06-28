import Image from 'next/image'
import Link from 'next/link'
import MarketerosIcon from '@/components/icons/marketeros-icon.svg'

export default function Logo() {
    return (
        <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
            <Image
                src={MarketerosIcon}
                alt="Marketeros Logo"
                width={24}
                height={24}
            />
            <span className="sr-only">Acme Inc</span>
        </Link>
    )
}
