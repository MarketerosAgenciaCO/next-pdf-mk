'use server'

import { NextRequest, NextResponse } from 'next/server'
import { checkZohoTokenExpiration } from '@/lib/tokens-zoho'

async function requestHandler(request: NextRequest): Promise<NextResponse> {
    try {
        const formData = await request.formData()
        const filename = formData.get('filename') as string
        const content = formData.get('content') as Blob

        const url = 'https://workdrive.zoho.com/api/v1/upload'
        const parentId = 'nl5pv64fb7d14af2847dba7a79756e3fd8522'

        const uploadFormData = new FormData()
        uploadFormData.append('filename', filename)
        uploadFormData.append('parent_id', parentId)
        uploadFormData.append('content', content)
        uploadFormData.append('override-name-exist', 'false')

        const accessToken = await checkZohoTokenExpiration()
        const response = await fetch(url, {
            method: 'POST',
            body: uploadFormData,
            headers: {
                Authorization: `Zoho-oauthtoken ${accessToken}`,
            },
        })

        const responseJson = await response.json()
        console.log('responseJson', responseJson)

        const permalink = responseJson.data[0].attributes.Permalink
        console.log('permalink', permalink)
        return NextResponse.json(permalink)
    } catch (error) {
        return NextResponse.json(
            { error: 'An error occurred' },
            { status: 500 }
        )
    }
}

export { requestHandler as POST }
