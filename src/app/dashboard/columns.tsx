'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'nombre',
        accessorFn: (row) => `${row.nombre} ${row.apellido}`,
        header: 'Nombre',
    },

    {
        accessorKey: 'nombreProyecto',
        header: 'Proyecto',
    },
    {
        accessorKey: 'createdAt',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Fecha de creación
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const date = new Date(row.getValue('createdAt'))
            return <div>{date.toLocaleDateString()}</div>
        },
    },
    {
        accessorKey: 'user.name',
        header: 'Vendedor',
    },
    {
        accessorKey: 'pdfLink',
        header: 'PDF',
        cell: ({ row }) => {
            const pdf: string = row.getValue('pdfLink')
            return (
                <Button
                    variant="ghost"
                    onClick={() => window.open(pdf, '_blank')}
                >
                    Ver PDF
                </Button>
            )
        },
    },
    {
        accessorKey: 'totalPrice',
        header: () => <div className="text-right">Precio Total</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('totalPrice'))
            const moneda = row.original.moneda // Accedemos a 'moneda' desde los datos originales de la fila
            const formattedAmount = amount.toLocaleString('es-ES')

            return (
                <div className="text-right font-medium">
                    {formattedAmount} {moneda}
                </div>
            )
        },
    },

    // {
    //     accessorKey: 'totalPrice',
    //     accessorFn: (row) => `${row.totalPrice} ${row.moneda}`,
    //     header: () => <div className="text-right">Precio Total</div>,
    //     cell: ({ row }) => {
    //         const amount = parseFloat(row.getValue('totalPrice'))
    //         const moneda = row.getValue('moneda')
    //         const formatted2 = amount.toLocaleString('es-ES')

    //         return (
    //             <div className="text-right font-medium">
    //                 {formatted2 + ' ' + moneda}
    //             </div>
    //         )
    //     },
    // },
]
