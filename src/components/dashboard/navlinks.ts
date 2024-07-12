import { Home, Users2, FilePlus, CircleDollarSign } from 'lucide-react'

export const navLinks = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: Home,
    },
    {
        name: 'Crear Cotización',
        href: '/dashboard/quotes',
        icon: FilePlus,
    },
    {
        name: 'Precios',
        href: '/dashboard/prices',
        icon: CircleDollarSign,
    },
    {
        name: 'Usuarios',
        href: 'users',
        icon: Users2,
    },
]
