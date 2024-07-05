'use client'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/components/ui/use-toast'
import { Form } from '@/components/ui/form'
import ClientInfo from './client-info'
import ProyectType from './proyect-tipe'
import Specifications from './specifications'
import { formSchema } from '@/schemas/formSchema'
import { createQuote } from '@/app/actions/add-new-quote'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
export default function QuoteForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: '',
            apellido: '',
            sitioWeb: '',
            nombreProyecto: '',
            tipoProjecto: '',
            numeroPaginas: 1,
            adicionales: [''],
            cantidadCatalogo: '',
            descripcionCatalogo: '',
            precioFormulario: 0,
            cantidadIdioma: 0,
            descripcionIdioma: '',
            precioDesarrolloEspecial: 0,
            descripcionDesarrolloEspecial: '',
            totalPrice: 0,
        },
    })

    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        try {
            const response = await createQuote(values)
            setIsLoading(false)

            if (response.success) {
                toast({
                    title: 'Cotización creada',
                    description: 'La cotización se ha creado correctamente',
                })
            } else {
                toast({
                    title: 'Error al crear la cotización',
                    description: response.error,
                    variant: 'destructive',
                })
            }
        } catch (error) {
            setIsLoading(false)
            toast({
                title: 'Error',
                description: 'Ocurrió un error al generar la cotización',
                variant: 'destructive',
            })
        }
    }

    const setTotalPrice = (price: number) => {
        form.setValue('totalPrice', price)
    }

    return (
        <>
            <div className="space-y-8 col-span-2 relative ">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <ClientInfo />
                        <ProyectType />
                        <Specifications setTotalPrice={setTotalPrice} />
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <Loader className="animate-spin h-5 w-5" />
                            ) : (
                                'Generar Cotización'
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    )
}
