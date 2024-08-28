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
import { Checkbox } from '@/components/ui/checkbox'

import { useFormContext } from 'react-hook-form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

// const tipoProyecto = [
//     {
//         name: 'Tienda en Línea',
//         value: 'tienda',
//     },
//     {
//         name: 'Diseño Web',
//         value: 'disenoWeb',
//     },
// ]

const tipoProyecto = [
    {
        id: 'tienda',
        label: 'Tienda en Línea',
    },
    {
        id: 'disenoWeb',
        label: 'Diseño Web',
    },
    // {
    //     id: 'seo',
    //     label: 'Posicionamiento SEO',
    // },
] as const

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
                {/*  <FormField
                    control={control}
                    name="tipoProjecto"
                    render={({field}) => (
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
                                                    <FormLabel>
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
                />*/}

                <FormField
                    control={control}
                    name="tipoProjecto"
                    render={() => (
                        <FormItem>
                            {tipoProyecto.map((item) => (
                                <FormField
                                    key={item.id}
                                    control={control}
                                    name="tipoProjecto"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={item.id}
                                                className="flex flex-row items-start space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(
                                                            item.id
                                                        )}
                                                        onCheckedChange={(
                                                            checked
                                                        ) => {
                                                            return checked
                                                                ? field.onChange(
                                                                      [
                                                                          ...field.value,
                                                                          item.id,
                                                                      ]
                                                                  )
                                                                : field.onChange(
                                                                      field.value?.filter(
                                                                          (
                                                                              value: string
                                                                          ) =>
                                                                              value !==
                                                                              item.id
                                                                      )
                                                                  )
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    {item.label}
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
    )
}
