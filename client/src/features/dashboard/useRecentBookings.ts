import { useSearchParams } from 'react-router-dom'
import { getBookingsAfterDate } from '../../services/bookings.api.ts'
import { subDays } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import { BookingsI } from '../../types/bookings.interface.ts'

export function useRecentBookings() {
  const [searchParams] = useSearchParams()

  const numDays = (() => {
    const last = searchParams.get('last')
    if (last === '30' || last === '90') return Number(last)
    return 7
  })()

  const queryDate = subDays(new Date(), numDays).toISOString()

  const { data: bookings, isLoading: isLoadingRecentBookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ['bookings', numDays],
  })

  const recentBookings = bookings?.data
  const confirmedStays = recentBookings?.filter(
    (booking: BookingsI) =>
      booking.status === 'CHECKED_IN' || booking.status === 'CHECKED_OUT',
  )

  return {
    bookings: recentBookings,
    confirmedStays,
    numDays,
    isLoadingRecentBookings,
  }
}
