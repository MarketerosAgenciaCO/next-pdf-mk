'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'nombre',
        header: 'Nombre',
    },
    {
        accessorKey: 'apellido',
        header: 'Apellido',
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

            const formatted = new Intl.NumberFormat('es-ES', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0,
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
]
