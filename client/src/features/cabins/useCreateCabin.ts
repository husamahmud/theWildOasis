import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCabin as createCabinAPI } from '../../services/cabins.api.ts'
import toast from 'react-hot-toast'

export default function useCreateCabin() {
  const queryClient = useQueryClient()
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createCabinAPI,
    onSuccess: () => {
      toast.success('New cabin added successfully!')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { createCabin, isCreating }
}
