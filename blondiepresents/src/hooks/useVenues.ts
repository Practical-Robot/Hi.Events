import useSWR from 'swr'
import { Venue, ApiResponse } from '@/types'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useVenues(params?: {
    page?: number;
    perPage?: number;
    include?: string[];
}) {
    const queryParams = new URLSearchParams()
    
    if (params?.page) queryParams.set('page', params.page.toString())
    if (params?.perPage) queryParams.set('per_page', params.perPage.toString())
    if (params?.include?.length) queryParams.set('include', params.include.join(','))

    const url = `${process.env.NEXT_PUBLIC_API_URL}/venues?${queryParams.toString()}`

    const { data, error, isLoading } = useSWR<ApiResponse<Venue[]>>(url, fetcher)

    return {
        venues: data?.data,
        meta: data?.meta,
        isLoading,
        isError: error
    }
}