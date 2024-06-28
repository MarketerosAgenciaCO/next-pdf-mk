'use client'

import { navLinks } from '@/components/dashboard/navlinks'
import clsx from 'clsx'
import Logo from '@/components/dashboard/logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { PanelLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavMobile() {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                    <Logo />
                    {navLinks.map((link) => {
                        const Icon = link.icon
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'flex items-center gap-4 px-2.5  hover:text-foreground',
                                    {
                                        'text-foreground':
                                            pathname === link.href,
                                        'text-muted-foreground':
                                            pathname !== link.href,
                                    }
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
