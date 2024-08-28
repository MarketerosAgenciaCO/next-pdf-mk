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
import CurrencySelect from './currency-select'

interface Prices {
    id: string
    pricePagesBasePriceCOP: number
    pricePagesBasePriceMX: number
    pricePagesBasePriceEUR: number
    pricePagesIncrementPerPageCOP: number
    pricePagesIncrementPerPageMX: number
    pricePagesIncrementPerPageEUR: number
    priceCatalogoBasePriceCOP: number
    priceCatalogoBasePriceMX: number
    priceCatalogoBasePriceEUR: number
    priceCatalogoIncrementPerPageCOP: number
    priceCatalogoIncrementPerPageMX: number
    priceCatalogoIncrementPerPageEUR: number
    migracionNoticiasBlogCOP: number
    migracionNoticiasBlogMX: number
    migracionNoticiasBlogEUR: number
    subirProductoCatalogoBasicoCOP: number
    subirProductoCatalogoBasicoMX: number
    subirProductoCatalogoBasicoEUR: number
    subirProductoCatalogoVariableCOP: number
    subirProductoCatalogoVariableMX: number
    subirProductoCatalogoVariableEUR: number
    incrementoPorIdioma: number
    priceStoreCOP: number
    priceStoreMX: number
    priceStoreEUR: number
}

export default function QuoteForm({ prices }: { prices: Prices }) {
    const printRef = useRef<HTMLDivElement>(null)
    const [currency, setCurrency] = useState('COP')
    const [totalPrice, setTotalPrice] = useState(0)

    const getPricesByCurrency = (currency: string) => {
        switch (currency) {
            case 'COP':
                return {
                    id: prices.id,
                    pricePagesBasePrice: prices.pricePagesBasePriceCOP,
                    pricePagesIncrementPerPage:
                        prices.pricePagesIncrementPerPageCOP,
                    priceCatalogoBasePrice: prices.priceCatalogoBasePriceCOP,
                    priceCatalogoIncrementPerPage:
                        prices.priceCatalogoIncrementPerPageCOP,
                    migracionNoticiasBlog: prices.migracionNoticiasBlogCOP,
                    subirProductoCatalogoBasico:
                        prices.subirProductoCatalogoBasicoCOP,
                    subirProductoCatalogoVariable:
                        prices.subirProductoCatalogoVariableCOP,
                    incrementoPorIdioma: prices.incrementoPorIdioma,
                    priceStore: prices.priceStoreCOP,
                }
            case 'MXN':
                return {
                    id: prices.id,
                    pricePagesBasePrice: prices.pricePagesBasePriceMX,
                    pricePagesIncrementPerPage:
                        prices.pricePagesIncrementPerPageMX,
                    priceCatalogoBasePrice: prices.priceCatalogoBasePriceMX,
                    priceCatalogoIncrementPerPage:
                        prices.priceCatalogoIncrementPerPageMX,
                    migracionNoticiasBlog: prices.migracionNoticiasBlogMX,
                    subirProductoCatalogoBasico:
                        prices.subirProductoCatalogoBasicoMX,
                    subirProductoCatalogoVariable:
                        prices.subirProductoCatalogoVariableMX,
                    incrementoPorIdioma: prices.incrementoPorIdioma,
                    priceStore: prices.priceStoreMX,
                }
            case 'EUR':
                return {
                    id: prices.id,
                    pricePagesBasePrice: prices.pricePagesBasePriceEUR,
                    pricePagesIncrementPerPage:
                        prices.pricePagesIncrementPerPageEUR,
                    priceCatalogoBasePrice: prices.priceCatalogoBasePriceEUR,
                    priceCatalogoIncrementPerPage:
                        prices.priceCatalogoIncrementPerPageEUR,
                    migracionNoticiasBlog: prices.migracionNoticiasBlogEUR,
                    subirProductoCatalogoBasico:
                        prices.subirProductoCatalogoBasicoEUR,
                    subirProductoCatalogoVariable:
                        prices.subirProductoCatalogoVariableEUR,
                    incrementoPorIdioma: prices.incrementoPorIdioma,
                    priceStore: prices.priceStoreEUR,
                }
            default:
                return {
                    id: prices.id,
                    pricePagesBasePrice: prices.pricePagesBasePriceCOP,
                    pricePagesIncrementPerPage:
                        prices.pricePagesIncrementPerPageCOP,
                    priceCatalogoBasePrice: prices.priceCatalogoBasePriceCOP,
                    priceCatalogoIncrementPerPage:
                        prices.priceCatalogoIncrementPerPageCOP,
                    migracionNoticiasBlog: prices.migracionNoticiasBlogCOP,
                    subirProductoCatalogoBasico:
                        prices.subirProductoCatalogoBasicoCOP,
                    subirProductoCatalogoVariable:
                        prices.subirProductoCatalogoVariableCOP,
                    incrementoPorIdioma: prices.incrementoPorIdioma,
                    priceStore: prices.priceStoreCOP,
                }
        }
    }

    const currentPrices = getPricesByCurrency(currency)

    const generateAndUploadPDF = async (
        element: HTMLDivElement,
        values: z.infer<typeof formSchema>
    ) => {
        try {
            // const projectNameMap: { [key: string]: string } = {
            //     disenoWeb: 'Diseño Web',
            //     tienda: 'Tienda en Línea',
            // }

            // const filename = projectNameMap[values.tipoProjecto]

            const options = {
                margin: 0,
                filename: `Propuesta ${values.nombreProyecto}.pdf`,
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
                `Propuesta ${values.nombreProyecto}.pdf`
            )
            formData.append('content', pdfBlob)

            const response = await fetch('/api/upload-document', {
                cache: 'no-store',
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
            tipoProjecto: [''],
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
            pdfLink: '',
            sumarPrecio: 0,
            restarPrecio: 0,
            moneda: 'COP',
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
    const tipoProyecto = form.watch('tipoProjecto', [])

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log('Form values:', values)
        setIsLoading(true)
        try {
            const element = printRef.current
            let permalink = ''

            if (element) {
                const pdfResult = await generateAndUploadPDF(element, values)
                permalink = pdfResult

                if (!permalink) {
                    setIsLoading(false)
                    toast({
                        title: 'Error al generar el PDF',
                        description:
                            'Zoho tiene problemas en este momento, intenta más tarde',
                        variant: 'destructive',
                    })
                } else {
                    const response = await createQuote({
                        ...values,
                        pdfLink: permalink,
                    })

                    if (response.success) {
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

                        setIsLoading(false)
                    } else {
                        toast({
                            title: 'Error al crear la cotización',
                            description: response.error,
                            variant: 'destructive',
                        })
                    }
                }
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
                    <CurrencySelect setCurrency={setCurrency} />
                    <ProyectType />
                    <Specifications
                        setTotalPrice={updateTotalPrice}
                        prices={currentPrices}
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <Loader className="animate-spin h-5 w-5" />
                        ) : (
                            'Generar Cotización'
                        )}
                    </Button>
                    <div className="w-full ">
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
                            moneda={currency}
                            tipoProyecto={tipoProyecto}
                        />
                    </div>
                </form>
            </Form>
        </>
    )
}
