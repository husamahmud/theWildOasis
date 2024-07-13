import { useQueryClient, useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { deleteBooking } from '../../services/bookings.api.ts'

export default function useDeleteBooking() {
  const queryClient = useQueryClient()
  const { mutate: deleteCabin, isPending: isDeleting } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success('Booking deleted successfully!')
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { deleteCabin, isDeleting }
}
