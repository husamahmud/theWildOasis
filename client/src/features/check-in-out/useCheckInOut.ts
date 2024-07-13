import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

import { checkInOutBooking as checkInOutBookingAPI } from '../../services/checkInOut.ts'

export default function useCheckInOut() {
  const { bookingId } = useParams()

  const queryClient = useQueryClient()
  const { mutate: checkInOutBooking, isPending: isCheckingInOut } = useMutation(
    {
      mutationFn: checkInOutBookingAPI,
      onSuccess: () => {
        toast.success('Booking checked in/out successfully!')
        queryClient.invalidateQueries({ queryKey: ['booking', bookingId] })
      },
      onError: (err) => toast.error(err.message),
    },
  )

  return { checkInOutBooking, isCheckingInOut }
}
