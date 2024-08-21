'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { deleteQuote } from '../actions/delete-quote'
import { FileText, Trash2 } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import DeleteButton from '@/components/dashboard/delete-button'

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
    // {
    //     accessorKey: 'createdAt',
    //     header: ({ column }) => {
    //         return (
    //             <Button
    //                 variant="ghost"
    //                 onClick={() =>
    //                     column.toggleSorting(column.getIsSorted() === 'asc')
    //                 }
    //             >
    //                 Fecha de creación
    //                 <ArrowUpDown className="ml-2 h-4 w-4" />
    //             </Button>
    //         )
    //     },
    //     cell: ({ row }) => {
    //         const date = new Date(row.getValue('createdAt'))
    //         return <div>{date.toLocaleDateString()}</div>
    //     },
    // },
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
    {
        id: 'actions',
        cell: ({ row }) => {
            const id = row.original.id
            const pdf = row.original.pdfLink
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <MoreHorizontal className="h-5 w-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            onClick={() => window.open(pdf, '_blank')}
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Ver PDF</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteButton onDelete={deleteQuote} id={id} />
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
