import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCabin as updateCabinAPI } from '../../services/cabins.api.ts'
import toast from 'react-hot-toast'
// import { CabinI } from '../../types/cabins.interface.ts'

export default function useCreateCabin() {
  const queryClient = useQueryClient()
  const { mutate: updateCabin, isPending: isUpdating } = useMutation({
    mutationFn: updateCabinAPI,
    onSuccess: () => {
      toast.success('Cabin updated successfully')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { updateCabin, isUpdating }
}
