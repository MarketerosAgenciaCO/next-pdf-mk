import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import {
    startOfWeek,
    startOfMonth,
    subWeeks,
    subMonths,
    endOfWeek,
    endOfMonth,
} from 'date-fns'

async function requestHandler(request: NextRequest): Promise<NextResponse> {
    const now = new Date()

    // Calcula fechas para la semana actual y pasada
    const startOfCurrentWeek = startOfWeek(now)
    const startOfLastWeek = startOfWeek(subWeeks(now, 1))
    const endOfLastWeek = endOfWeek(subWeeks(now, 1))

    // Calcula fechas para el mes actual y pasado
    const startOfCurrentMonth = startOfMonth(now)
    const startOfLastMonth = startOfMonth(subMonths(now, 1))
    const endOfLastMonth = endOfMonth(subMonths(now, 1))

    try {
        // Total de esta semana
        const currentWeekTotal = await prisma.quote.aggregate({
            _sum: {
                totalPrice: true,
            },
            where: {
                createdAt: {
                    gte: startOfCurrentWeek,
                    lte: now,
                },
            },
        })

        // Total de la semana pasada
        const lastWeekTotal = await prisma.quote.aggregate({
            _sum: {
                totalPrice: true,
            },
            where: {
                createdAt: {
                    gte: startOfLastWeek,
                    lte: endOfLastWeek,
                },
            },
        })

        // Total de este mes
        const currentMonthTotal = await prisma.quote.aggregate({
            _sum: {
                totalPrice: true,
            },
            where: {
                createdAt: {
                    gte: startOfCurrentMonth,
                    lte: now,
                },
            },
        })

        // Total del mes pasado
        const lastMonthTotal = await prisma.quote.aggregate({
            _sum: {
                totalPrice: true,
            },
            where: {
                createdAt: {
                    gte: startOfLastMonth,
                    lte: endOfLastMonth,
                },
            },
        })

        const currentWeekTotalValue = currentWeekTotal._sum.totalPrice || 0
        const lastWeekTotalValue = lastWeekTotal._sum.totalPrice || 0
        const currentMonthTotalValue = currentMonthTotal._sum.totalPrice || 0
        const lastMonthTotalValue = lastMonthTotal._sum.totalPrice || 0

        // Calcula los porcentajes de cambio
        const weekChange = lastWeekTotalValue
            ? ((currentWeekTotalValue - lastWeekTotalValue) /
                  lastWeekTotalValue) *
              100
            : 0
        const monthChange = lastMonthTotalValue
            ? ((currentMonthTotalValue - lastMonthTotalValue) /
                  lastMonthTotalValue) *
              100
            : 0

        return NextResponse.json({
            currentWeekTotal: currentWeekTotalValue,
            lastWeekTotal: lastWeekTotalValue,
            weekChange,
            currentMonthTotal: currentMonthTotalValue,
            lastMonthTotal: lastMonthTotalValue,
            monthChange,
        })
    } catch (error) {
        return NextResponse.json(
            { error: 'An error occurred' },
            { status: 500 }
        )
    }
}

export { requestHandler as GET }
