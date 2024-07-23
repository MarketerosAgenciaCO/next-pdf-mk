'use client'

import { useEffect, useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function PriceStats() {
    const [stats, setStats] = useState({
        currentWeekTotal: 0,
        lastWeekTotal: 0,
        weekChange: 0,
        currentMonthTotal: 0,
        lastMonthTotal: 0,
        monthChange: 0,
    })

    useEffect(() => {
        const fetchStats = async () => {
            const response = await fetch('/api/stats')

            const data = await response.json()
            setStats(data)
        }

        fetchStats()
    }, [])

    return (
        <>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Esta Semana</CardDescription>
                    <CardTitle className="text-4xl">
                        ${stats.currentWeekTotal.toLocaleString('es-ES')}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        {stats.weekChange > 0 ? '+' : ''}
                        {stats.weekChange.toFixed(2)}% desde la semana pasada
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress
                        value={stats.weekChange}
                        aria-label={`${stats.weekChange.toFixed(2)}% increase`}
                    />
                </CardFooter>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Este Mes</CardDescription>
                    <CardTitle className="text-4xl">
                        ${stats.currentMonthTotal.toLocaleString('es-ES')}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        {stats.monthChange > 0 ? '+' : ''}
                        {stats.monthChange.toFixed(2)}% desde el mes pasado
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress
                        value={stats.monthChange}
                        aria-label={`${stats.monthChange.toFixed(2)}% increase`}
                    />
                </CardFooter>
            </Card>
        </>
    )
}
