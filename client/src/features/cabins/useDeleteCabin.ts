import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { deleteCabin } from '../../services/cabins.api.ts'

export default function useDeleteCabin() {
  const queryClient = useQueryClient()
  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin deleted successfully!')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: err => toast.error(err.message),
  })

  return { mutate, isDeleting }
}
