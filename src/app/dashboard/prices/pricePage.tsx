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

interface PricePageProps {
    pricePagesBasePrice: number
    pricePagesIncrementPerPage: number
    priceId: string
}

export default function PricePage({
    pricePagesBasePrice,
    pricePagesIncrementPerPage,
    priceId,
}: PricePageProps) {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof priceSchema>>({
        resolver: zodResolver(priceSchema),
        defaultValues: {
            priceId: priceId,
            pricePagesBasePrice: pricePagesBasePrice,
            pricePagesIncrementPerPage: pricePagesIncrementPerPage,
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
                <CardTitle>Precio por página</CardTitle>
                <CardDescription>
                    Actualiza el precio por página interna
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent>
                        <div className="grid gap-4">
                            <FormField
                                control={form.control}
                                name="pricePagesBasePrice"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>Precio base</FormLabel>
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
                                name="pricePagesIncrementPerPage"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel>
                                            Incremento por cada página interna
                                        </FormLabel>
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
