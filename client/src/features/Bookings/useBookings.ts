import { useQuery } from '@tanstack/react-query'

import { getAllBookings } from '../../services/bookings.api.ts'

export function useBookings() {
  const {
    isLoading,
    data: { data: bookings } = {},
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getAllBookings,
  })

  return { isLoading, bookings, error }
}
