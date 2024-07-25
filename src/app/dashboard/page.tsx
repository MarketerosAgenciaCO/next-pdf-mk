import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import Link from 'next/link'
import prisma from '@/lib/db'

import { DataTable } from './data-table'
import { columns } from './columns'

export default async function Dashboard() {
    const quotes = await prisma.quote.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            user: true,
        },
    })

    return (
        <>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
                <Card className="sm:col-span-3" x-chunk="dashboard-05-chunk-0">
                    <CardHeader className="pb-3">
                        <CardTitle>Tus cotizaciones</CardTitle>
                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                            Crea cotizaciones dinamicas y exportalas en pdf.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button asChild>
                            <Link href="/dashboard/quotes">
                                Crear nueva cotización
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card x-chunk="dashboard-05-chunk-3" className="sm:col-span-3">
                    <CardHeader className="px-7">
                        <CardTitle>Cotizaciones</CardTitle>
                        <CardDescription>
                            Cotizaciones recientes
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={quotes} />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
