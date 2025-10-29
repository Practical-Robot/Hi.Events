'use client'

import { useEvents } from '@/hooks/useEvents'
import { CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function EventsPage() {
  const { events, meta, isLoading, isError } = useEvents({
    include: ['venue', 'tickets'],
    perPage: 12
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading events</div>

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.map(event => (
          <Link href={`/events/${event.slug}`} key={event.id}>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
              <div className="flex flex-col space-y-2 text-gray-500">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  {new Date(event.start_date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  {event.venue?.name || 'Venue TBA'}
                </div>
                {event.tickets && event.tickets.length > 0 && (
                  <div className="flex items-center">
                    <TicketIcon className="h-5 w-5 mr-2" />
                    From ${event.tickets[0].price}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {meta && meta.total > meta.per_page && (
        <div className="flex justify-center mt-8">
          {/* Pagination controls here */}
        </div>
      )}
    </div>
  )
}