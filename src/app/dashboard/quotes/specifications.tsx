import { useState, useEffect } from 'react'

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} from '@/components/ui/form'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

import { useFormContext } from 'react-hook-form'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const adicionales = [
    {
        name: 'Módulo Catálogo',
        value: 'catalogo',
    },
    {
        name: 'Subir producto (Módulo catálogo básico)',
        value: 'subir-producto-catalogo-basico',
    },
    {
        name: 'Subir producto (Módulo catálogo variable)',
        value: 'subir-producto-catalogo-variable',
    },
    {
        name: 'Hosting grátis 2G (1 Año)',
        value: 'hosting-gratis-2g',
    },
    {
        name: 'Formulario especial',
        value: 'formulario-especial',
    },
    {
        name: 'Migración noticias (Blog)',
        value: 'migracion-noticias-blog',
    },
    {
        name: 'Idioma adicional',
        value: 'idioma-adicional',
    },
    {
        name: 'Desarrollo especial a la medida',
        value: 'desarrollo-especial-a-la-medida',
    },
] as const

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
    priceStore: number
}

interface SpecificationsProps {
    prices: Prices
    setTotalPrice: (price: number) => void
}

export default function Specifications({
    prices,
    setTotalPrice,
}: SpecificationsProps) {
    const { control, watch } = useFormContext()
    const [price, setPrice] = useState(0)

    const selectedAdicionales = watch('adicionales', [])
    const numeroPaginas = watch('numeroPaginas', 0)
    const precioFormulario = watch('precioFormulario', 0)
    const cantidadCatalogo = watch('cantidadCatalogo', 0)
    const cantidadIdiomas = watch('cantidadIdioma', 0)
    const precioDesarrolloEspecial = watch('precioDesarrolloEspecial', 0)
    const sumarPrecio = watch('sumarPrecio', 0)
    const restarPrecio = watch('restarPrecio', 0)
    const tipoProyecto = watch('tipoProjecto', [])

    console.log(tipoProyecto)

    const calculatePricePages = (numPages: number): number => {
        // const { basePrice, incrementPerPage } = priceConfig.pricePages
        const basePrice = prices.pricePagesBasePrice
        const incrementPerPage = prices.pricePagesIncrementPerPage

        return basePrice + (numPages - 1) * incrementPerPage
    }

    const calculatePriceCatalogo = (numPages: number): number => {
        // const { basePrice, incrementPerPage } = priceConfig.priceCatalogo

        const basePrice = prices.priceCatalogoBasePrice
        const incrementPerPage = prices.priceCatalogoIncrementPerPage

        return basePrice + (numPages - 1) * incrementPerPage
    }

    const calculateIdiomaAdicional = (
        totalPrice: number,
        numIdiomas: number
    ): number => {
        const incrementoPorIdioma = prices.incrementoPorIdioma // Incremento del 30% por cada idioma adicional

        return totalPrice + totalPrice * incrementoPorIdioma * numIdiomas
    }

    useEffect(() => {
        let totalPrice = 0

        if (tipoProyecto.includes('disenoWeb')) {
            totalPrice += calculatePricePages(numeroPaginas)
        }

        if (tipoProyecto.includes('tienda')) {
            totalPrice += prices.priceStore
        }

        if (selectedAdicionales.includes('catalogo')) {
            totalPrice += calculatePriceCatalogo(cantidadCatalogo)
        }

        if (selectedAdicionales.includes('formulario-especial')) {
            totalPrice += parseFloat(precioFormulario)
        }

        if (selectedAdicionales.includes('migracion-noticias-blog')) {
            totalPrice += prices.migracionNoticiasBlog
        }

        if (selectedAdicionales.includes('subir-producto-catalogo-basico')) {
            totalPrice += prices.subirProductoCatalogoBasico
        }

        if (selectedAdicionales.includes('subir-producto-catalogo-variable')) {
            totalPrice += prices.subirProductoCatalogoVariable
        }

        if (selectedAdicionales.includes('idioma-adicional')) {
            totalPrice = calculateIdiomaAdicional(totalPrice, cantidadIdiomas)
        }

        if (selectedAdicionales.includes('desarrollo-especial-a-la-medida')) {
            totalPrice += parseFloat(precioDesarrolloEspecial)
        }

        totalPrice += parseFloat(sumarPrecio)
        totalPrice -= parseFloat(restarPrecio)

        setPrice(totalPrice)
        setTotalPrice(totalPrice)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        numeroPaginas,
        precioFormulario,
        cantidadCatalogo,
        selectedAdicionales,
        tipoProyecto,
        cantidadIdiomas,
        precioDesarrolloEspecial,
        setTotalPrice,
        calculatePricePages,
        calculatePriceCatalogo,
        calculateIdiomaAdicional,
    ])

    return (
        <>
            {tipoProyecto.includes('disenoWeb') && (
                <Card>
                    <CardHeader>
                        <CardTitle>Especificaciones del Sitio</CardTitle>
                        <CardDescription>
                            Provide details about the site youre building.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <FormField
                            control={control}
                            name="numeroPaginas"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cantidad de Páginas</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="1"
                                            type="number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Ten en cuenta el home y las páginas
                                        internas
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="adicionales"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormLabel className="text-base">
                                            Adicionales
                                        </FormLabel>
                                    </div>
                                    {adicionales.map((item) => (
                                        <FormField
                                            key={item.value}
                                            control={control}
                                            name="adicionales"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.value}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(
                                                                    item.value
                                                                )}
                                                                onCheckedChange={(
                                                                    checked
                                                                ) => {
                                                                    return checked
                                                                        ? field.onChange(
                                                                              [
                                                                                  ...field.value,
                                                                                  item.value,
                                                                              ]
                                                                          )
                                                                        : field.onChange(
                                                                              field.value?.filter(
                                                                                  (
                                                                                      value: string
                                                                                  ) =>
                                                                                      value !==
                                                                                      item.value
                                                                              )
                                                                          )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {item.name}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            )}

            {selectedAdicionales?.includes('catalogo') && (
                <Card>
                    <CardHeader>
                        <CardTitle>Módulo Catálogo</CardTitle>
                        <CardDescription>
                            Provide details about the site youre building.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <FormField
                            control={control}
                            name="cantidadCatalogo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Cantidad de módulos catálogo
                                    </FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Seleccione la cantidad" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="0">0</SelectItem>
                                            <SelectItem value="1">1</SelectItem>
                                            <SelectItem value="2">2</SelectItem>
                                            <SelectItem value="3">3</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="descripcionCatalogo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Describe los catálogos adicionales
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            )}
            {selectedAdicionales?.includes('formulario-especial') && (
                <Card>
                    <CardHeader>
                        <CardTitle>Formulario Especial</CardTitle>
                        <CardDescription>
                            Provide details about the site youre building.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <FormField
                            control={control}
                            name="precioFormulario"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Precio del formulario especial
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="10.000"
                                            value={
                                                field.value === 0
                                                    ? ''
                                                    : field.value.toLocaleString(
                                                          'es-ES'
                                                      )
                                            }
                                            onChange={(e) => {
                                                const formattedValue =
                                                    e.target.value.replace(
                                                        /\D/g,
                                                        ''
                                                    )
                                                field.onChange(
                                                    formattedValue === ''
                                                        ? 0
                                                        : Number(formattedValue)
                                                )
                                            }}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            )}

            {selectedAdicionales?.includes('idioma-adicional') && (
                <Card>
                    <CardHeader>
                        <CardTitle>Idiomas Adicionales</CardTitle>
                        <CardDescription>
                            Provide details about the site youre building.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <FormField
                            control={control}
                            name="cantidadIdioma"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Cantidad de idiomas adicionales
                                    </FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <Input
                                                placeholder="1"
                                                type="number"
                                                {...field}
                                            />
                                        </FormControl>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="descripcionIdioma"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Describe los idiomas adicionales
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            )}
            {selectedAdicionales?.includes(
                'desarrollo-especial-a-la-medida'
            ) && (
                <Card>
                    <CardHeader>
                        <CardTitle>Desarrollo Especial a la Medida</CardTitle>
                        <CardDescription>
                            Provide details about the site youre building.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <FormField
                            control={control}
                            name="precioDesarrolloEspecial"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Precio del desarrollo especial
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="10.000"
                                            value={
                                                field.value === 0
                                                    ? ''
                                                    : field.value.toLocaleString(
                                                          'es-ES'
                                                      )
                                            }
                                            onChange={(e) => {
                                                const formattedValue =
                                                    e.target.value.replace(
                                                        /\D/g,
                                                        ''
                                                    )
                                                field.onChange(
                                                    formattedValue === ''
                                                        ? 0
                                                        : Number(formattedValue)
                                                )
                                            }}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="descripcionDesarrolloEspecial"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Describe el desarrollo especial
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            )}
            <Card>
                <CardHeader>
                    <CardTitle>
                        ¿Desea cambia el precio de la cotización?
                    </CardTitle>
                    <CardDescription>
                        Se cambiará este valor al precio de la cotización.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4 items-end">
                    <FormField
                        control={control}
                        name="sumarPrecio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sumar al valor</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="+ 10.000"
                                        value={
                                            field.value === 0
                                                ? ''
                                                : field.value.toLocaleString(
                                                      'es-ES'
                                                  )
                                        }
                                        onChange={(e) => {
                                            const formattedValue =
                                                e.target.value.replace(
                                                    /\D/g,
                                                    ''
                                                )
                                            field.onChange(
                                                formattedValue === ''
                                                    ? 0
                                                    : Number(formattedValue)
                                            )
                                        }}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="restarPrecio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Restar al valor</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="- 10.000"
                                        value={
                                            field.value === 0
                                                ? ''
                                                : field.value.toLocaleString(
                                                      'es-ES'
                                                  )
                                        }
                                        onChange={(e) => {
                                            const formattedValue =
                                                e.target.value.replace(
                                                    /\D/g,
                                                    ''
                                                )
                                            field.onChange(
                                                formattedValue === ''
                                                    ? 0
                                                    : Number(formattedValue)
                                            )
                                        }}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Precio Total: ${price.toLocaleString('es-ES')}
                    </CardTitle>
                    <CardDescription>
                        Revisa la cotización y el precio final antes de
                        finalizar.
                    </CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}
