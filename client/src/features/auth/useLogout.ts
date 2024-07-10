import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { logout as logoutAPI } from '../../services/auth.api.ts'

export default function useLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      toast.success('Logged out successfully!')
      console.log('Logged out successfully!')
      navigate('/login')
      queryClient.setQueryData(['user'], null)
    },
  })

  return { logout, isLoading }
}
