import PriceCatalog from './priceCatalog'
import PriceMigration from './priceMigration'
import PricePage from './pricePage'
import prisma from '@/lib/db'
import SubirProducto from './priceSubirProducto'
import IncrementoIdioma from './incrementoIdioma'
import { Metadata } from 'next'
import PriceStore from './priceStore'

export const metadata: Metadata = {
    title: 'Precios de las cotizaciones | Marketeros Agencia',
    description: 'Genera cotizaciones y exportalas en pdf',
}

export default async function Prices() {
    const prices = await prisma.pricesCurrency.findFirst()

    if (!prices) {
        throw new Error('No hay precios definidos')
    }

    const pricePagesBasePrice = {
        COP: prices.pricePagesBasePriceCOP,
        MXN: prices.pricePagesBasePriceMX,
        EUR: prices.pricePagesBasePriceEUR,
    }

    const pricePagesIncrementPerPage = {
        COP: prices.pricePagesIncrementPerPageCOP,
        MXN: prices.pricePagesIncrementPerPageMX,
        EUR: prices.pricePagesIncrementPerPageEUR,
    }

    const priceCatalogoBasePrice = {
        COP: prices.priceCatalogoBasePriceCOP,
        MXN: prices.priceCatalogoBasePriceMX,
        EUR: prices.priceCatalogoBasePriceEUR,
    }

    const priceCatalogoIncrementPerPage = {
        COP: prices.priceCatalogoIncrementPerPageCOP,
        MXN: prices.priceCatalogoIncrementPerPageMX,
        EUR: prices.priceCatalogoIncrementPerPageEUR,
    }

    const subirProductoCatalogoBasico = {
        COP: prices.subirProductoCatalogoBasicoCOP,
        MXN: prices.subirProductoCatalogoBasicoMX,
        EUR: prices.subirProductoCatalogoBasicoEUR,
    }

    const subirProductoCatalogoVariable = {
        COP: prices.subirProductoCatalogoVariableCOP,
        MXN: prices.subirProductoCatalogoVariableMX,
        EUR: prices.subirProductoCatalogoVariableEUR,
    }

    const migracionNoticiasBlog = {
        COP: prices.migracionNoticiasBlogCOP,
        MXN: prices.migracionNoticiasBlogMX,
        EUR: prices.migracionNoticiasBlogEUR,
    }

    const priceStore = {
        COP: prices.priceStoreCOP,
        MXN: prices.priceStoreMX,
        EUR: prices.priceStoreEUR,
    }

    return (
        <>
            <div className="space-y-8 col-span-3 relative max-w-screen-xl ">
                <h1 className="text-3xl font-bold tracking-tight ">
                    Precios de la cotización
                </h1>
            </div>

            <PricePage
                pricePagesBasePrice={pricePagesBasePrice}
                pricePagesIncrementPerPage={pricePagesIncrementPerPage}
                priceId={prices.id}
            />
            <PriceCatalog
                priceCatalogoBasePrice={priceCatalogoBasePrice}
                priceCatalogoIncrementPerPage={priceCatalogoIncrementPerPage}
                priceId={prices.id}
            />
            <SubirProducto
                subirProductoCatalogoBasico={subirProductoCatalogoBasico}
                subirProductoCatalogoVariable={subirProductoCatalogoVariable}
                priceId={prices.id}
            />
            <PriceMigration
                migracionNoticiasBlog={migracionNoticiasBlog}
                priceId={prices.id}
            />
            <IncrementoIdioma
                incrementoPorIdioma={prices.incrementoPorIdioma}
                priceId={prices.id}
            />
            <PriceStore priceId={prices.id} priceStore={priceStore} />
        </>
    )
}
