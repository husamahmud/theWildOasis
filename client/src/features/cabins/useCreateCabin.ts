import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCabin } from '../../services/cabins.api.ts'
import toast from 'react-hot-toast'

export default function useCreateCabin() {
  const queryClient = useQueryClient()
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success('New cabin added successfully!')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { mutate, isCreating }
}
