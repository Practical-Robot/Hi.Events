'use client'

import { useVenues } from '@/hooks/useVenues'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function VenuesPage() {
  const { venues, isLoading, isError } = useVenues({
    include: ['events'],
    perPage: 12
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading venues</div>

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Our Venues</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues?.map(venue => (
          <Link href={`/venues/${venue.slug}`} key={venue.id}>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{venue.name}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{venue.description}</p>
              <div className="flex flex-col space-y-2 text-gray-500">
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  {venue.city}, {venue.state}
                </div>
                <p className="text-sm">
                  {venue.events?.length || 0} upcoming events
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}