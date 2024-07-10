import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { login as loginAPI } from '../../services/auth.api.ts'

export default function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      toast.success('Logged in successfully!')
      console.log('Logged in successfully!', data)
      navigate('/dashboard')
      queryClient.setQueryData(['user'], data.user)
    },
    onError: (err) => toast.error(err.message),
  })

  return { login, isLoading }
}
