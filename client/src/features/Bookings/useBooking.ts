import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { getBookingById } from '../../services/bookings.api.ts'
import { BookingsI } from '../../types/bookings.interface.ts'

export default function useBooking() {
  const { bookingId } = useParams()

  const { isPending: isLoading, data } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBookingById(bookingId!),
    retry: false,
  })

  const booking = data?.data as BookingsI

  return { booking, isLoading }
}
