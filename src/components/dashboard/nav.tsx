'use client'

import Link from 'next/link'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { navLinks } from '@/components/dashboard/navlinks'
import Logo from '@/components/dashboard/logo'

export default function Nav() {
    const pathname = usePathname()
    return (
        <>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Logo />
                {navLinks.map((link) => {
                    const Icon = link.icon
                    return (
                        <TooltipProvider key={link.name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={link.href}
                                        className={clsx(
                                            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                                            {
                                                'bg-accent text-accent-foreground':
                                                    pathname === link.href,
                                            }
                                        )}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="sr-only">
                                            {link.name}
                                        </span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    {link.name}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                })}
            </nav>
        </>
    )
}
