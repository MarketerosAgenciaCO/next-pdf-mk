import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'

interface CurrencySelectProps {
    setCurrency: (currency: string) => void
}

export default function CurrencySelect({ setCurrency }: CurrencySelectProps) {
    const { control } = useFormContext()
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tipo de moneda</CardTitle>
                <CardDescription>
                    Seleccione la moneda de la cotización
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <FormField
                    control={control}
                    name="moneda"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Moneda</FormLabel>
                            <Select
                                // onValueChange={field.onChange}
                                onValueChange={(value) => {
                                    setCurrency(value)
                                    field.onChange(value)
                                }}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione una moneda" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="COP">
                                        Pesos Colombianos (COP)
                                    </SelectItem>
                                    <SelectItem value="MXN">
                                        Pesos Mexicanos (MXN)
                                    </SelectItem>
                                    <SelectItem value="EUR">
                                        Euros (EUR)
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />
            </CardContent>
        </Card>
    )
}
