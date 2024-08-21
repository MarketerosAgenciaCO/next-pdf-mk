import { useState } from 'react'
import { Trash2 } from 'lucide-react'
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
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

interface DeleteButtonProps {
    onDelete: (id: string) => Promise<void>
    id: string
}

export default function DeleteButton({ onDelete, id }: DeleteButtonProps) {
    const [open, setOpen] = useState(false)

    const handleDelete = async () => {
        await onDelete(id)
        setOpen(false)
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Eliminar</span>
                </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirmar eliminación</AlertDialogTitle>
                    <AlertDialogDescription>
                        ¿Estás seguro de que quieres eliminar esta cotización?
                        Esta acción no se puede deshacer.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Aceptar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
