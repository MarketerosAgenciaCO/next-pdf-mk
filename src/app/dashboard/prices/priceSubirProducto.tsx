'use client'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
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
    CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { priceSchema } from '@/schemas/formSchema'
import { updatePrice } from '@/app/actions/update-price'

interface Price {
    COP: number
    MXN: number
    EUR: number
}

interface PricePageProps {
    subirProductoCatalogoBasico: Price
    subirProductoCatalogoVariable: Price
    priceId: string
}

export default function SubirProducto({
    subirProductoCatalogoBasico,
    subirProductoCatalogoVariable,
    priceId,
}: PricePageProps) {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof priceSchema>>({
        resolver: zodResolver(priceSchema),
        defaultValues: {
            priceId: priceId,
            subirProductoCatalogoBasicoCOP: subirProductoCatalogoBasico.COP,
            subirProductoCatalogoBasicoMXN: subirProductoCatalogoBasico.MXN,
            subirProductoCatalogoBasicoEUR: subirProductoCatalogoBasico.EUR,
            subirProductoCatalogoVariableCOP: subirProductoCatalogoVariable.COP,
            subirProductoCatalogoVariableMXN: subirProductoCatalogoVariable.MXN,
            subirProductoCatalogoVariableEUR: subirProductoCatalogoVariable.EUR,
        },
    })

    const onSubmit = async (values: z.infer<typeof priceSchema>) => {
        setIsLoading(true)

        try {
            console.log('Form values:', values)
            const response = await updatePrice({ ...values, priceId: priceId })
            setIsLoading(false)
            console.log('Update response:', response)
            if (response.success) {
                toast({
                    title: 'Precios actualizados',
                    description: 'Los precios se actualizaron correctamente',
                })

                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            } else {
                toast({
                    title: 'Error al actualizar los precios, intente nuevamente',
                    description: response.error,
                    variant: 'destructive',
                })
            }
        } catch (error) {
            setIsLoading(false)
            toast({
                title: 'Error',
                description:
                    'Ocurrió un error al actualizar los precios, intente nuevamente',
                variant: 'destructive',
            })
            console.error('Error updating price:', error)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Precio de subir productos</CardTitle>
                <CardDescription>
                    Configura los precios de subir productos
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <h3 className="col-span-3 font-medium">
                                Precio subir producto básico
                            </h3>
                            <FormField
                                control={form.control}
                                name="subirProductoCatalogoBasicoCOP"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>COP</FormLabel>
                                        <span className="absolute top-8 left-3 flex items-center text-muted-foreground">
                                            $
                                        </span>
                                        <FormControl>
                                            <Input
                                                value={
                                                    field.value !== undefined
                                                        ? field.value.toLocaleString(
                                                              'es-ES'
                                                          )
                                                        : ''
                                                }
                                                className="pl-8"
                                                onChange={(e) => {
                                                    const formattedValue =
                                                        e.target.value.replace(
                                                            /\D/g,
                                                            ''
                                                        )
                                                    field.onChange(
                                                        formattedValue === ''
                                                            ? 0
                                                            : Number(
                                                                  formattedValue
                                                              )
                                                    )
                                                }}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subirProductoCatalogoBasicoMXN"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>MXN</FormLabel>
                                        <span className="absolute top-8 left-3 flex items-center text-muted-foreground">
                                            $
                                        </span>
                                        <FormControl>
                                            <Input
                                                value={
                                                    field.value !== undefined
                                                        ? field.value.toLocaleString(
                                                              'es-ES'
                                                          )
                                                        : ''
                                                }
                                                className="pl-8"
                                                onChange={(e) => {
                                                    const formattedValue =
                                                        e.target.value.replace(
                                                            /\D/g,
                                                            ''
                                                        )
                                                    field.onChange(
                                                        formattedValue === ''
                                                            ? 0
                                                            : Number(
                                                                  formattedValue
                                                              )
                                                    )
                                                }}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subirProductoCatalogoBasicoEUR"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>EUR</FormLabel>
                                        <span className="absolute top-8 left-3 flex items-center text-muted-foreground">
                                            €
                                        </span>
                                        <FormControl>
                                            <Input
                                                value={
                                                    field.value !== undefined
                                                        ? field.value.toLocaleString(
                                                              'es-ES'
                                                          )
                                                        : ''
                                                }
                                                className="pl-8"
                                                onChange={(e) => {
                                                    const formattedValue =
                                                        e.target.value.replace(
                                                            /\D/g,
                                                            ''
                                                        )
                                                    field.onChange(
                                                        formattedValue === ''
                                                            ? 0
                                                            : Number(
                                                                  formattedValue
                                                              )
                                                    )
                                                }}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <h3 className="col-span-3 font-medium">
                                Precio subir producto variable
                            </h3>
                            <FormField
                                control={form.control}
                                name="subirProductoCatalogoVariableCOP"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>COP</FormLabel>
                                        <span className="absolute top-8 left-3 flex items-center text-muted-foreground">
                                            $
                                        </span>
                                        <FormControl>
                                            <Input
                                                value={
                                                    field.value !== undefined
                                                        ? field.value.toLocaleString(
                                                              'es-ES'
                                                          )
                                                        : ''
                                                }
                                                className="pl-8"
                                                onChange={(e) => {
                                                    const formattedValue =
                                                        e.target.value.replace(
                                                            /\D/g,
                                                            ''
                                                        )
                                                    field.onChange(
                                                        formattedValue === ''
                                                            ? 0
                                                            : Number(
                                                                  formattedValue
                                                              )
                                                    )
                                                }}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subirProductoCatalogoVariableMXN"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>MXN</FormLabel>
                                        <span className="absolute top-8 left-3 flex items-center text-muted-foreground">
                                            $
                                        </span>
                                        <FormControl>
                                            <Input
                                                value={
                                                    field.value !== undefined
                                                        ? field.value.toLocaleString(
                                                              'es-ES'
                                                          )
                                                        : ''
                                                }
                                                className="pl-8"
                                                onChange={(e) => {
                                                    const formattedValue =
                                                        e.target.value.replace(
                                                            /\D/g,
                                                            ''
                                                        )
                                                    field.onChange(
                                                        formattedValue === ''
                                                            ? 0
                                                            : Number(
                                                                  formattedValue
                                                              )
                                                    )
                                                }}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subirProductoCatalogoVariableEUR"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>EUR</FormLabel>
                                        <span className="absolute top-8 left-3 flex items-center text-muted-foreground">
                                            €
                                        </span>
                                        <FormControl>
                                            <Input
                                                value={
                                                    field.value !== undefined
                                                        ? field.value.toLocaleString(
                                                              'es-ES'
                                                          )
                                                        : ''
                                                }
                                                className="pl-8"
                                                onChange={(e) => {
                                                    const formattedValue =
                                                        e.target.value.replace(
                                                            /\D/g,
                                                            ''
                                                        )
                                                    field.onChange(
                                                        formattedValue === ''
                                                            ? 0
                                                            : Number(
                                                                  formattedValue
                                                              )
                                                    )
                                                }}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <Loader className="animate-spin h-5 w-5" />
                            ) : (
                                'Guardar'
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}
