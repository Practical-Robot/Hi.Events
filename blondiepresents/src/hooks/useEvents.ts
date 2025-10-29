import useSWR from 'swr'
import { Event, ApiResponse } from '@/types'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useEvents(params?: {
    venueId?: number;
    page?: number;
    perPage?: number;
    include?: string[];
}) {
    const queryParams = new URLSearchParams()
    
    if (params?.page) queryParams.set('page', params.page.toString())
    if (params?.perPage) queryParams.set('per_page', params.perPage.toString())
    if (params?.include?.length) queryParams.set('include', params.include.join(','))

    const baseUrl = params?.venueId 
        ? `${process.env.NEXT_PUBLIC_API_URL}/venues/${params.venueId}/events`
        : `${process.env.NEXT_PUBLIC_API_URL}/events`

    const url = `${baseUrl}?${queryParams.toString()}`

    const { data, error, isLoading } = useSWR<ApiResponse<Event[]>>(url, fetcher)

    return {
        events: data?.data,
        meta: data?.meta,
        isLoading,
        isError: error
    }
}