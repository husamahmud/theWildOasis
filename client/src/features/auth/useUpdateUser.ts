import { useQueryClient, useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { updateUser as updateUserAPI } from '../../services/auth.api.ts'

export default function useUpdateUser() {
  const queryClient = useQueryClient()

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateUserAPI,
    onSuccess: (data) => {
      console.log('useUpdateUser', data)
      queryClient.setQueryData(['user'], data.data.user)
      toast.success('User updated successfully')
    },
    onError: (err) => toast.error(err.message),
  })

  return { updateUser, isUpdating }
}
