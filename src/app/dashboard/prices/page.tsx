import PriceCatalog from './priceCatalog'
import PriceMigration from './priceMigration'
import PricePage from './pricePage'
import prisma from '@/lib/db'
import SubirProducto from './priceSubirProducto'
import IncrementoIdioma from './incrementoIdioma'

export default async function Prices() {
    const prices = await prisma.prices.findFirst()

    if (!prices) {
        throw new Error('No hay precios definidos')
    }

    return (
        <>
            <div className="space-y-8 col-span-3 relative max-w-screen-xl ">
                <h1 className="text-3xl font-bold tracking-tight ">
                    Precios de la cotización
                </h1>
            </div>

            <PricePage
                pricePagesBasePrice={prices.pricePagesBasePrice}
                pricePagesIncrementPerPage={prices.pricePagesIncrementPerPage}
                priceId={prices.id}
            />
            <PriceCatalog
                priceCatalogoBasePrice={prices.priceCatalogoBasePrice}
                priceCatalogoIncrementPerPage={
                    prices.priceCatalogoIncrementPerPage
                }
                priceId={prices.id}
            />
            <SubirProducto
                subirProductoCatalogoBasico={prices.subirProductoCatalogoBasico}
                subirProductoCatalogoVariable={
                    prices.subirProductoCatalogoVariable
                }
                priceId={prices.id}
            />
            <PriceMigration
                migracionNoticiasBlog={prices.migracionNoticiasBlog}
                priceId={prices.id}
            />
            <IncrementoIdioma
                incrementoPorIdioma={prices.incrementoPorIdioma}
                priceId={prices.id}
            />
        </>
    )
}
