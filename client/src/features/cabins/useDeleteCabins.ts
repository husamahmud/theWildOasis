import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin } from '../../services/cabins.api.ts'
import toast from 'react-hot-toast'

export const useDeleteCabin = (cabinNumber: string) => {
  const queryClient = useQueryClient()
  const { mutate, isPending, error } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success(`Cabin ${cabinNumber} deleted successfully`)
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: err => toast.error(err.message),
  })

  return { mutate, isPending, error }
}
