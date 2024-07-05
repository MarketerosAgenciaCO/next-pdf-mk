import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'

import { useFormContext } from 'react-hook-form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const tipoProyecto = [
    {
        name: 'Tienda en Línea',
        value: 'tienda',
    },
    {
        name: 'Diseño Web',
        value: 'disenoWeb',
    },
]

export default function ProyectType() {
    const { control } = useFormContext()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Tipo de proyecto</CardTitle>
                <CardDescription>
                    Provide details about the site youre building.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <FormField
                    control={control}
                    name="tipoProjecto"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    {tipoProyecto.map((proyecto) => {
                                        return (
                                            <div
                                                className="flex items-center space-x-2 rounded-md border border-input p-3"
                                                key={proyecto.value}
                                            >
                                                <FormItem
                                                    className="flex items-center space-x-3 space-y-0"
                                                    key={proyecto.value}
                                                >
                                                    <FormControl>
                                                        <RadioGroupItem
                                                            value={
                                                                proyecto.value
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {proyecto.name}
                                                    </FormLabel>
                                                </FormItem>
                                            </div>
                                        )
                                    })}
                                </RadioGroup>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
            </CardContent>
        </Card>
    )
}
