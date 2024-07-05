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

import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

export default function ClientInfo() {
    const { control } = useFormContext()
    return (
        <Card>
            <CardHeader>
                <CardTitle>Información del cliente</CardTitle>
                <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto esse nam exercitationem, quam rerum mollitia
                    blanditiis! Assumenda, facilis iure. Ex iste distinctio
                    labore fuga temporibus, ut obcaecati eligendi praesentium
                    sequi.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={control}
                        name="nombre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="Alejandro" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="apellido"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Apellido</FormLabel>
                                <FormControl>
                                    <Input placeholder="Alvarez" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="nombreProyecto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre del proyecto</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Marketeros Agencia"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="sitioWeb"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sitio web</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="www.marketerosagencia.com"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </CardContent>
        </Card>
    )
}
