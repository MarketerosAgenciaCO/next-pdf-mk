'use server'
import prisma from '@/lib/db'

const getZohoAccessToken = async () => {
    const clientId = process.env.ZOHO_CLIENT_ID
    const clientSecret = process.env.ZOHO_SECRET
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN

    const url = 'https://accounts.zoho.com/oauth/v2/token'
    const formData = new URLSearchParams()

    formData.append('client_id', clientId!)
    formData.append('client_secret', clientSecret!)
    formData.append('refresh_token', refreshToken!)
    formData.append('grant_type', 'refresh_token')

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }

        const data = await response.json()
        const accessToken = data.access_token

        if (accessToken) {
            await prisma.zohoToken.create({
                data: {
                    token: accessToken,
                },
            })

            console.log('Zoho access token:', accessToken)
            return accessToken
        } else {
            throw new Error('Error getting Zoho access token')
        }
    } catch (error) {
        console.error('Error fetching Zoho access token:', error)
    }
}

export const checkZohoTokenExpiration = async () => {
    let zohoToken = await prisma.zohoToken.findFirst({
        orderBy: {
            createdAt: 'desc',
        },
    })

    if (!zohoToken || !zohoToken.createdAt) {
        console.log('No token found or token creation time is missing')
        return null
    }

    const createTime = zohoToken?.createdAt
    const currentTime = new Date()

    const createTimeMs = createTime.getTime()
    const currentTimeMs = currentTime.getTime()

    const timeDifferenceMs = currentTimeMs - createTimeMs

    const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60)
    console.log('Zoho access token create time in milliseconds:', createTimeMs)
    console.log('Current time in milliseconds:', currentTimeMs)
    console.log('Time difference in milliseconds:', timeDifferenceMs)
    console.log('Time difference in minutes:', timeDifferenceMinutes.toFixed(2)) // Redondear a 2 decimales

    const timeLimitInMinutes = 60

    if (timeDifferenceMinutes > timeLimitInMinutes) {
        const newAccessToken = await getZohoAccessToken()
        zohoToken = await prisma.zohoToken.findFirst({
            orderBy: {
                createdAt: 'desc',
            },
        })
        console.log('New Zoho access token:', newAccessToken)
        return zohoToken?.token || newAccessToken
    } else {
        console.log('Zoho access token still valid:', zohoToken?.token)
        return zohoToken?.token
    }
}
