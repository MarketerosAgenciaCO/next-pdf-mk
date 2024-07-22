'use client'
import { useState, useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import html2pdf from 'html2pdf.js'
import { useToast } from '@/components/ui/use-toast'
import { Form } from '@/components/ui/form'
import ClientInfo from './client-info'
import ProyectType from './proyect-tipe'
import Specifications from './specifications'
import { formSchema } from '@/schemas/formSchema'
import { createQuote } from '@/app/actions/add-new-quote'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import PrintComponent from '@/components/print-component'

interface Prices {
    id: string
    pricePagesBasePrice: number
    pricePagesIncrementPerPage: number
    priceCatalogoBasePrice: number
    priceCatalogoIncrementPerPage: number
    migracionNoticiasBlog: number
    subirProductoCatalogoBasico: number
    subirProductoCatalogoVariable: number
    incrementoPorIdioma: number
}

export default function QuoteForm({ prices }: { prices: Prices }) {
    const printRef = useRef<HTMLDivElement>(null)
    const [totalPrice, setTotalPrice] = useState(0)

    const generateAndUploadPDF = async (
        element: HTMLDivElement,
        values: z.infer<typeof formSchema>
    ) => {
        try {
            const projectNameMap: { [key: string]: string } = {
                disenoWeb: 'Diseño Web',
                tienda: 'Tienda en Línea',
            }

            const filename = projectNameMap[values.tipoProjecto]

            const options = {
                margin: 0,
                filename: `Propuesta ${filename} ${values.nombreProyecto}.pdf`,
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'landscape',
                },
                html2canvas: {
                    scale: 2,
                },
            }

            const pdfBlob = await html2pdf()
                .from(element)
                .set(options)
                .outputPdf('blob')

            const formData = new FormData()

            formData.append(
                'filename',
                `Propuesta ${filename} ${values.nombreProyecto}.pdf`
            )
            formData.append('content', pdfBlob)

            const response = await fetch('/api/upload-document', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Unknown error')
            }

            return result
        } catch (error) {
            console.error('Error:', error)
            return null
        }
    }

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
    const selectedAdicionales = form.watch('adicionales', [])
    const numeroPaginas = form.watch('numeroPaginas', 1)
    const cantidadCatalogo = form.watch('cantidadCatalogo', '')
    const descripcionCatalogo = form.watch('descripcionCatalogo', '')
    const cantidadIdioma = form.watch('cantidadIdioma', 0)
    const descripcionIdioma = form.watch('descripcionIdioma', '')
    const desarrolloEspecial = form.watch('descripcionDesarrolloEspecial', '')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        try {
            const response = await createQuote(values)

            if (response.success) {
                const element = printRef.current
                if (element) {
                    const permalink = await generateAndUploadPDF(
                        element,
                        values
                    )
                    if (permalink) {
                        toast({
                            title: 'Cotización creada',
                            description:
                                'La cotización se ha creado correctamente',
                            action: (
                                <Button asChild>
                                    <a
                                        href={permalink}
                                        target="_blank"
                                        rel="noreferrer"
                                        title="Descargar Cotización"
                                    >
                                        Descargala aquí
                                    </a>
                                </Button>
                            ),
                        })
                    }
                }

                setIsLoading(false)
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

    const updateTotalPrice = (price: number) => {
        setTotalPrice(price)
        form.setValue('totalPrice', price)
    }

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <ClientInfo />
                    <ProyectType />
                    <Specifications
                        setTotalPrice={updateTotalPrice}
                        prices={prices}
                    />
                    <div className="hidden">
                        <PrintComponent
                            printRef={printRef}
                            adicionales={selectedAdicionales}
                            numeroPaginas={numeroPaginas}
                            descripcionCatalogo={descripcionCatalogo}
                            cantidadCatalogo={cantidadCatalogo}
                            cantidadIdioma={cantidadIdioma}
                            descripcionIdioma={descripcionIdioma}
                            desarrolloEspecial={desarrolloEspecial}
                            price={totalPrice}
                        />
                    </div>

                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <Loader className="animate-spin h-5 w-5" />
                        ) : (
                            'Generar Cotización'
                        )}
                    </Button>
                </form>
            </Form>
        </>
    )
}
