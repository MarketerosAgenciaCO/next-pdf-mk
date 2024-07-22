import { z } from 'zod'

export const formSchema = z.object({
    nombre: z.string().min(1, { message: 'Por favor, escribe tu nombre' }),
    apellido: z.string().min(1, { message: 'Por favor, escribe tu apellido' }),
    nombreProyecto: z
        .string()
        .min(1, { message: 'Por favor, escribe el nombre del proyecto' }),
    sitioWeb: z.string().optional(),
    tipoProjecto: z.string().min(1, { message: 'Por favor, elige un tipo' }),
    numeroPaginas: z.preprocess(
        (value) => Number(value),
        z
            .number()
            .min(1, { message: 'Por favor, escribe el numero de paginas' })
            .max(20, {
                message: 'El numero de paginas debe ser menor o igual a 20',
            })

            .int({
                message: 'El número de páginas debe ser un número entero',
            })
            .refine((value) => ![2, 3, 4].includes(value), {
                message: 'El número de páginas no puede ser 2, 3 o 4',
                path: ['numeroPaginas'],
            })
    ),
    adicionales: z.array(z.string()),
    cantidadCatalogo: z.string().optional(),
    descripcionCatalogo: z.string().optional(),
    precioFormulario: z
        .preprocess(
            (value) => (value === '' ? 0 : Number(value)),
            z.number().min(0, {
                message: 'Por favor, escribe el precio del formulario',
            })
        )
        .default(0)
        .nullable(),
    cantidadIdioma: z
        .preprocess(
            (value) => Number(value),
            z
                .number()
                .min(0, {
                    message: 'Por favor, escribe la cantidad de idiomas',
                })

                .int({
                    message: 'El número de idiomas debe ser un número entero',
                })
        )
        .optional(),
    descripcionIdioma: z.string().optional(),
    precioDesarrolloEspecial: z
        .preprocess(
            (value) => (value === '' ? 0 : Number(value)),
            z.number().min(0, {
                message: 'Por favor, escribe el precio del desarrollo especial',
            })
        )
        .default(0)
        .nullable(),
    descripcionDesarrolloEspecial: z.string().optional(),
    totalPrice: z.number(),
    pdfLink: z.string().optional(),
})

// export const priceSchema = z.object({
//     priceId: z.string(),
//     pricePagesBasePrice: z.number().min(0, {
//         message: 'Por favor, escribe el precio base',
//     }),
//     pricePagesIncrementPerPage: z.number().min(0, {
//         message: 'Por favor, escribe el incremento',
//     }),
//     priceCatalogoBasePrice: z.number().min(0, {
//         message: 'Por favor, escribe el precio base',
//     }),
//     priceCatalogoIncrementPerPage: z.number().min(0, {
//         message: 'Por favor, escribe el incremento',
//     }),
//     migracionNoticiasBlog: z.number().min(0, {
//         message: 'Por favor, escribe el valor',
//     }),
//     subirProductoCatalogoBasico: z.number().min(0, {
//         message: 'Por favor, escribe el valor',
//     }),
//     subirProductoCatalogoVariable: z.number().min(0, {
//         message: 'Por favor, escribe el valor',
//     }),
//     incrementoPorIdioma: z.number().min(0, {
//         message: 'Por favor, escribe el porcentaje',
//     }),
// })

export const priceSchema = z.object({
    priceId: z.string(),
    pricePagesBasePrice: z.number().optional(),
    pricePagesIncrementPerPage: z.number().optional(),
    priceCatalogoBasePrice: z.number().optional(),
    priceCatalogoIncrementPerPage: z.number().optional(),
    migracionNoticiasBlog: z.number().optional(),
    subirProductoCatalogoBasico: z.number().optional(),
    subirProductoCatalogoVariable: z.number().optional(),
    incrementoPorIdioma: z.number().optional(),
})
